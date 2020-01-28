<template>
    <div class="drage-wrapper">
        <a class="mint-cell mint-field drageInp"  @click="changeMobile">
            <!---->
            <div class="mint-cell-left"></div>
            <div class="mint-cell-wrapper">
                <div class="mint-cell-title">
                    <!--label-->
                    <span class="mint-cell-text">{{label}}</span>
                    <!---->
                    <span class="light-cell" v-if="required">*</span>
                    <!---->
                </div>
                <div class="mint-cell-value" @click="showPickers" style="position：relative">
                    <!--针对数字特殊增加的选项  isNum为true-->
                    <input
                            v-if="isNum"
                            ref="input"
                            :disabled="disabled"
                            :placeholder="placeholder"
                            @blur="blusa"
                            @input="inputHandle"
                            @focus="active=true"
                            :value="currentValue"
                            :type="type"
                    class="mint-field-core" />
                    <!---->
                    <input
                            v-else
                            ref="input"
                            :disabled="disabled"
                            :maxlength="maxlength"
                            :placeholder="placeholder"
                            @blur="blusa"
                            @input="inputHandle"
                            @focus="active=true"
                            :value="currentValue"
                            :type="type"
                    class="mint-field-core" />
                    <!---->
                    <div class="mint-field-clear"
                         v-if="!disableClear"
                         v-show="currentValue  && active"
                         @click="clearValue">
                        <i class="mintui mintui-field-error"></i>
                    </div>
                    <!--对勾选择器请选择-->    
                    <div class="mint-cell-right-danw checkListDiv"  v-if="typeItem=='checkRight'">
                        <span v-if="currentValue=='1'" class="check-style-unequal-width" ></span>
                        <span v-else class="check-span-cen">请选择</span>    
                    </div> 

                    <!--单位或者其他-->
                    <div class="mint-cell-right-danw" v-if="unit">
                        {{unit}}
                    </div>
                    <span :visible.sync="keyValue"></span>
                    <span :visible.sync="modelValue"></span>
                    <!---->
                </div>
                <!---->
            </div>
            <!--slot插槽 add-->
            <slot name="slotHtml">

            </slot>
            <!--右箭头-->
            <div class="light-icon-right" v-if="iconRight">
                <img src="../../assets/images/public/icon__zizhujiance@2x.png" alt="">
            </div>
           </a>
        <!--dateTimePicker-->
        <date-time-picker
                v-if="typeItem=='date'"
                :cutDate="currentValue"
                ref="pickerDate"
                :startDate="startDate"
                :endDate="endDate"
                :defaultDate="defaultDate"
                @confirm="handleConfirm"
                type="date"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日">
        </date-time-picker>
        <!--vue-pickers-->
        <mt-popup
                v-if="typeItem=='pickeMore'"
                v-model="FshowPicke"
                @touchmove.prevent
                position="bottom">
        </mt-popup>
        <!--不基于mint ui-->
        <vue-pickers
                 v-if="typeItem=='pickeMore'"
                 :initIcon="initIcon"
                 :show="FshowPicke"
                 :defaultValue="keyValue"
                 :unit="FpickUnit"
                 :ajaxOnOff="FajaxOnOff"
                 :addressOnoff="FaddressOnoff"
                 :selectData="FpickData"
                 @cancel="FcloseFn"
                 @chooseOne="FchooseOne"
                 @chooseTwo="FchooseTwo"
                 @confirm="FconfirmFn">
        </vue-pickers>
        <!-- -->
        <mt-popup
                v-if="typeItem=='checkList'"
                v-model="showChecklist"
                @touchmove.prevent
                :closeOnClickModal="false"
                position="bottom">
        </mt-popup>
        <mt-popup
                v-model="showAdress"
                @touchmove.prevent
                position="bottom">
        </mt-popup>
        <Vuechecklist
                v-if="typeItem=='checkList'"
                @cancel="closeShowUp"
                @confirm="handleChecklist"
                :showUp="showChecklist"
                :title="checkTitle"
                :checkOption="checkoptions"
                :keycheckValue.sync="currentValue" >
        </Vuechecklist>
        <!--拆分下的省市区三级联动-->
        <Vue-select
                v-if="showAdress"
                :ref="showAdress"
                @changeValue='changeCountry'
                :province='province'
                :city='city'
                :county='county'>
        </Vue-select>
    </div>
