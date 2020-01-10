<template>
    <div class="zf-wrapper">
        <mt-navbar v-model="selected" :fixed="true">
            <mt-tab-item id="1">母亲信息</mt-tab-item>
            <mt-tab-item id="2">父亲信息</mt-tab-item>
            <mt-tab-item id="3">儿童信息</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected" :swipeable="false">
            <mt-tab-container-item id="1">
                <div class="zf-wrapper-mom">
                    <div class="form-component">
                        <drage-input v-model="dataList.cMqxm" label="姓名"  type="text" :required="true">
                        </drage-input>
                        <drage-input v-model="dataList.cMqlxdh" label="手机号码"  type="number" :required="true">
                        </drage-input>
                        <drage-input v-model="dataList.cMqzjlx" :keyValue.sync="dataList.cMqzjlx"
                                     :slotContent="slotContent1"
                                     typeItem="pickeMore" :disabled="true" :iconRight="true" label="证件类型"
                                     :required="true">
                        </drage-input>
                        <drage-input v-model="dataList.cMqsfzh" v-show="dataList.cMqzjlx"
                                     :label="dataList.cMqzjlx=='护照'?'护照号码':'身份证号码'"
                                     @InputBlur="InputBlur"
                                     type="text" :required="true">
                        </drage-input>
                        <drage-input v-model="dataList.dMqcsrq" :keyValue.sync="dataList.dMqcsrq" typeItem="date"
                                     :disabled="true" :defaultDate="defaultDate1" :iconRight="true" label="出生日期" >
                        </drage-input>
                        <drage-input v-model="dataList.cMqgzdw" label="工作单位"  type="text">
                        </drage-input>
                        <drage-input v-model="dataList.cMqmz" :keyValue.sync="dataList.cMqmz"
                                     :slotContent="slotContent2" :required="true" typeItem="pickeMore"
                                     :disabled="true" :iconRight="true" label="民族" >
                        </drage-input>
                        <drage-input v-model="dataList.iMqsg" :keyValue.sync="dataList.iMqsg"
                                     :slotContent="slotContent3" :isStr="true" typeItem="pickeMore" :disabled="true"
                                     :isTwo="true" unit="cm"  label="身高" >
                        </drage-input>
                        <drage-input v-model="dataList.iMqtz" :keyValue.sync="dataList.iMqtz"
                                     :slotContent="slotContent4" typeItem="pickeMore"
                                     :disabled="true" :isTwo="true" unit="kg"  label="体重" >
                        </drage-input>
                        <drage-input v-model="dataList.iMqlcs_Zr_Cs" :keyValue.sync="dataList.iMqlcs_Zr_Cs"
                                     :slotContent="slotContent5" typeItem="pickeMore"
                                     :disabled="true" unit="次"  label="自然流产" >
                        </drage-input>
                        <drage-input v-model="dataList.iMqlcs_Rg_Cs" :keyValue.sync="dataList.iMqlcs_Rg_Cs"
                                     :slotContent="slotContent5" typeItem="pickeMore" :disabled="true"
                                     unit="次"  label="人工流产" >
                        </drage-input>
                        <drage-input v-model="dataList.iMqlcs_Xgxlc_Cs" :keyValue.sync="dataList.iMqlcs_Xgxlc_Cs"
                                     :slotContent="slotContent5" typeItem="pickeMore"
                                     :disabled="true" unit="次"  label="习惯性流产" >
                        </drage-input>
                        <drage-input v-model="dataList.iFms_Zc_Cs" :keyValue.sync="dataList.iFms_Zc_Cs"
                                     :slotContent="slotContent5" typeItem="pickeMore"
                                     :disabled="true" unit="次"  label="早产" >
                        </drage-input>
                        <drage-input v-model="dataList.iFms_St_Cs" :keyValue.sync="dataList.iFms_St_Cs"
                                     :slotContent="slotContent5" typeItem="pickeMore"
                                     :disabled="true" unit="次"  label="死胎" >
                        </drage-input>
                        <drage-input v-model="dataList.iFms_Sc_Cs" :keyValue.sync="dataList.iFms_Sc_Cs"
                                     :slotContent="slotContent5" typeItem="pickeMore"
                                     :disabled="true" unit="次"  label="死产" >
                        </drage-input>
                        <drage-input v-model="dataList.iFms_Tejx_Cs" :keyValue.sync="dataList.iFms_Tejx_Cs"
                                     :slotContent="slotContent5" typeItem="pickeMore"
                                     :disabled="true" unit="次"  label="胎儿畸形" >
                        </drage-input>
                        <drage-input v-model="dataList.cJqjh" :keyValue.sync="dataList.cJqjh"
                                     :slotContent="slotContent6" typeItem="pickeMore" :disabled="true"
                                     :iconRight="true"  label="父母近亲婚配" >
                        </drage-input>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="zf-wrapper-mom">
                    <div class="form-component">
                        <drage-input v-model="dataList.cFqxm" label="姓名"  type="text" >
                        </drage-input>
                        <drage-input v-model="dataList.cFqlxdh" label="手机号码"  type="number">
                        </drage-input>
                        <drage-input v-model="dataList.cFqzjlx" :keyValue.sync="dataList.cFqzjlx"
                                     :slotContent="slotContent1" typeItem="pickeMore" :disabled="true"
                                     :iconRight="true" label="证件类型">
                        </drage-input>
                        <drage-input v-model="dataList.cFqsfzh"  v-show="dataList.cFqzjlx"
                                     @InputBlur="InputBlurFa"
                                     :label="dataList.cFqzjlx=='护照'?'护照号码':'身份证号码'"  type="text" >
                        </drage-input>
                        <drage-input v-model="dataList.dFqcsrq" typeItem="date" :keyValue="dataList.dFqcsrq" :defaultDate="defaultDate1" :disabled="true"
                                     :iconRight="true" label="出生日期" >
                        </drage-input>
                        <drage-input v-model="dataList.cFqgzdw" label="工作单位"  type="text">

                        </drage-input>
                        <drage-input v-model="dataList.cFqmz" :keyValue.sync="dataList.cFqmz"
                                     :slotContent="slotContent2" typeItem="pickeMore"  :disabled="true"
                                     :iconRight="true" label="民族" >
                        </drage-input>
                        <drage-input v-model="dataList.iFqsg" :keyValue.sync="dataList.iFqsg"
                                     :slotContent="slotContent3F" typeItem="pickeMore" :disabled="true"
                                     :isTwo="true" unit="cm"  label="身高" >
                        </drage-input>
                        <drage-input v-model="dataList.iFqtz" :keyValue.sync="dataList.iFqtz"
                                     :slotContent="slotContent4F" typeItem="pickeMore" :disabled="true"
                                     :isTwo="true" unit="kg"  label="体重" >
                        </drage-input>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div class="zf-wrapper-mom">
                    <div class="form-component">
                        <drage-input v-model="dataList.cXm"  label="姓名"  type="text" :required="true">

                        </drage-input>
                        <drage-input v-model="dataList.model1" :keyValue.sync="dataList.bXb"
                                     :slotContent="slotContent7" typeItem="pickeMore" :disabled="true"
                                     :required="true" :iconRight="true"  label="性别" >
                        </drage-input>
                        <drage-input v-model="dataList.dCsrq" :keyValue.sync="dataList.dCsrq" typeItem="date" :disabled="true"
                                     :iconRight="true"  label="出生日期" :required="true">
                        </drage-input>
                        <drage-input v-model="dataList.model2" :keyValue.sync="dataList.model2"
                                     :modelValue.sync="dataList.cZdxzdm"    typeItem="pickCounty"
                                     :required="true" :disabled="true" :iconRight="true" label="居住地" >
                        </drage-input>
                        <drage-input v-model="dataList.cJtdz"  label="详细地址"  type="text" :required="true">
                        </drage-input>
                        <drage-input v-model="dataList.cDh"  @changeMobile="changeMobile" label="联系电话" :disabled="true"  type="number" :required="true">
                        </drage-input>
                        <drage-input v-model="dataList.iCstz" :keyValue.sync="dataList.iCstz"  type="number"
                                     :required="true" maxlength="2"
                                       unit="g"  label="出生体重" >
                        </drage-input>
                        <drage-input v-model="dataList.iCssg" :keyValue.sync="dataList.iCssg"
                                     :required="true" :slotContent="slotContent3t" typeItem="pickeMore"
                                     :disabled="true" :isTwo="true" unit="cm"  label="出生身长" >
                        </drage-input>
                        <drage-input v-model="dataList.iCstw" :keyValue.sync="dataList.iCstw"
                                     :slotContent="slotContent8" typeItem="pickeMore" :disabled="true"
                                     unit="cm"  label="出生头围" >
                        </drage-input>
                        <drage-input v-model="dataList.iFmyz" :keyValue.sync="dataList.iFmyz"
                                     :slotContent="slotContent9" typeItem="pickeMore"  :required="true"
                                     :disabled="true" unit="周"  label="分娩孕周" >
                        </drage-input>
                        <drage-input v-model="dataList.iFmyzDay" :keyValue.sync="dataList.iFmyzDay"
                                     :slotContent="slotContent10" typeItem="pickeMore" :disabled="true"
                                     :required="true" unit="天"  label="分娩孕周-天" >
                        </drage-input>
                        <drage-input v-model="dataList.MyHospital" :keyValue.sync="dataList.MyHospital"
                                     :slotContent="slotContent23" typeItem="pickeMore" :disabled="true"
                                     :required="true"
                                     :iconRight="true"  label="所属妇幼保健院" >
                        </drage-input>
                        <drage-input v-model="dataList.ccsyy"
                                     :keyValue.sync="dataList.ccsyy"
                                       label="分娩医院" >
                        </drage-input>
                        <drage-input v-model="dataList.cFmfs" :keyValue.sync="dataList.cFmfs"
                                     :slotContent="slotContent11" typeItem="pickeMore" :disabled="true"
                                     :iconRight="true"  label="分娩方式" >
                        </drage-input>
                        <drage-input v-model="dataList.iTaici" :keyValue.sync="dataList.iTaici"
                                     :slotContent="slotContent13" typeItem="pickeMore" :disabled="true"
                                     :iconRight="true"  label="胎次" >
                        </drage-input>
                        <drage-input v-model="dataList.iChanci" :keyValue.sync="dataList.iChanci"
                                     :slotContent="slotContent13" typeItem="pickeMore"
                                     :disabled="true" :iconRight="true"  label="产次" >
                        </drage-input>
                        <drage-input v-model="dataList.model5" :keyValue.sync="dataList.cStdt"
                                     :slotContent="slotContent12" typeItem="pickeMore"
                                     :disabled="true" :iconRight="true"  label="胎数" >
                        </drage-input>
                        <drage-input v-model="dataList.iApgar_1" :keyValue.sync="dataList.iApgar_1"
                                     :slotContent="slotContent14" typeItem="pickeMore" :disabled="true"
                                     :iconRight="true"  label="Apgar 1分钟" >
                        </drage-input>
                        <drage-input v-model="dataList.iApgar_5" :keyValue.sync="dataList.iApgar_5"
                                     :slotContent="slotContent14" typeItem="pickeMore" :disabled="true"
                                     :iconRight="true"  label="Apgar 5分钟" >
                        </drage-input>
                        <drage-input v-model="dataList.iApgar_10" :keyValue.sync="dataList.iApgar_10"
                                     :slotContent="slotContent14" typeItem="pickeMore" :disabled="true"
                                     :iconRight="true"  label="Apgar 10分钟" >
                        </drage-input>
                        <drage-input v-model="dataList.cCszx_qzz" :keyValue.sync="dataList.cCszx_qzz"
                                     :slotContent="slotContent15" typeItem="pickeMore"
                                     :disabled="true" :iconRight="true"  label="出生窒息" >
                        </drage-input>
                        <drage-input v-model="dataList.model12" :keyValue.sync="dataList.bCs"
                                     :slotContent="slotContent26" typeItem="pickeMore" :disabled="true"
                                     :iconRight="true"  label="产伤" >
                        </drage-input>
                        <drage-input v-model="dataList.model9" :keyValue.sync="dataList.bLncx"
                                     :slotContent="slotContent26" typeItem="pickeMore"
                                     :disabled="true" :iconRight="true"  label="颅内出血" >
                        </drage-input>
                        <drage-input v-model="dataList.model8" v-if="dataList.bLncx" :keyValue.sync="dataList.cLncxCd"
                                     :slotContent="slotContent17" typeItem="pickeMore"
                                     :disabled="true" :iconRight="true"  label="颅内出血等级" >
                        </drage-input>
                        <drage-input v-model="dataList.cCsqx" :keyValue.sync="dataList.cCsqx"
                                     :slotContent="slotContent18" typeItem="checkList"
                                     :disabled="true" :iconRight="true"  label="出生缺陷" >
                        </drage-input>
                        <drage-input v-model="dataList.iMqsynl" :keyValue.sync="dataList.iMqsynl"
                                     :slotContent="slotContent19" typeItem="pickeMore" :disabled="true"
                                     :iconRight="true" unit="岁"  label="母亲生育年龄" >
                        </drage-input>
                        <drage-input v-model="dataList.cMqjbs_Tnb" :keyValue.sync="dataList.cMqjbs_Tnb"
                                     :slotContent="slotContent20" typeItem="pickeMore" :disabled="true"
                                     :iconRight="true"   label="孕期母亲糖尿病" >
                        </drage-input>
                        <drage-input v-model="dataList.cMqjbs_Gxy" :keyValue.sync="dataList.cMqjbs_Gxy"
                                     :slotContent="slotContent16" typeItem="pickeMore" :disabled="true"
                                     :iconRight="true"   label="孕期母亲高血压" >
                        </drage-input>
                        <drage-input v-model="dataList.cMqjbs_Px" :keyValue.sync="dataList.cMqjbs_Px"
                                     :slotContent="slotContent21" typeItem="pickeMore" :disabled="true"
                                     :iconRight="true"   label="孕期母亲贫血" >
                        </drage-input>
                        <drage-input v-model="dataList.cMqjbs_Fz" :keyValue.sync="dataList.cMqjbs_Fz"
                                     :slotContent="slotContent16" typeItem="pickeMore" :disabled="true"
                                     :iconRight="true"   label="孕期母亲风疹" >
                        </drage-input>
                        <drage-input v-model="dataList.cMqjbs_Szdgr" :keyValue.sync="dataList.cMqjbs_Szdgr"
                                     :slotContent="slotContent16" typeItem="pickeMore"
                                     :disabled="true" :iconRight="true"   label="孕期母亲生殖道感染" >
                        </drage-input>
                        <drage-input v-model="dataList.cMqjbs_Qt"  label="孕期母亲其他疾病"  type="text">

                        </drage-input>
                        <drage-input v-model="dataList.model3" :keyValue.sync="dataList.bCity"
                                     :slotContent="slotContent22" typeItem="pickeMore" :disabled="true"
                                     :iconRight="true"   label="常住地" >
                        </drage-input>
                        <drage-input v-model="dataList.model6"
                                     :keyValue.sync="dataList.iHk"
                                     typeItem="pickeMore"
                                     :slotContent="slotContent25"
                                     :disabled="true"
                                     :iconRight="true" label="户口类别" >
                        </drage-input>
                        <drage-input v-model="dataList.cHkdz" :keyValue.sync="dataList.cHkdz"
                                     :modelValue.sync="dataList.model4"    typeItem="pickCounty"
                                     :disabled="true" :iconRight="true" label="户籍地" >
                        </drage-input>
                        <drage-input v-model="dataList.cEtsfzh"  label="身份证号"  type="text" >
                        </drage-input>
                        <drage-input v-model="dataList.cJzh"  label="就诊卡号"  type="text">
                        </drage-input>
                        <drage-input v-model="dataList.cCardNo" :disabled="true"  label="保健号"  type="text" >
                        </drage-input>
                    </div>
                </div>
                <!--footer imgUpload-->
                <div class="footer-div">
                    <p>照片上传</p>
                    <div style="display: grid;grid-template-columns: 30% 54%;grid-column-gap:8%;">
                        <upload-img
                                :actions="BASE_API+'/Comm/PostFiles'"
                                :iscrcle="false"
                                :styleU="{width:'100%'}"
                                v-model="dataList.ImagePath"
                        >
                        </upload-img>
                    </div>
                    <button @click="submitForm" class="footButton">提交保存</button>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import drageInput from '@/components/nomal/drageInput'
