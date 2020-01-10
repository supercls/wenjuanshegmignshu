<template>
    <div class="zf-wrapper">
       
        <div class="qs-content mint-tab-container">
            <div class="page1" v-if="page1">
                <div class="top">
                    <p style="text-indent:0em;font-weight:bolder">尊敬的宝妈/宝爸：</p>
                    <p style="font-weight:bolder">您好！感谢您参加本次调查，请在题目后相应横线处填写答案或选择相应序号。如无特殊说明，题目均为单选。</p>
                </div>
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <drage-input1 v-model="dataList.DistrictName" :keyValue.sync="dataList.DistrictName" :modelValue.sync="dataList.DistrictNo"  
                                        :slotContent="slotContent1" typeItem="pickCounty" :required="true" :iconRight="true"
                                        :disabled="true"  label="填表所在地" >
                            </drage-input1>
                            <drage-input v-model="dataList.Tbszjg" label="填表所在机构"  type="text" :required="true" class="requrePage1" data-name="Tbszjg">
                            </drage-input>
                            <drage-input v-model="dataList.Lxfs" label="妈妈联系方式"  type="number" :required="true" class="requrePage1" data-name="Lxfs">
                            </drage-input>
                             <drage-input v-model="dataList.Sfzh" label="妈妈身份证号码"  type="text"  class="requrePage1" data-name="Sfzh" :required="true" placeholder="便于查找孩子检查记录">
                            </drage-input>
                             <drage-input v-model="dataList.dMqcsrq" :required="true" :keyValue.sync="dataList.dMqcsrq" typeItem="date" :disabled="true"  :iconRight="true" label="填表时间" class="requrePage1" data-name="dMqcsrq">
                            </drage-input>
                            <div class="form-list">
                                <p class="form-p1">您最小孩子的年龄</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.age"
                                        :options="[{ label: '不满1岁',value: '1'},{ label: '满1岁~不满3岁',value: '2'},{ label: '满3岁~不满6岁',value: '3'}]">
                                    </mt-radio>
                                </div>
                            </div>
                            <div style="margin:20px auto;"></div>
                        </div>
                    </div>        
                </div>
                <div class="bottom" >
                    <div class= "pagination">
                        <div class="pag-box">
                            <button  class="btn" :disabled= "true" :class= "{ disabledBtn: true }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1"> 1 </span>
                            <span>/</span>
                            <span>5</span>
                            </div>
                            <button  class="btn" @click="changePage()" :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>    

        </div>
        <message-toast :hideOn="hideOn" mtitle="知情同意书" type="3" :conts="articleArray" @Onchange="Onchange"></message-toast>    
    </div>
