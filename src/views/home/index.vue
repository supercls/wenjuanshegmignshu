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
            </div>
            <div class="center">
                <div class="zf-wrapper-mom">
                    <div class="form-component">
                        <drage-input v-model="dataList.a" :keyValue.sync="dataList.a" :modelValue.sync="dataList.b"
                                    :slotContent="slotContent1" typeItem="pickCounty" :required="true"
                                    :disabled="true"  label="填表所在地" class="requrePage1" data-name="DistrictNo">
                        </drage-input>
                        <div style="margin:20px auto;"></div>
                    </div>
                </div>
            </div>         
            <button @click="subMot">提交</button>   
        </div>
        
    </div>
</template>
<script>
    import drageInput from '@/components/nomal/drageInput'
    import { firstList ,secoundList} from '@/utils/community'
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
                page1:true,
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
        },
        mounted(){
           
        },
        methods:{
            subMot(){
                console.log(this.dataList)
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
    .check-list{background: #fff;padding:10px 10px 20px 10px;border:1px solid #E4E4E4;}
    .form-p1{
        font-size: 32px;
        color: #333;
        margin:20px 0  20px 0;
        span{font-size: 28px;color: #999}
    }
</style>