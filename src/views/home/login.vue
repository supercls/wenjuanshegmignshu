<template>
	<div class="wrap-user">
		<div class="user-center">
			<div class="item">
				<img src="../../assets/images/icon_sj@2x.png" class="uni-img"/>
				<input class="uni-input" type="number" placeholder-class="placeholder"  placeholder="请输入手机号" maxlength="11" v-model="userObj.mobileTel"/>
			</div>
			<div class="item">
				<img src="../../assets/images/icon_yzm@2x.png"  class="uni-img"/>
				<input class="uni-input" placeholder-class="placeholder"  placeholder="请输入短信验证码"  type="number" v-model="userObj.verCode"/>
				<span class="timeSpan" :class="{active:isSend}"  @click="sendCode" :disabled="isSend">{{times}}</span>
			</div>
		</div>
		<div class="user-tc">
			<div  @click="aggreeBt" class="user-tc-v">
				<img :src="imgSrc" /><span>已阅读并同意</span>
			</div>
			<span class="user-tc-t1" @click="junmpUrl()">《用户协议及隐私条款》</span>
		</div>
        <mt-button :disabled="!imgOnoff" class="submit" :class="{actives:imgOnoff}" @click="submit">下一步</mt-button>   
	</div>
</template>

<script>
	import {GetMobileVerifyCode,MatchVerCode} from '../../api/user.js'
    import {mapGetters} from 'vuex'
    import img1 from '../../assets/images/Cicon.png'
    import img2 from '../../assets/images/icon_slt@2x.png'
	export default {
		data() {
			return {
				loading:false,
				userObj:{
					mobileTel:'',
					verCode:'',
				},
				times:'发送验证码',
				isSend:false,
				seconds:null,
				lotusAddressData:{
					visible:false,
					provinceName:'',
					cityName:'',
					townName:'',
				},
                imgSrc:img1,
                imgOnoff:false
			}
		},
		computed:{
			...mapGetters([

			])
        },
        mounted(){
            let isAgreen = this.$route.query.isAgreen
            isAgreen ? (this.imgSrc=img2 , this.imgOnoff = true):''
        },
		methods: {
			aggreeBt(){
				this.imgSrc==img1? (this.imgSrc=img2,this.imgOnoff = true): (this.imgSrc=img1,this.imgOnoff= false)
            },
			junmpUrl(){
                this.$router.push({
                    path:'/aggreenment'
                })
			},
			submit(){
				if(this.userObj.mobileTel == '' || this.userObj.mobileTel.length!=11){
					this.$toast({
						message: '请输入正确的手机号',
					})
					return false
				}
				if(this.userObj.verCode == ''){
					this.$toast({
						message: '请输入短信验证码',
					})
					return false
				}
				this.loading = true
				MatchVerCode({...this.userObj}).then(res =>{
					this.loading = false
					this.$router.push({
                        path:'/questionNaire',
                        query:{
                            mobileTel:this.userObj.mobileTel
                        }
                    })
				}).catch(err =>{
					this.loading = false
					console.log(err)
				})
			},
			sendCode(){
				if(this.userObj.mobileTel == '' || this.userObj.mobileTel.length!=11){
					this.$toast({
						message: '请输入正确的手机号',
					})
					return false
				}
				if(this.isSend) return false
				this.seconds = 60
				this.isSend=true
				this.$indicator.open()
				GetMobileVerifyCode({
					mobileTel:this.userObj.mobileTel,
				}).then(res=>{
					this.$indicator.close()
					let timeOut = setInterval(() =>{
						this.seconds--;
						this.times=`${this.seconds}s后重新发送`
						if(this.seconds==0){
							clearInterval(timeOut)
							this.isSend=false
							this.times="发送验证码"  
						}
					},1000)
					console.log(res)
				}).catch(err=>{
					console.log(err)
					this.isSend=false
					this.times="发送验证码" 
					this.$indicator.close()
				})
			},
		},
		
	}
</script>

<style lang="less" scoped>
	.wrap-user {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding:0 60px 0 60px;
		.user-center{
			margin-top: 200px;
			width: 100%;
			.item{
				display: flex;
				border-bottom: 1px solid #E5E5E5;
				align-items: center;
				padding: 30px 0;
				.timeSpan{
					color:#026DBB;
					font-size: 28px;
				}
				.active{
					color: #ccc;
				}
				.uni-img{
					width: 42px;
					height: 42px;
					display: inline-block;
					margin-right: 28px;
				}
				.placeholder{
					color: #999;
				}
				.uni-input{
					font-size: 32px;
					color: #333333;
					flex:1;
				}
			}
		}
		.user-bottom{
			.but{
				margin-top: 118px;
				width: 630px;
				height: 88px;
				background-color:#999;
				color: #fff;
				font-size: 36px;
				border-radius: 44px;
			}
			.active{
				background-color:#026DBB;
			}
			.bot{
				margin-top: 40px;
				display: flex;
				span{
					flex: 1;
					text-align: center;
					font-size: 28px;
					color:#026DBB;
				}
			}
		}
		.user-tc{
			width: 100%;
			margin-top: 60px;
			.user-tc-v{
				display: inline-block;
			}
			img{
				width: 42px;
				height:42px;
				margin-right: 20px;
				vertical-align: -3.5px;
			}
			span{
				font-size: 28px;
				color: #999999;
			}
			.user-tc-t1{
				color:#026DBB;
			}
        }
        .submit{
            margin-top: 200px;
            width: 600px;
            height: 90px;
            background:#D1D1D1;
            color: #fff;
            font-size: 36px;
            border-radius: 10px;
        }
        .actives{
            background:#026DBB;
        }
	}
</style>