</template>
<script>
    /**    ****************表单通用**************
     * c2019  适用于zd 目前常用表单
     * 组件之间数据通信，单独用可以拆分出来
     * 组件双向绑定，不必再触发其他通信获取响应的数值以及触发其他事件
     * v-if 可以不必重复添加
     * date--日期选择器
     * pickeMore--多级选择器
     * checkList--弹窗类型多级多选框
     * pickTwo--二级联动
     * 时间和地区都可以用vuepicker继续改造下
     */
    import {dateFunction} from '@/utils/dateFormat'
    import Vuechecklist from  '@/components/nomal/comfirm'
    import VuePickers from  '@/components/picker/picker_list'
    import VueSelect from '@/components/picker/selectLocation1'
    import dateTimePicker from '@/components/picker/datetime-picker'
    export default {
        name: "drageInput",
        components:{
            VuePickers,
            Vuechecklist,
            VueSelect,
            dateTimePicker
        },
        model:{
            prop:'currentValue',
            event:'changeInput'
        },
        props:{
            currentValue:{
                type:[String,Number,Array,Boolean],
                default:''
            },
            checkTitle:{
                type:String,
                default:''
            },
            isNum: [String,Number],
            maxlength:{
                default:'9999999999'
            },
            label:{      // 名称
                default: '未命名'
            },
            placeholder:{
                type:String,
                default:''
            },
            type: {         //输入框类型
                type: String,
                default: 'text'
            },
            disabled: Boolean,  //是否可输入
            disableClear: Boolean,    //是否有清除按钮
            unit:{            //单位
                type:String,
                default:''
            },
            typeItem:{            //picker选择器类型
                type:String,
            },
            iconRight:Boolean,  //是否需要右侧箭头
            isTwo:Boolean, //是否是二级选择器且带一位小数
            isStr:Boolean, //前提是二级，并且是字符型,不是特殊数字类型
            isThird:Boolean,//三级且是字符型
            slotContent:{},
            keyValue:{     //传数据库字段，自动转化为name
                type:[String,Number,Array,Object,Boolean]
            },
            modelValue:{   //新增字段
                type:[String,Number,Array,Object,Boolean]
            },
            initIcon:{       //是否需要小数点，一般指明带一位小数点
                type: Boolean,
                default: false
            },
            checkTitle:{
                type:String,
            },
            defaultDate:{
                type:String,
            },
            isChecked:{    //选择对勾，没选则请选择
                type:[String,Number,Array,Boolean],
                default:''
            },
            clearName:{    //需要清楚的
                default:''
            },
            clickOff:Boolean,  //是否允许点击
            required:Boolean  //是否必填

        },
        data(){
            return {
                active:false,
                dateValue:this.keyValue,
                startDate:new Date('1960-01-01'),
                endDate:new Date(),
                FshowPicke:false,
                FpickUnit:'',
                FajaxOnOff:false,
                FaddressOnoff:false,
                FpickData:{},
                checkoptions:[],
                showChecklist:false,
                stringValue:'',
                showAdress:false,
                province: '',
                city: '',
                county: '',
                timeOff:false
            }
        },
        watch:{
            keyValue:{
                handler:function(newVal,oldVal){
                    console.log(newVal)
                   if( Object.prototype.toString.call(newVal) !='[object Undefined]'
                       &&Object.prototype.toString.call(newVal) !='[object Null]'
                       && this.typeItem=='pickeMore'
                       && !this.isTwo
                       && !this.isThird
                   ){   //单级picker选择器
                       let data1=this.slotContent.pData1
                       let initData1=data1.find((val,index)=>{
                           return val.value.toString()==newVal.toString()
                       })
                       initData1?
                           this.$emit('changeInput',initData1.text)
                           : this.$emit('changeInput','')  //触发model
                   }
                   else if(Object.prototype.toString.call(newVal) !='[object Undefined]'   //二级数字浮点型
                       && this.typeItem=='pickeMore'
                       && this.isTwo
                       && !this.isStr
                       && !this.isThird
                   ){
                       let Mlen=[]
                       parseInt(newVal.toString().indexOf('.'))>-1
                           ? Mlen=newVal.toString().split('.')
                           :Mlen=(newVal+'.0').split('.')
                       let data1=this.slotContent.pData1
                       let data2=this.slotContent.pData2
                       let initData1=data1.find((val,index)=>{
                           return val.value==Mlen[0]
                       })
                       let initData2=data2.find((val,index)=>{
                           return val.value.replace('.','')==Mlen[1]
                       })
                       initData1?
                           this.$emit('changeInput',initData1.text+initData2.text)
                           : this.$emit('changeInput','')  //触发model
                   }
                   else if(Object.prototype.toString.call(newVal) !='[object Undefined]'  //二级字符类型+空格
                       && this.typeItem=='pickeMore'
                       && this.isTwo
                       && this.isStr
                       && !this.isThird
                   ){
                        let Mlen=[]
                        console.log(newVal)
                          console.log(0)
                        Mlen=newVal.toString().split(" ")
                     
                        let data1=this.slotContent.pData1
                        let data2=this.slotContent.pData2
                        let initData1=data1.find((val,index)=>{
                            return val.value==Mlen[0]
                        })
                        let initData2=data2.find((val,index)=>{
                           return val.value==Mlen[1]
                        })
                        
                        console.log(initData1)
                        console.log(initData2)
                        console.log(initData1.text+initData2.text)
                        initData1?
                            this.$emit('changeInput',initData1.text+initData2.text)
                            : this.$emit('changeInput','')  //触发model
                    }
                   else if(Object.prototype.toString.call(newVal) !='[object Undefined]'//三级数据不联动
                       && this.typeItem=='pickeMore'
                       && this.isThird
                   ){
                           let data1=this.slotContent.pData1
                           let data2=this.slotContent.pData2
                           let data3=this.slotContent.pData3
                           let Mlen=newVal.split(" ")
                           let initData1=data1.find((val,index)=>{
                               return val.value==Mlen[0]
                           })
                           let initData2=data2.find((val,index)=>{
                               return val.value==Mlen[1]
                           })
                           let initData3=data3.find((val,index)=>{
                               return val.value==Mlen[2]
                           })
                           initData1?
                               this.$emit('changeInput',initData1.text+initData2.text+initData3.text)
                               : this.$emit('changeInput','')  //触发model
                   }
                   else if(newVal && this.typeItem=='pickTwo'){   //省市区联动
                        let Mlen=newVal.split(' ');
                        this.province=Mlen[0]
                        this.city=Mlen[1]||''
                        this.county=Mlen[2]||''
                   }
                },
                immediate: true          //do now
            },
            showAdress(val){
                 this.showAdress ? this.closeTouch() : this.openTouch()
            },
            FshowPicke(val){
                this.FshowPicke ? this.closeTouch() : this.openTouch()
            }
        },
        methods:{
            closeTouch() {
                document.getElementsByTagName('body')[0].addEventListener('touchmove', this.handler, { passive: false })// 阻止默认事件
            },
            openTouch() {
                document.getElementsByTagName('body')[0].removeEventListener('touchmove', this.handler, { passive: false })// 打开默认事件
            },
            handler(e) {
                e.preventDefault() 
            },
            inputHandle(e){      //input原生输入事件
                if(this.isNum)  e.target.value=e.target.value.slice(0,this.isNum)
                this.$emit('changeInput',e.target.value)
                if(this.clearName)  this.$parent.dataList[this.clearName]=null
            },
            clearValue(){         //清除按钮
                this.$emit('changeInput','')
            },
            blusa(e){          //失去焦点
                this.$emit('InputBlur',e.target.value)
                window.scrollTo(0,0)
            },
            changeMobile(){
                this.$emit('changeMobile')
            },
            handleConfirm(val){  //确定选择时间
                let dateValue=dateFunction('yyyy-MM-dd',val);
                this.$emit('changeInput',dateValue)
            },
            showPickers(){   //点击弹出内容
                if(!this.typeItem) return false
                if(this.clickOff) return false
                switch (this.typeItem) {
                    case 'date':         //日期选择器
                        this.$refs.pickerDate.open();
                        this.timeOff=true;
                        break;
                    case 'pickeMore':
                        this.FpickData=this.slotContent
                        this.FshowPicke=true;
                        break;
                    case 'checkList':
                        this.checkoptions=this.slotContent
                        this.$emit('update:keyValue',this.currentValue)
                        this.showChecklist=true
                        break;
                    case 'pickTwo':
                        this.showAdress=true;
                        this.$emit('update:keyValue',this.currentValue)
                        break;
                    case 'checkRight':   //对勾选择器
                        this.$emit('update:keyValue',this.currentValue=='1'?null:'1')
                        this.$emit('updateRight',this.currentValue=='1'?null:'1')
                        break;    
                    default:
                        console.log('error')
                        break
                }

            },
            closeShowUp(){   //关闭checklist弹窗
                this.showChecklist=false;
            },
            handleChecklist(val){   //确认提交checkList
                this.$emit('update:keyValue',val)     //三层双向绑定
                this.showChecklist=false;
            },
            FcloseFn(){          //关闭
                this.FshowPicke=false
            },
            FchooseOne: function (val) {  //点击选择第一个触发事件 后续ajax  动态获取
               
            },
            FchooseTwo: function (val) {  //点击选择第二个触发事件 后续ajax  动态获取

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
                this.$emit('changeInput',Chatxt)
                this.$emit('update:keyValue',Chaval)   //two-way binding
                this.FshowPicke=false
            },
            changeCountry(val){  //省市区+二级联动
                this.showAdress=val.show
                let Mval=val.province+' '+val.city+' '+val.county;
                if(val.isClose) return false
                this.$emit('changeInput',Mval)
                this.$emit('update:keyValue',Mval)
                this.$emit('update:modelValue',val.NumbId)
            }
        },
        mounted(){

        },
    }
