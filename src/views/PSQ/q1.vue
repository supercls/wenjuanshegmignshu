<template>
    <div class="zf-wrapper">
        <!-- <headers heaTitle='医疗机构调查表' :showBack="false"></headers> -->
        <div class="qs-content mint-tab-container">
            <div class="page1" v-if="page1">
                <div class="top">
                    <p>为了进一步了解母子健康APP试点地区及试点机构妇幼健康基本情况、信息化建设情况、母子健康APP推广应用情况及健康教育开展情况，
                        中国疾病预防控制中心妇幼中心开展了本次调查。本调查对项目开展十分重要，请您逐项准确填报，避免空项及错填。</p>
                    <p>本次调查问卷所有信息及问题答案将受到严格保密，仅供研究使用，不会向研究无关的人提供任何信息。感谢您的积极参与。</p>
                    <p>请在题目后相应横线处填写答案或选择相应序号。如无特殊说明，题目均为单选。</p>
                </div>
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <drage-input v-model="dataList.FillerName" label="填表人"  type="text" :required="true" class="requrePage1" data-name="FillerName">
                            </drage-input>
                            <drage-input v-model="dataList.FillDate" :required="true" :keyValue.sync="dataList.FillDate" typeItem="date" :disabled="true"  :iconRight="true" label="填表日期" class="requrePage1" data-name="FillDate">
                            </drage-input>
                            <drage-input v-model="dataList.FillerMobileTel" label="联系电话"  type="text" :required="true" class="requrePage1" data-name="FillerMobileTel">
                            </drage-input>
                            <div style="margin:20px auto;"></div>
                            <!---->
                            <drage-input v-model="dataList.Auditor" label="审核人"  type="text" :required="true" class="requrePage1" data-name="Auditor">
                            </drage-input>
                            <drage-input v-model="dataList.AuditDate" :required="true" :keyValue.sync="dataList.AuditDate" typeItem="date" :disabled="true"  :iconRight="true" label="审核时间" class="requrePage1" data-name="AuditDate">
                            </drage-input>
                            <drage-input v-model="dataList.AuditMobileTel" label="联系电话"  type="text" :required="true" class="requrePage1" data-name="AuditMobileTel">
                            </drage-input>
                            <div style="margin:20px auto;"></div>
                            <!---->
                            <drage-input1 v-model="dataList.OrganDistrictName" :keyValue.sync="dataList.OrganDistrictName" :required="true"
                                        :modelValue.sync="dataList.OrganDistrictNo"    typeItem="pickCounty"
                                        :disabled="true" :iconRight="true" label="机构所在地" class="requrePage1" data-name="OrganDistrictNo">
                            </drage-input1>
                            <drage-input v-model="dataList.OrganName" label="机构名称"  type="text" :required="true" class="requrePage1" data-name="OrganName">
                            </drage-input>
                            <drage-input v-model="dataList.model1" :keyValue.sync="dataList.OrganGrade"
                                        class="requrePage1" data-name="OrganGrade" :iconRight="true"  :isStr="true"
                                        :slotContent="slotContent1" typeItem="pickeMore" :required="true"
                                        :disabled="true"  label="机构等级" >
                            </drage-input>
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
                            <div class="form-list">
                                <p class="form-p1">1.机构性质</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage2" data-name="OrganType"
                                        v-model="dataList.OrganType"
                                        :options="[{ label: '县级妇幼保健院',value: '1'},{ label: '县级综合医院',value: '2'},{ label: ' 乡镇卫生院',value: '3'},{ label: '社区卫生服务中心',value: '4'},{ label: '专科医院',value: '5'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" >
                                <p class="form-p1">2.本机构相关信息（请填写2018年全年信息，保留小数点后2位）<span></span></p>
                                <div class="form-inp requrePage2" data-name="MaternalCount" data-or="MaternalCountUn">
                                    <drage-input v-model="dataList.MaternalCount" label="产妇数(例)"  type="number" :isNum="5" clearName="MaternalCountUn">
                                    </drage-input>
                                    <drage-input v-model="dataList.MaternalCountUn"  :keyValue.sync="dataList.MaternalCountUn" 
                                        @updateRight="updateRight(dataList.MaternalCountUn,'MaternalCount')"
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="产妇数未统计" >
                                    </drage-input>
                                </div>
                                <div class="form-inp requrePage2" data-name="appCount" data-or="AppCountUn">
                                    <drage-input v-model="dataList.appCount" label="其中，应用母子健康手册的产妇数（例）" type="number" :isNum="5" clearName="AppCountUn">
                                    </drage-input>
                                    <drage-input v-model="dataList.AppCountUn"  :keyValue.sync="dataList.AppCountUn" 
                                        placeholder="请选择"
                                        @updateRight="updateRight(dataList.AppCountUn,'appCount')"
                                        typeItem="checkRight"
                                        :disabled="true"  label="应用母子健康手册的产妇数未统计" >
                                    </drage-input>
                                </div>
                                <div class="form-inp requrePage2" data-name="LiveBirthCount" data-or="LiveBirthCountUn">
                                    <drage-input v-model="dataList.LiveBirthCount" label="活产数(例)" type="number" :isNum="5" clearName="LiveBirthCountUn">
                                    </drage-input>
                                    <drage-input v-model="dataList.LiveBirthCountUn"  :keyValue.sync="dataList.LiveBirthCountUn"
                                        @updateRight="updateRight(dataList.LiveBirthCountUn,'LiveBirthCount')" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="活产数未统计" >
                                    </drage-input>
                                </div>
                                <div class="form-inp requrePage2" data-name="JdeCount" data-or="JdeCountUn">
                                    <drage-input v-model="dataList.JdeCount" label="巨大儿数(例)"  type="number" :isNum="5" clearName="JdeCountUn">
                                    </drage-input>
                                    <drage-input v-model="dataList.JdeCountUn"  :keyValue.sync="dataList.JdeCountUn"
                                        @updateRight="updateRight(dataList.JdeCountUn,'JdeCount')"
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="巨大儿数未统计" >
                                    </drage-input>
                                </div>
                                <div class="form-inp requrePage2" data-name="PgcCount" data-or="PgcCountUn">
                                    <drage-input v-model="dataList.PgcCount" label="剖宫产数（例）"  type="number" :isNum="5" clearName="PgcCountUn">
                                    </drage-input>
                                    <drage-input v-model="dataList.PgcCountUn"  :keyValue.sync="dataList.PgcCountUn"
                                        @updateRight="updateRight(dataList.PgcCountUn,'PgcCount')" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="剖宫产数未统计" >
                                    </drage-input>
                                </div>
                                <div class="form-inp requrePage2" data-name="GwrssCount" data-or="GwrrsUn">
                                    <drage-input v-model="dataList.GwrssCount" label="高危妊娠数（妊娠风险分级为黄色及以上的例数）"  type="number" :isNum="5" clearName="GwrrsUn">
                                    </drage-input>
                                    <drage-input v-model="dataList.GwrrsUn"  :keyValue.sync="dataList.GwrrsUn"
                                        @updateRight="updateRight(dataList.GwrrsUn,'GwrssCount')"  
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="高危妊娠数未统计" >
                                    </drage-input>
                                </div>
                                <div class="form-inp requrePage2" data-name="GwrrsCount_Yellow" data-or="GwrrsCountUn_Yellow">
                                    <drage-input v-model="dataList.GwrrsCount_Yellow" label="其中黄色例数（例）"  type="number" :isNum="5" clearName="GwrrsCountUn_Yellow">
                                    </drage-input>
                                    <drage-input v-model="dataList.GwrrsCountUn_Yellow"  :keyValue.sync="dataList.GwrrsCountUn_Yellow"
                                        @updateRight="updateRight(dataList.GwrrsCountUn_Yellow,'GwrrsCount_Yellow')"   
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="黄色例数未统计" >
                                    </drage-input>
                                </div>
                                <div class="form-inp requrePage2" data-name="GwrrsCount_Organge" data-or="GwrrsCountUn_Organge">
                                    <drage-input v-model="dataList.GwrrsCount_Organge" label="其中橙色例数（例）"  type="number" :isNum="5" clearName="GwrrsCountUn_Organge">
                                    </drage-input>
                                    <drage-input v-model="dataList.GwrrsCountUn_Organge"  :keyValue.sync="dataList.GwrrsCountUn_Organge"
                                        @updateRight="updateRight(dataList.GwrrsCountUn_Organge,'GwrrsCount_Organge')"    
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="橙色例数未统计" >
                                    </drage-input>
                                </div>
                                <div class="form-inp requrePage2" data-name="GwrrsCount_Red" data-or="GwrrsCountUn_Red">
                                    <drage-input v-model="dataList.GwrrsCount_Red" label="其中红色例数（例）" type="number" :isNum="5" clearName="GwrrsCountUn_Red">
                                    </drage-input>
                                    <drage-input v-model="dataList.GwrrsCountUn_Red"  :keyValue.sync="dataList.GwrrsCountUn_Red"
                                        @updateRight="updateRight(dataList.GwrrsCountUn_Red,'GwrrsCount_Red')"     
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="红色例数未统计" >
                                    </drage-input>
                                </div>
                                 <div class="form-inp requrePage2" data-name="GwrrsCount_Purple" data-or="GwrrsCountUn_Purple">
                                    <drage-input v-model="dataList.GwrrsCount_Purple" label="其中紫色例数（例）"  type="number" :isNum="5" clearName="GwrrsCountUn_Purple">
                                    </drage-input>
                                    <drage-input v-model="dataList.GwrrsCountUn_Purple"  :keyValue.sync="dataList.GwrrsCountUn_Purple" 
                                        @updateRight="updateRight(dataList.GwrrsCountUn_Purple,'GwrrsCount_Purple')"     
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="紫色例数未统计" >
                                    </drage-input>
                                </div> 
                                <div class="form-inp requrePage2" data-name="MrwyCount" data-or="MrwyCountUn">
                                    <drage-input v-model="dataList.MrwyCount" label="本机构出院前纯母乳喂养例数（例）" type="number" :isNum="5"  clearName="MrwyCountUn">
                                    </drage-input>
                                    <drage-input v-model="dataList.MrwyCountUn"  :keyValue.sync="dataList.MrwyCountUn"
                                        @updateRight="updateRight(dataList.MrwyCountUn,'MrwyCount')"  
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="本机构出院前纯母乳喂养例数未统计" >
                                    </drage-input>
                                </div>
                                <div class="form-inp requrePage2" data-name="Yyghbl" data-or="YyghblUn">
                                    <drage-input v-model="dataList.Yyghbl" label="本机构网上预约挂号比例（%）"  type="number" :isNum="5" clearName="YyghblUn">
                                    </drage-input>
                                    <drage-input v-model="dataList.YyghblUn"  :keyValue.sync="dataList.YyghblUn" 
                                        @updateRight="updateRight(dataList.YyghblUn,'Yyghbl')"  
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="本机构网上预约挂号比例未统计" >
                                    </drage-input>
                                </div>
                                <div class="form-inp requrePage2" data-name="Xszfbl" data-or="XszfblUn">
                                    <drage-input v-model="dataList.Xszfbl" label="本机构线上支付比例（%）"  type="number" :isNum="5" clearName="XszfblUn">
                                    </drage-input>
                                    <drage-input v-model="dataList.XszfblUn"  :keyValue.sync="dataList.XszfblUn" 
                                        @updateRight="updateRight(dataList.XszfblUn,'Xszfbl')"  
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="本机构线上支付比例未统计" >
                                    </drage-input>
                                </div>
                                <div class="form-inp requrePage2" data-name="JgAppCount" data-or="JgAppCountUn">
                                    <drage-input v-model="dataList.JgAppCount" label="本机构2018年母子健康APP覆盖人数（例）" type="number" :isNum="5"  clearName="JgAppCountUn">
                                    </drage-input>
                                    <drage-input v-model="dataList.JgAppCountUn"  :keyValue.sync="dataList.JgAppCountUn" 
                                        @updateRight="updateRight(dataList.JgAppCountUn,'JgAppCount')"  
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="本机构2018年母子健康APP覆盖人数未统计" >
                                    </drage-input>
                                </div>
                                <!---->
                            </div>
                            <div class="form-list"  v-if="dataList.OrganType=='1'">
                                <p class="form-p1">3.本辖区相关信息（填写2018年全年信息，仅限县级妇幼保健院填写</p>
                                <div class="form-inp requrePage2" data-name="ZcjgCount" data-or="ZcjgCountUn">
                                    <drage-input v-model="dataList.ZcjgCount" label="本辖区助产机构数（所）"  type="number" :isNum="5" clearName="ZcjgCountUn">
                                    </drage-input>
                                    <drage-input v-model="dataList.ZcjgCountUn"  :keyValue.sync="dataList.ZcjgCountUn" 
                                        @updateRight="updateRight(dataList.ZcjgCountUn,'ZcjgCount')"  
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="本辖区助产机构数未统计" >
                                    </drage-input>
                                </div>
                                <div class="form-inp requrePage2" data-name="XqAppJGCount" data-or="XqAppJGCountUn">
                                    <drage-input v-model="dataList.XqAppJGCount" label="本辖区母子健康APP覆盖机构数（所）"  type="number" :isNum="5" clearName="XqAppJGCountUn">
                                    </drage-input>
                                    <drage-input v-model="dataList.XqAppJGCountUn"  :keyValue.sync="dataList.XqAppJGCountUn"
                                        @updateRight="updateRight(dataList.XqAppJGCountUn,'XqAppJGCount')" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="本辖区母子健康APP覆盖机构数未统计  " >
                                    </drage-input>
                                </div>
                                <div class="form-inp requrePage2" data-name="Xqhcs" data-or="XqhcsUn">
                                    <drage-input v-model="dataList.Xqhcs" label="本辖区活产数（例）"  type="number" :isNum="5" clearName="XqhcsUn">
                                    </drage-input>
                                    <drage-input v-model="dataList.XqhcsUn"  :keyValue.sync="dataList.XqhcsUn"
                                        @updateRight="updateRight(dataList.XqhcsUn,'Xqhcs')"  
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="本辖区活产数未统计" >
                                    </drage-input>
                                </div>
                                 <div class="form-inp requrePage2" data-name="Xqgwrrs" data-or="XqgwrrsUn">
                                    <drage-input v-model="dataList.Xqgwrrs" label="本辖区2018年高危妊娠数（妊娠风险分级为黄色及以上的例数）（例）"  type="number" :isNum="5" clearName="XqgwrrsUn">
                                    </drage-input>
                                    <drage-input v-model="dataList.XqgwrrsUn"  :keyValue.sync="dataList.XqgwrrsUn" 
                                         @updateRight="updateRight(dataList.XqgwrrsUn,'Xqgwrrs')"  
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="本辖区2018年高危妊娠数（妊娠风险分级为黄色及以上的例数）未统计" >
                                    </drage-input>
                                </div>
                               <div class="form-inp requrePage2" data-name="Xqgwrrs_Yellow" data-or="XqgwrrsUn_Yellow">
                                    <drage-input v-model="dataList.Xqgwrrs_Yellow" label="其中黄色例数（例）"  type="number" :isNum="5" clearName="XqgwrrsUn_Yellow">
                                    </drage-input>
                                    <drage-input v-model="dataList.XqgwrrsUn_Yellow"  :keyValue.sync="dataList.XqgwrrsUn_Yellow"
                                        @updateRight="updateRight(dataList.XqgwrrsUn_Yellow,'Xqgwrrs_Yellow')"   
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="黄色例数未统计" >
                                    </drage-input>
                                </div>
                                 <div class="form-inp requrePage2" data-name="Xqgwrrs_Organge" data-or="XqgwrrsUn_Organge">
                                    <drage-input v-model="dataList.Xqgwrrs_Organge" label="其中橙色例数（例）"  type="number" :isNum="5"  clearName="XqgwrrsUn_Organge">
                                    </drage-input>
                                    <drage-input v-model="dataList.XqgwrrsUn_Organge"  :keyValue.sync="dataList.XqgwrrsUn_Organge" 
                                        @updateRight="updateRight(dataList.XqgwrrsUn_Organge,'Xqgwrrs_Organge')"   
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="橙色例数未统计" >
                                    </drage-input>
                                </div>
                                <div class="form-inp requrePage2" data-name="Xqgwrrs_Red" data-or="XqgwrrsUn_Red">
                                    <drage-input v-model="dataList.Xqgwrrs_Red" label="其中红色例数（例）"  type="number" :isNum="5" clearName="XqgwrrsUn_Red">
                                    </drage-input>
                                    <drage-input v-model="dataList.XqgwrrsUn_Red"  :keyValue.sync="dataList.XqgwrrsUn_Red"
                                        @updateRight="updateRight(dataList.XqgwrrsUn_Red,'Xqgwrrs_Red')"    
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="红色例数未统计" >
                                    </drage-input>
                                </div>
                                <div class="form-inp requrePage2" data-name="Xqgwrrs_Purple" data-or="XqgwrrsUn_Purple">
                                    <drage-input v-model="dataList.Xqgwrrs_Purple" label="其中紫色例数（例）"  type="number" :isNum="5" clearName="XqgwrrsUn_Purple">
                                    </drage-input>
                                    <drage-input v-model="dataList.XqgwrrsUn_Purple"  :keyValue.sync="dataList.XqgwrrsUn_Purple"
                                        @updateRight="updateRight(dataList.XqgwrrsUn_Purple,'Xqgwrrs_Purple')"     
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="紫色例数未统计" >
                                    </drage-input>
                                </div>
                                <!---->
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
                            <h3>二、当地APP建设、改造和使用情况</h3>
                            <div class="form-list">
                                <p class="form-p1">4.本机构互联网技术相关的应用有（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        class="requrePage3 moreCheck" data-name="Jghlwjs"  data-next="Jghlwjs2"  data-count="10"
                                        @change="changeValue(dataList.Jghlwjs,'Jghlwjs','1')"
                                        v-model="dataList.Jghlwjs"
                                        :options="[{ label: '无',value: '1'},{ label: '相关网站',value: '2'},{ label: ' 相关APP',value: '3'},{ label: '物联网技术',value: '4'},{ label: '远程医疗服务',value: '5'},{ label: '就诊环境免费提供wifi',value: '6'},{ label: '使用一卡通（机构内）',value: '7'},{ label: '使用一卡通（辖区内）',value: '8'},{ label: 'HIS等系统与区域卫生信息平台对接',value: '9'},{label:'其他',value:'10'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.Jghlwjs||[]).indexOf('10')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Jghlwjs2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">5.本机构使用的“互联网+妇幼保健”相关APP有（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        class="requrePage3 moreCheck" data-name="JgApp" data-next="JgApp2"  data-count="6"
                                        @change="changeValue(dataList.JgApp,'JgApp','1')"
                                        v-model="dataList.JgApp"
                                        :options="[{ label: '无',value: '1'},{ label: '微信（包括微信公众号、订阅号或企业号，不包括面向服务对象和医务人员的微信群）',value: '2'},{ label: ' 支付宝',value: '3'},{ label: '本机构或本地区自主开发的APP',value: '4'},{ label: '包含母子健康手册功能的APP',value: '5'},{label:'其他',value:'6'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.JgApp||[]).indexOf('6')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.JgApp2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.JgApp!='1'">
                                <p class="form-p1">6.本机构APP面向服务对象提供的服务有（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                         class="requrePage3 moreCheck" data-name="Jgfw" data-next="Jgfw2" data-count="12"
                                        @change="changeValue(dataList.Jgfw,'Jgfw','1')"
                                        v-model="dataList.Jgfw"
                                        :options="[{ label: '无',value: '1'},{ label: '医院信息、就医、出诊等信息查询',value: '2'},{ label: ' 健康宣教',value: '3'},{ label: '预约挂号/预约医技检查',value: '4'},{ label: '线上孕妇学校',value: '5'},{ label: '线下课程预约',value: '6'},{ label: '自助缴费和相关费用查询',value: '7'},{ label: '产检、儿童体检或预防接种提醒服务',value: '8'},{ label: '产检或儿童体检信息上传',value: '9'},{ label: '医患互动咨询',value: '10'},{label:'就医满意度反馈/服务评价/投诉建议',value:'11'},{label:'其他',value:'12'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.Jgfw||[]).indexOf('12')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Jgfw2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.JgApp!='1'">
                                <p class="form-p1">7.本机构APP面向医生提供的服务有（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                         class="requrePage3 moreCheck" data-name="Jgysfw"  data-next="Jgysfw2" data-count="8"
                                        @change="changeValue(dataList.Jgysfw,'Jgysfw','1')"
                                        v-model="dataList.Jgysfw"
                                        :options="[{ label: '无',value: '1'},{ label: '查询患者基本信息',value: '2'},{ label: ' 查看患者检查报告（包括检验、影像报告等）',value: '3'},{ label: '查看患者诊疗情况',value: '4'},{ label: '下医嘱、写病历',value: '5'},{ label: '院内外会诊',value: '6'},{ label: '远程会诊',value: '7'},{label:'其他',value:'8'}]">
                                    </super-checklist>
                                    <mt-field  v-if="(dataList.Jgysfw||[]).indexOf('8')>-1"  placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Jgysfw2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.JgApp!='1'">
                                <p class="form-p1">8.本机构APP与哪些系统实现了信息互联互通？（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                         class="requrePage3 moreCheck" data-name="JgApphlht"  data-next="JgApphlht2"  data-count="7"
                                        @change="changeValue(dataList.JgApphlht,'JgApphlht','1')"
                                        v-model="dataList.JgApphlht"
                                        :options="[{ label: '无',value: '1'},{ label: '本院HIS系统',value: '2'},{ label: '医保系统',value: '3'},{ label: '公安系统',value: '4'},{ label: '计划免疫系统',value: '5'},{ label: '妇幼健康信息平台',value: '6'},{label:'其他',value:'7'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.JgApphlht||[]).indexOf('7')>-1"  placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.JgApphlht2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.JgApp!='1'">
                                <p class="form-p1">9.本机构APP实现的机构管理功能（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        class="requrePage3 moreCheck" data-name="JgAppjggl" data-next="JgAppjggl2"  data-count="8"
                                        @change="changeValue(dataList.JgAppjggl,'JgAppjggl','1')"
                                        v-model="dataList.JgAppjggl"
                                        :options="[{ label: '无',value: '1'},{ label: '移动办公',value: '2'},{ label: '资源调配',value: '3'},{ label: '成本效益分析',value: '4'},{ label: '绩效管理',value: '5'},{ label: '培训管理',value: '6'},{ label: '不良事件报告',value: '7'},{label:'其他',value:'8'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.JgAppjggl||[]).indexOf('8')>-1"   placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.JgAppjggl2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">10.本机构APP是否按照国家《母子健康APP》项目要求进行升级完善？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage3" data-name="JgAppsjws"
                                        v-model="dataList.JgAppsjws"
                                        :options="[{ label: '未进行',value: '1'},{ label: '进行中',value: '2'},{ label: '已完成',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">11.如进行了改造，改造内容包括？</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        class="requrePage3 moreCheck" data-name="JgAppsjwsnr" data-next="JgAppsjwsnr2"   data-count="3"
                                        v-model="dataList.JgAppsjwsnr"
                                        :options="[{ label: '增加了《母子健康APP》应用功能（如母子手册浏览、记录等）',value: '1'},{ label: '引入了《母子健康APP》健康教育内容',value: '2'},{label:'其他',value:'3'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.JgAppsjwsnr||[]).indexOf('3')>-1"   placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.JgAppsjwsnr2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">12.本机构如用《母子健康APP》，与哪些系统进行了信息互联互通？</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        @change="changeValue(dataList.Jgxxhlht,'Jgxxhlht','1')"
                                        class="requrePage3 moreCheck" data-name="Jgxxhlht" data-next="Jgxxhlht2"  data-count="7"
                                        v-model="dataList.Jgxxhlht"
                                        :options="[{ label: '无',value: '1'},{ label: '本院HIS系统',value: '2'},{ label: '医保系统',value: '3'},{ label: '公安系统',value: '4'},{ label: '计划免疫系统',value: '5'},{ label: '妇幼健康信息平台',value: '6'},{label:'其他',value:'7'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.Jgxxhlht||[]).indexOf('7')>-1"  placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Jgxxhlht2"></mt-field>
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
                            <h3>三、《母子健康APP》宣传应用情况</h3>
                            <div class="form-list">
                                <p class="form-p1">13.本机构是否已经开始推广使用《母子健康APP》?</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage4" data-name="Jgkstgapp"
                                        v-model="dataList.Jgkstgapp"
                                        :options="[{ label: '使用',value: '1'},{ label: '未使用',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.Jgkstgapp!='2'">
                                <p class="form-p1">14.该项目宣传推广是否具体到某个部门负责？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage4" data-name="Jgtgbm"  data-next="Jgtgbm2"  data-count="7"
                                        v-model="dataList.Jgtgbm"
                                        :options="[{ label: '无',value: '1'},{ label: '医院宣传科',value: '2'},{ label: '儿童保健科',value: '3'},{ label: '信息科',value: '4'},{ label: '健康教育科',value: '5'},{ label: '保健科',value: '6'},{ label: '其他',value: '7'}]">
                                    </super-radio>
                                    <mt-field v-if="dataList.Jgtgbm=='7'" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Jgtgbm2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">15.没有推广使用/或推广不顺畅的原因是：</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        class="requrePage4 moreCheck" data-name="Tgbscyy" data-next="Tgbscyy2" data-count="10"
                                        v-model="dataList.Tgbscyy"
                                        :options="[{ label: '领导不认可',value: '1'},{ label: '机构内wifi信息不通畅',value: '2'},{ label: '硬件设备不具备',value: '3'},{ label: '政策不允许',value: '4'},{ label: '本机构有类似APP',value: '5'},{ label: '担心信息安全',value: '6'},{ label: '服务对象认可度低',value: '7'},{ label: '医务人员认可度低',value: '8'},{ label: '缺乏经费进行推广',value: '9'},{ label: '其他',value: '10'}]">
                                    </super-checklist>
                                    <mt-field  v-if="(dataList.Tgbscyy||[]).indexOf('10')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Tgbscyy2"></mt-field>
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
                            <h3>四、本机构健康教育开展情况</h3>
                            <div class="form-list">
                                <p class="form-p1">16.本机构是否有独立的健康教育部门？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage5" data-name="Sfyjkjybm"
                                        v-model="dataList.Sfyjkjybm"
                                        :options="[{ label: '有',value: '1'},{ label: '无',value: '2'}]">
                                    </super-radio>
                                 </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">17.本机构是否由专人负责健康教育工作？</p>
                                <div class="check-list">
                                <super-radio
                                    title=""
                                    class="requrePage5" data-name="Sfyzrfzjkjy"
                                    v-model="dataList.Sfyzrfzjkjy"
                                    :options="[{ label: '有',value: '1'},{ label: '无',value: '2'}]">
                                </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">18.本机构提供的健康教育信息主要来源于？</p>
                                <div class="check-list">
                                <super-checklist
                                    title=""
                                     class="requrePage5 moreCheck" data-name="Jkjyly" data-next="Jkjyly2"   data-count="4"
                                    v-model="dataList.Jkjyly"
                                    :options="[{ label: '网络',value: '1'},{ label: '医生经验总结',value: '2'},{ label: '项目总结',value: '3'},{ label: '其他',value: '4'}]">
                                </super-checklist>
                                <mt-field v-if="(dataList.Jkjyly||[]).indexOf('4')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Jkjyly2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">19.本机构对孕产妇进行健康教育的主要形式有（可多选）</p>
                                <div class="check-list">
                                <super-checklist
                                    title=""
                                     class="requrePage5 moreCheck" data-name="Jkjyxs" data-next="Jkjyxs2"   data-count="6"
                                    v-model="dataList.Jkjyxs"
                                    :options="[{ label: '孕妇学校',value: '1'},{ label: '家长学校',value: '2'},{ label: '医生咨询',value: '3'},{ label: '宣传折页、小册子等纸质材料',value: '4'},{ label: '医院互联网（如微信公众号）',value: '5'},{ label: '其他',value: '6'}]">
                                </super-checklist>
                                <mt-field v-if="(dataList.Jkjyxs||[]).indexOf('6')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Jkjyxs2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">20.本机构对儿童家长进行健康教育的主要形式有</p>
                                <div class="check-list">
                                <super-checklist
                                    title=""
                                    class="requrePage5 moreCheck" data-name="Jzjkjyxs" data-next="Jzjkjyxs2"  data-count="6"
                                    v-model="dataList.Jzjkjyxs"
                                    :options="[{ label: '孕妇学校',value: '1'},{ label: '家长学校',value: '2'},{ label: '医生咨询',value: '3'},{ label: '宣传折页、小册子等纸质材料',value: '4'},{ label: '医院互联网（如微信公众号）',value: '5'},{ label: '其他',value: '6'}]">
                                </super-checklist>
                                <mt-field v-if="(dataList.Jzjkjyxs||[]).indexOf('6')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Jzjkjyxs2"></mt-field>
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
    </div>
