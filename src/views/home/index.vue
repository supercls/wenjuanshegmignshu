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
                                        :slotContent="slotContent1" typeItem="pickTwo" :required="true"
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
            <!--page1-->
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
            <!--page2-->
        </div>
    </div>
</template>
<script>
    import drageInput from '@/components/nomal/drageInput'
    import { firstList ,secoundList} from '@/utils/community'
    import superRadio from '@/components/nomal/superRadio'
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
                    b:''
                },
                page1:false,
                page2:true,
                slotContent1:[{
                        flex: 1,
                        values: firstList,
                        className: 'slot1',
                        textAlign: 'center',
                        defaultIndex: 0
                    },
                    {
                        divider: true,
                        content: '-',
                        className: 'slot2'
                    }, 
                    {
                        flex: 1,
                        values: secoundList,
                        className: 'slot2',
                        textAlign: 'center',
                        defaultIndex: 0                    
                    }]
            }
        },
        components:{
            drageInput,
            superRadio,
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
                document.querySelector('.qs-content').scrollTop=420  //翻页时候滚动到最顶部
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