</script>

<style scoped lang="less">
    @color6:#666;
    .drage-wrapper{
        height: 110px;
        font-size: 30px;
        color: @color6;
        .mint-cell-wrapper{
            padding: 0 30px;
            cursor: pointer;
            height: 110px;
        }
        .mint-cell:last-child{
            background-image: none;
        }
        .mint-cell-value{
            height: 100%;
            -webkit-tap-highlight-color:transparent;
            input{
                color: @color6;
                -webkit-tap-highlight-color:transparent;
                font-size: 30px;
            }
        }
        .light-cell{
           vertical-align: -6px;
            padding-left: 8px;
            color: red;
        }
        .mint-field-clear{
            cursor: pointer;
        }
        .clearBtn{
            display: none;
        }
        .mint-cell-right-danw{
            color: #999;
            font-size: 30px;
        }
        .mint-field-core{
            padding-left: 10px;
            text-align: left;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        
        .mint-cell-title{
            margin-right: 10px;
            .mint-cell-text{
                font-size: 32px;
                color:#333;
            }
        }
        .light-icon-right{
            img{
                width: 17px;
                height: 33px;
                margin:38px 28px 38px 0px;
                display: inline-block;
            }
        }
    }
    input{cursor: pointer;}
    .checkListDiv{position:absolute;top:0px;right:20px;width:180px;height:100%;background:#fff;}
    .check-span-cen{
            margin-top: 36px;
            margin-left:50%; 
            display: inline-block;
    }
    .check-style-unequal-width {
            width: 4px;
            margin-top: 30px;
            margin-left: 70%; 
            display: inline-block;
			height: 20px;
			border-color: #0084FE;
			border-style: solid;
			border-width: 0 3px 3px 0;
			transform: rotate(45deg);
		}
</style>