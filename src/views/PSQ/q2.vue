<template>
    <div class="zf-wrapper">
        <!-- <headers heaTitle='孕产妇调查表' :showBack="false"></headers> -->
        <div class="qs-content mint-tab-container">
            <div class="page1" v-if="page1">
                <div class="top">
                    <p>尊敬的孕妈妈：</p>
                    <p>您好！感谢您参加本次调查，请在题目后相应横线处填写答案或选择相应序号。</p>
                    <p>如无特殊说明，题目均为单选。</p>
                </div>
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <drage-input1 v-model="dataList.DistrictName" :keyValue.sync="dataList.DistrictName" :modelValue.sync="dataList.DistrictNo"
                                        :slotContent="slotContent1" typeItem="pickCounty" :required="true"
                                        :disabled="true"  label="填表所在地" class="requrePage1" data-name="DistrictNo">
                            </drage-input1>
                            <drage-input v-model="dataList.Tbszjg" label="填表所在机构"  type="text" :required="true" class="requrePage1" data-name="Tbszjg">
                            </drage-input>
                             <drage-input v-model="dataList.Lxfs" label="妈妈联系方式"  type="number" :required="true" class="requrePage1" data-name="Lxfs">
                            </drage-input>
                             <drage-input v-model="dataList.Sfzh" label="妈妈身份证号码"  type="text" placeholder="便于查找您的检查记录" data-name="Sfzh" :required="true">
                            </drage-input>
                            <drage-input v-model="dataList.dMqcsrq" :required="true" :keyValue.sync="dataList.dMqcsrq" typeItem="date" :disabled="true"  :iconRight="true" label="填表时间" class="requrePage1" data-name="dMqcsrq">
                            </drage-input>
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
            </div>    
            <!--page2-->
            <div class="page2" v-if="page2">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <h3>一、基本情况</h3>
                            <div class="form-list"  style="margin-top:20px;">
                                <drage-input class="requrePage2" data-name="Ndcsrq"  v-model="dataList.Ndcsrq"  :keyValue.sync="dataList.dMqcsrq" typeItem="date" :disabled="true"  :iconRight="true" label="1.您的出生日期" >
                                </drage-input>
                            </div>
                            <div class="form-list"  style="margin-top:20px;">
                                <drage-input class="requrePage2" data-name="Zfcsrq"  v-model="dataList.Zfcsrq"  :keyValue.sync="dataList.Zfcsrq" typeItem="date" :disabled="true"  :iconRight="true" label="2.您丈夫的出生日期" >
                                </drage-input>
                            </div>
                            <div class="form-list"  style="margin-top:20px;">
                                <drage-input v-model="dataList.Ndmz" :keyValue.sync="dataList.Ndmz"
                                     :slotContent="slotContent2"  typeItem="pickeMore"
                                     class="requrePage2" data-name="Ndmz"
                                     :disabled="true" :iconRight="true" label="3.您的民族">
                                </drage-input>
                            </div>
                            <div class="form-list"  style="margin-top:20px;">
                                <drage-input v-model="dataList.Zfmz" :keyValue.sync="dataList.Zfmz"
                                     :slotContent="slotContent2"  typeItem="pickeMore"
                                      class="requrePage2" data-name="Zfmz"
                                     :disabled="true" :iconRight="true" label="4.丈夫民族">
                                </drage-input>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">5.您的户籍</p>
                                <div class="check-list" >
                                    <super-radio
                                        class="requrePage2"
                                        title=""  data-name="Ndhj"
                                        v-model="dataList.Ndhj"
                                        :options="[{ label: '城市',value: '1'},{ label: '农村',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">6.丈夫户籍</p>
                                 <div class="check-list">
                                    <super-radio
                                        class="requrePage2"
                                        title=""  data-name="Zfhj"
                                        v-model="dataList.Zfhj"
                                        :options="[{ label: '城市',value: '1'},{ label: '农村',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">7.您的文化程度</p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage2"
                                        title=""  data-name="Ndwh"
                                        v-model="dataList.Ndwh"
                                        :options="[{ label: '文盲',value: '1'},{ label: '小学',value: '2'},{ label: '初中',value: '3'},{ label: '高中/中专',value: '4'},{ label: '大专',value: '5'},{ label: '本科',value: '6'},{ label: '硕士及以上',value: '7'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">8.丈夫文化程度</p>
                                <div class="check-list" >
                                    <super-radio
                                        class="requrePage2"
                                        title=""  data-name="Zfwh"
                                        v-model="dataList.Zfwh"
                                        :options="[{ label: '文盲',value: '1'},{ label: '小学',value: '2'},{ label: '初中',value: '3'},{ label: '高中/中专',value: '4'},{ label: '大专',value: '5'},{ label: '本科',value: '6'},{ label: '硕士及以上',value: '7'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">9.您的职业</p>
                                <div class="check-list" >
                                    <super-radio
                                        class="requrePage2"
                                        title=""  data-name="Ndzy" data-count="8"  data-next="Ndzy2"
                                        v-model="dataList.Ndzy"
                                        :options="[{ label: '行政干部',value: '1'},{ label: '工人',value: '2'},{ label: '专业技术人员',value: '3'},{ label: '农民',value: '4'},{ label: '公司职员',value: '5'},{ label: '商业服务人员',value: '6'},{ label: '无业',value: '7'},{ label: '其他',value: '8'}]">
                                    </super-radio>
                                    <mt-field v-if="dataList.Ndzy=='8'" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Ndzy2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">10.丈夫职业</p>
                                 <div class="check-list" >
                                    <super-radio
                                        class="requrePage2"
                                        title=""  data-name="Zfzy"  data-count="8"  data-next="Zfzy2"
                                        v-model="dataList.Zfzy"
                                        :options="[{ label: '行政干部',value: '1'},{ label: '工人',value: '2'},{ label: '专业技术人员',value: '3'},{ label: '农民',value: '4'},{ label: '公司职员',value: '5'},{ label: '商业服务人员',value: '6'},{ label: '无业',value: '7'},{ label: '其他',value: '8'}]">
                                    </super-radio>
                                    <mt-field v-if="dataList.Zfzy=='8'" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Zfzy2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">11.家庭平均月收入</p>
                                 <div class="check-list" >
                                    <super-radio
                                        class="requrePage2"
                                        title=""  data-name="Jtpjysr"
                                        v-model="dataList.Jtpjysr"
                                        :options="[{ label: '3000元及以下',value: '1'},{ label: '3001-5000元',value: '2'},{ label: '5001-10000元',value: '3'},{ label: '10000元以上',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">12.您目前处于以下哪个阶段</p>
                                <div class="check-list">
                                     <super-checklist
                                        title=""
                                        :max="1"
                                        defaultValue="15"
                                        pickContent="yunCon"
                                        class="requrePage2 moreCheck" data-name="Scjd" data-next="Scjdts"  data-count="2"
                                        v-model="dataList.Scjd"
                                        :options="[{ label: '怀孕',value: '1',picker:true,filed:dataList.Scjdts,name:'dataList.Scjdts',placeholder:'请选择',icon:'周'},{ label: '产后',value: '2',other:true,filed:dataList.Scjdts,name:'dataList.Scjdts',placeholder:'请输入',icon:'天'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.Scjd.indexOf('1')=='-1'">
                                <p class="form-p1">13.您的孩子的体重(g)</p>
                                <div class="check-list">
                                <drage-input v-model="dataList.Cstz" :keyValue.sync="dataList.Cstz"  type="number"
                                    placeholder=""
                                    maxlength="5"
                                    placeholder="例如3000g"
                                    :isNum="4"
                                    class="requrePage2" data-name="Cstz"
                                    unit="g"  label="出生体重" >
                                </drage-input>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.Scjd.indexOf('1')=='-1'">
                                <p class="form-p1">14.您宝宝的分娩方式是</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                         class="requrePage2" data-name="Fmfs"
                                        v-model="dataList.Fmfs"
                                        :options="[{ label: '自然分娩',value: '1'},{ label: '剖宫产',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">15.本次怀孕是您第几个孩子？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                         class="requrePage2" data-name="Djghz"
                                        v-model="dataList.Djghz"
                                        :options="[{ label: '第1个',value: '1'},{ label: '第2个',value: '2'},{ label: '3个及以上',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class= "pagination">
                        <div class="pag-box">
                            <button  class="btn" :disabled= "false" @click="changePage('2','1')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1">2</span>
                            <span>/</span>
                            <span>5</span>
                            </div>
                            <button  class="btn" @click="changePage('2','3','requrePage2')"   :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
        <!--page3-->
        <!--page2-->
            <div class="page3" v-if="page3">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <h3>二、孕产期知识和行为</h3>
                            <div class="form-list">
                                <p class="form-p1">16.备孕期间何时开始补充叶酸？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage3" data-name="Hsksbcys"
                                        v-model="dataList.Hsksbcys"
                                        :options="[{ label: '不知道',value: '1'},{ label: '不需要补充',value: '2'},{ label: '怀孕前3个月开始补充 ',value: '3'},{ label: '怀孕后立即开始补充',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">17.您知道什么是胎儿致畸最敏感时期吗？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                         class="requrePage3" data-name="Tejxmgsq"
                                        v-model="dataList.Tejxmgsq"
                                        :options="[{ label: '不知道',value: '1'},{ label: '怀孕3-8周内',value: '2'},{ label: '怀孕8-12周内 ',value: '3'},{ label: '怀孕12-16周',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">18.您知道我国目前重点干预的母婴传播性疾病有哪几种吗？（可多选）</p>
                                <div class="check-list">
                                     <super-checklist
                                        title=""
                                        class="requrePage3 moreCheck" data-name="Mycbjb"  data-next="Mycbjb2"  data-count="6"
                                        v-model="dataList.Mycbjb"
                                        :options="[{ label: '艾滋病',value: '1'},{ label: '乙肝',value: '2'},{ label: ' 梅毒',value: '3'},{ label: '甲肝',value: '4'},{ label: '结核',value: '5'},{ label: '其他',value: '6',other:true,filed:dataList.Mycbjb2,name:'dataList.Mycbjb2'},{ label: '不知道',value: '7'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">19.您知道什么是体重指数和计算方法吗？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage3" data-name="Tzzsjsff"
                                        v-model="dataList.Tzzsjsff"
                                        :options="[{ label: '不知道体重指数，不了解计算方法',value: '1'},{ label: '知道体重指数，不了解计算方法',value: '2'},{ label: '知道，体重指数=体重（kg）/身高（m）',value: '3'},{ label: '知道，体重指数=体重（kg）/身高（m）2',value: '4'},{ label: '知道，体重指数=身高（m）/体重（kg）',value: '5'},{ label: '知道，体重指数=身高（m）/体重（kg）2',value: '6'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">20.您知道孕前标准体重的女性，整个孕期体重增长多少合适吗？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage3" data-name="Yqtzzz"
                                        v-model="dataList.Yqtzzz"
                                        :options="[{ label: '不知道',value: '1'},{ label: '10.5kg左右',value: '2'},{ label: '12.5kg左右',value: '3'},{ label: '14.5kg左右',value: '4'},{ label: '15kg及以上',value: '5'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">21.孕期血压正常值是不高于（    ）mmHg？ </p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage3" data-name="Yqxyzcz"
                                        v-model="dataList.Yqxyzcz"
                                        :options="[{ label: '不知道',value: '1'},{ label: '120/70',value: '2'},{ label: '130/80',value: '3'},{ label: '140/90',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                             <div class="form-list">
                                <p class="form-p1">22.您认为怀孕期间身体出现哪些现象就要上医院？（可多选）</p>
                                <div class="check-list">
                                     <super-checklist
                                        title=""
                                        class="requrePage3 moreCheck" data-name="Srcxnxxx"  data-next="Srcxnxxx2"  data-count="6"
                                        v-model="dataList.Srcxnxxx"
                                        :options="[{ label: '阴道出血',value: '1'},{ label: '腹痛',value: '2'},{ label: ' 头疼/头晕',value: '3'},{ label: '胎动异常',value: '4'},{ label: '下肢浮肿',value: '5'},{ label: '其他',value: '6',other:true,filed:dataList.Srcxnxxx2,name:'dataList.Srcxnxxx2'},{ label: '不知道',value: '7'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">23.您知道哪种维生素可以促进铁的吸收吗？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage3" data-name="Nzwsscjtxs"  data-count="5"  data-next="Nzwsscjtxs2"
                                        v-model="dataList.Nzwsscjtxs"
                                        :options="[{ label: '维生素A ',value: '1'},{ label: '维生素B',value: '2'},{ label: '维生素C',value: '3'},{ label: '维生素D',value: '4'},{ label: '其他',value: '5'}]">
                                    </super-radio>
                                    <mt-field v-if="dataList.Nzwsscjtxs=='5'" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Nzwsscjtxs2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">24.您知道孩子出生多长时间应该第一次给孩子吃母乳吗？ </p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage3" data-name="Dycghzcmr"
                                        v-model="dataList.Dycghzcmr"
                                        :options="[{ label: '不知道',value: '1'},{ label: '出生后立刻 ',value: '2'},{ label: '出生后1小时内',value: '3'},{ label: '出生后1小时以后24小时以内 ',value: '4'},{ label: '出生后1天以上 ',value: '5'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">25.您认为产后42天妈妈和孩子需要到医院接受母婴健康检查吗？ </p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage3" data-name="Myjkjc"
                                        v-model="dataList.Myjkjc"
                                        :options="[{ label: '需要',value: '1'},{ label: '不需要 ',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">26.您有没有做过婚前或孕前检查？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage3" data-name="Yqjc"
                                        v-model="dataList.Yqjc"
                                        :options="[{ label: '都没做过',value: '1'},{ label: '做过婚前检查 ',value: '2'},{ label: '做过孕前检查',value: '3'},{ label: '都做过',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">27.您第一次产前检查的孕周</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        :max="1"
                                        pickContent="yunCon"
                                        defaultValue="15"
                                        class="requrePage3 moreCheck" data-name="Dyccqjcyz" 
                                        v-model="dataList.Dyccqjcyz"
                                        :options="[{ label: '孕__周',value: '1',picker:true,filed:dataList.Dyccqjcyz2,name:'dataList.Dyccqjcyz2',placeholder:'请选择',icon:'周'},{ label: '记不清',value: '2'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">28.您何时建立母子健康手册？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage3" data-name="Hsjlmzjksc"
                                        v-model="dataList.Hsjlmzjksc"
                                        :options="[{ label: '未建立',value: '1'},{ label: '孕3月前 ',value: '2'},{ label: '孕4-7月',value: '3'},{ label: '孕7个月后',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">29.铁剂和叶酸的服用情况</p>
                                <p>29.1服用铁剂</p>
                                <p>开始服用孕周</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        :max="1"
                                        pickContent="yunCon"
                                        defaultValue="15"
                                        class="requrePage3 moreCheck" data-name="Ksfytjyz"
                                        v-model="dataList.Ksfytjyz"
                                        :options="[{ label: '孕前',value: '1'},{ label: '孕__周',value: '2',picker:true,filed:dataList.Ksfytjyz2,name:'dataList.Ksfytjyz2',placeholder:'请选择',icon:'周'},{ label: '未服用',value: '3'}]">
                                    </super-checklist>
                                </div>
                                <div class="form-inp" v-if="dataList.Ksfytjyz!='3'">
                                    <p style="margin:15px 0px">结束时间</p>
                                     <div class="check-list">
                                        <super-checklist
                                            title=""
                                            :max="1"
                                            pickContent="yunCon"
                                            defaultValue="15"
                                            class="requrePage3 moreCheck" data-name="Jsfytjyz"  data-count="2"  data-next="Jsfytjyz2"
                                            v-model="dataList.Jsfytjyz"
                                            :options="[{ label: '至今仍服用',value: '1'},{ label: '孕__周停止服用',value: '2',picker:true,filed:dataList.Jsfytjyz2,name:'dataList.Jsfytjyz2',placeholder:'请选择',icon:'周'},{ label: '记不清',value: '3'}]">
                                        </super-checklist>
                                    </div>
                                </div>
                                <div class="form-inp"  v-if="dataList.Ksfytjyz!='3'">
                                     <p style="margin:15px 0px">服用方法</p>
                                    <div class="check-list">
                                        <super-radio
                                            title=""
                                            :max="1"
                                            class="requrePage3" data-name="Ttjfyff"
                                            v-model="dataList.Ttjfyff"
                                            :options="[{ label: '每天服用',value: '1'},{ label: '间断服用',value: '2'},{ label: '记不清',value: '3'}]">
                                        </super-radio>
                                    </div>
                                </div>
                                <div class="form-inp"  v-if="dataList.Ksfytjyz!='3'">
                                    <p style="margin:15px 0px">每天服用量</p>
                                   <div class="check-list">
                                        <super-checklist
                                            title=""
                                            :max="1"
                                            class="requrePage3 moreCheck" data-name="Ttjfyl"  data-count="1"   data-next="Tjfyl2"
                                            v-model="dataList.Ttjfyl"
                                            :options="[{ label: '___mg',value: '1',other:true,filed:dataList.Tjfyl2,name:'dataList.Tjfyl2',placeholder:'请输入',icon:'mg'},{ label: '记不清',value: '2'}]">
                                        </super-checklist>
                                    </div>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">29.2服用叶酸</p>
                                <p>开始服用孕周</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        :max="1"
                                        pickContent="yunCon"
                                        defaultValue="15"
                                        class="requrePage3 moreCheck" data-name="Ksfyysyz"
                                        v-model="dataList.Ksfyysyz"
                                        :options="[{ label: '孕前',value: '1'},{ label: '孕__周',value: '2',picker:true,filed:dataList.Ksfyysyz2,name:'dataList.Ksfyysyz2',placeholder:'请选择',icon:'周'},{ label: '未服用',value: '3'}]">
                                    </super-checklist>
                                </div>
                                <div class="form-inp"  v-if="dataList.Ksfyysyz!='3'">
                                    <p style="margin:15px 0px">结束时间</p>
                                     <div class="check-list">
                                        <super-checklist
                                            title=""
                                            :max="1"
                                            pickContent="yunCon"
                                            defaultValue="15"
                                            class="requrePage3 moreCheck" data-name="Jsfyysyz"  data-count="2"   data-next="Jsfyysyz2"
                                            v-model="dataList.Jsfyysyz"
                                            :options="[{ label: '至今仍服用',value: '1'},{ label: '孕__周停止服用',value: '2',picker:true,filed:dataList.Jsfyysyz2,name:'dataList.Jsfyysyz2',placeholder:'请选择',icon:'周'},{ label: '记不清',value: '3'}]">
                                        </super-checklist>
                                    </div>
                                </div>
                                <div class="form-inp" v-if="dataList.Ksfyysyz!='3'">
                                     <p style="margin:15px 0px">服用方法</p>
                                    <div class="check-list">
                                        <super-radio
                                            title=""
                                            :max="1"
                                            class="requrePage3" data-name="Ysfyff"
                                            v-model="dataList.Ysfyff"
                                            :options="[{ label: '每天服用',value: '1'},{ label: '间断服用',value: '2'},{ label: '记不清',value: '3'}]">
                                        </super-radio>
                                    </div>
                                </div>
                                <div class="form-inp" v-if="dataList.Ksfyysyz!='3'">
                                    <p style="margin:15px 0px">每天服用量</p>
                                   <div class="check-list">
                                        <super-checklist
                                            title=""
                                            :max="1"
                                            class="requrePage3 moreCheck" data-name="Ysfyffl"  data-count="1"   data-next="Ysfyffl2"
                                            v-model="dataList.Ysfyffl"
                                            :options="[{ label: '___mg',value: '1',other:true,filed:dataList.Ysfyffl2,name:'dataList.Ysfyffl2',placeholder:'请输入',icon:'mg'},{ label: '记不清',value: '2'}]">
                                        </super-checklist>
                                    </div>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">30.您孕期计划的分娩方式是什么？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage3" data-name="Jhfmfs"
                                        v-model="dataList.Jhfmfs"
                                        :options="[{ label: '自然分娩',value: '1'},{ label: '剖宫产 ',value: '2'},{ label: '没想过',value: '3'},{ label: '不确定',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">31.产后您打算给孩子喂母乳吗？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage3" data-name="Dswymr"
                                        v-model="dataList.Dswymr"
                                        :options="[{ label: '喂',value: '1'},{ label: '不喂 ',value: '2'},{ label: '不知道/看情况',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">32.您是否有以下孕产期并发症/合并症？（可多选）</p>
                                <div class="check-list">
                                     <super-checklist
                                        @change="changeValue(dataList.Sfyycqbfz,'Sfyycqbfz','1')"
                                        title=""
                                        class="requrePage3 moreCheck" data-name="Sfyycqbfz"  data-count="7"  data-next="Sfyycqbfz3"
                                        v-model="dataList.Sfyycqbfz"
                                        :options="[{ label: '无',value: '1'},{ label: '妊娠期高血压',value: '2'},{ label: '妊娠期糖尿病',value: '3'},{ label: '妊娠期贫血',value: '4',other:true,filed:dataList.Sfyycqbfz2,name:'dataList.Sfyycqbfz2',placeholder:'最近一次血色素g/L',icon:'g/L'},{ label: '妊娠合并甲状腺疾病',value: '5'},{ label: '妊娠合并肝脏疾病',value: '6'},{ label: '其他',value: '7'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.Sfyycqbfz||[]).indexOf('7')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Sfyycqbfz3"></mt-field>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class= "pagination">
                        <div class="pag-box">
                            <button  class="btn" :disabled= "false" @click="changePage('3','2')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1">3</span>
                            <span>/</span>
                            <span>5</span>
                            </div>
                            <button  class="btn" @click="changePage('3','4','requrePage3')"   :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--page4-->
            <div class="page4" v-if="page4">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <h3>三、孕产期知识需求</h3>
                            <div class="form-list">
                                <p class="form-p1">33.请选出三种您最需要的孕产期保健知识（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        v-model="dataList.Xydycqbjzs"
                                        :max="3"
                                        class="requrePage4 moreCheck" data-name="Xydycqbjzs"
                                        :options="[{ label: '如何科学备孕',value: '1'},{ label: '孕产期生理知识',value: '2'},{ label: '孕期保健和自我监护',value: '3'},{ label: '孕妇营养和运动',value: '4'},{ label: '孕期心理',value: '5'},{ label: '孕期疾病防治',value: '6'},{ label: '分娩相关知识',value: '7'},{ label: '母乳喂养和乳房保健',value: '8'},{ label: '产褥期保健及产后康复',value: '9'},{ label: '其他',value: '10'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">34.请选出三种您最常采用的孕产期保健知识获取渠道（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        v-model="dataList.Ycqbjzshqqd"
                                        class="requrePage4 moreCheck" data-name="Ycqbjzshqqd"
                                        :max="3"
                                        :options="[{ label: '医护人员',value: '1'},{ label: '孕妇学校课堂',value: '2'},{ label: '家庭成员或朋友',value: '3'},{ label: '宣传手册、宣传单及折页',value: '4'},{ label: '书籍/报刊/杂志',value: '5'},{ label: '广播/电视',value: '6'},{ label: '母婴健康类APP',value: '7'},{ label: '其他网络：微信、百度等 ',value: '8'},{ label: '其他',value: '9'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">35.请选出您最喜欢的三种网络健康教育知识呈现形式（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        v-model="dataList.Zxhdzscxxs"
                                        pickContent="timaAge"
                                        defaultValue="15"
                                        class="requrePage4 moreCheck" data-name="Zxhdzscxxs" data-count="6"  data-next="Zxhdzscxxs4"
                                        :max="3"            
                                        :options="[{ label: '文字形式',value: '1'},{ label: '音频',value: '2',picker:true,filed:dataList.Zxhdzscxxs2,name:'dataList.Zxhdzscxxs2',placeholder:'请选择音频时长',icon:'分钟'},{ label: '视频',value: '3',picker:true,filed:dataList.Zxhdzscxxs3,name:'dataList.Zxhdzscxxs3',placeholder:'请选择视频时长',icon:'分钟'},{ label: '微信课堂',value: '4',picker:true,filed:dataList.Zxhdzscxxs5,name:'dataList.Zxhdzscxxs5',placeholder:'请选择时长',icon:'分钟'},{ label: '图片',value: '5'},{ label: '其他',value: '6'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.Zxhdzscxxs||[]).indexOf('6')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Zxhdzscxxs4"></mt-field>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class= "pagination">
                        <div class="pag-box">
                            <button  class="btn" :disabled= "false" @click="changePage('4','3')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1">4</span>
                            <span>/</span>
                            <span>5</span>
                            </div>
                            <button  class="btn" @click="changePage('4','5','requrePage4')"   :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--page5-->
            <div class="page5" v-if="page5">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <h3>四、对《母子健康APP》了解和需求</h3>
                            <div class="form-list">
                                <p class="form-p1">36.您是否下载使用《母子健康APP》?</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                         class="requrePage5 " data-name="SfxzsyAPP"
                                        v-model="dataList.SfxzsyAPP"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'}]">
                                    </super-radio>
                                 </div>
                            </div>
                            <div class="form-list" v-if="dataList.SfxzsyAPP!='1'">
                                <p class="form-p1">37.未下载使用的原因是</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        :max="1"
                                        class="requrePage5 moreCheck" data-name="Wxzyy" data-count="4"  data-next="Wxzyy2"
                                        v-model="dataList.Wxzyy"
                                        :options="[{ label: '不知道',value: '1'},{ label: '不感兴趣',value: '2'},{ label: '不需要',value: '3'},{ label: '其他',value: '4'}]">
                                    </super-checklist>
                                    <mt-field  v-if="(dataList.Wxzyy||[]).indexOf('4')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Wxzyy2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list" v-if="(dataList.Wxzyy.length==0) || dataList.SfxzsyAPP!='2'">
                                <p class="form-p1">38.您是否看过《母子健康APP》健康教育内容？</p>
                                <div class="check-list">
                                <super-checklist
                                    title=""
                                    :max="1"
                                    class="requrePage5 moreCheck" data-name="SfkgApp"
                                    v-model="dataList.SfkgApp"
                                    :options="[{ label: '看过',value: '1'},{ label: '未看过',value: '2'}]">
                                </super-checklist>
                                </div>
                            </div>
                            <div class="form-list"  v-if="(dataList.Wxzyy.length==0)  && dataList.SfkgApp!='1' ">
                                <p class="form-p1">39.您未看过的原因是</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        :max="1"
                                        class="requrePage5 moreCheck" data-name="Wkgyy" data-count="4"  data-next="Wkgyy2"
                                        v-model="dataList.Wkgyy"
                                        :options="[{ label: '不知道',value: '1'},{ label: '不感兴趣',value: '2'},{ label: '不需要',value: '3'},{ label: '其他',value: '4'}]">
                                    </super-checklist>
                                    <div class="mint-cell-value" v-if="(dataList.Wkgyy||[]).indexOf('4')>-1" style="margin:2px 5%;border:1px solid #e4e4e4;padding:5px;">
                                         <textarea style="width；100%;padding:0 10px;font-size:16px;" @blur="blurWkg"    placeholder="其他（请详述)" type="textarea" rows="3" v-model="dataList.Wkgyy2"></textarea>    
                                    </div>
                                </div>
                            </div>
                            <div class="form-list"  v-if="dataList.Wxzyy.length==0 && isJump">
                                <p class="form-p1">40.您能否在《母子健康APP》中得到您需要的知识？</p>
                                <div class="check-list">
                                <super-radio
                                    title=""
                                    class="requrePage5" data-name="NfzAppddsxzs"
                                    v-model="dataList.NfzAppddsxzs"
                                    :options="[{ label: '全部能找到',value: '1'},{ label: '大部分能得到',value: '2'},{ label: '只能得到一部分',value: '3'},{ label: '完全不能',value: '4'}]">
                                </super-radio>
                                </div>
                            </div>
                            <div class="form-list"  v-if="dataList.Wxzyy.length==0 &&  isJump">
                                <p class="form-p1">41.您对母子健康app健康教育内容是否满意?</p>
                                <div class="check-list">
                                <super-radio
                                    title=""
                                    class="requrePage5" data-name="Jjnrsfmy"
                                    v-model="dataList.Jjnrsfmy"
                                    :options="[{ label: '非常满意',value: '1'},{ label: '比较满意',value: '2'},{ label: '一般',value: '3'},{ label: '比较不满意',value: '4'},{ label: '非常不满意',value: '5'}]">
                                </super-radio>
                                </div>
                            </div>
                            <div class="form-list"  v-if="dataList.Wxzyy.length==0 && isJump">
                                <p class="form-p1">42.您对母子健康app健康教育呈现形式是否满意?</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage5" data-name="Cxxssfmy"
                                        v-model="dataList.Cxxssfmy"
                                        :options="[{ label: '非常满意',value: '1'},{ label: '比较满意',value: '2'},{ label: '一般',value: '3'},{ label: '比较不满意',value: '4'},{ label: '非常不满意',value: '5'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list"  v-if="dataList.Wxzyy.length==0 && isJump">
                                <p class="form-p1">43.您认为《母子健康APP》健康教育内容存在哪些问题？（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        v-model="dataList.Jjnrwt"
                                        class="requrePage5 moreCheck" data-name="Jjnrwt"  data-count="8"  data-next="Jjnrwt2"
                                        :options="[{ label: '没有问题',value: '1'},{ label: '查找不方便',value: '2'},{ label: '文字太多，不爱看',value: '3'},{ label: '内容太专业，看不懂  ',value: '4'},{ label: '内容不全面，想看的内容查不到',value: '5'},{ label: '形式单一，不够吸引人',value: '6'},{ label: '图片不合适',value: '7'},{ label: '其他',value: '8'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.Jjnrwt||[]).indexOf('8')>-1"  placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Jjnrwt2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list"  v-if="dataList.Wxzyy.length==0 && isJump">
                                <p class="form-p1">44.您认为针对《母子健康APP》健康教育内容应如何进一步完善？</p>
                                <div class="check-list">
                                    <mt-field ref="inputBoxs" class="requrePage5" data-name="Jjnrrhws" placeholder="应用APP的回答" type="textarea" rows="3" v-model="dataList.Jjnrrhws"></mt-field>
                                </div>
                            </div>
                            <div class="form-list" v-if="!dataList.Jjnrrhws">
                                <p class="form-p1 " >45.您希望《母子健康APP》的健康教育内容是什么？</p>
                                <div class="check-list">
                                    <mt-field  placeholder="未用APP的回答"  class="requrePage5 drageInp" data-name="Xwjjnr"  type="textarea" rows="3" v-model="dataList.Xwjjnr"></mt-field>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
                <div class="bottom">
                    <div class= "pagination">
                        <div class="pag-box">
                            <button  class="btn" :disabled= "false" @click="changePage('5','4')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1">5</span>
                            <span>/</span>
                            <span>5</span>
                            </div>
                            <button  class="btn" @click="submitForm('requrePage5')"   :class= "{ disabledBtn: !hasReady }"> 提交</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <message-toast :hideOn="hideOn" mtitle="知情同意书" type="3" :conts="articleArray" @Onchange="changeHiddenOn"></message-toast>    
    </div>
