<template>
  <div class="zd-upload needsclick">
    <div class="img-div"
         :style="styleU"
         ref="img-upload"
         @click="uploadImg">
      <img v-show="ImagePath && !iscrcle"
           src="../../assets/icon_x@2x.png" alt=""
           class="close"
           @click.stop="removeImg">
      <img v-show="ImagePath && iscrcle"
           src="../../assets/images/public/icon_x2@2x.png"
           alt="" class="close"
           @click.stop="removeImg">
      <span class="before" v-show="!ImagePath"></span>
      <span class="after" v-show="!ImagePath"></span>
      <span :visible.sync="keyValue"></span>
      <input
            v-if="multiple"
             ref="fileInput"
             type="file"
             name="image"
             accept="image/*"
             multiple="multiple"
             @change='handleInputChange($event)'>
      <input
            v-else
             ref="fileInput"
             type="file"
             name="image"
             accept="image/*"
             @change='handleInputChange($event)'>
      <!-- <input ref="fileInput"     
             type="file" 
             name="摄像机"
             accept="video/*" 
             @change='handleInputChange($event)'> -->
      <img v-show="ImagePath"
           :style="styleU"
           :src="imgSrcbase" alt="">
    </div>
  </div>
</template>
<script>
/**********
 *  <!--accept="image/*,capture=camera"-->
 * 图片样式自己控制，现有矩形和圆形
 * 支持base64以及 post表单提交
 * 根据项目需求
 * **********/
import lrz from 'lrz'  //图片压缩 https://github.com/think2011/localResizeIMG
export default {
    name: "uploadImg-base64-post",
    data(){
        return{
            imgSrcbase:'',
            ImagePathsuffix:'',
        }
    },
    model:{
        prop:'ImagePath',
        event:'input'
    },
    props: {
        ImagePath:String,
        iscrcle:Boolean,
        styleU:[Object,Array],
        keyValue:{
            type:[String,Number,Array,Object,Boolean]
        },
        multiple:{  
            type:Boolean,
            default(){
                return false
            }
        },
        actions:String  //api 地址
    },
    watch:{
        ImagePath:{
            handler:function (val) {
                this.imgSrcbase=window.location.origin+'/'+val
            },
            immediate:true
        }
    },
    methods:{
        uploadImg(){           //touch start
            this.$refs.fileInput.dispatchEvent(new MouseEvent('click'))
        },
        removeImg(){           //remove img
            this.$emit('input','')
            this.$emit('update:keyValue','')
            this.$refs.fileInput.value=''
        },
        uploadProgress (evt) {
            this.$indicator.open({
                text: '正在上传...',
                spinnerType: 'fading-circle'
            })
        },
        uploadComplete (evt) {   //图片上传完成
            let data=JSON.parse(JSON.parse(evt.target.response))
            if(data.isSuccess){
                let imgData=data.msg
                this.$emit('input',imgData)
            }
            else{
                this.$messagebox({
                    title: '提示',
                    message: data.msg
                })
            }
            this.$indicator.close()
        },
        uploadFailed (evt) {
            this.$indicator.close()
            this.$messagebox({
                title: '提示',
                message: evt
            })
        },
        uploadCanceled (evt) {
            this.$indicator.close()
            this.$messagebox({
                title: '提示',
                message: evt
            })
        },
        handleInputChange(e){   //upload img
            let that=this;
            let file = e.target.files[0];
            let filesize = file.size;
            let filename = file.name;
            if (filesize > 6304320) {  //6Mb
                that.$toast('图片不能大于6M')
                return false
            }
            
            if(this.actions){    //form
                this.$indicator.open({
                    text: '正在上传...',
                    spinnerType: 'fading-circle'
                })
                lrz( e.target.files[0],{quality:0.5} )
                    .then(function(rst) {
                        let fd = new FormData();
                        let files = new File([rst.file], rst.origin.name, {type: rst.file.type})
                        fd.append('file', files);
                        let xhr = new XMLHttpRequest();
                        xhr.addEventListener('progress', that.uploadProgress, false);
                        xhr.addEventListener('load', that.uploadComplete, false);
                        xhr.addEventListener('error', that.uploadFailed, false);
                        xhr.addEventListener('abort', that.uploadCanceled, false);
                        xhr.open('POST', that.actions);
                        xhr.setRequestHeader('Authorization','ticket PMZrj63slI/2jN+QY2Mob71fkS8Q2djxzhdXLgfkQA6E79/oltiyZwNgd5BAomb/')  //请求头 已暴露
                        xhr.send(fd);
                    }).catch(function(error) {
                      that.$indicator.close()
                      that.$messagebox({
                          title: '提示',
                          message: error
                      })
                })
            }
            else{                        //base 64  加上后缀名
                let reader = new FileReader();   //FileReader 兼容性
                reader.readAsDataURL(file);
                reader.onload = (e)=>{
                    that.imgSrcbase=e.target.result
                    that.ImagePathsuffix=filename.split('.')[1]
                    that.$emit('update:keyValue',that.ImagePathsuffix)
                    that.$emit('input',e.target.result.split(',')[1])
                }
                reader.onprogress = (e)=> {}
            }
        },
    },
    mounted(){

    }
};
</script>
<style scoped lang="less">
  .zd-upload{
    .img-div{
      margin: 30px 0px;
      cursor: pointer;
      width: 180px;
      height: 180px;
      background: #F2F2F2;
      border-radius: 10px;
      display: block;
      border:1px solid  #D4D4D4;
      position: relative;
      .before{
        width: 60px;
        height: 10px;
        background: #CCCCCC;
        position: absolute;
        top: 50%;
        margin-top: -6px;
        margin-left: -30px;
        left: 50%;
      }
      .after{
        width: 10px;
        height: 60px;
        background: #CCCCCC;
        position: absolute;
        margin-left: -6px;
        top: 50%;
        margin-top: -30px;
        left: 50%;
      }
      img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
      .close{
        position: absolute;
        top: 0;
        right: 0;
        width: 45px;
        height: auto;
      }
      input{
        display: none;
      }
    }
  }
</style>
