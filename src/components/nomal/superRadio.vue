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
      </label>
      <div             
          v-if="option.picker && currentValue == option.value"
          class="spanRit"
          @click="showPicker(option.name,option)">
         <span> {{option.filed || option.placeholder}}{{option.filed?option.icon:''}}</span>
          <div class="light-icon-right">
                <img src="../../assets/images/public/icon__zizhujiance@2x.png" alt="">
            </div>
      </div>  
    </div>
     <!--临时选择器-->
    <vue-pickers
              v-if="FshowPicke"
              :show="FshowPicke"
              :defaultValue="keyValue"
              :selectData="FpickData"
              @cancel="FcloseFn"
              @confirm="FconfirmFn">
    </vue-pickers>
    <mt-popup
            v-if="FshowPicke"
            v-model="FshowPicke"
            @touchmove.prevent
            position="bottom">
    </mt-popup>
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
import VuePickers from  '@/components/picker/picker_list'
import * as slotList   from '@/utils/slotContent.js'
export default {
  name: 'mt-radio',

  props: {
    title: String,
    align: String,
    pickContent:{
       type:[String,Number,Array,Object,Boolean]
    },
    defaultValue:String,
    options: {
      type: Array,
      required: true
    },
    value: String
  },

  data() {
    return {
      currentValue: this.value,
      FshowPicke:false,
      keyValue:'',
      FpickData:{
         columns: 1,
         default: [{text: '', value: ''}],
         pData1:[]
      },
      dataItem:null,
      dataName:'',
    };
  },
  components:{
    VuePickers
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    pickContent:{
      handler(val){
          let arr=[{text:this.defaultValue||'',value:this.defaultValue||''}]
          this.FpickData.default=arr
          this.FpickData.pData1=slotList[val] || slotList.timaAge
        },
        immediate:true
    },
    currentValue(val) {
      this.$emit('input', val);
      this.$emit('changeInput',val)
    }
  },

  methods: {
    changeInput(name,val){   //针对特殊处理进行传值赋值--有待完善
      let data=name.split('.')
      this.$parent[data[0]][data[1]]=val
    },
     showPicker(name,val){   //picker选择器
      this.FshowPicke=true;
      this.dataName=name;
      this.dataItem=val;
      event.preventDefault();
    },
    FcloseFn(){          //关闭
        this.FshowPicke=false
    },
    FconfirmFn(val){
        let Chaval, Chatxt;
        if(val.select1 && val.select2 &&val.select3){  //三级
            Chaval=(val.select1.value).toString()+' '+(val.select2.value).toString()+' '+(val.select3.value).toString()
            Chatxt=val.select1.text+''+val.select2.text+''+val.select3.text
        }
        else if(val.select1 && val.select2){   //二级
            if(this.isStr){
                Chaval=(val.select1.value).toString()+' '+(val.select2.value).toString()
            }
            else{
                Chaval=(val.select1.value).toString()+(val.select2.value).toString()
            }
            Chatxt=val.select1.text+''+val.select2.text
        }
        else if(val.select1){       //一级
            Chatxt=val.select1.text
            Chaval=val.select1.value
        }
        this.dataItem.filed=Chaval
        let data=this.dataName.split('.')
        this.$parent[data[0]][data[1]]=Chaval
        this.keyValue=Chaval
        this.FshowPicke=false
        
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
  .mint-radio-label{margin-top: -5px;color:#333;}
  .mint-radiolist-label{position: relative;}
  .otherInput{height: 50px;line-height: 50px;font-size: 28px;border-bottom:1px solid #E4E4E4;padding-left: 10px;position:absolute;right:0;top:0;}
  .spanRit{display:block;background:#E4E4E4; cursor: pointer;color: #666;padding: 10px 10px;display: flex;padding-left: 30px;font-size: 30px;margin-top: 30px;border-bottom: 1px dashed;border-top: 1px dashed }
  .spanRit span{flex: 1;height: 50px;line-height: 50px;}
  .light-icon-right img{
      width: 17px;
      height: 33px;
      padding-right: 0px;
      display: inline-block;
      padding-top: 4px;
  }
</style>