</template>
<script>
import headers from '@/components/header/header'
import {yunCon}  from '@/utils/slotContent'
import {nations} from '@/utils/nations'
import drageInput from '@/components/nomal/drageInput'
import drageInput1 from '@/components/nomal/drageInput1'
import superChecklist from '@/components/nomal/checklist'
import messageToast  from '@/components/nomal/messageToast'
import {dateFunction}  from '@/utils/dateFormat'
import {isCard} from '@/utils/vaildata'
export default {
    name:'hello',
    data(){
        return {
            dataList:{
               age:'',
               DistrictNo:'',
               Tbszjg:'',
               Lxfs:'',
               Sfzh:'',
               dMqcsrq:dateFunction('yyyy-MM-dd',new Date()),
            },
            page1:true,
            page2:false,
            page3:false,
            page4:false,
            hideOn:false,
            page5:true,
            slotContent1: {   //
                columns: 1,
                default: [{text: '贵州', value: '1'}],
                pData1:nations
            },
            slotContent2: {  //名族
                columns: 1,
                default: [{text: '', value: ''}],
                pData1: nations
            },
            slotContent9: {   //孕周
                columns: 1,
                default: [{text: '15', value: '15'}],
                pData1:yunCon
            },
            articleArray:[
                {detail:'尊敬的宝妈/宝爸：'},
                {detail:'您好！'},
                {detail:'诚邀您参加《母子健康APP推广应用效果评价研究》，本研究由中国疾病预防控制中心妇幼保健中心及本县医疗机构共同参与，目的是了解APP应用对孕产妇及儿童监护人在妇幼健康方面的知识、行为和妇幼健康服务的可及性、服务利用和服务质量产生的影响，从而为项目成果的远期推广和实施策略的制定提供重要的参考依据。'},
                {detail:'此项研究通过问卷向您询问您最小孩子的基本情况、育儿相关知识知晓情况、对母子健康APP的应用情况和建议，请您协助我们完成调查，问卷调查大约占用您10-15分钟的时间。调查过程中您可以随时提出想了解的问题，我们会尽力解答。调查结束后我们会赠送小礼品表示感谢。'},
                {detail:'您参加本项调查一次完成，匿名进行，所有您的个人的信息及问题答案将受到严格保密，仅供研究使用，不会向与研究无关的人提供任何信息。调查相关资料也将在研究结束后销毁。本研究以自愿为原则，您有权选择参加或不参加。调查过程中，您有权在任何时间、无需任何理由退出本调查，这将不会给您或您孩子的常规保健带来任何不良影响。'},
                {detail:'如果您有关于本研究的任何问题，可以随时向我们询问，我们将耐心为您解释。如果您同意参加本研究，请点击同意按钮进入问卷调查部分。'},
                {detail:'期待您的参与！'},
            ]
        }
    },
    components:{
        headers,
        drageInput,
        superChecklist,
        messageToast,
        drageInput1
    },
    methods:{
        Onchange(){
            this.hideOn=false
        },
        changePage(){  //点击上一页，下一页
            if(this.dataList.age=='' ||  this.dataList.DistrictNo=='' || this.dataList.Tbszjg==''){
               this.$toast({
                    message:'请填写完整'
                })
                return false;
            }
            if(this.dataList.Lxfs.length != 11){
                 this.$toast({
                    message:'请输入正确的手机号'
                })
                return false;
            }
            if(!isCard(this.dataList.Sfzh)){
                  this.$toast({
                    message:'请输入正确的身份证号'
                })
                return false;
            }
            this.$router.push({
                path:`/Family${this.dataList.age}`,
                query:{
                    DistrictName:this.dataList.DistrictName,
                    DistrictNo:this.dataList.DistrictNo,
                    Tbszjg:this.dataList.Tbszjg,
                    Lxfs:this.dataList.Lxfs,
                    Sfzh:this.dataList.Sfzh,
                }
            })
        },
        
    },
    created(){

    },
    mounted(){
       this.hideOn=true
    },
    computed:{

    },
    filters:{

    },
}
</script>
<style scoped lang="less">
    .zf-wrapper{
        margin:0 auto;
        .qs-content{
            padding:0 30px;
            top:100px;
            h3{
                font-size: 36px;
                margin:30px 10px 0 10px;
            }
            .top{
                padding:20px 10px;
                p{
                    margin:10px auto;
                    text-indent: 2em;
                    font-size: 30px;
                }
            }
        }
    }
    .pagination {
        width: 100%;
        margin:20px auto;
        .pag-box {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .btn {
                width: 30%;
                height: 98px;
                font-size: 36px;
                color:#026dbb;
            }
            .disabledBtn {
                 color:#666;
            }
            .pag-center{
                height: 98px;
                display: flex;
                flex-direction: row;
                align-items: center;
                span{
                    font-size: 36px;
                    color:#999; 
                }
                .num1 {
                    font-size: 36px;
                    color:#666; 
                }
            }
        }
    }
    .form-list{margin-bottom: 20px;}
    .form-inp{margin:20px 0px;}
    .check-list{background: #fff;padding:10px 10px 20px 10px;border:1px solid #E4E4E4;}
    .form-p1{
        font-size: 32px;
        color: #333;
        margin:20px 0  20px 0;
        span{font-size: 28px;color: #999}
    }
</style>