</template>
<script>
import headers from '@/components/header/header'
import {yunCon,headCon}  from '@/utils/slotContent'
import {nations} from '@/utils/nations'
import drageInput from '@/components/nomal/drageInput'
import drageInput1 from '@/components/nomal/drageInput1'
import superChecklist from '@/components/nomal/checklist'
import messageToast  from '@/components/nomal/messageToast'
import superRadio from '@/components/nomal/superRadio'
import {SaveQuestionair_Maternal} from '@/api/user.js'
import {dateFunction}  from '@/utils/dateFormat'
import {isCard} from '@/utils/vaildata'
export default {
    name:'hello',
    data(){
        return {
            dataList:{
                Xwjjnr:'',
                dMqcsrq:dateFunction('yyyy-MM-dd',new Date()),
                Wxzyy:[],
                Scjdts:'',
                Scjd:[],
                Dyccqjcyz:[],
                Ksfytjyz:[],
                Ksfyysyz:[],
                Zxhdzscxxs:[],
                Sfyycqbfz:[],
                Lxfs:'',
                Sfzh:''
            },
            model1:'',
            page1:true,
            page2:false,
            page3:false,
            page4:false,
            hideOn:false,
            page5:false,
        
            slotContent2: {  //名族
                columns: 1,
                default: [{text: '', value: ''}],
                pData1: nations
            },
            slotContentPX: {  
                columns: 1,
                default: [{text: '21', value: '21'}],
                pData1: headCon
            },
            articleArray:[
                {detail:'尊敬的孕妈妈：'},
                {detail:'您好！'},
                {detail:'诚邀您参加《母子健康APP推广应用效果评价研究》，本研究由中国疾病预防控制中心妇幼保健中心及本县医疗机构共同参与，目的是了解APP应用对孕产妇及儿童监护人在妇幼健康方面的知识、行为和妇幼健康服务的可及性、服务利用和服务质量产生的影响，从而为项目成果的远期推广和实施策略的制定提供重要的参考依据。'},
                {detail:'此项研究通过问卷向您询问您的基本情况、孕产期相关知识知晓情况、对母子健康APP的应用情况和建议，请您协助我们完成调查，问卷调查大约占用您10分钟左右的时间。调查过程中您可以随时提出想了解的问题，我们会尽力解答。调查结束后我们会赠送小礼品表示感谢。'},
                {detail:'您参加本项调查一次完成，匿名进行，所有您的个人的信息及问题答案将受到严格保密，仅供研究使用，不会向与研究无关的人提供任何信息。调查相关资料也将在研究结束后销毁。本研究以自愿为原则，您有权选择参加或不参加。调查过程中，您有权在任何时间、无需任何理由退出本调查，这将不会给您或您孩子的常规保健带来任何不良影响。'},
                {detail:'如果您有关于本研究的任何问题，可以随时向我们询问，我们将耐心为您解释。如果您同意参加本研究，请点击同意按钮进入问卷调查部分。'},
                {detail:'期待您的参与！'},
            ],
            checkObj:{},
            hasReady:true,
            isJump:true
        }
    },
    watch:{
        'dataList.Wkgyy'(val){
            if(val.length==0){
                this.isJump=true
                return false
            }
            if(val.indexOf('4')=='-1'){
                this.isJump=false
            }
        }
    },
    components:{
        headers,
        drageInput,
        superChecklist,
        messageToast,
        superRadio,
        drageInput1
    },
    methods:{
        blurWkg(val){
            if(this.dataList.Wkgyy.indexOf('4')>-1 &&  !this.dataList.Wkgyy2 || this.dataList.Wkgyy2==''){
                this.$toast({
                    message:`请输入其他`,
                    duration: 1000
                })
            }
            else{
                this.isJump=false
            }
        },
        changeHiddenOn(val){
            this.hideOn=false;
        },
        changeValue(val,name,item){   //特殊多选框，选了其他不允许继续选中
            if(val.length>0 && val.indexOf(item)>-1){
                let arr=[]
                arr.push(item)
                this.dataList[name]=arr
            }
        },
        changePage(before,next,pageName){  //点击上一页，下一页
            let isRequire=false
            let arrDom=document.querySelectorAll(`.${pageName}`);
            let innerHtmlArr=[];
            for(let i=0;i<arrDom.length;i++){
                if( (!this.dataList[arrDom[i].getAttribute('data-name')]  
                    || this.dataList[arrDom[i].getAttribute('data-name')].length==0)
                    || ((this.dataList[arrDom[i].getAttribute('data-name')]||'').indexOf(arrDom[i].getAttribute('data-count')|| 'M')>-1
                    && !this.dataList[arrDom[i].getAttribute('data-next')]))
                    {
                    if(!arrDom[i].querySelector('.drageInp')){
                        innerHtmlArr.push(arrDom[i].parentNode.parentNode.childNodes[0].innerText);
                    }
                    else{
                        innerHtmlArr.push(arrDom[i].querySelector('.mint-cell-text').innerText);
                    }
                    isRequire=true
                }
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
        },
        submitForm(pageName){
            if(!this.hasReady) return false
            let isRequire=false
            let arrDom=document.querySelectorAll(`.${pageName}`)
            let innerHtmlArr=[];
            for(let i=0;i<arrDom.length;i++){
                if( (!this.dataList[arrDom[i].getAttribute('data-name')]  
                    || this.dataList[arrDom[i].getAttribute('data-name')].length==0)
                    || ((this.dataList[arrDom[i].getAttribute('data-name')]||'').indexOf(arrDom[i].getAttribute('data-count')|| 'M')>-1
                    && !this.dataList[arrDom[i].getAttribute('data-next')]))
                    {
                    if(!arrDom[i].querySelector('.drageInp')){
                        innerHtmlArr.push(arrDom[i].parentNode.parentNode.childNodes[0].innerText);
                    }
                    else{
                        innerHtmlArr.push(arrDom[i].querySelector('.mint-cell-text').innerText);
                    }
                    isRequire=true
                }
            }
             if(isRequire){
                this.$toast({
                    message:`请填写${innerHtmlArr[0]}`,
                     duration: 2000
                })
                return false;
            }
            this.$messagebox.confirm('问卷提交后无法修改是否继续提交？').then(action => {
                let checkDom=document.querySelectorAll('.moreCheck')
                for(let i=0;i<checkDom.length;i++){
                    this.checkObj[checkDom[i].getAttribute('data-name')]=(this.dataList[checkDom[i].getAttribute('data-name')] ||[""]).join(",")
                }
                this.$indicator.open();
                SaveQuestionair_Maternal({...this.dataList,...this.checkObj}).then(res=>{
                    localStorage.setItem('zdPredent',JSON.stringify(this.dataList))
                    this.hasReady=false
                    this.$toast({
                        message:'提交成功，稍后请自行退出'
                    })
                    this.$indicator.close();
                    WeixinJSBridge.call('closeWindow');
                }).catch(err=>{
                    console.log(err)
                    this.$indicator.close();
                })
            }).catch(error=>{
                console.log(error)
            })
        },
    },
    created(){

    },
    mounted(){
       if(localStorage.getItem('zdPredent')){  //数据缓存
            this.dataList=JSON.parse(localStorage.getItem('zdPredent'))
            this.hasReady=false
            this.$messagebox.alert('您已经提交过问卷了，请勿重复提交')
            return false
        }
        this.hideOn=true;
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