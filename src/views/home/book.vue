<template>
    <div class="zf-wrapper">
        <div class="qs-content mint-tab-container">
            <div class="page1">
                <div class="top">
                    <h5> 亲爱的各位准妈妈们，您好！</h5>
                    <p>我们真诚地邀请您参加“女性围产期及产褥期身心健康状况的多中心临床研究”，
                        本研究希望能够更全面地了解及评估孕产妇围产期及产褥期的生理心理健康情况，
                        为今后医务工作者进行更有针对性的诊疗服务提供指导性建议，
                        从而提高医疗服务质量，降低不良围产期及产后并发症，更好地改善母婴安全管理与保健工作。</p>
                    <p> 如果您同意参加该研究，我们只需采集您填写的相关信息，对您的正常诊疗 及身体没有任何影响。
                        研究过程中，关于您的所有信息都严格保密，只有相关人员才能察看您的诊疗纪录，
                        以便于他们检查所收集信息的准确性，并确保研究正常进行。
                        任何电子传输的信息都将会重新命名以确保信息的保密性。所有计算机中的信息将用密码加以保护。
                        该研究的结果可能在医学会议上报告和在科技杂志上发表，但任何可识别您个人的信息都不会使用。</p>
                    <p>参与该研究完全自愿，而不是被迫参加。如果您参加研究也可以随时退出， 
                        不需要任何理由。无论您的决定是什么，
                        都不会影响您的正常治疗或您与医护人 员关系。</p>
                    <p> 如果您决定参加，请在以下同意参加本临床研究的选项上打勾。</p>    
                </div>
            </div>
            <mt-button class="submit" @click="subMot">同意</mt-button>   
        </div>
        
    </div>
</template>
<script>
    export default{
        name:'调查问卷',
        data(){
            return{
               
            }
        },

        mounted(){
           
        },
        methods:{
            subMot(){
                this.$router.push({
                    path:'/login',
                    query:{
                        isAgreen:true
                    }
                })
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
            .top{
                h5{
                    font-size: 32px;
                    margin:30px 10px 30px 10px;
                }
                padding:20px 10px;
                p{
                    margin:10px auto;
                    font-weight: bolder;
                    text-indent: 2em;
                    font-size: 30px;
                    line-height: 1.8;
                }
            }
        }
    }
    .submit{
            width: 80%;
            height: 90px;
            background:#026DBB;
            color: #fff;
            font-size: 36px;
            border-radius: 10px;
            margin: 30px 10%;
        }
</style>