import {nations} from '@/utils/nations'
import * as slotList  from '@/utils/slotContent'
import {isvalidUsername,isCard} from '@/utils/vaildata'
import {dateFunction} from '@/utils/dateFormat'
import uploadImg from '@/components/upload/recta'
import {getWxdata} from '@/utils/auth'
export default {
    name: "EtMain",
    data(){
        return {
            selected:'1',
            weightD:'',
            defaultDate1:'1990-01-01',
            dataList:{
            },
            slotContent1: {  //类型
                columns: 1,
                default: [{text: '', value: ''}],
                pData1: slotList.cardType
            },
            slotContent2: {  //名族
                columns: 1,
                default: [{text: '', value: ''}],
                pData1: nations
            },
            slotContent3: {  //母亲父亲身高
                columns: 2,
                default: [{text: '150', value: '150'}],
                pData1: slotList.heightCont,
                pData2: slotList.radixPoint
            },
            slotContent3F: {  //母亲父亲身高
                columns: 2,
                default: [{text: '170', value: '170'}],
                pData1: slotList.heightCont,
                pData2: slotList.radixPoint
            },
            slotContent3t: {  //儿童身长
                columns: 2,
                default: [{text: '50', value: '50'}],
                pData1: slotList.heightCont,
                pData2: slotList.radixPoint
            },
            slotContent4: {      //体重
                columns: 2,
                default: [{text: '45', value: '45'},{text: '.0', value: '.0'}],
                pData1: slotList.weightCont,
                pData2: slotList.radixPoint
            },
            slotContent4F: {      //父亲体重
                columns: 2,
                default: [{text: '50', value: '50'},{text: '.0', value: '.0'}],
                pData1: slotList.weightCont,
                pData2: slotList.radixPoint
            },
            slotContent5: {  //0~9
                columns: 1,
                default: [{text: '', value: ''}],
                pData1: slotList.tenCont
            },
            slotContent6: {   //bit
                columns: 1,
                default: [{text: '否', value: '否'}],
                pData1: slotList.bitCon
            },
            slotContent7: {   //性别
                columns: 1,
                default: [{text: '男', value: 1}],
                pData1: slotList.sexCon
            },
            slotContent8: {   //头围
                columns: 1,
                default: [{text: '40', value: '40'}],
                pData1: slotList.headCon
            },
            slotContent9: {   //20-50
                columns: 1,
                default: [{text: '37', value: '37'}],
                pData1: slotList.yunCon
            },
            slotContent10: {   //0-7
                columns: 1,
                default: [{text: '', value: ''}],
                pData1: slotList.weekCon

            },
            slotContent11: {   //分娩方式
                columns: 1,
                default: [{text: '', value: ''}],
                pData1: slotList.bornCon
            },
            slotContent12: {   //分娩方式
                columns: 1,
                default: [{text: '', value: ''}],
                pData1: [
                    {text: '单胎', value: '1'},
                    {text: '双胎', value: '2'},
                    {text: '多胎', value: '3'}
                ]
            },
            slotContent13:{
                columns: 1,
                default: [{text: '1', value: '1'}],
                pData1: slotList.tenCont
            },
            slotContent14:{
                columns: 1,
                default: [{text: '7', value: '7'}],
                pData1: slotList.alltenCon
            },
            slotContent15: {   //出生窒息
                columns: 1,
                default: [{text: '无', value: '无'}],
                pData1: [
                    {text: '无', value: '无'},
                    {text: '轻度', value: '轻度'},
                    {text: '重度', value: '重度'},
                    {text: '不详', value: '不详'}
                ]
            },
            slotContent16:{
                columns: 1,
                default: [{text: '无', value:'无'}],
                pData1:[
                    {text: '无', value: '无'},
                    {text: '有', value: '有'},
                ]
            },
            slotContent26:{   //产伤
                columns: 1,
                default: [{text: '无', value:false}],
                pData1:[
                    {text: '无', value: false},
                    {text: '有', value: true},
                ]
            },
            slotContent17:{
                columns: 1,
                default: [{text: '', value:''}],
                pData1: [
                    {text: 'I级', value: 'I级'},
                    {text: 'II级', value: 'II级'},
                    {text: 'III级及以上', value: 'III级及以上'},
                    {text: '不详', value: '不详'}
                ]
            },
            slotContent18:slotList.birthDefect,   //出生缺陷
            slotContent19:{   //母亲生育年龄
                columns: 1,
                default: [{text: '30', value:'30'}],
                pData1: slotList.momAge
            },
            slotContent20: {   //糖尿病
                columns: 1,
                default: [{text: '', value: ''}],
                pData1: [
                    {text: '无', value: '无'},
                    {text: '无需药物治疗', value: '无需药物治疗'},
                    {text: '需药物治疗', value: '需药物治疗'},
                    {text: '不详', value: '不详'}
                ]
            },
            slotContent21: {   //贫血
                columns: 1,
                default: [{text: '', value: ''}],
                pData1: [
                    {text: '无', value: '无'},
                    {text: 'Hb 60-110g/L', value: 'Hb 60-110g/L'},
                    {text: 'Hb 40-60g/L', value: 'Hb 40-60g/L'},
                    {text: 'Hb ≤40g/L', value: 'Hb ≤40g/L'},
                    {text: '不详', value: '不详'}
                ]
            },
            slotContent22:{
                columns: 1,
                default: [{text: '城镇', value:true}],
                pData1: slotList.addressCon
            },
            slotContent23: {   //hospital
                columns: 1,
                default: [{text: '', value: ''}],
                pData1: slotList.hospital

            },
            slotContent25: {   //户口类别
                columns: 1,
                default: [{text: '本市', value: '1'}],
                pData1: [
                    {text: '本区县', value: '0'},
                    {text: '本市', value: '1'},
                    {text: '本省外市', value: '2'},
                    {text: '外省', value: '3'},
                ]
            },
            isBack:false,
        }
    },
    components:{
        drageInput,
        uploadImg
    },
    watch:{        //处理数据库数据设计错误
      'dataList.cZdxzdm'(val){
          if(val!=undefined && this.dataList.model2){
              let dataS=this.dataList.model2.split(' ');
              this.dataList.cZdxz1=dataS[0]
              this.dataList.cZdxz2=dataS[1]
              this.dataList.cZdxz3=dataS[2]
          }

      },
      'dataList.dMqcsrq'(val){
          if(val!=undefined){
              this.dataList.dMqcsrq=val.split(' ')[0]
          }
      },
      'dataList.dFqcsrq'(val){
          if(val!=undefined){
              this.dataList.dFqcsrq=val.split(' ')[0]
          }
      },
      'dataList.dCsrq'(val){
          if(val!=undefined){
              this.dataList.dCsrq=val.split(' ')[0]
          }
      },
    },
    methods:{
         InputBlur(val){   //母亲身份证计算出生日期
             if(this.dataList.cMqzjlx=='身份证' && !isCard(this.dataList.cMqsfzh)){  //验证母亲必填身份证
                 this.$toast('请输入正确的身份证号码')
                 return false
             }
             if(val!=undefined && !this.dataList.dMqcsrq){
                 let times=val.substring(6, 10) + "-" + val.substring(10, 12) + "-" + val.substring(12, 14)
                 this.$set(this.dataList,'dMqcsrq',times)
                 console.log(val)
             }
         },
         InputBlurFa(val){  //父亲身份证计算出生日期
             if(val){
                 if(this.dataList.cFqzjlx=='身份证' && !isCard(this.dataList.cFqsfzh)){  //验证母亲必填身份证
                     this.$toast('请输入正确的身份证号码')
                     return false
                 }
                 if(val!=undefined && !this.dataList.dFqcsrq){
                     let times=val.substring(6, 10) + "-" + val.substring(10, 12) + "-" + val.substring(12, 14)
                     this.$set(this.dataList,'dFqcsrq',times)
                     console.log(val)
                 }
             }
         },
         submitForm(){            //提交信息
            console.log(this.dataList)
            let reqModel=[
                //母亲信息
                {model:'cMqxm',isSelect:'1',text:'母亲信息-姓名'},
                {model:'cMqlxdh',isSelect:'1',text:'母亲信息-手机号码'},
                {model:'cMqzjlx',isSelect:'1',text:'母亲信息-证件类型'},
                {model:'cMqsfzh',isSelect:'1',text:'母亲信息-证件号码'},
                {model:'cMqmz',isSelect:'1',text:'母亲信息-民族'},
                //儿童信息
                {model:'cXm',isSelect:'3',text:'儿童信息-姓名'},
                {model:'bXb',isSelect:'3',text:'儿童信息-性别'},
                {model:'dCsrq',isSelect:'3',text:'儿童信息-出生日期'},
                {model:'cZdxzdm',isSelect:'3',text:'儿童信息-居住地'},
                {model:'cJtdz',isSelect:'3',text:'儿童信息-详细地址'},
                {model:'cDh',isSelect:'3',text:'儿童信息-联系电话'},
                {model:'iCstz',isSelect:'3',text:'儿童信息-出生体重'},
                {model:'iCssg',isSelect:'3',text:'儿童信息-出生身长'},
                {model:'MyHospital',isSelect:'3',text:'儿童信息-所属儿童保健院'},
                {model:'iFmyz',isSelect:'3',text:'儿童信息-分娩孕周'},
                {model:'iFmyzDay',isSelect:'3',text:'儿童信息-分娩孕周-天'},
            ]
            let isRequired=reqModel.find(val=>{
                return (this.dataList[val.model]==='' || Object.prototype.toString.call(this.dataList[val.model])=='[object Undefined]')
            })
            if(isRequired){
                this.$toast(`请输入${isRequired.text}`)
                this.selected=isRequired.isSelect
                this.$nextTick(()=>{
                    document.querySelector('.mint-tab-container').scrollTop= 0; //区域滚动到最顶部，初始
                })
                return false
            }
            if(!isvalidUsername(this.dataList.cMqlxdh)){  //验证手机号
                this.$toast('请输入母亲正确的手机号码')
                this.selected='1'
                return false
            }
            if(this.dataList.cFqlxdh && !isvalidUsername(this.dataList.cFqlxdh)){
                this.$toast('请输入父亲正确的手机号码')
                this.selected='2'
                return false
            }
            if(this.dataList.cMqzjlx=='身份证' && !isCard(this.dataList.cMqsfzh)){  //验证母亲必填身份证
                this.$toast('请输入母亲正确的身份证号码')
                this.selected='1'
                return false
            }
             if(this.dataList.cFqsfzh
                 && this.dataList.cFqsfzh!=''
                 && this.dataList.cFqzjlx=='身份证'
                 && !isCard(this.dataList.cFqsfzh))
             {  //验证母亲必填身份证
                 this.$toast('请输入父亲正确的身份证号码')
                 this.selected='2'
                 return false
             }
        },
        changeMobile(){  //重新绑定手机号
            this.$messagebox.confirm('是否重新绑定手机号码？').then(res=>{
                this.isBack=true
                this.$router.push({
                    name:"User",
                    query:{
                        isEtmain:true
                    }
                });
            }).catch(e=>{
                console.log(e)
            })
        },
    },
    computed:{
        ...mapGetters([
            'openId'
        ])
    },
    activated(){
        try{
            let isBack=localStorage.getItem('isBack')
            if(isBack=='false'){
                localStorage.removeItem('isBack')
                window.location.reload()
            }
            else{
                delete this.dataList.cDh
                this.$set(this.dataList,'cDh',JSON.parse(getWxdata())[0].MobileTel)

            }
        }catch (e) {
            console.log(e)
        }
    },
    async mounted(){
    }
}
</script>

<style scoped lang="less">
    @font32:32px;
    .zf-wrapper{
        .mint-tab-item-label{
            font-size: @font32;
        }
        .zf-wrapper-mom{
            margin:0px 30px;
            -webkit-overflow-scrolling: touch;
            font-size: @font32;
            .form-component{
                border-radius: 5px;
            }
        }
        .footer-div{
            font-size: @font32;
            color: #666;
            margin:30px 50px;
            .footButton{
                height: 100px;
                line-height: 100px;
                background: #026DBB;
                color: #fff;
                font-size: @font32;
                width: 100%;
                display: inline-block;
                margin-top: 30px;
                border-radius: 10px;
            }
            input{
                display: none;
            }
        }
    }
</style>