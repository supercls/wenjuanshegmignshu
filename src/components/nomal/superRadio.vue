<template>
  <div class="mint-radiolist" @change="$emit('change', currentValue)">
    <label class="mint-radiolist-title" v-text="title"></label>
    <div class="new-checklist" v-for="option in options"  :key="option+Math.random()">
      <label class="mint-radiolist-label" slot="title">
        <span
          :class="{'is-right': align === 'right'}"
          class="mint-radio">
          <input
            class="mint-radio-input"
            type="radio"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
          <span class="mint-radio-core"></span>
        </span>
        <span class="mint-radio-label" v-text="option.label || option"></span>
        <input type="text" 
            :placeholder="option.placeholder ||'请输入'"  
            @change="changeInput(option.name,option.filed)" 
            v-model="option.filed" 
            v-if="option.other && currentValue==option.value" 
            class="otherInput">
      </label>
    </div>
  </div>
</template>

<script>

/**
 * mt-radio
 * @module components/radio
 * @desc 单选框列表，依赖 cell 组件
 *
 * @param {string[], object[]} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string} value - 选中值
 * @param {string} title - 标题
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 *
 * @example
 * <mt-radio v-model="value" :options="['a', 'b', 'c']"></mt-radio>
 */
export default {
  name: 'mt-radio',

  props: {
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: String
  },

  data() {
    return {
      currentValue: this.value
    };
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      this.$emit('input', val);
    }
  },

  methods: {
    changeInput(name,val){   //针对特殊处理进行传值赋值--有待完善
      let data=name.split('.')
      this.$parent[data[0]][data[1]]=val
    },
  }
};
</script>

<style lang="css" scoped>
  @import "../../styles/var.css";

  @component-namespace mint {
    @component radiolist {

      .mint-cell {
        padding: 0;
      }

      @descendent label {
        display: block;
        padding: 0 10px;
      }

      @descendent title {
        font-size: 12px;
        margin: 8px;
        display: block;
        color: $radio-title-color;
      }
    }

    @component radio {
      @when right {
        float: right;
      }

      @descendent label {
        vertical-align: middle;
        margin-left: 6px;
      }

      @descendent input {
        display: none;

        &:checked {
          + .mint-radio-core {
            background-color: $color-blue;
            border-color: $color-blue;

            &::after {
              background-color: $color-white;
              transform: scale(1);
            }
          }
        }

        &[disabled] + .mint-radio-core {
          background-color: $color-grey;
          border-color: #ccc;
        }
      }

      @descendent core {
        box-sizing: border-box;
        display: inline-block;
        background-color: $color-white;
        border-radius: 100%;
        border: 1px solid #ccc;
        position: relative;
        size: 20px;
        vertical-align: middle;

        &::after {
          content: " ";
          border-radius: 100%;
          position: absolute 5px * * 5px;
          size: 8px;
          transition: transform .2s;
          transform: scale(0);
        }
      }
    }
  }
   .new-checklist{
    overflow-scrolling: touch;
    -webkit-overflow-scrolling: touch;
    padding:20px 0px;
  }
  .mint-radio-label{margin-top: -5px;}
  .mint-radiolist-label{position: relative;}
  .otherInput{height: 50px;line-height: 50px;font-size: 28px;border-bottom:1px solid #E4E4E4;padding-left: 10px;position:absolute;right:0;top:0;}
  .spanRit{display: inline-block;cursor: pointer;float:right;color: #CCCCCC;padding: 3px 10px;}
</style>
