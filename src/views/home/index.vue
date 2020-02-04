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
            </div>
            <!--page5-->
            <div class="pag5" v-if="page5">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <div class="form-list">
                               <p class="form-p1">19. 孩子的出生体重<span class="isRed Xl">*</span></p>
                               <div class="check-list" style="padding:0">
                                    <drage-input 
                                        v-model="dataList.Hzcstz" 
                                        class="requrePage5" 
                                        data-name="Hzcstz"  
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
                               <p class="form-p1">孩子的出生身长(cm)<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  style="padding:0" >
                                    <drage-input 
                                        v-model="dataList.se" 
                                        :keyValue.sync="dataList.se"
                                        :iocnRight="true"  unit="cm"
                                        class="requrePage5" 
                                        data-name="Fqnl"
                                        :slotContent="slotContent4" 
                                        placeholder="请选择您孩子的出生身长"
                                        typeItem="pickeMore" 
                                        :disabled="true"
                                        label="" >
                                    </drage-input>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">20. 此次分娩住院时长为(天）<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  style="padding:0" >
                                    <drage-input 
                                        v-model="dataList.se" 
                                        :keyValue.sync="dataList.se"
                                        :iocnRight="true"  unit="天"
                                        class="requrePage5" 
                                        data-name="Fqnl"
                                        :slotContent="slotContent5" 
                                        placeholder="请选择此次分娩住院时长"
                                        typeItem="pickeMore" 
                                        :disabled="true"
                                        label="" >
                                    </drage-input>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">21. 您是否计划产后返回工作岗位/学校学习?<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage5"
                                        pickContent="clot6"
                                        defaultValue="3"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsrw"
                                        v-model="dataList.Jtnsrw"
                                        :options="[{ label: '是的，而且已经恢复工作',value: '1'},{ label: '是的，计划产后______ 个月返回工作岗位/学校学习',value: '2',
                                        picker:true,filed:dataList.Pybblxpdsj2,name:'dataList.Pybblxpdsj2',placeholder:'请选择',icon:'个月'},
                                        { label: '否',value: '3'},{ label: '不确定',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                           
                            <div class="form-list">
                               <p class="form-p1">22. 你的带薪产假时间是（包括周末以及节假日）<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage5"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '低于 98 天',value: '1'},{ label: '98 天以上',value: '2'},{ label: '120以上',value: '3'},{ label: '180 天以上',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">23. 您的单位会安排不少于 1 小时的哺乳时间吗（相关劳动保护规定）？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage5"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '会',value: '1'},{ label: '不会',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">24. 您单位有母乳喂养室吗？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage5"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '有',value: '1'},{ label: '没有',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <h3>C.既往母乳喂养经验 / 经历（在最小的孩子之前）<span style="color:#999999;font-size:16px;">( 接下来，我想了解一下您在生最小的宝宝之前的母乳喂养方面的经验 / 经历 )</span></h3>
                            <div class="form-list">
                               <p class="form-p1">25. 您之前用母乳喂养过孩子吗？(指您最小的宝宝之前的孩子)<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list">
                                    <super-radio
                                        class="requrePage5"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
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
                            <span>5</span>
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
                               <p class="form-p1">26. 您的家人（妈妈、婆婆、姐妹等）之前有母乳喂养经历/经验吗？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage6"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '没有',value: '1'},{ label: '有',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">总体而言，她/她们的母乳喂养经历/经验是积极的还是消极的？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage6"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '积极的',value: '1'},{ label: '消极的',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">27. 您的朋友/同事之前有母乳喂养经历/经验吗？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage6"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '没有',value: '1'},{ label: '有',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">总体而言，她/她们的母乳喂养经历/经验是积极的还是消极的？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage6"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '积极的',value: '1'},{ label: '消极的',value: '2'},{ label: '不知道',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>        

                            <div class="form-list">
                               <p class="form-p1">28. 此次怀孕期间，您有参加任何有关母乳喂养的课程吗?<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage6"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '参加过',value: '1'},{ label: '没参加过',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">29. 此次怀孕期间，您参加的母乳喂养相关课程来自（多选题）<span class="isRed Hyzk">*</span></p>
                               <div class="check-list"  >
                                    <super-checklist
                                        title=""
                                        class="requrePage6 moreCheck" data-name="Zjbbwt"   data-next="Zjbbwt2"  data-count="9"
                                        v-model="dataList.Zjbbwt"
                                        :options="[{ label: '产检医院',value: '1'},{ label: '社区卫生中心',value: '2'},{ label: '妇幼保健机构 ',value: '3'},{ label: '线下母婴服务机构（如月子会所等提供育婴服务、销售母婴产品的机构） ',value: '4'},{ label: '线上的母婴服务（例如手机 APP 和网课） ',value: '5'}
                                        ,{ label: '奶粉公司及其工作人员',value: '6'},{ label: '商场活动',value: '7'},{ label: '其他',value: '8'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">30. 在备孕期间，您有得到过购买奶粉的优惠的信息吗？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage6"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '有',value: '1'},{ label: '没有',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                             <div class="form-list">
                               <p class="form-p1">您获得过购买奶粉的优惠方式的途径包括（多选题）<span class="isRed Hyzk">*</span></p>
                               <div class="check-list"  >
                                    <super-checklist
                                        title=""
                                        class="requrePage6 moreCheck" data-name="Zjbbwt"   data-next="Zjbbwt2"  data-count="9"
                                        v-model="dataList.Zjbbwt"
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
                            <span>5</span>
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
                               <p class="form-p1">31. 在备孕期间，有人告诉过您“母乳喂养有困难时找谁咨询或解决困难”吗？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage7"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '没有',value: '1'},{ label: '有',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">她/他告诉您咨询或解决困难的途径包括（多选题）<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        title=""
                                        class="requrePage6 moreCheck" data-name="Zjbbwt"   data-next="Zjbbwt2"  data-count="9"
                                        v-model="dataList.Zjbbwt"
                                        :options="[{ label: '找亲友、家里老人',value: '1'},{ label: '找周围有最近育儿经验的人',value: '2'},{ label: '找催乳师、通乳师或者月嫂 ',value: '3'},{ label: '找医护人员 ',value: '4'},{ label: '找其他人',value: '5'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">32. 在怀孕期间，您从哪些途径获得过购买奶粉的优惠方式？（多选题）<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        title=""
                                        class="requrePage6 moreCheck" data-name="Zjbbwt"   data-next="Zjbbwt2"  data-count="9"
                                        v-model="dataList.Zjbbwt"
                                        :options="[{ label: '超市或母婴店的奶粉促销活动',value: '1'},{ label: '购物网站、公共场所、大众媒体等发布的奶粉促销活动',value: '2'},{ label: '亲戚朋友的介绍',value: '3'},{ label: '医院工作人员的推荐 ',value: '4'},{ label: '其他',value: '5'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">33. 在怀孕期间，有人告诉过您“母乳喂养有困难时找谁咨询或解决困难”吗？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage6"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '没有',value: '1'},{ label: '有',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>        

                            <div class="form-list">
                               <p class="form-p1">她/他告诉您咨询或解决困难的途径包括（多选题）<span class="isRed Hyzk">*</span></p>
                               <div class="check-list"  >
                                    <super-checklist
                                        title=""
                                        class="requrePage6 moreCheck" data-name="Zjbbwt"   data-next="Zjbbwt2"  data-count="9"
                                        v-model="dataList.Zjbbwt"
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
                            <span>5</span>
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
                               <p class="form-p1">34. 据您所知，配方奶粉对孩子的好处与母乳一样吗？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage8"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '不一样',value: '1'},{ label: '配方奶粉和母乳对孩子的好处差不多',value: '2'},{ label: '不清楚',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">35. 对于“母乳喂养可以有益于孩子的智力发展”这句话，您的观点是？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage8"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '母乳喂养有利于儿童智力发育',value: '1'},{ label: '母乳喂养可能有利于智力发育',value: '2'},{ label: '母乳喂养和良好的养育环境一起促进儿童智力发育',value: '3'},{ label: '母乳喂养与智力发育没有必然联系',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">36. 您是否听说过“母乳喂养的孩子长大后肥胖以及糖尿病风险低”？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage8"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '没有听说过',value: '1'},{ label: '听说过，但是证据不够充分，需要进一步验证',value: '2'},{ label: '听说过，母乳喂养预防成人期慢性病，降低肥胖和 2 型糖尿病风险',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">37. 当广告上宣传：“某种奶粉能让孩子睡眠良好，减少夜间哭啼”，您会去尝试吗？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage8"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '会尝试',value: '1'},{ label: '了解更多信息之后，再决定',value: '2'},{ label: '不相信，不会尝试',value: '3'},{ label: '说不好',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">38. 当朋友说：“某种奶粉能让孩子睡眠良好，减少夜间哭啼”，您会去尝试吗？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage8"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
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
                            <span>5</span>
                            </div>
                            <button  class="btn" @click="changePage('8','9','requrePage6')" :class= "{ disabledBtn: false }"> 下一页</button>
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
                               <p class="form-p1">39. 孩子出生后，您从哪些途径获得过购买奶粉的优惠方式？（多选题）<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        title=""
                                        class="requrePage9" data-name="Zjbbwt"
                                        v-model="dataList.Zjbbwt"
                                        :options="[{ label: '超市或母婴店的奶粉促销活动',value: '1'},{ label: '购物网站、公共场所、大众媒体等发布的奶粉促销活动',value: '2'},{ label: '亲戚朋友的介绍 ',value: '3'},{ label: '医院工作人员的推荐 ',value: '4'},{ label: '其他',value: '5'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">40. 孩子出生后，有人告诉过您“母乳喂养有困难时找谁咨询或解决困难”吗？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage9"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '有',value: 'a'},{ label: '没有',value: 'b'}]">
                                    </super-radio>
                                </div>
                            </div>     
                            <div class="form-list">
                               <p class="form-p1">她/他告诉您咨询或解决困难的途径包括（多选题）<span class="isRed Hyzk">*</span></p>
                               <div class="check-list"  >
                                    <super-checklist
                                        title=""
                                        class="requrePage9" data-name="Zjbbwt" 
                                        v-model="dataList.Zjbbwt"
                                        :options="[{ label: '找亲友、家里老人',value: '1'},{ label: '找周围有最近育儿经验的人',value: '2'},{ label: '找催乳师、通乳师或者月嫂 ',value: '3'},{ label: '找医护人员 ',value: '4'},{ label: '找其他人 ',value: '5'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <h3>D. 最小孩子的喂养打算<span style="color:#999999;font-size:16px;">(这里，我想了解一下您当时打算如何喂养您最小的孩子的)</span></h3>
                            <div class="form-list">
                               <p class="form-p1">41. 您什么时候决定了孩子的喂养方式？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage9"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
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
                            <span>5</span>
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
                               <p class="form-p1">42. 当时您决定如何喂养您的孩子？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        title=""
                                        class="requrePage10" data-name="Zjbbwt"
                                        v-model="dataList.Zjbbwt"
                                        :options="[{ label: '纯母乳喂养（即不喂给婴儿除母乳之外的任何食物或饮料，甚至不不喂水）',value: 'a'},{ label: '混合喂养（母乳和配方奶一起喂）',value: 'b'},{ label: '人工喂养（只喂配方奶） ',value: 'c'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">您当时计划纯母乳喂养多久？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage10"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '1 个月',value: '1'},{ label: '2 个月',value: '2'},{ label: '3 个月',value: '3'},{ label: '4 个月',value: '4'},{ label: '5 个月',value: '5'},{ label: '6 个月以上',value: '6'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">您当时计划喂母乳到孩子多大（包括添加辅食后）？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage10"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '1 个月',value: '1'},{ label: '2 个月',value: '2'},{ label: '3 个月',value: '3'},{ label: '4 个月',value: '4'},{ label: '6 个月',value: '5'},{ label: '9 个月',value: '6'},{ label: '12 个月',value: '7'},{ label: '18 个月',value: '6'},{ label: '24 个月',value: '9'},{ label: '没计划，能喂多久就多久',value: '10'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">为什么选择混合喂养？（多选题）<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        class="requrePage10"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '担心奶水不足',value: '1'},{ label: '产后返岗',value: '2'},{ label: '身体状况不佳',value: '3'},{ label: '周围朋友/同事都是混合喂养',value: '4'},{ label: '母乳喂养好，配方粉也不错',value: '5'},{ label: '其他',value: '6'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">为什么只喂配方奶？（多选题）<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        class="requrePage10"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
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
                            <span>5</span>
                            </div>
                            <button  class="btn" @click="changePage('10','11','requrePage9')" :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--page11-->
            <div class="pag11" v-if="page11">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <div class="form-list">
                               <p class="form-p1">43. 否与丈夫讨论过喂养方式？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        title=""
                                        class="requrePage11" data-name="Zjbbwt"
                                        v-model="dataList.Zjbbwt"
                                        :options="[{ label: '讨论过',value: 'a'},{ label: '没讨论过',value: 'b'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">当时您丈夫倾向于选择哪种喂养方式？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage10"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '纯母乳喂养',value: '1'},{ label: '混合喂养',value: '2'},{ label: '人工喂养',value: '3'},{ label: '没有倾向和偏好',value: '4'},{ label: '不知道',value: '5'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <h3>E. 最小孩子的母乳喂养实际情况<span style="color:#999999;font-size:16px;">(现在我问一下你是怎么喂自己孩子的)</span></h3>
                            <div class="form-list">
                               <p class="form-p1">44. 孩子喂过母乳吗？（包括喂挤出的母乳和其他母亲的乳汁。只要喂过母乳就可以，喂多长时间没有关系。）<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage10"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">为什么没给孩子喂母乳？（多选题）<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        class="requrePage10"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '我之前就没打算喂母乳',value: '1'},{ label: '我没奶/奶水不够',value: '2'},{ label: '我生病或身体状况不允许',value: '3'},{ label: '孩子当时生病/住在新生儿监护室/接受特殊护理',value: '4'},{ label: '孩子对母乳不感兴趣/拒绝乳头/拒绝吸吮乳头',value: '5'},{ label: '其他原因',value: '6'},{ label: '不记得了/不知道',value: '7'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">45. 产后您第一次让孩子直接吸吮乳头吃母乳是什么时候？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                    <super-radio
                                        class="requrePage5"
                                        pickContent="clot8"
                                        defaultValue="1"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsrw"
                                        v-model="dataList.Jtnsrw"
                                        :options="[{ label: '产后 30 分钟之内',value: '1'},{ label: '产后 1 小时内',value: '2'},{ label: '产后 24 小时内(产后__小时)',value: '3',
                                        picker:true,filed:dataList.Pybblxpdsj2,name:'dataList.Pybblxpdsj2',placeholder:'请选择',icon:'小时'},
                                        { label: '产后 24 小时后',value: '4'},{ label: '住院期间没让孩子接触乳头',value: '5'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">为什么住院期间没让孩子接触乳头？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-checklist
                                        class="requrePage10"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
                                        :options="[{ label: '孩子当时生病/住在新生儿监护室/接受特殊护理',value: '1'},{ label: '我生病/太累了',value: '2'},{ label: '我当时没下奶',value: '3'},{ label: '我当时打算把母乳吸出来给孩子喝',value: '4'},{ label: '其他原因',value: '5'},{ label: '不记得了',value: '6'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                               <p class="form-p1">46. 孩子出生后吃的第一口食物是？<span class="isRed Jtnsr">*</span></p>
                               <div class="check-list"  >
                                   <super-radio
                                        class="requrePage10"
                                        @changeInput="changeInput(dataList.Jtnsr,'Jtnsr')"
                                        title=""  data-name="Jtnsr"
                                        v-model="dataList.Jtnsr"
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
                            <span>5</span>
                            </div>
                            <button  class="btn" @click="changePage('11','12','requrePage9')" :class= "{ disabledBtn: false }"> 下一页</button>
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
                    as:'2年 10个月'
                },
                page1:false,
                page2:false,
                page3:false,
                page4:false,
                page5:false,
                page6:false,
                page7:false,
                page8:false,
                page9:false,
                page10:false,
                page11:true,
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