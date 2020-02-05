<template>
  <div @change="$emit('change', currentValue)" class="mint-checklist "  :class="{ 'is-limit': max <= currentValue.length }">
    <label class="mint-checklist-title" v-text="title"></label>
    <div class="new-checklist" v-for="(option,index) in options" :key="index" >
      <label class="mint-checklist-label">
        <span :class="{'is-right': align === 'right'}" class="mint-checkbox">

        </span>
      </label>
      <label class="mint-checklist-label" slot="title">
        <span
          :class="{'is-right': align === 'right'}"
          class="mint-checkbox">
          <input
            @change="checkedEmit"
            class="mint-checkbox-input"
            type="checkbox"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
          <span class="mint-checkbox-core" ></span>
        </span>
        <span class="mint-checkbox-label" 
          v-text="option.label || option">
        </span>
        <span class="icon-right" 
            v-if="option.other 
            && currentValue.indexOf(option.value)>-1" 
            >{{option.icon||''}}
        </span>
        <span             
            v-if="option.picker && currentValue.indexOf(option.value)>-1"
            class="spanRit"
            @click="showPicker(option.name,option)">
            {{option.filed || option.placeholder}}{{option.filed?option.icon:''}}
        </span>    
      </label>
      <div v-if="option.other && currentValue.indexOf(option.value)>-1" class="spanRit">
           <input type="text" 
            :placeholder="option.placeholder ||'请输入'"  
            @change="changeInput(option.name,option.filed)" 
            @click ="inputFocus"
            v-model="option.filed" 
            class="spanInput"  
          >
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
/********有时间再造轮子*** */
/*****  other  //输入框，选中以后
 *      picker   //选择器，选中以后
 *      dataList.name1  //绑定的字段
 *  :options="[{ label: '文字1',value: '1'},{ label: '其他',value: '6',other:true,filed:dataList.name1,name:'dataList.name1'}">
 * 
 */
import VuePickers from  '@/components/picker/picker_list'
import * as slotList   from '@/utils/slotContent.js'
export default {
  name: 'mt-checklist',
  props: {
    max: Number,
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    pickContent:{
       type:[String,Number,Array,Object,Boolean]
    },
    value:{
      type: Array,
      default:[]
    },
    defaultValue:String,
    clearValue:{
      type:[String,Number,Array,Object,Boolean]
    },
  },

  data() {
    return {
      currentValue: this.value ||[],
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
  methods:{
    changeInput(name,val){   //针对特殊处理进行传值赋值
      let data=name.split('.')
      this.$parent[data[0]][data[1]]=val
      event.preventDefault(); 
    },
    inputFocus(e){   //阻止事件冒泡
      e.preventDefault(); 
    },
    checkedEmit(e){         //mint ui bug处理
      if(this.limit) e.target.checked=false
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
  },
  computed: {
    limit() {
      return this.max < this.currentValue.length;
    }
  },
  mounted:function(){
    
  },
  watch: {
    pickContent:{
      handler(val){
          let arr=[{text:this.defaultValue||'',value:this.defaultValue||''}]
          this.FpickData.default=arr
          this.FpickData.pData1=slotList[val] || slotList.timaAge
        },
        immediate:true
    },
    value:{
        handler(val){
            this.currentValue=val;
        },
        immediate:true
    },
    currentValue(val) {
      if (this.limit) val.pop();
      this.$emit('input', val);
    },
   
  }
};
</script>

<style lang="css" scoped>
  @import "../../styles/var.css";

  @component-namespace mint {
    @component checklist {

      .mint-cell {
        padding: 0;
      }

      @descendent label {
        display: block;
        padding: 0 20px;
      }

      @descendent title {
        color: $checklist-title-color;
        display: block;
        font-size: 12px;
        margin: 8px;
      }

      @when limit {
        .mint-checkbox-core:not(:checked) {
          background-color: $color-grey;
          border-color: $color-grey;
        }
      }
    }

    @component checkbox {
      @when right {
        float: right;
      }

      @descendent label {
        vertical-align: middle;
        margin-left: 0px;

      }

      @descendent input {
        display: none;

        &:checked {
          + .mint-checkbox-core {
            background-color:#78BE40;
            border-color: #78BE40;

            &::after {
              border-color: $color-white;
              transform: rotate(45deg) scale(1);
            }
          }
        }

        &[disabled] + .mint-checkbox-core {
          background-color: $color-grey;
          border-color: #ccc;
        }
      }

      @descendent core {
        display: inline-block;
        background-color: $color-white;
        border-radius:none;
        border: 1px solid #ccc;
        position: relative;
        size: 20px;
        vertical-align: middle;

        &::after {
          border: 2px solid transparent;
          border-left: 0;
          border-top: 0;
          content: " ";
          position: absolute 3px * * 6px;
          size: 4px 8px;
          transform: rotate(45deg) scale(0);
          transition: transform .2s;
        }
      }
    }
  }
  .new-checklist{
    overflow-scrolling: touch;
    -webkit-overflow-scrolling: touch;
    padding:20px 0px;
  }
  .mint-checklist-label{position: relative;}
  .otherInput{height: 50px;cursor: pointer; line-height: 50px;display:inline-block;font-size: 28px;padding-left: 10px;text-align: right;position: absolute;top:0;right: 100px;z-index: 9999;}
  .spanRit{display:block;background:#E4E4E4; cursor: pointer;color: #666;padding: 10px 10px;display: flex;padding-left: 30px;font-size: 30px;margin-top: 30px;border-bottom: 1px dashed;border-top: 1px dashed }
  .spanRit span{flex: 1;}
  .icon-right{float: right;line-height: 1.8;}
  .spanInput{padding-left: 20px;height: 50px;line-height: 50px;}
</style>
