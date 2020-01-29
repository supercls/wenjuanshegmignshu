<template>
    <div class="zf-wrapper">
        <div class="qs-content mint-tab-container">
            <div class="page1" v-if="page1">
                <div class="top">
                    <p>亲爱的妈妈，</p>
                    <p>您好！这里是中加健康生命轨迹计划（又称“生命树”项目）。
                        “‘生命树’项目母乳喂养调查”是由联合国儿童基金会和“生命树”项目组联合开展的针对上海地区母乳喂养现状的研究，
                        旨在评价上海地区母乳喂养现状，发现存在问题，并为寻求可能的解决方案、改善母乳喂养状况提供依据，
                        使更多婴幼儿能够充分获益于母乳喂养。</p>
                    <p> 在此，我们诚挚地邀请您参与调查！希望占用您 15 分钟的时间，填写如下调查问卷。</p>
                    <p>感谢您的支持和参与！</p>
                </div>
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <drage-input v-model="dataList.a" :keyValue.sync="dataList.a" :modelValue.sync="dataList.b"
                                         typeItem="pickTwo" :required="true"
                                        :disabled="true"  label="您所在的社区" class="requrePage1" data-name="DistrictNo">
                            </drage-input>
                            <div class="form-list">
                                <p class="form-p1">邀请您参与的医生<span class="isRed">*</span>(询问医生并选择)</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage2" data-name="OrganType"
                                        v-model="dataList.OrganType"
                                        :options="[{ label: '医生1',value: '1'},{ label: '医生2',value: '2'},{ label: ' 医生3',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div style="margin:20px auto;"></div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class= "pagination"> 
                        <div class="pag-box">
                            <button  class="btn" :disabled= "true" :class= "{ disabledBtn: true }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1"> 1 </span>
                            <span>/</span>
                            <span>5</span>
                            </div>
                            <button  class="btn" @click="changePage('1','2','requrePage1')" :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            <button @click="subMot">提交</button>
            </div>
            <!--page2-->
            <div class="page2" v-if="page2">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <h3>A.人口学信息<span style="color:#999999;font-size:16px;">(首先，我想了解一下您本人的一些基本信息)</span></h3>
                            <div class="form-list"  style="margin-top:10px;">
                                <p class="form-p1">1.您的出生日期:(年/月/日)<span class="isRed Csny">*</span></p>
                                <div class="check-list" style="padding:0">
                                    <drage-input class="requrePage2" 
                                        data-name="Csny"  
                                        v-model="dataList.Csny"  
                                        :keyValue.sync="dataList.Csny"
                                        @changeInput="changeInput(dataList.Csny,'Csny')"
                                        placeholder="请选择出生日期"
                                        typeItem="date"
                                        :disabled="true"  
                                        :iconRight="true" 
                                        label="" >
                                    </drage-input>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">2.您的学历<span class="isRed Xl">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage2"
                                        @changeInput="changeInput(dataList.Xl,'Xl')"
                                        title=""  data-name="Xl"
                                        v-model="dataList.Xl"
                                        :options="[{ label: '文盲',value: '1'},{ label: '小学',value: '2'},{ label: '初中',value: '3'},{ label: '高中/中专',value: '4'},{ label: '大专',value: '5'},{ label: '本科',value: '6'},{ label: '硕士及以上',value: '7'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">3.您的婚姻状况<span class="isRed Hyzk">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage2"
                                        @changeInput="changeInput(dataList.Hyzk,'Hyzk')"
                                        title=""  data-name="Hyzk"
                                        v-model="dataList.Hyzk"
                                        :options="[{ label: '文盲',value: '1'},{ label: '小学',value: '2'},{ label: '初中',value: '3'},{ label: '高中/中专',value: '4'},{ label: '大专',value: '5'},{ label: '本科',value: '6'},{ label: '硕士及以上',value: '7'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">4.您的家庭年收入（包括工资外收入）<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage2"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '文盲',value: '1'},{ label: '小学',value: '2'},{ label: '初中',value: '3'},{ label: '高中/中专',value: '4'},{ label: '大专',value: '5'},{ label: '本科',value: '6'},{ label: '硕士及以上',value: '7'}]">
                                    </super-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--bottom-->
                <div class="bottom">
                    <div class= "pagination"> 
                        <div class="pag-box">
                            <button  class="btn" :disabled= "false"  @click="changePage('2','1')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1"> 2 </span>
                            <span>/</span>
                            <span>5</span>
                            </div>
                            <button  class="btn" @click="changePage('2','3','requrePage2')" :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--page3-->
            <!--page3-->
            <div class="page3" v-if="page3">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <div class="form-list">
                               <p class="form-p1">5. 您当前的就业情况:<span class="isRed Xl">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage3"
                                        @changeInput="changeInput(dataList.Xl,'Xl')"
                                        title=""  data-name="Xl"
                                        v-model="dataList.Xl"
                                        :options="[{ label: '家庭主妇',value: '1'},{ label: '兼职工作',value: '2'},{ label: '全职工作',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">6. 你的工作单位性质<span class="isRed Hyzk">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage3"
                                        @changeInput="changeInput(dataList.Hyzk,'Hyzk')"
                                        title=""  data-name="Hyzk"
                                        v-model="dataList.Hyzk"
                                        :options="[{ label: '国家公务人员（公务员或事业单位）',value: '1'},{ label: '国企',value: '2'},{ label: '外企',value: '3'},{ label: '私营企业',value: '4'},{ label: '个体经营',value: '5'},{ label: '其他',value: '6'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">7.您的民族<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage3"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '汉族',value: '1'},{ label: '其他',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">8. 您的户口所在地：<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage3"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '上海',value: '1'},{ label: '其他',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list"  style="margin-top:10px;">
                                <p class="form-p1">9. 您已在沪居住的年限（按合计月数填写）<span class="isRed Csny">*</span></p>
                                <div class="check-list" style="padding:0">
                                    <drage-input class="requrePage3" 
                                        data-name="Csny"  
                                        v-model="dataList.as"  
                                        :keyValue.sync="dataList.as"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        placeholder="请选择出生日期"
                                        typeItem="pickeMore"
                                        :slotContent="slotContent1"
                                        :isTwo="true"
                                        :isStr="true"
                                        :disabled="true"  
                                        :iconRight="true" 
                                        label="" >
                                    </drage-input>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">10. 您的户口类型<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage3"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '农业家庭户口',value: '1'},{ label: '非农家庭户口',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--bottom-->
                <div class="bottom">
                    <div class= "pagination"> 
                        <div class="pag-box">
                            <button  class="btn" :disabled= "false"  @click="changePage('3','2')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1"> 3 </span>
                            <span>/</span>
                            <span>5</span>
                            </div>
                            <button  class="btn" @click="changePage('3','4','requrePage3')" :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--page4-->
            <div class="page4" v-if="page4">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <div class="form-list">
                               <p class="form-p1">11. 您现在是否与老人一起住<span class="isRed Xl">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage4"
                                        @changeInput="changeInput(dataList.Xl,'Xl')"
                                        title=""  data-name="Xl"
                                        v-model="dataList.Xl"
                                        :options="[{ label: '是的，长期一起住(>6 个月/年)',value: '1'},{ label: '是的，偶尔/短期一起住(≤6 个月/年)',value: '2'},{ label: '不，从来不一起住',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">12. 您现在与哪些老人一起住（多选）<span class="isRed Hyzk">*</span></p>
                               <div class="check-list"  >
                                    <super-checklist
                                        title=""
                                        class="requrePage4 moreCheck" data-name="Zjbbwt"   data-next="Zjbbwt2"  data-count="9"
                                        v-model="dataList.Zjbbwt"
                                        :options="[{ label: '自己母亲',value: '1'},{ label: '自己父亲',value: '2'},{ label: '婆婆 ',value: '3'},{ label: '公公 ',value: '4'},{ label: '其他人 ',value: '5'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <h3>B. 您最近一次的分娩信息<span style="color:#999999;font-size:16px;">(现在，我想问一下您最近一次的分娩情况)</span></h3>
                            <div class="form-list">
                               <p class="form-p1">13. 您一共有几个孩子<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  style="padding:0" >
                                    <drage-input 
                                        v-model="dataList.Fqnl" 
                                        :keyValue.sync="dataList.Fqnl"
                                        :iocnRight="true"  unit="个"
                                        class="requrePage4" data-name="Fqnl"
                                        :slotContent="slotContent2" 
                                        placeholder="请选择您孩子的数量"
                                        typeItem="pickeMore" 
                                        :disabled="true"
                                        label="" >
                                    </drage-input>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">14. 此次分娩时间<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list" style="padding:0">
                                    <drage-input class="requrePage2" 
                                        data-name="Csny"  
                                        v-model="dataList.Csny"  
                                        :keyValue.sync="dataList.Csny"
                                        @changeInput="changeInput(dataList.Csny,'Csny')"
                                        placeholder="请选择最近一次分娩时间"
                                        typeItem="date"
                                        :disabled="true"  
                                        :iconRight="true" 
                                        label="" >
                                    </drage-input>
                                </div>
                            </div>
                            <div class="form-list"  style="margin-top:10px;">
                                <p class="form-p1">15. 您分娩时候的孕周<span class="isRed Csny">*</span></p>
                                <div class="check-list" style="padding:0">
                                    <drage-input class="requrePage3" 
                                        data-name="Csny"  
                                        v-model="dataList.t"  
                                        :keyValue.sync="dataList.t"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        placeholder="请选择您分娩时候的孕周"
                                        typeItem="pickeMore"
                                        :slotContent="slotContent3"
                                        :isTwo="true"
                                        :isStr="true"
                                        :disabled="true"  
                                        :iconRight="true" 
                                        label="" >
                                    </drage-input>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">16. 您最小孩子的月龄<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list" style="padding:0">
                                    <drage-input class="requrePage4" 
                                        data-name="Csny"  
                                        v-model="dataList.Csny"  
                                        :keyValue.sync="dataList.Csny"
                                        @changeInput="changeInput(dataList.Csny,'Csny')"
                                        placeholder="请选择出生日期"
                                        typeItem="date"
                                        :disabled="true"  
                                        :iconRight="true" 
                                        label="" >
                                    </drage-input>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">17. 孩子的性别<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage3"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '男孩',value: '1'},{ label: '女孩',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">18. 您的分娩方式<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage3"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '（非无痛）阴道分娩',value: '1'},{ label: '无痛阴道分娩',value: '2'},{ label: '产钳/胎头吸引分娩',value: '3'},{ label: '剖宫产',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--bottom-->
                <div class="bottom">
                    <div class= "pagination"> 
                        <div class="pag-box">
                            <button  class="btn" :disabled= "false"  @click="changePage('4','3')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1"> 4 </span>
                            <span>/</span>
                            <span>5</span>
                            </div>
                            <button  class="btn" @click="changePage('4','5','requrePage4')" :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
                <!--page5-->
            </div>
        </div>
    </div>
</template>
<script>
    import drageInput from '@/components/nomal/drageInput'
    import superRadio from '@/components/nomal/superRadio'
    import * as slotList  from '@/utils/slotContent'
    import superChecklist from '@/components/nomal/checklist'
    //dom数据结构无需优化，需求变动太大，浪费时间，灵活运用
    export default{
        name:'母乳喂养调查问卷',
        provide () {    //祖父级向son传递参数
            return {
                toGdata: 'from grandFather'
            }
        },
        data(){
            return{
                dataList:{
                    a:'闵行区 七宝',
                    b:'',
                    as:'2年 10个月'
                },
                page1:false,
                page2:false,
                page3:false,
                page4:true,
                slotContent1: { 
                    columns: 2,
                    default: [{text: '', value: ''},{text: '', value: ''}],
                    pData1:slotList.clot1,
                    pData2:slotList.clot2
                },
                slotContent2: { 
                    columns: 1,
                    default: [{text: '1', value: '1'}],
                    pData1:slotList.clot3
                },
                slotContent3: { 
                    columns: 2,
                    default: [{text: '', value: ''},{text: '', value: ''}],
                    pData1:slotList.clot4,
                    pData2:slotList.clot5
                },
            }
        },
        components:{
            drageInput,
            superRadio,
            superChecklist
        },
        mounted(){
           
        },
        methods:{
            subMot(){
                console.log(this.dataList)
            },
            changeInput(val,item){
                val ? document.querySelector(`.${item}`).innerHTML = "*" :''
            },
            changePage(before,next,pageName){  //分页
                let isRequire=false
                let arrDom=document.querySelectorAll(`.${pageName}`);
                let innerHtmlArr=[];
                for(let i=0;i<arrDom.length;i++){
                    console.log(arrDom[i])
                    if( (!this.dataList[arrDom[i].getAttribute('data-name')]  
                        || this.dataList[arrDom[i].getAttribute('data-name')].length==0)
                        || ((this.dataList[arrDom[i].getAttribute('data-name')]||'').indexOf(arrDom[i].getAttribute('data-count')|| 'M')>-1
                        && !this.dataList[arrDom[i].getAttribute('data-next')]))
                        {
                        innerHtmlArr.push(arrDom[i]) //获取dom数组 
                        isRequire=true
                    }
                    else{
                        arrDom[i].parentNode.parentNode.querySelector('.isRed').innerHTML = `*`
                    }
                }
                if(isRequire){
                    for(let i = 0;i<innerHtmlArr.length;i++){
                        innerHtmlArr[i].parentNode.parentNode.querySelector('.isRed').innerHTML = `*<span style="padding-left:10px">此题必填</span>`
                    }
                    document.querySelector('.qs-content').scrollTop = innerHtmlArr[0].parentNode.parentNode.offsetTop
                    console.log(innerHtmlArr[0].parentNode.parentNode.querySelector('.isRed').innerHTML)
                    return false;
                }    
                let checkDom=document.querySelectorAll('.moreCheck')
                for(let i=0;i<checkDom.length;i++){
                    this.checkObj[checkDom[i].getAttribute('data-name')]=(this.dataList[checkDom[i].getAttribute('data-name')] ||[""]).join(",")
                }
                let pageBefore='page'+before;
                let pageNext='page'+next;
                this[pageBefore]=false;
                this[pageNext]=true;
                document.querySelector('.qs-content').scrollTop=0  //翻页时候滚动到最顶部
            }
        }
    }
</script>
<style lang="less" scoped>
    .zf-wrapper{
        margin:0 auto;
        .qs-content{
            padding:0 30px;
            top:10px;
            h3{
                font-size: 36px;
                margin:30px 10px 0 10px;
            }
            .top{
                padding:20px 10px;
                p{
                    margin:10px auto;
                    font-weight: bolder;
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
    .isRed{color: #f00 !important;padding: 0 10px;}
    .check-list{background: #fff;padding:10px 10px 20px 10px;border:1px solid #E4E4E4;}
    .form-p1{
        font-size: 32px;
        color: #333;
        margin:20px 0  20px 0;
        span{font-size: 28px;color: #999}
    }
</style>