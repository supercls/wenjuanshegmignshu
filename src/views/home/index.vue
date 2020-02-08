<template>
    <div class="zf-wrapper">
        <div class="qs-content mint-tab-container">
            <button @click="subMot">提交</button>
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
                            <p class="form-p1">您所在的社区<span class="isRed data1">*</span></p>
                            <drage-input v-model="dataList.data1" :keyValue.sync="dataList.data1" :modelValue.sync="dataList.b"
                                        @changeInput="changeInput(dataList.data1,'data1')"
                                        typeItem="pickTwo"  placeholder="请选择所在社区"
                                        :disabled="true"  label="" class="requrePage1" data-name="data1">
                            </drage-input>
                            <div class="form-list">
                                <p class="form-p1">邀请您参与的医生(询问医生并选择)<span class="isRed Ysxm">*</span></p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage1" data-name="Ysxm"
                                        @changeInput="changeInput(dataList.Ysxm,'Ysxm')"
                                        v-model="dataList.Ysxm"
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
                            <span>15</span>
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
                            <span>15</span>
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
                               <p class="form-p1">5. 您当前的就业情况:<span class="isRed Jyqk">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage3"
                                        @changeInput="changeInput(dataList.Jyqk,'Jyqk')"
                                        title=""  data-name="Jyqk"
                                        v-model="dataList.Jyqk"
                                        :options="[{ label: '家庭主妇',value: '1'},{ label: '兼职工作',value: '2'},{ label: '全职工作',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.Jyqk!='1'">
                               <p class="form-p1">6. 你的工作单位性质<span class="isRed Gzdwxz">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage3"
                                        @changeInput="changeInput(dataList.Gzdwxz,'Gzdwxz')"
                                        title=""  data-name="Gzdwxz"
                                        v-model="dataList.Gzdwxz"
                                        :options="[{ label: '国家公务人员（公务员或事业单位）',value: '1'},{ label: '国企',value: '2'},{ label: '外企',value: '3'},{ label: '私营企业',value: '4'},{ label: '个体经营',value: '5'},{ label: '其他',value: '6'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">7.您的民族<span class="isRed Mz">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage3"
                                        @changeInput="changeInput(dataList.Mz,'Mz')"
                                        title=""  data-name="Mz"
                                        v-model="dataList.Mz"
                                        :options="[{ label: '汉族',value: '1'},{ label: '其他',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">8. 您的户口所在地：<span class="isRed Hkszd">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage3"
                                        @changeInput="changeInput(dataList.Jtnsr,'Hkszd')"
                                        title=""  data-name="Hkszd"
                                        v-model="dataList.Hkszd"
                                        :options="[{ label: '上海',value: '1'},{ label: '其他',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list"  style="margin-top:10px;">
                                <p class="form-p1">9. 您已在沪居住的年限（按合计月数填写）<span class="isRed WZhjznx">*</span></p>
                                <div class="check-list" style="padding:0">
                                    <drage-input class="requrePage3" 
                                        data-name="WZhjznx"  
                                        v-model="dataList.WZhjznx"  
                                        :keyValue.sync="dataList.WZhjznx"
                                        @changeInput="changeInput(dataList.WZhjznx,'WZhjznx')"
                                        placeholder="请选择合计年月"
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
                               <p class="form-p1">10. 您的户口类型<span class="isRed Hklx">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage3"
                                        @changeInput="changeInput(dataList.Hklx,'Hklx')"
                                        title=""  data-name="Hklx"
                                        v-model="dataList.Hklx"
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
                            <span>15</span>
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
                               <p class="form-p1">11. 您现在是否与老人一起住<span class="isRed Sfylryqz">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage4"
                                        @changeInput="changeInput(dataList.Sfylryqz,'Sfylryqz')"
                                        title=""  data-name="Sfylryqz"
                                        v-model="dataList.Sfylryqz"
                                        :options="[{ label: '是的，长期一起住(>6 个月/年)',value: '1'},{ label: '是的，偶尔/短期一起住(≤6 个月/年)',value: '2'},{ label: '不，从来不一起住',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.Sfylryqz!='3'">
                               <p class="form-p1">12. 您现在与哪些老人一起住（多选）<span class="isRed Ynxlryqz">*</span></p>
                               <div class="check-list"  >
                                    <super-checklist
                                        title=""
                                        class="requrePage4 moreCheck" 
                                        @changeInput="changeInput(dataList.Ynxlryqz,'Ynxlryqz')"
                                        data-name="Ynxlryqz"
                                        v-model="dataList.Ynxlryqz"
                                        :options="[{ label: '自己母亲',value: '1'},{ label: '自己父亲',value: '2'},{ label: '婆婆 ',value: '3'},{ label: '公公 ',value: '4'},{ label: '其他人 ',value: '5'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <h3>B. 您最近一次的分娩信息<span style="color:#999999;font-size:16px;">(现在，我想问一下您最近一次的分娩情况)</span></h3>
                            <div class="form-list">
                               <p class="form-p1">13. 您一共有几个孩子<span class="isRed Ygyjghz">*</span></p>
                               <div class="check-list"  style="padding:0" >
                                    <drage-input 
                                        v-model="dataList.Ygyjghz" 
                                        :keyValue.sync="dataList.Ygyjghz"
                                        @changeInput="changeInput(dataList.Ygyjghz,'Ygyjghz')"
                                        :iocnRight="true"  unit="个"
                                        class="requrePage4" data-name="Ygyjghz"
                                        :slotContent="slotContent2" 
                                        placeholder="请选择您孩子的数量"
                                        typeItem="pickeMore" 
                                        :disabled="true"
                                        label="" >
                                    </drage-input>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">14. 此次分娩时间<span class="isRed Ccfmsj">*</span></p>
                               <div class="check-list" style="padding:0">
                                    <drage-input class="requrePage4" 
                                        data-name="Ccfmsj"  
                                        v-model="dataList.Ccfmsj"  
                                        :keyValue.sync="dataList.Ccfmsj"
                                        @changeInput="changeInput(dataList.Ccfmsj,'Ccfmsj')"
                                        placeholder="请选择最近一次分娩时间"
                                        typeItem="date"
                                        :disabled="true"  
                                        :iconRight="true" 
                                        label="" >
                                    </drage-input>
                                </div>
                            </div>
                            <div class="form-list"  style="margin-top:10px;">
                                <p class="form-p1">15. 您分娩时候的孕周<span class="isRed Fmshdyz">*</span></p>
                                <div class="check-list" style="padding:0">
                                    <drage-input class="requrePage4" 
                                        data-name="Fmshdyz"  
                                        v-model="dataList.Fmshdyz"  
                                        :keyValue.sync="dataList.Fmshdyz"
                                        @changeInput="changeInput(dataList.Fmshdyz,'Fmshdyz')"
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
                               <p class="form-p1">16. 您最小孩子的月龄<span class="isRed Zxhzdyl">*</span></p>
                               <div class="check-list" style="padding:0">
                                    <drage-input class="requrePage4" 
                                        data-name="Zxhzdyl"  
                                        v-model="dataList.Zxhzdyl"  
                                        :keyValue.sync="dataList.Zxhzdyl"
                                        @changeInput="changeInput(dataList.Zxhzdyl,'Zxhzdyl')"
                                        placeholder="请选择出生日期"
                                        typeItem="date"
                                        :disabled="true"  
                                        :iconRight="true" 
                                        label="" >
                                    </drage-input>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">17. 孩子的性别<span class="isRed Hzxb">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage4"
                                        @changeInput="changeInput(dataList.Hzxb,'Hzxb')"
                                        title=""  data-name="Hzxb"
                                        v-model="dataList.Hzxb"
                                        :options="[{ label: '男孩',value: '1'},{ label: '女孩',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">18. 您的分娩方式<span class="isRed Fmfs">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage4"
                                        @changeInput="changeInput(dataList.Fmfs,'Fmfs')"
                                        title=""  data-name="Fmfs"
                                        v-model="dataList.Fmfs"
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
                            <span>15</span>
                            </div>
                            <button  class="btn" @click="changePage('4','5','requrePage4')" :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--page5-->
            <div class="pag5" v-if="page5">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <div class="form-list">
                               <p class="form-p1">19. 孩子的出生体重<span class="isRed Hzcstz">*</span></p>
                               <div class="check-list" style="padding:0">
                                    <drage-input 
                                        v-model="dataList.Hzcstz" 
                                        class="requrePage5" 
                                        data-name="Hzcstz"
                                        @changeInput="changeInput(dataList.Hzcstz,'Hzcstz')"
                                        isNum="4"
                                        placeholder="请输入您孩子的出生体重"
                                        :keyValue.sync="dataList.Hzcstz"  
                                        type="number"
                                        maxlength="6"
                                        unit="g"  
                                        label="" >
                                    </drage-input>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">孩子的出生身长(cm)<span class="isRed Hzcssc">*</span></p>
                               <div class="check-list"  style="padding:0" >
                                    <drage-input 
                                        v-model="dataList.Hzcssc" 
                                        :keyValue.sync="dataList.Hzcssc"
                                        @changeInput="changeInput(dataList.Hzcssc,'Hzcssc')"
                                        :iocnRight="true"  unit="cm"
                                        class="requrePage5" 
                                        data-name="Hzcssc"
                                        :slotContent="slotContent4" 
                                        placeholder="请选择您孩子的出生身长"
                                        typeItem="pickeMore" 
                                        :disabled="true"
                                        label="" >
                                    </drage-input>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">20. 此次分娩住院时长为(天）<span class="isRed Fmzysc">*</span></p>
                               <div class="check-list"  style="padding:0" >
                                    <drage-input 
                                        v-model="dataList.Fmzysc" 
                                        :keyValue.sync="dataList.Fmzysc"
                                        @changeInput="changeInput(dataList.Fmzysc,'Fmzysc')"
                                        :iocnRight="true"  unit="天"
                                        class="requrePage5" 
                                        data-name="Fmzysc"
                                        :slotContent="slotContent5" 
                                        placeholder="请选择此次分娩住院时长"
                                        typeItem="pickeMore" 
                                        :disabled="true"
                                        label="" >
                                    </drage-input>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">21. 您是否计划产后返回工作岗位/学校学习?<span class="isRed Sfjhchgz">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage5"
                                        pickContent="clot6"
                                        defaultValue="3"
                                        @changeInput="changeInput(dataList.Sfjhchgz,'Sfjhchgz')"
                                        title=""  
                                        data-name="Sfjhchgz"
                                        data-count="2"
                                        data-other="Sfjhchgz2"
                                        v-model="dataList.Sfjhchgz"
                                        :options="[{ label: '是的，而且已经恢复工作',value: '1'},{ label: '是的，计划产后______ 个月返回工作岗位/学校学习',value: '2',
                                        picker:true,filed:dataList.Sfjhchgz2,name:'dataList.Sfjhchgz2',placeholder:'请选择',icon:'个月'},
                                        { label: '否',value: '3'},{ label: '不确定',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                           
                            <div class="form-list" v-if="dataList.Sfjhchgz!='3' && dataList.Sfjhchgz!='4'"> 
                               <p class="form-p1">22. 你的带薪产假时间是（包括周末以及节假日）<span class="isRed Dxcjsj">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage5"
                                        @changeInput="changeInput(dataList.Dxcjsj,'Dxcjsj')"
                                        title=""  data-name="Dxcjsj"
                                        v-model="dataList.Dxcjsj"
                                        :options="[{ label: '低于 98 天',value: '1'},{ label: '98 天以上',value: '2'},{ label: '120以上',value: '3'},{ label: '180 天以上',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.Sfjhchgz!='3' && dataList.Sfjhchgz!='4'">
                               <p class="form-p1">23. 您的单位会安排不少于 1 小时的哺乳时间吗（相关劳动保护规定）？<span class="isRed Dwhapprsjm">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage5"
                                        @changeInput="changeInput(dataList.Dwhapprsjm,'Dwhapprsjm')"
                                        title=""  data-name="Dwhapprsjm"
                                        v-model="dataList.Dwhapprsjm"
                                        :options="[{ label: '会',value: '1'},{ label: '不会',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.Sfjhchgz!='3' && dataList.Sfjhchgz!='4'">
                               <p class="form-p1">24. 您单位有母乳喂养室吗？<span class="isRed Dwymrwysm">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage5"
                                        @changeInput="changeInput(dataList.Dwymrwysm,'Dwymrwysm')"
                                        title=""  data-name="Dwymrwysm"
                                        v-model="dataList.Dwymrwysm"
                                        :options="[{ label: '有',value: '1'},{ label: '没有',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <h3>C.既往母乳喂养经验 / 经历（在最小的孩子之前）<span style="color:#999999;font-size:16px;">( 接下来，我想了解一下您在生最小的宝宝之前的母乳喂养方面的经验 / 经历 )</span></h3>
                            <div class="form-list">
                               <p class="form-p1">25. 您之前用母乳喂养过孩子吗？(指您最小的宝宝之前的孩子)<span class="isRed Zqymrwyghzm">*</span></p>
                               <div class="check-list">
                                    <super-radio
                                        class="requrePage5"
                                        @changeInput="changeInput(dataList.Zqymrwyghzm,'Zqymrwyghzm')"
                                        title=""  data-name="Zqymrwyghzm"
                                        v-model="dataList.Zqymrwyghzm"
                                        :options="[{ label: '有',value: '1'},{ label: '没有',value: '2'}]">
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
                            <button  class="btn" :disabled= "false"  @click="changePage('5','4')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1"> 5 </span>
                            <span>/</span>
                            <span>15</span>
                            </div>
                            <button  class="btn" @click="changePage('5','6','requrePage5')" :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
             <!--page6-->
            <div class="pag6" v-if="page6">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <div class="form-list">
                               <p class="form-p1">26. 您的家人（妈妈、婆婆、姐妹等）之前有母乳喂养经历/经验吗？<span class="isRed MywyjyN">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage6"
                                        @changeInput="changeInput(dataList.MywyjyN,'MywyjyN')"
                                        title=""  data-name="MywyjyN"
                                        v-model="dataList.MywyjyN"
                                        :options="[{ label: '没有',value: '1'},{ label: '有',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.MywyjyN == '2'">
                               <p class="form-p1">总体而言，她/她们的母乳喂养经历/经验是积极的还是消极的？<span class="isRed MywyjyY">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage6"
                                        @changeInput="changeInput(dataList.MywyjyY,'MywyjyY')"
                                        title=""  data-name="MywyjyY"
                                        v-model="dataList.MywyjyY"
                                        :options="[{ label: '积极的',value: '1'},{ label: '消极的',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">27. 您的朋友/同事之前有母乳喂养经历/经验吗？<span class="isRed PyymrwyjyN">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage6"
                                        @changeInput="changeInput(dataList.PyymrwyjyN,'PyymrwyjyN')"
                                        title=""  data-name="PyymrwyjyN"
                                        v-model="dataList.PyymrwyjyN"
                                        :options="[{ label: '没有',value: '1'},{ label: '有',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.PyymrwyjyN == '2'">
                               <p class="form-p1">总体而言，她/她们的母乳喂养经历/经验是积极的还是消极的？<span class="isRed PyymrwyjyY">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage6"
                                        @changeInput="changeInput(dataList.PyymrwyjyY,'PyymrwyjyY')"
                                        title=""  data-name="PyymrwyjyY"
                                        v-model="dataList.PyymrwyjyY"
                                        :options="[{ label: '积极的',value: '1'},{ label: '消极的',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>        

                            <div class="form-list">
                               <p class="form-p1">28. 此次怀孕期间，您有参加任何有关母乳喂养的课程吗?<span class="isRed Ycjmrwykcm">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage6"
                                        @changeInput="changeInput(dataList.Ycjmrwykcm,'Ycjmrwykcm')"
                                        title=""  data-name="Ycjmrwykcm"
                                        v-model="dataList.Ycjmrwykcm"
                                        :options="[{ label: '参加过',value: '1'},{ label: '没参加过',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.Ycjmrwykcm!='2'">
                               <p class="form-p1">29. 此次怀孕期间，您参加的母乳喂养相关课程来自（多选题）<span class="isRed Cjmrwykclz">*</span></p>
                               <div class="check-list"  >
                                    <super-checklist
                                        title=""
                                        class="requrePage6" data-name="Cjmrwykclz"
                                        @changeInput="changeInput(dataList.Cjmrwykclz,'Cjmrwykclz')"
                                        v-model="dataList.Cjmrwykclz"
                                        :options="[{ label: '产检医院',value: '1'},{ label: '社区卫生中心',value: '2'},{ label: '妇幼保健机构 ',value: '3'},{ label: '线下母婴服务机构（如月子会所等提供育婴服务、销售母婴产品的机构） ',value: '4'},{ label: '线上的母婴服务（例如手机 APP 和网课） ',value: '5'}
                                        ,{ label: '奶粉公司及其工作人员',value: '6'},{ label: '商场活动',value: '7'},{ label: '其他',value: '8'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">30. 在备孕期间，您有得到过购买奶粉的优惠的信息吗？<span class="isRed Ddggmnfdyhxxm">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage6"
                                        @changeInput="changeInput(dataList.Ddggmnfdyhxxm,'Ddggmnfdyhxxm')"
                                        title=""  data-name="Ddggmnfdyhxxm"
                                        v-model="dataList.Ddggmnfdyhxxm"
                                        :options="[{ label: '有',value: 'a'},{ label: '没有',value: 'b'}]">
                                    </super-radio>
                                </div>
                            </div>
                             <div class="form-list" v-if="dataList.Ddggmnfdyhxxm =='b'">
                               <p class="form-p1">您获得过购买奶粉的优惠方式的途径包括（多选题）<span class="isRed DdggmnfdyhxxmY">*</span></p>
                               <div class="check-list"  >
                                    <super-checklist
                                        title=""
                                        @changeInput="changeInput(dataList.DdggmnfdyhxxmY,'DdggmnfdyhxxmY')"
                                        class="requrePage6 moreCheck" data-name="DdggmnfdyhxxmY"
                                        v-model="dataList.DdggmnfdyhxxmY"
                                        :options="[{ label: '超市或母婴店的奶粉促销活动',value: '1'},{ label: '购物网站/微店/APP、公共场所、大众媒体等发布的奶粉促销活动',value: '2'},{ label: '亲戚朋友的介绍 ',value: '3'},{ label: '医院工作人员的推荐 ',value: '4'},{ label: '其他',value: '5'}
                                        ]">
                                    </super-checklist>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <!--bottom-->
                <div class="bottom">
                    <div class= "pagination"> 
                        <div class="pag-box">
                            <button  class="btn" :disabled= "false"  @click="changePage('6','5')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1"> 6 </span>
                            <span>/</span>
                            <span>15</span>
                            </div>
                            <button  class="btn" @click="changePage('6','7','requrePage6')" :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
             <!--page7-->
             <div class="pag7" v-if="page7">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <div class="form-list">
                               <p class="form-p1">31. 在备孕期间，有人告诉过您“母乳喂养有困难时找谁咨询或解决困难”吗？<span class="isRed Mrwyknzx">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage7"
                                        @changeInput="changeInput(dataList.Mrwyknzx,'Mrwyknzx')"
                                        title=""  data-name="Mrwyknzx"
                                        v-model="dataList.Mrwyknzx"
                                        :options="[{ label: '有',value: 'a'},{ label: '没有',value: 'b'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.Mrwyknzx =='a'">
                               <p class="form-p1">她/他告诉您咨询或解决困难的途径包括（多选题）<span class="isRed MrwyknzxY">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        title=""
                                        @changeInput="changeInput(dataList.MrwyknzxY,'MrwyknzxY')"
                                        class="requrePage6 moreCheck" data-name="MrwyknzxY"
                                        v-model="dataList.MrwyknzxY"
                                        :options="[{ label: '找亲友、家里老人',value: '1'},{ label: '找周围有最近育儿经验的人',value: '2'},{ label: '找催乳师、通乳师或者月嫂 ',value: '3'},{ label: '找医护人员 ',value: '4'},{ label: '找其他人',value: '5'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">32. 在怀孕期间，您从哪些途径获得过购买奶粉的优惠方式？（多选题）<span class="isRed Nxtjhdgnfyh">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        title=""
                                        @changeInput="changeInput(dataList.Nxtjhdgnfyh,'Nxtjhdgnfyh')"
                                        class="requrePage6 moreCheck" data-name="Nxtjhdgnfyh"
                                        v-model="dataList.Nxtjhdgnfyh"
                                        :options="[{ label: '超市或母婴店的奶粉促销活动',value: '1'},{ label: '购物网站、公共场所、大众媒体等发布的奶粉促销活动',value: '2'},{ label: '亲戚朋友的介绍',value: '3'},{ label: '医院工作人员的推荐 ',value: '4'},{ label: '其他',value: '5'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">33. 在怀孕期间，有人告诉过您“母乳喂养有困难时找谁咨询或解决困难”吗？<span class="isRed Yrgsnmrwyknzx">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage6"
                                        @changeInput="changeInput(dataList.Yrgsnmrwyknzx,'Yrgsnmrwyknzx')"
                                        title=""  data-name="Yrgsnmrwyknzx"
                                        v-model="dataList.Yrgsnmrwyknzx"
                                        :options="[{ label: '有',value: 'a'},{ label: '没有',value: 'b'}]">
                                    </super-radio>
                                </div>
                            </div>        

                            <div class="form-list" v-if="dataList.Yrgsnmrwyknzx =='a'">
                               <p class="form-p1">她/他告诉您咨询或解决困难的途径包括（多选题）<span class="isRed YrgsnmrwyknzxY">*</span></p>
                               <div class="check-list"  >
                                    <super-checklist
                                        title=""
                                        @changeInput="changeInput(dataList.YrgsnmrwyknzxY,'YrgsnmrwyknzxY')"
                                        class="requrePage6 moreCheck" data-name="YrgsnmrwyknzxY"
                                        v-model="dataList.YrgsnmrwyknzxY"
                                        :options="[{ label: '找亲友、家里老人',value: '1'},{ label: '找周围有最近育儿经验的人',value: '2'},{ label: '找催乳师、通乳师或者月嫂 ',value: '3'},{ label: '找医护人员 ',value: '4'},{ label: '找其他人 ',value: '5'}]">
                                    </super-checklist>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--bottom-->
                <div class="bottom">
                    <div class= "pagination"> 
                        <div class="pag-box">
                            <button  class="btn" :disabled= "false"  @click="changePage('7','6')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1"> 7 </span>
                            <span>/</span>
                            <span>15</span>
                            </div>
                            <button  class="btn" @click="changePage('7','8','requrePage6')" :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
             <!--page8-->
              <div class="pag8" v-if="page8">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <div class="form-list">
                               <p class="form-p1">34. 据您所知，配方奶粉对孩子的好处与母乳一样吗？<span class="isRed Pfnfymryym">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage8"
                                        @changeInput="changeInput(dataList.Pfnfymryym,'Pfnfymryym')"
                                        title=""  data-name="Pfnfymryym"
                                        v-model="dataList.Pfnfymryym"
                                        :options="[{ label: '不一样',value: '1'},{ label: '配方奶粉和母乳对孩子的好处差不多',value: '2'},{ label: '不清楚',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">35. 对于“母乳喂养可以有益于孩子的智力发展”这句话，您的观点是？<span class="isRed Mrwykyyz">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage8"
                                        @changeInput="changeInput(dataList.Mrwykyyz,'Mrwykyyz')"
                                        title=""  data-name="Mrwykyyz"
                                        v-model="dataList.Mrwykyyz"
                                        :options="[{ label: '母乳喂养有利于儿童智力发育',value: '1'},{ label: '母乳喂养可能有利于智力发育',value: '2'},{ label: '母乳喂养和良好的养育环境一起促进儿童智力发育',value: '3'},{ label: '母乳喂养与智力发育没有必然联系',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">36. 您是否听说过“母乳喂养的孩子长大后肥胖以及糖尿病风险低”？<span class="isRed Mrwyhzzdhfp">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage8"
                                        @changeInput="changeInput(dataList.Mrwyhzzdhfp,'Mrwyhzzdhfp')"
                                        title=""  data-name="Mrwyhzzdhfp"
                                        v-model="dataList.Mrwyhzzdhfp"
                                        :options="[{ label: '没有听说过',value: '1'},{ label: '听说过，但是证据不够充分，需要进一步验证',value: '2'},{ label: '听说过，母乳喂养预防成人期慢性病，降低肥胖和 2 型糖尿病风险',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">37. 当广告上宣传：“某种奶粉能让孩子睡眠良好，减少夜间哭啼”，您会去尝试吗？<span class="isRed Ggxcnf">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage8"
                                        @changeInput="changeInput(dataList.Ggxcnf,'Ggxcnf')"
                                        title=""  data-name="Ggxcnf"
                                        v-model="dataList.Ggxcnf"
                                        :options="[{ label: '会尝试',value: '1'},{ label: '了解更多信息之后，再决定',value: '2'},{ label: '不相信，不会尝试',value: '3'},{ label: '说不好',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">38. 当朋友说：“某种奶粉能让孩子睡眠良好，减少夜间哭啼”，您会去尝试吗？<span class="isRed Pysnfnrhzsmh">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage8"
                                        @changeInput="changeInput(dataList.Pysnfnrhzsmh,'Pysnfnrhzsmh')"
                                        title=""  data-name="Pysnfnrhzsmh"
                                        v-model="dataList.Pysnfnrhzsmh"
                                        :options="[{ label: '会尝试',value: '1'},{ label: '了解更多信息之后，再决定',value: '2'},{ label: '不相信，不会尝试',value: '3'},{ label: '说不好',value: '4'}]">
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
                            <button  class="btn" :disabled= "false"  @click="changePage('8','7')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1"> 8 </span>
                            <span>/</span>
                            <span>15</span>
                            </div>
                            <button  class="btn" @click="changePage('8','9','requrePage8')" :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
             <!--page9-->
             <div class="pag9" v-if="page9">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <div class="form-list">
                               <p class="form-p1">39. 孩子出生后，您从哪些途径获得过购买奶粉的优惠方式？（多选题）<span class="isRed Hzcshnfyhtj">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        title=""
                                        @changeInput="changeInput(dataList.Hzcshnfyhtj,'Hzcshnfyhtj')"
                                        class="requrePage9 moreCheck" data-name="Hzcshnfyhtj"
                                        v-model="dataList.Hzcshnfyhtj"
                                        :options="[{ label: '超市或母婴店的奶粉促销活动',value: '1'},{ label: '购物网站、公共场所、大众媒体等发布的奶粉促销活动',value: '2'},{ label: '亲戚朋友的介绍 ',value: '3'},{ label: '医院工作人员的推荐 ',value: '4'},{ label: '其他',value: '5'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">40. 孩子出生后，有人告诉过您“母乳喂养有困难时找谁咨询或解决困难”吗？<span class="isRed Hzcshmrwyzx">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage9"
                                        @changeInput="changeInput(dataList.Hzcshmrwyzx,'Hzcshmrwyzx')"
                                        title=""  data-name="Hzcshmrwyzx"
                                        v-model="dataList.Hzcshmrwyzx"
                                        :options="[{ label: '有',value: 'a'},{ label: '没有',value: 'b'}]">
                                    </super-radio>
                                </div>
                            </div>     
                            <div class="form-list" v-if="dataList.Hzcshmrwyzx == 'a'">
                               <p class="form-p1">她/他告诉您咨询或解决困难的途径包括（多选题）<span class="isRed HzcshmrwyzxY">*</span></p>
                               <div class="check-list"  >
                                    <super-checklist
                                        title=""
                                        class="requrePage9" data-name="HzcshmrwyzxY"
                                        @changeInput="changeInput(dataList.HzcshmrwyzxY,'HzcshmrwyzxY')"
                                        v-model="dataList.HzcshmrwyzxY"
                                        :options="[{ label: '找亲友、家里老人',value: '1'},{ label: '找周围有最近育儿经验的人',value: '2'},{ label: '找催乳师、通乳师或者月嫂 ',value: '3'},{ label: '找医护人员 ',value: '4'},{ label: '找其他人 ',value: '5'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <h3>D. 最小孩子的喂养打算<span style="color:#999999;font-size:16px;">(这里，我想了解一下您当时打算如何喂养您最小的孩子的)</span></h3>
                            <div class="form-list">
                               <p class="form-p1">41. 您什么时候决定了孩子的喂养方式？<span class="isRed Smshjdwyfs">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage9"
                                        @changeInput="changeInput(dataList.Smshjdwyfs,'Smshjdwyfs')"
                                        title=""  data-name="Smshjdwyfs"
                                        v-model="dataList.Smshjdwyfs"
                                        :options="[{ label: '怀孕前',value: '1'},{ label: '怀孕早期（怀孕 14 周前）',value: '2'},{ label: '怀孕中期（怀孕 14 周到 28 周前）',value: '3'},{ label: '怀孕晚期（怀孕 28 周后）',value: '4'},{ label: '分娩后',value: '5'},{ label: '不记得了',value: '6'}]">
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
                            <button  class="btn" :disabled= "false"  @click="changePage('9','8')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1"> 9 </span>
                            <span>/</span>
                            <span>15</span>
                            </div>
                            <button  class="btn" @click="changePage('9','10','requrePage9')" :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--page10-->
            <div class="pag10" v-if="page10">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <div class="form-list">
                               <p class="form-p1">42. 当时您决定如何喂养您的孩子？<span class="isRed Jdrhwyhz">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        title=""
                                        @changeInput="changeInput(dataList.Jdrhwyhz,'Jdrhwyhz')"
                                        class="requrePage10" data-name="Jdrhwyhz"
                                        v-model="dataList.Jdrhwyhz"
                                        :options="[{ label: '纯母乳喂养（即不喂给婴儿除母乳之外的任何食物或饮料，甚至不不喂水）',value: 'a'},{ label: '混合喂养（母乳和配方奶一起喂）',value: 'b'},{ label: '人工喂养（只喂配方奶） ',value: 'c'},{ label: '没考虑过',value: 'd'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.Jdrhwyhz !='d' && dataList.Jdrhwyhz =='a'">
                               <p class="form-p1">为什么 选择纯乳母喂养 ？（多选题）<span class="isRed Cmrwy">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        class="requrePage10 moreCheck"
                                        @changeInput="changeInput(dataList.Cmrwy,'Cmrwy')"
                                        title=""  data-name="Cmrwy"
                                        v-model="dataList.Cmrwy"
                                        :options="[{ label: '纯母乳喂养更卫生、方便和经济',value: '1'},{ label: '接受过课程和信息了解纯母乳喂养是对孩子最好的',value: '2'},{ label: '觉得纯母乳喂养更能增进母子感情',value: '3'},{ label: '觉得配方奶不好',value: '4'},{ label: '其他',value: '5'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.Jdrhwyhz !='d' && dataList.Jdrhwyhz =='a'">
                               <p class="form-p1">您当时计划纯母乳喂养多久？<span class="isRed Cmrwy2">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage10"
                                        @changeInput="changeInput(dataList.Cmrwy2,'Cmrwy2')"
                                        title=""  data-name="Cmrwy2"
                                        v-model="dataList.Cmrwy2"
                                        :options="[{ label: '1 个月',value: '1'},{ label: '2 个月',value: '2'},{ label: '3 个月',value: '3'},{ label: '4 个月',value: '4'},{ label: '5 个月',value: '5'},{ label: '6 个月以上',value: '6'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.Jdrhwyhz !='d' && dataList.Jdrhwyhz =='a'">
                               <p class="form-p1">您当时计划喂母乳到孩子多大（包括添加辅食后）？<span class="isRed Cmrwy3">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage10"
                                        @changeInput="changeInput(dataList.Cmrwy3,'Cmrwy3')"
                                        title=""  data-name="Cmrwy3"
                                        v-model="dataList.Cmrwy3"
                                        :options="[{ label: '1 个月',value: '1'},{ label: '2 个月',value: '2'},{ label: '3 个月',value: '3'},{ label: '4 个月',value: '4'},{ label: '6 个月',value: '5'},{ label: '9 个月',value: '6'},{ label: '12 个月',value: '7'},{ label: '18 个月',value: '6'},{ label: '24 个月',value: '9'},{ label: '没计划，能喂多久就多久',value: '10'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.Jdrhwyhz !='d' && dataList.Jdrhwyhz =='b'">
                               <p class="form-p1">为什么选择混合喂养？（多选题）<span class="isRed Hhwy">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        class="requrePage10 moreCheck"
                                        @changeInput="changeInput(dataList.Hhwy,'Hhwy')"
                                        title=""  data-name="Hhwy"
                                        v-model="dataList.Hhwy"
                                        :options="[{ label: '担心奶水不足',value: '1'},{ label: '产后返岗',value: '2'},{ label: '身体状况不佳',value: '3'},{ label: '周围朋友/同事都是混合喂养',value: '4'},{ label: '母乳喂养好，配方粉也不错',value: '5'},{ label: '其他',value: '6'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.Jdrhwyhz !='d' && dataList.Jdrhwyhz =='c'">
                               <p class="form-p1">为什么只喂配方奶？（多选题）<span class="isRed Rgwy">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        class="requrePage10 moreCheck"
                                        @changeInput="changeInput(dataList.Rgwy,'Rgwy')"
                                        title=""  data-name="Rgwy"
                                        v-model="dataList.Rgwy"
                                        :options="[{ label: '担心母乳喂养导致乳房/身材走样',value: '1'},{ label: '既往不顺利的哺乳经历',value: '2'},{ label: '不愿意在公共场所哺乳',value: '3'},{ label: '产后返岗',value: '4'},{ label: '配方粉也很好',value: '5'},{ label: '身体状况不佳',value: '6'},{ label: '其他',value: '7'}]">
                                    </super-checklist>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--bottom-->
                <div class="bottom">
                    <div class= "pagination"> 
                        <div class="pag-box">
                            <button  class="btn" :disabled= "false"  @click="changePage('10','9')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1"> 10 </span>
                            <span>/</span>
                            <span>15</span>
                            </div>
                            <button  class="btn" @click="changePage('10','11','requrePage10')" :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--page11-->
            <div class="pag11" v-if="page11">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <div class="form-list" v-if="dataList.Jdrhwyhz !='d'">
                               <p class="form-p1">43. 否与丈夫讨论过喂养方式？<span class="isRed Sfyzftlgwyfs">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        title=""
                                        @changeInput="changeInput(dataList.Sfyzftlgwyfs,'Sfyzftlgwyfs')"
                                        class="requrePage11" data-name="Sfyzftlgwyfs"
                                        v-model="dataList.Sfyzftlgwyfs"
                                        :options="[{ label: '讨论过',value: 'a'},{ label: '没讨论过',value: 'b'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.Jdrhwyhz !='d' && dataList.Sfyzftlgwyfs == 'a'">
                               <p class="form-p1">当时您丈夫倾向于选择哪种喂养方式？<span class="isRed SfyzftlgwyfsY">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage11"
                                        @changeInput="changeInput(dataList.SfyzftlgwyfsY,'SfyzftlgwyfsY')"
                                        title=""  data-name="SfyzftlgwyfsY"
                                        v-model="dataList.SfyzftlgwyfsY"
                                        :options="[{ label: '纯母乳喂养',value: '1'},{ label: '混合喂养',value: '2'},{ label: '人工喂养',value: '3'},{ label: '没有倾向和偏好',value: '4'},{ label: '不知道',value: '5'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <h3>E. 最小孩子的母乳喂养实际情况<span style="color:#999999;font-size:16px;">(现在我问一下你是怎么喂自己孩子的)</span></h3>
                            <div class="form-list">
                               <p class="form-p1">44. 孩子喂过母乳吗？（包括喂挤出的母乳和其他母亲的乳汁。只要喂过母乳就可以，喂多长时间没有关系。）<span class="isRed Hzwgmrm">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage11"
                                        @changeInput="changeInput(dataList.Hzwgmrm,'Hzwgmrm')"
                                        title=""  data-name="Hzwgmrm"
                                        v-model="dataList.Hzwgmrm"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.Hzwgmrm =='2'">
                               <p class="form-p1">为什么没给孩子喂母乳？（多选题）<span class="isRed HzwgmrmN">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        class="requrePage11 moreCheck"
                                        @changeInput="changeInput(dataList.HzwgmrmN,'HzwgmrmN')"
                                        title=""  data-name="HzwgmrmN"
                                        v-model="dataList.HzwgmrmN"
                                        :options="[{ label: '我之前就没打算喂母乳',value: '1'},{ label: '我没奶/奶水不够',value: '2'},{ label: '我生病或身体状况不允许',value: '3'},{ label: '孩子当时生病/住在新生儿监护室/接受特殊护理',value: '4'},{ label: '孩子对母乳不感兴趣/拒绝乳头/拒绝吸吮乳头',value: '5'},{ label: '其他原因',value: '6'},{ label: '不记得了/不知道',value: '7'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">45. 产后您第一次让孩子直接吸吮乳头吃母乳是什么时候？<span class="isRed Chdycxrt">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage11"
                                        pickContent="clot8"
                                        defaultValue="1"
                                        @changeInput="changeInput(dataList.Chdycxrt,'Chdycxrt')"
                                        title=""  data-name="Chdycxrt"
                                        data-count="3"
                                        data-other="Chdycxrt2"
                                        v-model="dataList.Chdycxrt"
                                        :options="[{ label: '产后 30 分钟之内',value: '1'},{ label: '产后 1 小时内',value: '2'},{ label: '产后 24 小时内(产后__小时)',value: '3',
                                        picker:true,filed:dataList.Chdycxrt2,name:'dataList.Chdycxrt2',placeholder:'请选择',icon:'小时'},
                                        { label: '产后 24 小时后',value: '4'},{ label: '住院期间没让孩子接触乳头',value: '5'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">为什么住院期间没让孩子接触乳头？<span class="isRed Chdycxrt3">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        class="requrePage11"
                                        @changeInput="changeInput(dataList.Chdycxrt3,'Chdycxrt3')"
                                        title=""  data-name="Chdycxrt3"
                                        v-model="dataList.Chdycxrt3"
                                        :options="[{ label: '孩子当时生病/住在新生儿监护室/接受特殊护理',value: '1'},{ label: '我生病/太累了',value: '2'},{ label: '我当时没下奶',value: '3'},{ label: '我当时打算把母乳吸出来给孩子喝',value: '4'},{ label: '其他原因',value: '5'},{ label: '不记得了',value: '6'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">46. 孩子出生后吃的第一口食物是？<span class="isRed Hzcshcddyksw">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage11"
                                        @changeInput="changeInput(dataList.Hzcshcddyksw,'Hzcshcddyksw')"
                                        title=""  data-name="Hzcshcddyksw"
                                        v-model="dataList.Hzcshcddyksw"
                                        :options="[{ label: '母乳',value: '1'},{ label: '配方奶',value: '2'},{ label: '白开水',value: '3'},{ label: '糖水/葡萄糖水',value: '4'},{ label: '牛奶、果汁饮料等',value: '5'},{ label: '其他食物',value: '6'},{ label: '不知道/ 不记得了',value: '7'}]">
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
                            <button  class="btn" :disabled= "false"  @click="changePage('11','10')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1"> 11 </span>
                            <span>/</span>
                            <span>15</span>
                            </div>
                            <button  class="btn" @click="changePage('11','12','requrePage11')" :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--page12-->
            <div class="pag12" v-if="page12">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <div class="form-list">
                               <p class="form-p1">47. 住院期间孩子吃过哪些以下哪些食物？（多选题）<span class="isRed Zyqjhzcgnxsw">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        class="requrePage12 moreCheck"
                                        @changeInput="changeInput(dataList.Zyqjhzcgnxsw,'Zyqjhzcgnxsw')"
                                        title=""  data-name="Zyqjhzcgnxsw"
                                        v-model="dataList.Zyqjhzcgnxsw"
                                        data-count="5"
                                        data-other="Zyqjhzcgnxsw2"
                                        :options="[{ label: '母乳',value: '1'},{ label: '配方奶',value: '2'},{ label: '白开水/糖水',value: '3'}, 
                                        { label: '牛奶、果汁饮料等',value: '4'},{ label: '其他食物',value: '5',
                                        other:true,filed:dataList.Zyqjhzcgnxsw2,name:'dataList.Zyqjhzcgnxsw2',placeholder:'请输入',icon:''},
                                       { label: '不知道/ 不记得了',value: '6'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list" v-if="!dataList.Zyqjhzcgnxsw.includes('1') && !dataList.Zyqjhzcgnxsw.includes('6')">
                               <p class="form-p1">48. 为什么住院期间孩子吃了母乳之外的其他食物？（多选题）<span class="isRed Wsmzyqjhzclqtsw">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        class="requrePage12 moreCheck"
                                        @changeInput="changeInput(dataList.Wsmzyqjhzclqtsw,'Wsmzyqjhzclqtsw')"
                                        title=""  data-name="Wsmzyqjhzclqtsw"
                                        v-model="dataList.Wsmzyqjhzclqtsw"
                                        :options="[{ label: '母乳量不足 (如孩子饿/吃不饱/哭吵/烦躁、没完全下奶、孩子体重下降明显/低血糖)',value: '1'},{ label: '乳头含接问题 (如孩子无法含接乳头/拒绝含接乳头/对母乳不感兴趣、孩子不吸吮/无效吸吮、乳头疼痛/皲裂/内翻)',value: '2'},
                                        { label: '孩子生病了 (如黄疸、住新生儿监护室/接受特殊护理、低血糖、脱水、心脏疾病、胎粪吸入、感染等)',value: '3'},
                                        { label: '我当时非常疲劳/产后恢复所需/生病了 (如剖宫产后需要恢复、产后出血、耻骨分离、产后抑郁等)',value: '4'},
                                        { label: '医护人员的建议 (如发现孩子喂养不良后建议添加；因我产后服药而要求我暂停母乳；告诉我产后初期母乳少故推荐加配方奶)',value: '5'},
                                        { label: '家属（配偶/父母）的建议 (如认为分娩后初期母乳少不够孩子吃；认为配方奶比母奶更有营养；担心我产后太疲劳)',value: '6'},
                                        { label: '之前就有计划混合喂养',value: '7'},
                                        { label: '认为配方奶营养更好',value: '8'},
                                        { label: '希望孩子适应奶瓶/不要过于依赖乳头',value: '9'},
                                        { label: '其他',value: '10'},
                                        { label: '不知道/ 不记得了',value: '11'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <h3>现在，我想问一下，出院后您出院后是怎么喂孩子的</h3>
                            <div class="form-list">
                               <p class="form-p1">49. 您的孩子还吃母乳吗？<span class="isRed Ndhzhcmrm">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage12"
                                        @changeInput="changeInput(dataList.Ndhzhcmrm,'Ndhzhcmrm')"
                                        title=""  data-name="Ndhzhcmrm"
                                        v-model="dataList.Ndhzhcmrm"
                                        :options="[{ label: '吃',value: '1'},{ label: '不吃了',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.Ndhzhcmrm =='2'">
                               <p class="form-p1">如果您的孩子不再吃母乳了，为什么给孩子断奶了？<span class="isRed Ndhzhcmrm2">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        class="requrePage12 moreCheck"
                                        @changeInput="changeInput(dataList.Ndhzhcmrm2,'Ndhzhcmrm2')"
                                        title=""  data-name="Ndhzhcmrm2"
                                        v-model="dataList.Ndhzhcmrm2"
                                        :options="[{ label: '我没奶了',value: '1'},{ label: '母乳没营养了',value: '2'},
                                        { label: '孩子大了/不再需要母乳了',value: '3'},
                                        { label: '孩子出牙了/咬乳头',value: '4'},
                                        { label: '孩子对母乳不感兴趣了/自己断奶了',value: '5'},
                                        { label: '孩子生病',value: '6'},
                                        { label: '我生病',value: '7'},
                                        { label: '我太累了，坚持不下去了/太忙了/没时间/焦虑/压力太大',value: '8'},
                                        { label: '我返回工作岗位/学校学习、工作/学习场所没地方没条件吸奶和储存母乳、',value: '9'},
                                        { label: '我希望家人参与和承担喂养任务',value: '10'},
                                        { label: '医护人员建议我断奶',value: '11'},
                                        { label: '家人（配偶/父母）建议我断奶',value: '12'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <h3 v-if="dataList.Ndhzhcmrm !='2'">接下来，我想了解一下昨天一天（ 包括白天和夜里 ）您怎么喂孩子的</h3>
                            <div class="form-list" v-if="dataList.Ndhzhcmrm !='2'">
                               <p class="form-p1">50. 孩子昨天一天（包括白天和夜里）喂过母乳吗？（包括喂挤出的母乳和其他母亲的乳汁。只要喂过母乳就可以，喂多长时间没有关系。）<span class="isRed Hzztwgmrm">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage12"
                                        pickContent="clot6"
                                        defaultValue="6"
                                        @changeInput="changeInput(dataList.Hzztwgmrm,'Hzztwgmrm')"
                                        title=""  data-name="Hzztwgmrm"
                                        data-count="1"
                                        data-other="Hzztwgmrm2"
                                        v-model="dataList.Hzztwgmrm"
                                        :options="[{ label: '是—>过去 24 小时内喂了___ 次',value: '1',
                                        picker:true,filed:dataList.Hzztwgmrm2,name:'dataList.Hzztwgmrm2',placeholder:'请选择',icon:'次'},
                                        { label: '否。还没有断奶，只是昨天没有吃',value: '2'},{ label: '否，已经断奶',value: '3'},{ label: '不知道',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <h3>接下来，我想了解一下过去 24 小时您最小的孩子吃母乳之外食物 的情况</h3>
                            <h3>51.我想了解昨天一天（包括白天和夜里）孩子吃的维生素、药物和液体。孩子都吃了什么？（逐项朗读，逐项记录）</h3>
                            <div class="form-list">
                               <p class="form-p1">51.1维生素/矿物质补充剂或药物<span class="isRed Wssbcj">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage12"
                                        @changeInput="changeInput(dataList.Wssbcj,'Wssbcj')"
                                        title=""  data-name="Wssbcj"
                                        v-model="dataList.Wssbcj"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">51.2口服补液盐（当地名称）<span class="isRed Kfbyy">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage12"
                                        @changeInput="changeInput(dataList.Kfbyy,'Kfbyy')"
                                        title=""  data-name="Kfbyy"
                                        v-model="dataList.Kfbyy"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">51.3白开水/矿泉水/糖水/茶水<span class="isRed Bks">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage12"
                                        @changeInput="changeInput(dataList.Bks,'Bks')"
                                        title=""  data-name="Bks"
                                        v-model="dataList.Bks"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">51.4婴儿配方奶<span class="isRed Yepfn">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage12"
                                        pickContent="clot6"
                                        defaultValue="6"
                                        @changeInput="changeInput(dataList.Yepfn,'Yepfn')"
                                        title=""  data-name="Yepfn"
                                        data-count="1"
                                        data-other="Yepfn2"
                                        v-model="dataList.Yepfn"
                                        :options="[{ label: '是,______次 不知道几次填 99',value: '1',
                                        picker:true,filed:dataList.Yepfn2,name:'dataList.Yepfn2',placeholder:'请选择',icon:'次'},
                                        { label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">51.5奶粉或新鲜的动物奶（如牛奶、羊奶）<span class="isRed Nfhxxdwn">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage12"
                                        pickContent="clot6"
                                        defaultValue="6"
                                        @changeInput="changeInput(dataList.Nfhxxdwn,'Nfhxxdwn')"
                                        title=""  data-name="Nfhxxdwn"
                                        data-count="1"
                                        data-other="Nfhxxdwn2"
                                        v-model="dataList.Nfhxxdwn"
                                        :options="[{ label: '是,______次 不知道几次填 99',value: '1',
                                        picker:true,filed:dataList.Nfhxxdwn2,name:'dataList.Nfhxxdwn2',placeholder:'请选择',icon:'次'},
                                        { label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">51.6果汁或果汁饮料<span class="isRed Gzhgzyl">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage12"
                                        @changeInput="changeInput(dataList.Gzhgzyl,'Gzhgzyl')"
                                        title=""  data-name="Gzhgzyl"
                                        v-model="dataList.Gzhgzyl"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">51.7汤（肉汤、菜汤、米汤）<span class="isRed Rt">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage12"
                                        @changeInput="changeInput(dataList.Rt,'Rt')"
                                        title=""  data-name="Rt"
                                        v-model="dataList.Rt"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">51.8酸奶（需要冷藏的）<span class="isRed Sn">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage12"
                                        pickContent="clot6"
                                        defaultValue="6"
                                        @changeInput="changeInput(dataList.Sn,'Sn')"
                                        title=""  data-name="Sn"
                                        v-model="dataList.Sn"
                                        data-count="1"
                                        data-other="Sn2"
                                        :options="[{ label: '是,______次 不知道几次填 99',value: '1',
                                        picker:true,filed:dataList.Sn2,name:'dataList.Sn2',placeholder:'请选择',icon:'次'},
                                        { label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">51.9 很稀的粥<span class="isRed Hxdz">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage12"
                                        @changeInput="changeInput(dataList.Hxdz,'Hxdz')"
                                        title=""  data-name="Hxdz"
                                        v-model="dataList.Hxdz"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">51.10 乳酸饮料（爽歪歪、娃哈哈）<span class="isRed Rsyl">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage12"
                                        @changeInput="changeInput(dataList.Rsyl,'Rsyl')"
                                        title=""  data-name="Rsyl"
                                        v-model="dataList.Rsyl"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">51.11其他液体<span class="isRed Qtyt">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage12"
                                        @changeInput="changeInput(dataList.Qtyt,'Qtyt')"
                                        title=""  data-name="Qtyt"
                                        v-model="dataList.Qtyt"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
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
                            <button  class="btn" :disabled= "false"  @click="changePage('12','11')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1"> 12 </span>
                            <span>/</span>
                            <span>15</span>
                            </div>
                            <button  class="btn" @click="changePage('12','13','requrePage12')" :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--page13-->
            <div class="pag13" v-if="page13">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <h3>接下来，我想了解一下过去 24 小时您最小的孩子吃固体 / 半固体食物的情况</h3>
                            <div class="form-list">
                               <p class="form-p1">52. 孩子吃过固体、半固体或糊状食物吗？（包括如面条馒头、饼干/面包、肉、水果蔬菜鸡蛋、稠的粥等这类的食物不包括水、汤、饮料等液体吗<span class="isRed Hzcggtswm">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Hzcggtswm,'Hzcggtswm')"
                                        title=""  data-name="Hzcggtswm"
                                        v-model="dataList.Hzcggtswm"
                                        :options="[{ label: '是，吃过',value: '1',},{ label: '否，还没有给孩子喂过任何固体半固体食物',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.Hzcggtswm == '1'">
                                <p class="form-p1">___ 月龄时第一次吃<span class="isRed T1">*</span></p>
                                <div class="check-list">
                                   <super-radio
                                        class="requrePage13"
                                        pickContent="clot10"
                                        defaultValue="5"
                                        @changeInput="changeInput(dataList.T1,'T1')"
                                        title=""  data-name="T1"
                                        data-count="1"
                                        data-other="Hzcggtswm2"
                                        v-model="dataList.T1"
                                        :options="[{ label: '___ 月龄时第一次吃 （不满 1 月填0,不知道/忘记了选99）',value: '1',
                                        picker:true,filed:dataList.Hzcggtswm2,name:'dataList.Hzcggtswm2',placeholder:'请选择',icon:'个月'}]">
                                    </super-radio>
                                </div>
                            </div> 
                            <div class="form-list" v-if="dataList.Hzcggtswm2<6 && dataList.Hzcggtswm2!='' && dataList.Hzcggtswm == '1'">
                               <p class="form-p1">为什么在孩子不满 6 个月时就给他/她吃食物（仅限于 6 个月内母乳喂养或配方奶喂养孩子添加食物的情况）?（多选题）<span class="isRed Hzcggtswm3">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        class="requrePage13 moreCheck"
                                        @changeInput="changeInput(dataList.Hzcggtswm3,'Hzcggtswm3')"
                                        title=""  data-name="Hzcggtswm3"
                                        v-model="dataList.Hzcggtswm3"
                                        :options="[{ label: '母乳量不足',value: '1'},{ label: '补充母乳的营养',value: '2'},
                                        { label: '孩子长大了',value: '3'},
                                        { label: '孩子能用奶瓶喝奶/能吃固体/半固体食物了',value: '4'},
                                        { label: '孩子对食物感兴趣',value: '5'},
                                        { label: '孩子吃了食物夜里能睡得更长',value: '6'},
                                        { label: '我生病',value: '7'},
                                        { label: '我太累了，坚持不下去了/太忙了/没时间/焦虑/压力太大',value: '8'},
                                        { label: '我返回工作岗位/学校学习、工作/学习场所没地方吸奶和储存母乳',value: '9'},
                                        { label: '我希望家人参与和承担喂养任务',value: '10'},
                                        { label: '医护人员建议我添加食物',value: '11'},
                                        { label: '家人（配偶/父母）建议我添加食物',value: '11'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.Hzcggtswm == '1' ">
                               <p class="form-p1">53. 孩子昨天一天吃过几顿固体、半固体或糊状食物（包括（如面条馒头、饼干/面包、肉、水果蔬菜鸡蛋、稠的粥，果泥，肉泥等这类的食物；少量零食不算一顿，如一两口的食物。）但不包括水、汤、饮料等液体）？<span class="isRed Hzztytcgjdgtsw">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        pickContent="clot9"
                                        defaultValue="2"
                                        @changeInput="changeInput(dataList.Hzztytcgjdgtsw,'Hzztytcgjdgtsw')"
                                        title=""  data-name="Hzztytcgjdgtsw"
                                        v-model="dataList.Hzztytcgjdgtsw"
                                        data-count="1"
                                        data-other="Hzztytcgjdgtsw1"
                                        :options="[{ label: '____次（如果>=7次，填7次）',value: '1',
                                        picker:true,filed:dataList.Hzztytcgjdgtsw1,name:'dataList.Hzztytcgjdgtsw1',placeholder:'请选择',icon:'次'},
                                        { label: '不知道',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div v-if="dataList.Hzcggtswm == '1' ">
                            <h3>54. 我想了解昨天一天（包括白天和夜里）孩子吃的所有食物，包括在家和在外面吃的(逐项朗读，逐项记录）</h3>
                            <div class="form-list">
                               <p class="form-p1">54.1面包、米饭、面条、馒头、馍馍或其他谷类食物（不包括谷类稀粥）<span class="isRed Zthzcdsysw1">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Zthzcdsysw1,'Zthzcdsysw1')"
                                        title=""  data-name="Zthzcdsysw1"
                                        v-model="dataList.Zthzcdsysw1"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">54.2南瓜、胡萝卜、红薯等内部是黄色、红色或橙色的食物<span class="isRed Zthzcdsysw2">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Zthzcdsysw2,'Zthzcdsysw2')"
                                        title=""  data-name="Zthzcdsysw2"
                                        v-model="dataList.Zthzcdsysw2"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">54.3白薯、土豆、山药或任何其他根茎类食物<span class="isRed Zthzcdsysw3">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Zthzcdsysw3,'Zthzcdsysw3')"
                                        title=""  data-name="Zthzcdsysw3"
                                        v-model="dataList.Zthzcdsysw3"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">54.4任何深绿色叶菜（如菠菜、油菜、油麦菜）<span class="isRed Zthzcdsysw4">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Zthzcdsysw4,'Zthzcdsysw4')"
                                        title=""  data-name="Zthzcdsysw4"
                                        v-model="dataList.Zthzcdsysw4"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">54.5柑橘、西红柿、山楂、柿子、芒果、木瓜等（举例当地富含维生素 A 的水果）<span class="isRed Zthzcdsysw5">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Zthzcdsysw5,'Zthzcdsysw5')"
                                        title=""  data-name="Zthzcdsysw5"
                                        v-model="dataList.Zthzcdsysw5"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">54.6任何其他新鲜水果或蔬菜<span class="isRed Zthzcdsysw6">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Zthzcdsysw6,'Zthzcdsysw6')"
                                        title=""  data-name="Zthzcdsysw6"
                                        v-model="dataList.Zthzcdsysw6"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">54.7肝、肾、心或其他脏器<span class="isRed Zthzcdsysw7">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Zthzcdsysw7,'Zthzcdsysw7')"
                                        title=""  data-name="Zthzcdsysw7"
                                        v-model="dataList.Zthzcdsysw7"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">54.8任何肉类的瘦肉部分，如牛肉、猪肉、羊肉、鸡肉、鸭肉等<span class="isRed Zthzcdsysw8">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Zthzcdsysw8,'Zthzcdsysw8')"
                                        title=""  data-name="Zthzcdsysw8"
                                        v-model="dataList.Zthzcdsysw8"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">54.9.任何肉类的肥肉部分，如猪肥肉<span class="isRed Zthzcdsysw9">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Zthzcdsysw9,'Zthzcdsysw9')"
                                        title=""  data-name="Zthzcdsysw9"
                                        v-model="dataList.Zthzcdsysw9"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">54.10 蛋类<span class="isRed Zthzcdsysw10">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Zthzcdsysw10,'Zthzcdsysw10')"
                                        title=""  data-name="Zthzcdsysw10"
                                        v-model="dataList.Zthzcdsysw10"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">54.11鲜鱼或干鱼、海产品<span class="isRed Zthzcdsysw11">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Zthzcdsysw11,'Zthzcdsysw11')"
                                        title=""  data-name="Zthzcdsysw11"
                                        v-model="dataList.Zthzcdsysw11"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">54.12任何豆类比如大豆、芸豆等或坚果类食物比如花生、核桃。（包括豆制品和坚果制品）<span class="isRed Zthzcdsysw12">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Zthzcdsysw12,'Zthzcdsysw12')"
                                        title=""  data-name="Zthzcdsysw12"
                                        v-model="dataList.Zthzcdsysw12"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">54.13奶酪等其他固体/半固体奶制品，如老酸奶（需要冷藏的）<span class="isRed Zthzcdsysw13">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Zthzcdsysw13,'Zthzcdsysw13')"
                                        title=""  data-name="Zthzcdsysw13"
                                        v-model="dataList.Zthzcdsysw13"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">54.14任何油、脂肪、黄油或其制品<span class="isRed Zthzcdsysw14">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Zthzcdsysw14,'Zthzcdsysw14')"
                                        title=""  data-name="Zthzcdsysw14"
                                        v-model="dataList.Zthzcdsysw14"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">54.15任何甜食，如巧克力、糖果、蛋糕、饼干等<span class="isRed Zthzcdsysw15">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Zthzcdsysw15,'Zthzcdsysw15')"
                                        title=""  data-name="Zthzcdsysw15"
                                        v-model="dataList.Zthzcdsysw15"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">54.16调味品（盐、酱油、腐乳、味精、花椒、大料、辣椒、茴香）<span class="isRed Zthzcdsysw16">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Zthzcdsysw16,'Zthzcdsysw16')"
                                        title=""  data-name="Zthzcdsysw16"
                                        v-model="dataList.Zthzcdsysw16"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">54.17 火腿肠、香肠、烟熏肉类<span class="isRed Zthzcdsysw17">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Zthzcdsysw17,'Zthzcdsysw17')"
                                        title=""  data-name="Zthzcdsysw17"
                                        v-model="dataList.Zthzcdsysw17"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">54.18其他：请记录上表未列出的母亲提到的其他食物<span class="isRed Zthzcdsysw18">*</span></p>
                               <div class="check-list" style="padding:0">
                                    <drage-input v-model="dataList.Zthzcdsysw18" :keyValue.sync="dataList.Zthzcdsysw18"
                                        type="text"  placeholder="请输入未列出的食物"
                                        @changeInput="changeInput(dataList.Zthzcdsysw18,'Zthzcdsysw18')"
                                    :disabled="false"  label="" class="requrePage13" data-name="Zthzcdsysw18">
                                    </drage-input>
                               </div>
                            </div>
                            </div>
                            <h3>F.  孕期到产后获得的母乳喂养信息与支持</h3>
                            <h3>接下来，我想了解一下您获得的母乳喂养相关信息和支持</h3>
                            <h3>55.  在您孕期产检时，医护人员是否为您提供了如下方面的信息和支持？请根据实际情况在下列表格中勾选对应的选项？</h3>
                            <div class="form-list">
                               <p class="form-p1">55.1帮助您决定孩子如何喂养的信息<span class="isRed Yhrytgdxxhzc1">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Yhrytgdxxhzc1,'Yhrytgdxxhzc1')"
                                        title=""  data-name="Yhrytgdxxhzc1"
                                        v-model="dataList.Yhrytgdxxhzc1"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">55.2帮教您如何进行母乳喂养的操作示范和演示<span class="isRed Yhrytgdxxhzc2">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Yhrytgdxxhzc2,'Yhrytgdxxhzc2')"
                                        title=""  data-name="Yhrytgdxxhzc2"
                                        v-model="dataList.Yhrytgdxxhzc2"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">55.3告知您如何应对母乳喂养时可能遇到的困难和挑战<span class="isRed Yhrytgdxxhzc3">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Yhrytgdxxhzc3,'Yhrytgdxxhzc3')"
                                        title=""  data-name="Yhrytgdxxhzc3"
                                        v-model="dataList.Yhrytgdxxhzc3"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">55.4帮助您相信自己完全有能力进行母乳喂养，树立自信<span class="isRed Yhrytgdxxhzc4">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Yhrytgdxxhzc4,'Yhrytgdxxhzc4')"
                                        title=""  data-name="Yhrytgdxxhzc4"
                                        v-model="dataList.Yhrytgdxxhzc4"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">55.5告知您产后即刻进行母婴皮肤接触的重要性<span class="isRed Yhrytgdxxhzc5">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Yhrytgdxxhzc5,'Yhrytgdxxhzc5')"
                                        title=""  data-name="Yhrytgdxxhzc5"
                                        v-model="dataList.Yhrytgdxxhzc5"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">55.6告知您保持母婴同室的重要性<span class="isRed Yhrytgdxxhzc6">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Yhrytgdxxhzc6,'Yhrytgdxxhzc6')"
                                        title=""  data-name="Yhrytgdxxhzc6"
                                        v-model="dataList.Yhrytgdxxhzc6"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">55.7告知您在母乳喂养最初 6 个月，纯母乳喂养不需要给孩子加水。<span class="isRed Yhrytgdxxhzc7">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Yhrytgdxxhzc7,'Yhrytgdxxhzc7')"
                                        title=""  data-name="Yhrytgdxxhzc7"
                                        v-model="dataList.Yhrytgdxxhzc7"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">55.8告知您在母乳喂养最初 6 个月，给与孩子水、配方奶或其他辅食的危害<span class="isRed Yhrytgdxxhzc8">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage13"
                                        @changeInput="changeInput(dataList.Yhrytgdxxhzc8,'Yhrytgdxxhzc8')"
                                        title=""  data-name="Yhrytgdxxhzc8"
                                        v-model="dataList.Yhrytgdxxhzc8"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">55.9其他信息和支持，请注明：<span class="isRed Yhrytgdxxhzc9">*</span></p>
                               <div class="check-list" style="padding:0">
                                   <drage-input v-model="dataList.Yhrytgdxxhzc9" :keyValue.sync="dataList.Yhrytgdxxhzc9"
                                        @changeInput="changeInput(dataList.Yhrytgdxxhzc9,'Yhrytgdxxhzc9')"    
                                            type="text"  placeholder="请输入"
                                        :disabled="false"  label="" class="requrePage13" data-name="Yhrytgdxxhzc9">
                                    </drage-input>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--bottom-->
                <div class="bottom">
                    <div class= "pagination"> 
                        <div class="pag-box">
                            <button  class="btn" :disabled= "false"  @click="changePage('13','12')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1"> 13 </span>
                            <span>/</span>
                            <span>15</span>
                            </div>
                            <button  class="btn" @click="changePage('13','14','requrePage13')" :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--page14-->
            <div class="pag14" v-if="page14">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <div class="form-list">
                               <p class="form-p1">56. 总体而言，您是否满意孕期产检时医护人员提供的有关母乳喂养的信息和支持？<span class="isRed Sfmyyqcjyhrytgdxx">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage14"
                                        @changeInput="changeInput(dataList.Sfmyyqcjyhrytgdxx,'Sfmyyqcjyhrytgdxx')"
                                        title=""  data-name="Sfmyyqcjyhrytgdxx"
                                        v-model="dataList.Sfmyyqcjyhrytgdxx"
                                        :options="[{ label: '满意',value: '1'},{ label: '不满意',value: '2'},{ label: '不记得了',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <h3>57.在您分娩住院期间，医护人员（如产科医生、产科护士、助产士、新生儿科医生等）是否为您提供了如下方面的信息和支持？请根据实际情况在下列表格中勾选对应的选项？</h3>
                            <div class="form-list">
                               <p class="form-p1">57.1鼓励您产后立即进行母婴皮肤接触<span class="isRed Fmzyqjtgdxx1">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage14"
                                        @changeInput="changeInput(dataList.Fmzyqjtgdxx1,'Fmzyqjtgdxx1')"
                                        title=""  data-name="Fmzyqjtgdxx1"
                                        v-model="dataList.Fmzyqjtgdxx1"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                           <div class="form-list">
                               <p class="form-p1">57.2为您提供足够的有关母乳喂养体位和乳头含接的操作示范和演示<span class="isRed Fmzyqjtgdxx2">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage14"
                                        @changeInput="changeInput(dataList.Fmzyqjtgdxx2,'Fmzyqjtgdxx2')"
                                        title=""  data-name="Fmzyqjtgdxx2"
                                        v-model="dataList.Fmzyqjtgdxx2"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">57.3至少有一次评估过您的母乳喂养过程或母乳喂养尝试<span class="isRed Fmzyqjtgdxx3">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage14"
                                        @changeInput="changeInput(dataList.Fmzyqjtgdxx3,'Fmzyqjtgdxx3')"
                                        title=""  data-name="Fmzyqjtgdxx3"
                                        v-model="dataList.Fmzyqjtgdxx3"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">57.4指导您进行按需喂养以及如何控制每次哺乳的时间<span class="isRed Fmzyqjtgdxx4">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage14"
                                        @changeInput="changeInput(dataList.Fmzyqjtgdxx4,'Fmzyqjtgdxx4')"
                                        title=""  data-name="Fmzyqjtgdxx4"
                                        v-model="dataList.Fmzyqjtgdxx4"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">57.5告知您如何根据孩子状态正确判断他/她已经吃饱了<span class="isRed Fmzyqjtgdxx5">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage14"
                                        @changeInput="changeInput(dataList.Fmzyqjtgdxx5,'Fmzyqjtgdxx5')"
                                        title=""  data-name="Fmzyqjtgdxx5"
                                        v-model="dataList.Fmzyqjtgdxx5"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">57.6告知您在母乳喂养最初 6 个月， 纯母乳喂养不需要给孩子加水<span class="isRed Fmzyqjtgdxx6">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage14"
                                        @changeInput="changeInput(dataList.Fmzyqjtgdxx6,'Fmzyqjtgdxx6')"
                                        title=""  data-name="Fmzyqjtgdxx6"
                                        v-model="dataList.Fmzyqjtgdxx6"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">57.7鼓励您进行纯母乳喂养，而不给孩子其他食物或液体，如配方奶<span class="isRed Fmzyqjtgdxx7">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage14"
                                        @changeInput="changeInput(dataList.Fmzyqjtgdxx7,'Fmzyqjtgdxx7')"
                                        title=""  data-name="Fmzyqjtgdxx7"
                                        v-model="dataList.Fmzyqjtgdxx7"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">57.8针对您的需求为您提供母乳喂养指导<span class="isRed Fmzyqjtgdxx8">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage14"
                                        @changeInput="changeInput(dataList.Fmzyqjtgdxx8,'Fmzyqjtgdxx8')"
                                        title=""  data-name="Fmzyqjtgdxx8"
                                        v-model="dataList.Fmzyqjtgdxx8"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">57.9帮助您应对在今后母乳喂养中可能遇到的困难和挑战<span class="isRed Fmzyqjtgdxx9">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage14"
                                        @changeInput="changeInput(dataList.Fmzyqjtgdxx9,'Fmzyqjtgdxx9')"
                                        title=""  data-name="Fmzyqjtgdxx9"
                                        v-model="dataList.Fmzyqjtgdxx9"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">57.10帮助您相信自己完全有能力进行母乳喂养，树立自信<span class="isRed Fmzyqjtgdxx10">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage14"
                                        @changeInput="changeInput(dataList.Fmzyqjtgdxx10,'Fmzyqjtgdxx10')"
                                        title=""  data-name="Fmzyqjtgdxx10"
                                        v-model="dataList.Fmzyqjtgdxx10"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">57.11针对您的需求为您提供母乳喂养指导<span class="isRed Fmzyqjtgdxx11">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage14"
                                        @changeInput="changeInput(dataList.Fmzyqjtgdxx11,'Fmzyqjtgdxx11')"
                                        title=""  data-name="Fmzyqjtgdxx11"
                                        v-model="dataList.Fmzyqjtgdxx11"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">57.11其他信息和支持，请注明<span class="isRed Fmzyqjtgdxx12">*</span></p>
                                <div class="check-list" style="padding:0">
                                     <drage-input v-model="dataList.Fmzyqjtgdxx12" :keyValue.sync="dataList.Fmzyqjtgdxx12"
                                        type="text"  placeholder="请输入" 
                                        @changeInput="changeInput(dataList.Fmzyqjtgdxx12,'Fmzyqjtgdxx12')"
                                        :disabled="false"  label="" class="requrePage14" data-name="Fmzyqjtgdxx12">
                                    </drage-input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--bottom-->
                <div class="bottom">
                    <div class= "pagination"> 
                        <div class="pag-box">
                            <button  class="btn" :disabled= "false"  @click="changePage('14','13')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1"> 14 </span>
                            <span>/</span>
                            <span>15</span>
                            </div>
                            <button  class="btn" @click="changePage('14','15','requrePage14')" :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--page15-->
            <div class="pag15" v-if="page15">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <div class="form-list">
                               <p class="form-p1">58. 总体而言，您是否满意产后住院期间医护人员提供的有关母乳喂养的信息和支持？<span class="isRed Sfmyyhrytgdxx">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage15"
                                        @changeInput="changeInput(dataList.Sfmyyhrytgdxx,'Sfmyyhrytgdxx')"
                                        title=""  data-name="Sfmyyhrytgdxx"
                                        v-model="dataList.Sfmyyhrytgdxx"
                                        :options="[{ label: '满意',value: '1'},{ label: '不满意',value: '2'},{ label: '不记得了',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <h3>59. 在您出院后至孩子满 6 个月，社区医护人员是否通过上门、电话、门诊等形式为您提供了如下方面的信息和支持？请根据实际情况在下列表格中勾选对应的选项？</h3>
                            <div class="form-list">
                               <p class="form-p1">59.1至少有一次评估过您的母乳喂养过程或母乳喂养尝试<span class="isRed Cyhsqyhryzc1">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage15"
                                        @changeInput="changeInput(dataList.Cyhsqyhryzc1,'Cyhsqyhryzc1')"
                                        title=""  data-name="Cyhsqyhryzc1"
                                        v-model="dataList.Cyhsqyhryzc1"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                           <div class="form-list">
                               <p class="form-p1">59.2告知您如何判断孩子已经吃饱了<span class="isRed Cyhsqyhryzc2">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage15"
                                        @changeInput="changeInput(dataList.Cyhsqyhryzc2,'Cyhsqyhryzc2')"
                                        title=""  data-name="Cyhsqyhryzc2"
                                        v-model="dataList.Cyhsqyhryzc2"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">59.3告知您在母乳喂养最初 6 个月， 纯母乳喂养不需要给孩子加水<span class="isRed Cyhsqyhryzc3">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage15"
                                        @changeInput="changeInput(dataList.Cyhsqyhryzc3,'Cyhsqyhryzc3')"
                                        title=""  data-name="Cyhsqyhryzc3"
                                        v-model="dataList.Cyhsqyhryzc3"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">59.4帮助您应对母乳喂养中遇到的困难和挑战<span class="isRed Cyhsqyhryzc4">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage15"
                                        @changeInput="changeInput(dataList.Cyhsqyhryzc4,'Cyhsqyhryzc4')"
                                        title=""  data-name="Cyhsqyhryzc4"
                                        v-model="dataList.Cyhsqyhryzc4"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">59.5帮助您相信自己完全有能力进行母乳喂养，树立自信 <span class="isRed Cyhsqyhryzc5">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage15"
                                        @changeInput="changeInput(dataList.Cyhsqyhryzc5,'Cyhsqyhryzc5')"
                                        title=""  data-name="Cyhsqyhryzc5"
                                        v-model="dataList.Cyhsqyhryzc5"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">59.6告诉您遇到喂养问题如何去哪里寻求帮助<span class="isRed Cyhsqyhryzc6">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage15"
                                        @changeInput="changeInput(dataList.Cyhsqyhryzc6,'Cyhsqyhryzc6')"
                                        title=""  data-name="Cyhsqyhryzc6"
                                        v-model="dataList.Cyhsqyhryzc6"
                                        :options="[{ label: '完全不同意',value: '1'},{ label: '部分不同意',value: '2'},{ label: '部分同意',value: '3'},{ label: '完全同意',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            
                            <div class="form-list">
                                <p class="form-p1">59.7其他信息和支持，请注明：<span class="isRed Cyhsqyhryzc7">*</span></p>
                                <div class="check-list"  style="padding:0">
                                    <drage-input v-model="dataList.Cyhsqyhryzc7" :keyValue.sync="dataList.Cyhsqyhryzc7"
                                            type="text"  placeholder="请输入"  @changeInput="changeInput(dataList.Cyhsqyhryzc7,'Cyhsqyhryzc7')"
                                        :disabled="false"  label="" class="requrePage15" data-name="Cyhsqyhryzc7">
                                    </drage-input>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">60. 总体而言，您是否满意社区医护人员提供的有关母乳喂养的信息和支持？<span class="isRed Sfmysqrytgdzc">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage15"
                                        @changeInput="changeInput(dataList.Sfmysqrytgdzc,'Sfmysqrytgdzc')"
                                        title=""  data-name="Sfmysqrytgdzc"
                                        v-model="dataList.Sfmysqrytgdzc"
                                        :options="[{ label: '满意',value: '1'},{ label: '不满意',value: '2'},{ label: '不记得了',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">61.总体而言，从确诊怀孕到孩子出生后 6 个月，哪些人/哪些资源为您提供了最为有用的母乳喂养信息和支持（多选题）<span class="isRed Nxrtglzyydzy">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        class="requrePage15 moreCheck"
                                        @changeInput="changeInput(dataList.Nxrtglzyydzy,'Nxrtglzyydzy')"
                                        title=""  data-name="Nxrtglzyydzy"
                                        data-count="13"
                                        data-other="Nxrtglzyydzy2"
                                        v-model="dataList.Nxrtglzyydzy"
                                        :options="[{ label: '丈夫',value: '1'},{ label: '母亲/婆婆',value: '2'},{ label: '其他家庭成员',value: '3'}, 
                                        { label: '朋友/同事',value: '4'},{ label: '医生',value: '5'}
                                        ,{ label: '护士',value: '6'},
                                        { label: '助产士',value: '7'},
                                        { label: '社区医护人员',value: '8'},
                                        { label: '母乳喂养门诊',value: '9'},
                                        { label: '月嫂/开奶师/通乳师',value: '10'},
                                        { label: '医院/社区等机构提供的孕期课程健康教育',value: '11'},
                                        { label: '医院/医院/社区提供的书面/影像/声像资料',value: '12'},
                                        { label: '网络/手机应用，请注明：',value: '13',
                                        other:true,filed:dataList.Nxrtglzyydzy2,name:'dataList.Nxrtglzyydzy2',placeholder:'请注明',icon:''},
                                       { label: '营养师/注册营养师',value: '14'},{ label: '营养师/注册营养师',value: '15'}]">
                                    </super-checklist>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--bottom-->
                <div class="bottom">
                    <div class= "pagination"> 
                        <div class="pag-box">
                            <button  class="btn" :disabled= "false"  @click="changePage('15','14')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1"> 15 </span>
                            <span>/</span>
                            <span>15</span>
                            </div>
                            <button  class="btn" @click="changePage('15','14','requrePage15')"  :class= "{ disabledBtn: false }"> 提交</button>
                        </div>
                    </div>
                </div>
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
                    Zyqjhzcgnxsw:[],
                    Hzcggtswm2:''
                },
                checkObj:{},
                page1:true,
                page2:false,
                page3:false,
                page4:false,
                page5:false,
                page6:false,
                page7:false,
                page8:false, 
                page9:false, 
                page10:false, 
                page11:false,  
                page12:false,  
                page13:false,
                page14:false,
                page15:false,
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
                slotContent4: { 
                    columns: 1,
                    default: [{text: '50', value: '50'}],
                    pData1:slotList.clot6
                },
                slotContent5: { 
                    columns: 1,
                    default: [{text: '5', value: '5'}],
                    pData1:slotList.clot7
                },
            }
        },
        components:{
            drageInput,
            superRadio,
            superChecklist
        },
        watch:{
            'dataList.Hzcggtswm2':{
                handler(val){
                    console.log(val)
                },
                deep:true
            }
        },
        mounted(){
           
        },
        methods:{
            subMot(){
                console.log(this.dataList)
            },
            changeInput(val,item){
                try{  //只针对多选
                    val.length==0 ? 
                    document.querySelector(`.${item}`).innerHTML = `*<span style="padding-left:10px">此题必填</span>`
                    : document.querySelector(`.${item}`).innerHTML = "*" 
                }catch(e){
                    console.log('warn')
                }
            },
            changePage(before,next,pageName){  //分页
                let isRequire=false
                let arrDom=document.querySelectorAll(`.${pageName}`);
                let innerHtmlArr=[];
                for(let i=0;i<arrDom.length;i++){
                    if( (this.dataList[arrDom[i].getAttribute('data-name')] == undefined
                        || this.dataList[arrDom[i].getAttribute('data-name')].length==0)
                        ||
                            (           //判断单选有其他必填项
                                arrDom[i].getAttribute('data-other') != null
                                && 
                                this.dataList[arrDom[i].getAttribute('data-name')] == arrDom[i].getAttribute('data-count')
                                &&
                                (this.dataList[arrDom[i].getAttribute('data-other')] == undefined )
                            )
                        ){
                        innerHtmlArr.push(arrDom[i]) //获取dom数组 
                        isRequire=true
                    }
                    else{
                        arrDom[i].parentNode.parentNode.querySelector('.isRed').innerHTML = `*`
                    }
                }
                
                if(isRequire){
                    for(let i = 0;i<innerHtmlArr.length;i++){
                        innerHtmlArr[i].parentNode.parentNode.querySelector('.isRed').innerHTML 
                        = `*<span style="padding-left:10px">此题必填</span>`
                    }
                    document.querySelector('.qs-content').scrollTop = innerHtmlArr[0].parentNode.parentNode.offsetTop
                    return false;
                }    
                let checkDom=document.querySelectorAll('.moreCheck')
                for(let i=0;i<checkDom.length;i++){
                    this.checkObj[checkDom[i].getAttribute('data-name')]
                        =(this.dataList[checkDom[i].getAttribute('data-name')] ||[""]).join(",")
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