</template>
<script>
import headers from '@/components/header/header'
import drageInput from '@/components/nomal/drageInput'
import superChecklist from '@/components/nomal/checklist'
import drageInput1 from '@/components/nomal/drageInput'
import {SaveQuestionair_Hospital} from '@/api/user.js'
import {isvalidUsername} from '@/utils/vaildata'
import {dateFunction}  from '@/utils/dateFormat'
import superRadio from '@/components/nomal/superRadio'
export default {
    name:'hello',
    data(){
        return {
            dataList:{
                OrganGrade:'',
                FillDate:dateFunction('yyyy-MM-dd',new Date())
            },
            page1:true,
            page2:false,
            page3:false,
            page4:false,
            page5:false,
            slotContent1: {   //分娩方式
                columns: 1,
                default:[{text: '一级甲等', value: '一级甲等'}],
                pData1: [
                    {text: '一级甲等', value: '一级甲等'},
                    {text: '一级乙等', value: '一级乙等'},
                    {text: '一级丙等', value: '一级丙等'},
                    {text: '一级未定级', value: '一级未定级'},
                    {text: '二级甲等', value: '二级甲等'},
                    {text: '二级乙等', value: '二级乙等'},
                    {text: '二级丙等', value: '二级丙等'},
                    {text: '二级未定级', value: '二级未定级'},
                    {text: '三级甲等', value: '三级甲等'},
                    {text: '三级乙等', value: '三级乙等'},
                    {text: '三级丙等', value: '三级丙等'},
                    {text: '三级未定级', value: '三级未定级'},
                    {text: '未定级', value: '未定级'},
                ]
            },
            checkObj:{},
            hasReady:true
        }
    },
    watch:{
        popupVisible(newQuestion, oldQuestion) {
            this.popupVisible ? this.closeTouch() : this.openTouch()
        }

    },
    components:{
        headers,
        drageInput,
        superChecklist,
        drageInput1,
        superRadio,
    },
    methods:{
        changeValue(val,name,item){   //特殊多选框，选了其他不允许继续选中
            if(val.length>0 && val.indexOf(item)>-1){
                let arr=[]
                arr.push(item)
                this.dataList[name]=arr
            }
        },
        updateRight(val,name){   //选中对勾，输入清空
            if(val=='1'){
                this.dataList[name]=''
            }
        },
        changePage(before,next,pageName){  //点击上一页，下一页并进行验证
            let isRequire=false;
            let arrDom=document.querySelectorAll(`.${pageName}`);
            let innerHtmlArr=[];
            for(let i=0;i<arrDom.length;i++){
                if(!arrDom[i].getAttribute('data-or')){
                    if( (!this.dataList[arrDom[i].getAttribute('data-name')]  && !this.dataList[arrDom[i].getAttribute('data-or')||''] 
                        || this.dataList[arrDom[i].getAttribute('data-name')].length==0)
                        || ((this.dataList[arrDom[i].getAttribute('data-name')]||'').indexOf(arrDom[i].getAttribute('data-count')|| 'M')>-1
                        && !this.dataList[arrDom[i].getAttribute('data-next')] && !arrDom[i].getAttribute('data-or')))
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
                else{
                     if(!this.dataList[arrDom[i].getAttribute('data-name')] && !this.dataList[arrDom[i].getAttribute('data-or')||'']){
                        if(!arrDom[i].querySelector('.drageInp')){
                            innerHtmlArr.push(arrDom[i].parentNode.parentNode.childNodes[0].innerText);
                        }
                        else{
                            innerHtmlArr.push(arrDom[i].querySelector('.mint-cell-text').innerText);
                        }
                        isRequire=true
                    }
                }
                
            }
            if(isRequire){
                this.$toast({
                    message:`请填写${innerHtmlArr[0]}`,
                     duration: 2000
                })
              //  return false;
            }
            let checkDom=document.querySelectorAll('.moreCheck')
            for(let i=0;i<checkDom.length;i++){
                this.checkObj[checkDom[i].getAttribute('data-name')]=(this.dataList[checkDom[i].getAttribute('data-name')] ||[""]).join(",")
            }
            let pageBefore='page'+before;
            let pageNext='page'+next;
            this[pageBefore]=false;
            this[pageNext]=true
            document.querySelector('.qs-content').scrollTop=0
        },
        submitForm(pageName){
            if(!this.hasReady) return false
            let isRequire=false
            let arrDom=document.querySelectorAll(`.${pageName}`);
            let innerHtmlArr=[];
            for(let i=0;i<arrDom.length;i++){
                 if( (!this.dataList[arrDom[i].getAttribute('data-name')]  && !this.dataList[arrDom[i].getAttribute('data-or')||''] 
                    || this.dataList[arrDom[i].getAttribute('data-name')].length==0)
                    || ((this.dataList[arrDom[i].getAttribute('data-name')]||'').indexOf(arrDom[i].getAttribute('data-count')|| 'M')>-1
                    && !this.dataList[arrDom[i].getAttribute('data-next')] && !arrDom[i].getAttribute('data-or')))
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
                return false
            }
            this.$messagebox.confirm('问卷提交后无法修改是否继续提交？').then(action => {
                let checkDom=document.querySelectorAll('.moreCheck')
                for(let i=0;i<checkDom.length;i++){
                    this.checkObj[checkDom[i].getAttribute('data-name')]=(this.dataList[checkDom[i].getAttribute('data-name')] ||[""]).join(",")
                }
                this.$indicator.open();
                SaveQuestionair_Hospital({...this.dataList,...this.checkObj}).then(res=>{
                    localStorage.setItem('zdHosptal',JSON.stringify(this.dataList))
                    this.hasReady=false
                    this.$toast({
                        message:'提交成功，稍后请自行退出'
                    })
                    this.$indicator.close();
                    WeixinJSBridge.call('closeWindow');
                }).catch(err=>{
                    this.$indicator.close();
                    console.log(err)
                })
                console.log(this.dataList)
            }).catch(error=>{
                console.log(error)
            })
        },
    },
    created(){

    },
    mounted(){
        if(localStorage.getItem('zdHosptal')){  //数据缓存
            this.dataList=JSON.parse(localStorage.getItem('zdHosptal'))
            this.hasReady=false
            this.$messagebox.alert('您已经提交过问卷了，请勿重复提交')
            return false
        }
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
    .isFixed{position:absolute;bottom:0;left:0;right:0;}
    .form-p1{
        font-size: 32px;
        color: #333;
        margin:20px 0  20px 0;
        span{font-size: 28px;color: #999}
    }
</style>