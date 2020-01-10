<template>
    <div class="zf-wrapper">
        <!-- <headers heaTitle='儿童家长调查表（不满1岁）' :showBack="false"></headers> -->
        <div class="qs-content mint-tab-container">
            <div class="page1" v-if="page1">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <h3>一、基本情况</h3>
                            <div class="form-list">
                                <p class="form-p1">1.填表人</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage1" data-name="Tbr"
                                        v-model="dataList.Tbr"
                                        :options="[{ label: '孩子母亲',value: '1'},{ label: '孩子父亲',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">2.孩子主要看护人</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage1" data-name="Hzzykhr"
                                        v-model="dataList.Hzzykhr"
                                        :options="[{ label: '父亲',value: '1'},{ label: '母亲',value:'2'},{ label: '祖辈',value:'3'},{ label: '其他',value:'4',other:true,filed:dataList.Hzzykhr2,name:'dataList.Hzzykhr2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <drage-input v-model="dataList.Mqnl" :keyValue.sync="dataList.Mqnl"
                                    :iocnRight="true"  unit="岁"
                                    class="requrePage1" data-name="Mqnl"
                                    :slotContent="slotContent3F" typeItem="pickeMore" :disabled="true"
                                    label="3.母亲年龄____周岁" >
                                </drage-input>
                            </div>
                            <div class="form-list">
                                <drage-input v-model="dataList.Fqnl" :keyValue.sync="dataList.Fqnl"
                                    :iocnRight="true"  unit="岁"
                                    class="requrePage1" data-name="Fqnl"
                                    :slotContent="slotContent3F" typeItem="pickeMore" :disabled="true"
                                    label="4.父亲年龄____周岁" >
                                </drage-input>
                            </div>
                            <div class="form-list">
                                <drage-input v-model="dataList.Ndmz" :keyValue.sync="dataList.Ndmz"
                                     :slotContent="slotContent2"  typeItem="pickeMore"
                                     class="requrePage1" data-name="Ndmz"
                                     :disabled="true" :iconRight="true" label="5.您的民族" >
                                </drage-input>
                            </div>
                            <div class="form-list">
                                <drage-input v-model="dataList.Zfmz" :keyValue.sync="dataList.Zfmz"
                                     :slotContent="slotContent2"  typeItem="pickeMore"
                                     class="requrePage1" data-name="Zfmz"
                                     :disabled="true" :iconRight="true" label="6.丈夫民族" >
                                </drage-input>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">7.母亲的户籍</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage1" data-name="Mqhj"
                                        v-model="dataList.Mqhj"
                                        :options="[{ label: '城市',value: '1'},{ label: '农村',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">8.父亲的户籍</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage1" data-name="Fqhj"
                                        v-model="dataList.Fqhj"
                                        :options="[{ label: '城市',value: '1'},{ label: '农村',value: '2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">9.父亲文化程度</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage1" data-name="Fqwhcd"
                                        v-model="dataList.Fqwhcd"
                                        :options="[{ label: '文盲',value: '1'},{ label: '小学',value: '2'},{ label: '初中',value: '3'},{ label: '高中/中专',value: '4'},{ label: '大专',value: '5'},{ label: '本科',value: '6'},{ label: '硕士及以上',value: '7'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">10.母亲的文化程度</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage1" data-name="Mqwhcd"
                                        v-model="dataList.Mqwhcd"
                                        :options="[{ label: '文盲',value: '1'},{ label: '小学',value: '2'},{ label: '初中',value: '3'},{ label: '高中/中专',value: '4'},{ label: '大专',value: '5'},{ label: '本科',value: '6'},{ label: '硕士及以上',value: '7'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">11.母亲职业</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage1" data-name="Mqzy"  data-next="Mqzy2"  data-count="8"
                                        v-model="dataList.Mqzy"
                                        :options="[{ label: '行政干部',value: '1'},{ label: '工人',value: '2'},{ label: '专业技术人员',value: '3'},{ label: '农民',value: '4'},{ label: '公司职员',value: '5'},{ label: '商业服务人员',value: '6'},{ label: '无业',value: '7'},{ label: '其他',value: '8'}]">
                                    </super-radio>
                                    <mt-field v-if="(dataList.Mqzy||'')=='8'" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Mqzy2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">12.父亲职业</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                         class="requrePage1" data-name="Fqzy"  data-next="Fqzy2"  data-count="8"
                                        v-model="dataList.Fqzy"
                                        :options="[{ label: '行政干部',value: '1'},{ label: '工人',value: '2'},{ label: '专业技术人员',value: '3'},{ label: '农民',value: '4'},{ label: '公司职员',value: '5'},{ label: '商业服务人员',value: '6'},{ label: '无业',value: '7'},{ label: '其他',value: '8'}]">
                                    </super-radio>
                                    <mt-field v-if="(dataList.Fqzy||'')=='8'" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Fqzy2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">13.家庭平均月收入</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage1" data-name="Jtpjysr"
                                        v-model="dataList.Jtpjysr"
                                        :options="[{ label: '3000元及以下',value: '1'},{ label: '3001-5000元',value: '2'},{ label: '5001-10000元',value: '3'},{ label: '10000元以上',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <h3>以下调查为您<b>最小孩子</b>的信息</h3>
                            <div class="form-list" style="margin-top:20px;">
                                <drage-input v-model="dataList.Hzcsrq" 
                                    :keyValue.sync="dataList.Hzcsrq" 
                                    class="requrePage1" data-name="Hzcsrq"
                                    typeItem="date" :disabled="true"  :iconRight="true" 
                                    label="14.您的孩子出生日期（阳历）：" >
                                </drage-input>
                            </div>
                            <div class="form-list" style="margin-top:20px;">
                                <drage-input v-model="dataList.Hzcstz" 
                                    class="requrePage1" data-name="Hzcstz"  isNum="4"
                                    placeholder="例如3000"
                                    :keyValue.sync="dataList.Hzcstz"  type="number"
                                      maxlength="6"
                                       unit="g"  label="15.您的孩子出生体重(g)：" >
                                </drage-input>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">16.家里最小的是您第几个孩子？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage1" data-name="Zxdsdjghz"
                                        v-model="dataList.Zxdsdjghz"
                                        :options="[{ label: '第1个',value: '1'},{ label: '第2个',value: '2'},{ label: '第3个及以上',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div style="margin:20px auto;"></div>
                        </div>
                    </div>        
                </div>
                <div class="bottom" >
                    <div class= "pagination">
                        <div class="pag-box">
                            <button  class="btn" :disabled= "true" :class= "{ disabledBtn: true }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1"> 2 </span>
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
                            <h3>二、育儿知识和行为</h3>
                            <div class="form-list">
                                <p class="form-p1">17.孩子满月后至1岁至少要做几次健康体检？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage2" data-name="Zjcjkjc"
                                        v-model="dataList.Zjcjkjc"
                                        :options="[{ label: '2次',value: '1'},{ label: '4次',value: '2'},{ label: '6次',value: '3'},{ label: '不知道',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">18.您认为宝宝生后，应该纯母乳喂养到几个月？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage2" data-name="Mrwydjgy"
                                        v-model="dataList.Mrwydjgy"
                                        :options="[{ label: '4个月',value: '1'},{ label: '5个月',value: '2'},{ label: '6个月',value: '3'},{ label: '7个月',value: '4'},{ label: '不清楚',value: '5'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">19.为预防佝偻病，宝宝生后需及时补充哪种维生素？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage2" data-name="Yfglbwss"
                                        v-model="dataList.Yfglbwss"
                                        :options="[{ label: '维生素A',value: '1'},{ label: '维生素B',value: '2'},{ label: '维生素C',value: '3'},{ label: '维生素D',value: '4'},{ label: '不清楚',value: '5'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">20.下列食物中，含铁最丰富的是？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage2" data-name="Htffdsw"
                                        v-model="dataList.Htffdsw"
                                        :options="[{ label: '蛋黄',value: '1'},{ label: '豆类',value: '2'},{ label: '谷类',value: '3'},{ label: '动物肝脏',value: '4'},{ label: '不清楚',value: '5'}]">
                                    </super-radio>
                                </div>
                            </div>
                             <div class="form-list">
                                <p class="form-p1">21.宝宝腹泻时，是否需要继续喂母乳？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage2" data-name="Bbfxxyjsm"
                                        v-model="dataList.Bbfxxyjsm"
                                        :options="[{ label: '需要',value: '1'},{ label: '不需要',value: '2'},{ label: '不清楚',value: '3'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">22.您了解乙肝疫苗的接种时间吗？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage2" data-name="Ygymjzsj"
                                        v-model="dataList.Ygymjzsj"
                                        :options="[{ label: '0、1月',value: '1'},{ label: '0、1月、6月',value: '2'},{ label: '0、1、6、12月 ',value: '3'},{ label: '不清楚',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">23.下面哪种情况，应该暂缓给孩子打疫苗？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage2" data-name="Nzqkzhdym"
                                        v-model="dataList.Nzqkzhdym"
                                        :options="[{ label: '哭闹时',value: '1'},{ label: '感冒发烧时',value: '2'},{ label: '饭后半小时 ',value: '3'},{ label: '不知道',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                             <div class="form-list">
                                <p class="form-p1">24.宝宝出现下列哪些情况属于危险症状？（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        class="requrePage2 moreCheck" data-name="Nzsywxzz"
                                        v-model="dataList.Nzsywxzz"
                                        :options="[{ label: '不能喝水或吃奶',value: '1'},{ label: '体温超过39.0℃',value: '2'},{ label: '呼吸40次/分 ',value: '3'},{ label: '嗜睡',value: '4'},{ label: '不清楚 ',value: '5'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">25.6个月宝宝出现哪些情况，提示可能存在异常情况？（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        class="requrePage2 moreCheck" data-name="Bbycqk"
                                        v-model="dataList.Bbycqk"
                                        :options="[{ label: '不会出声笑',value: '1'},{ label: '不会用拇食指対捏小物品',value: '2'},{ label: '不能扶坐 ',value: '3'},{ label: '紧握拳不松开',value: '4'},{ label: '不确定 ',value: '5'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">26.关于宝宝的口腔保健，以下说法正确的是（可多选） </p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        class="requrePage2 moreCheck" data-name="Bbkqbj"
                                        v-model="dataList.Bbkqbj"
                                        :options="[{ label: '宝宝通常4-10个月开始出牙',value: '1'},{ label: '夜间睡眠前可喂服1-2口温开水清洁口腔',value: '2'},{ label: '宝宝萌出第一颗乳牙就应开始清洁牙齿 ',value: '3'},{ label: '乳牙龋齿可以等到换恒牙后再治疗',value: '4'},{ label: '以上都正确 ',value: '5'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">27.您宝宝目前的喂养方式：（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        class="requrePage2 moreCheck" data-name="Bbwyfs" data-next="Bbwyfs2"  data-count="4"
                                        v-model="dataList.Bbwyfs"
                                        :options="[{ label: '母乳',value: '1'},{ label: '配方乳',value: '2'},{ label: '辅食',value: '3'},{ label: '其他',value: '4'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.Bbwyfs||[]).indexOf('4')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Bbwyfs2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">28.您是否给孩子喝果汁（包括自制的鲜果汁）？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage2" data-name="Sfghzhgz"
                                        v-model="dataList.Sfghzhgz"
                                        :options="[{ label: '经常',value: '1'},{ label: '有时',value: '2'},{ label: '偶尔 ',value: '3'},{ label: '否',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">29.您培养宝宝练习爬行的时间</p>
                                <div class="form-inp">
                                    <div class="check-list">
                                        <super-checklist
                                            title=""
                                            :max="1"
                                            pickContent="fourSixth"
                                            class="requrePage3 moreCheck" data-name="Pybblxpdsj"  data-count="1"  data-next="Pybblxpdsj2"
                                            v-model="dataList.Pybblxpdsj"
                                            :options="[{ label: '____个月开始培养',value: '1',picker:true,filed:dataList.Pybblxpdsj2,name:'dataList.Pybblxpdsj2',placeholder:'请选择',icon:'个月'},{ label: '还没有开始培养',value: '2'}]">
                                        </super-checklist>
                                    </div>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">30.您培养宝宝自己用勺吃饭的时间</p>
                                <div class="form-inp">
                                    <div class="check-list">
                                        <super-checklist
                                            title=""
                                            :max="1"
                                            pickContent="fourSixth"
                                            class="requrePage3 moreCheck" data-name="Pybbyscfsj"  data-count="1"  data-next="Pybbyscfsj2"
                                            v-model="dataList.Pybbyscfsj"
                                            :options="[{ label: '____个月开始培养',value: '1',picker:true,filed:dataList.Pybbyscfsj2,name:'dataList.Pybbyscfsj2',placeholder:'请选择',icon:'个月'},{ label: '还没有开始培养',value: '2'}]">
                                        </super-checklist>
                                    </div>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">31.您的宝宝是否在吃维生素D或维生素AD ？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage2" data-name="Bbsfzcvd" 
                                        v-model="dataList.Bbsfzcvd"
                                        :options="[{ label: '一直吃',value: '1'},{ label: '间断吃 ',value: '2'},{ label: '从不吃 ',value: '3'},{ label: '不清楚',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">32.最近一个月，您的宝宝有以下问题吗？（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        @change="changeValue(dataList.Zjbbwt,'Zjbbwt','1')"
                                        title=""
                                        class="requrePage2 moreCheck" data-name="Zjbbwt"   data-next="Zjbbwt2"   data-count="9"
                                        v-model="dataList.Zjbbwt"
                                        :options="[{ label: '无',value: '1'},{ label: '腹泻',value: '2'},{ label: '便秘 ',value: '3'},{ label: '腹痛 ',value: '4'},{ label: '体重减轻或不增 ',value: '5'},{ label: '贫血 ',value: '6'},{ label: '过敏表现：如湿疹、哮喘、食物过敏或不耐受等 ',value: '7'},{ label: '超重或肥胖 ',value: '8'},{ label: '其他 ',value: '9'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.Zjbbwt||[]).indexOf('9')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Zjbbwt2"></mt-field>
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
                            <span class= "num1">3</span>
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
                            <h3>三、育儿知识需求</h3>
                            <div class="form-list">
                                <p class="form-p1">33.请选出三种您最需要的育儿知识（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        class="requrePage3 moreCheck" data-name="Xydyezs" data-next="Xydyezs2"  data-count="8"
                                        v-model="dataList.Xydyezs"
                                        :max="3"
                                        :options="[{ label: '生长发育',value: '1'},{ label: '生活护理',value: '2'},{ label: '营养与喂养 ',value: '3'},{ label: '常见病预防',value: '4'},{ label: '早期发展',value: '5'},{ label: '安全防护',value: '6'},{ label: '五官保健（眼、耳、口腔保健）',value: '7'},{ label: '其他 ',value: '8'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.Xydyezs||[]).indexOf('8')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Xydyezs2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">34.请选出三种您最常采用的育儿知识获取渠道（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        class="requrePage3 moreCheck" data-name="Yezshqqd"   data-next="Yezshqqd2"  data-count="9"
                                        v-model="dataList.Yezshqqd"
                                        :max="3"
                                        :options="[{ label: '医护人员',value: '1'},{ label: '孕妇学校课堂',value: '2'},{ label: '家庭成员或朋友 ',value: '3'},{ label: '宣传手册、宣传单及折',value: '4'},{ label: '书籍/报刊/杂志',value: '5'},{ label: '广播/电视',value: '6'},{ label: '母婴健康类APP',value: '7'},{ label: '其他网络：微信、百度等 ',value: '8'},{ label: '其他 ',value: '9'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.Yezshqqd||[]).indexOf('9')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Yezshqqd2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">35.请选出您最喜欢的三种网络健康教育知识呈现形式：（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        defaultValue="15"
                                        class="requrePage3 moreCheck" data-name="Xhdwljkjyxs"   data-next="Xhdwljkjyxs3" data-count="6"
                                        v-model="dataList.Xhdwljkjyxs"
                                        :max="3"            
                                        :options="[{ label: '文字形式',value: '1'},{ label: '音频',value: '2',picker:true,filed:dataList.Xhdwljkjyxs1,name:'dataList.Xhdwljkjyxs1',placeholder:'请选择音频时长',icon:'分钟'},{ label: '视频',value: '3',picker:true,filed:dataList.Xhdwljkjyxs2,name:'dataList.Xhdwljkjyxs2',placeholder:'请选择视频时长',icon:'分钟'},{ label: '微信课堂',value: '4',picker:true,filed:dataList.Xhdwljkjyxs4,name:'dataList.Xhdwljkjyxs4',placeholder:'请选择时长',icon:'分钟'},{ label: '图片',value: '5'},{ label: '其他 ',value: '6'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.Xhdwljkjyxs||[]).indexOf('6')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Xhdwljkjyxs3"></mt-field>
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
                            <span class= "num1">4</span>
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
                            <h3>四、对《母子健康APP》了解和需求</h3>
                             <div class="form-list">
                                <p class="form-p1">36.您是否下载使用《母子健康APP》?</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage4" data-name="SfxzsyApp"
                                        v-model="dataList.SfxzsyApp"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value:'2'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" v-if="dataList.SfxzsyApp!='1'">
                                <p class="form-p1" >37.您未下载使用的原因是</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        :max="1"
                                        class="requrePage4 moreCheck" data-name="Wxzyy"  data-next="Wxzyy2"  data-count="4"
                                        v-model="dataList.Wxzyy"
                                        :options="[{ label: '不知道',value: '1'},{ label: '不感兴趣',value:'2'},{ label: '不需要',value:'3'},{ label: '其他',value:'4',other:true,filed:dataList.Wxzyy2,name:'dataList.Wxzyy2'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list" v-if="(dataList.Wxzyy.length==0)">
                                <p class="form-p1">38.您是否看过《母子健康APP》健康教育内容？</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        :max="1"
                                        class="requrePage4 moreCheck" data-name="SfkgAppnr"
                                        v-model="dataList.SfkgAppnr"
                                        :options="[{ label: '看过',value: '1'},{ label: '未看过',value:'2'}]">
                                    </super-checklist>
                                </div>
                            </div>
                           <div class="form-list"  v-if="(dataList.Wxzyy.length==0) && dataList.SfkgAppnr !='1'">
                                <p class="form-p1">39.您未看过的原因是</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        :max="1"
                                        class="requrePage4 moreCheck" data-name="Wkgyy"
                                        v-model="dataList.Wkgyy"
                                        :options="[{ label: '不知道',value: '1'},{ label: '不感兴趣',value:'2'},{ label: '不需要',value:'3'},{ label: '其他',value:'4',other:true,filed:dataList.Wkgyy2,name:'dataList.Wkgyy2'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list"  v-if="(dataList.Wxzyy.length==0) && dataList.Wkgyy.length==0">
                                <p class="form-p1">40.您能否在《母子健康APP》中得到您需要的知识？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage4" data-name="NfzAppddsxzs"
                                        v-model="dataList.NfzAppddsxzs"
                                        :options="[{ label: '全部能找到',value: '1'},{ label: '大部分能得到',value:'2'},{ label: '只能得到一部分',value:'3'},{ label: '完全不能',value:'4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list"  v-if="(dataList.Wxzyy.length==0) && dataList.Wkgyy.length==0">
                                <p class="form-p1">41.您对母子健康app健康教育内容是否满意?</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                         class="requrePage4" data-name="Jjnrsfmy"
                                        v-model="dataList.Jjnrsfmy"
                                        :options="[{ label: '非常满意',value: '1'},{ label: '比较满意',value:'2'},{ label: '一般',value:'3'},{ label: '比较不满意',value:'4'},{ label: '非常不满意',value:'5'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list"  v-if="(dataList.Wxzyy.length==0) && dataList.Wkgyy.length==0">
                                <p class="form-p1">42.您对母子健康app健康教育呈现形式是否满意? </p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage4 " data-name="Cxxssfmy"
                                        v-model="dataList.Cxxssfmy"
                                        :options="[{ label: '非常满意',value: '1'},{ label: '比较满意',value:'2'},{ label: '一般',value:'3'},{ label: '比较不满意',value:'4'},{ label: '非常不满意',value:'5'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list"  v-if="(dataList.Wxzyy.length==0) && dataList.Wkgyy.length==0">
                                <p class="form-p1">43.您认为《母子健康APP》健康教育形式和内容存在哪些问题？（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        class="requrePage4 moreCheck" data-name="Jjnrwt" data-next="Jjnrwt2"  data-count="8"
                                        v-model="dataList.Jjnrwt"
                                        :options="[{ label: '没有问题',value: '1'},{ label: '查找不方便 ',value: '2'},{ label: '文字太多，不爱看 ',value: '3'},{ label: '内容太专业，看不懂 ',value: '4'},{ label: '内容不全面，想看的内容查不到',value: '5'},{ label: '形式单一，不够吸引人',value: '6'},{ label: '图片不合适',value: '7'},{ label: '其他 ',value: '8'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.Jjnrwt||[]).indexOf('8')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Jjnrwt2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list"  v-if="(dataList.Wxzyy.length==0) && dataList.Wkgyy.length==0 && !dataList.Xwjjnr">
                                <p class="form-p1">44.您认为针对《母子健康APP》健康教育内容应如何进一步完善？（应用APP的回答，问卷结束）</p>
                                <div class="check-list">
                                    <mt-field placeholder="应用APP的回答" type="textarea" rows="3" v-model="dataList.Jjnrrhws" class="requrePage4" data-name="Jjnrrhws"></mt-field>
                                </div>
                            </div>
                            <div class="form-list" v-if="!dataList.Jjnrrhws">
                                <p class="form-p1">45.您希望《母子健康APP》的健康教育内容是什么？（未用APP的回答，问卷结束）</p>
                                <div class="check-list">
                                    <mt-field placeholder="应用APP的回答" type="textarea" rows="3" v-model="dataList.Xwjjnr" class="requrePage4" data-name="Xwjjnr"></mt-field></mt-field>
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
                            <span class= "num1">5</span>
                            <span>/</span>
                            <span>5</span>
                            </div>
                            <button  class="btn"  @click="submitForm('requrePage4')"   :class= "{ disabledBtn: !hasReady }">提交</button>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
       
    </div>
</template>
<script>
import headers from '@/components/header/header'
import {yunCon,headCon,fourSixth}  from '@/utils/slotContent'
import {nations} from '@/utils/nations'
import drageInput from '@/components/nomal/drageInput'
import superChecklist from '@/components/nomal/checklist'
import superRadio from '@/components/nomal/superRadio'
import messageToast  from '@/components/nomal/messageToast'
import {SaveQuestionair_Parent1} from '@/api/user.js'
export default {
    name:'hello',
    data(){
        return {
            dataList:{
                Wxzyy:[],
                Wkgyy:[],
                Jjnrwt:[],
                Xhdwljkjyxs:[],
                Pybblxpdsj:[],
                Pybbyscfsj:[]
            },
            page1:true,
            page2:false,
            page3:false,
            page4:false,
            page5:false,
            hideOn:false,
            slotContent1: {   //
                columns: 1,
                default: [{text: '贵州', value: '1'}],
                pData1: [
                    {text: '贵州', value: '1'},
                    {text: '宁夏', value: '2'},
                    {text: '新疆', value: '3'},
                    {text: '江苏', value: '4'},
                    {text: '河南', value: '5'},
                    {text: '湖南', value: '6'},
                ]
            },
            slotContent2: {  //名族
                columns: 1,
                default: [{text: '', value: ''}],
                pData1: nations
            },
            slotContent3:{
                columns:1,
                default:[{text:'8个月',value:'8个月'}],
                pData1:fourSixth
            },
            slotContent9: {   //孕周
                columns: 1,
                default: [{text: '15', value: '15'}],
                pData1:yunCon
            },
            slotContent3F:{
                columns:1,
                default:[{text:'26',value:'25'}],
                pData1:headCon
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
            hasReady:true
        }
    },
    watch:{
       'dataList.SfxzsyApp'(val){
           this.$set(this.dataList,'Wxzyy',[])
           this.$set(this.dataList,'Wkgyy',[])
       },
    },
    components:{
        headers,
        drageInput,
        superChecklist,
        messageToast,
        superRadio
    },
    methods:{
        changeValue(val,name,item){   //特殊多选框，选了其他不允许继续选中
            if(val.length>0 && val.indexOf(item)>-1){
                let arr=[]
                arr.push(item)
                this.dataList[name]=arr
            }
        },
        changePage(before,next,pageName){  //点击上一页，下一页
            let isRequire=false
            let arrDom=document.querySelectorAll(`.${pageName}`)
            let innerHtmlArr=[];
            for(let i=0;i<arrDom.length;i++){
                if( (!this.dataList[arrDom[i].getAttribute('data-name')]  
                    || this.dataList[arrDom[i].getAttribute('data-name')].length==0)
                    || (((this.dataList[arrDom[i].getAttribute('data-name')]||'').toString()).indexOf(arrDom[i].getAttribute('data-count')||'M')>-1
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
            if(this.dataList.Pybblxpdsj.indexOf('1')>-1 && !this.dataList.Pybblxpdsj2){
                 this.$toast({
                    message:'请选择宝宝培养爬行时间'
                })
                return false;
            }
            if(this.dataList.Pybbyscfsj.indexOf('1')>-1 && !this.dataList.Pybbyscfsj2){
                 this.$toast({
                    message:'请选择宝宝培养用勺吃饭的时间'
                })
                return false;
            }
            if(this.dataList.Xhdwljkjyxs.indexOf('2')>-1 && !this.dataList.Xhdwljkjyxs1){
                 this.$toast({
                    message:'请选择音频时长'
                })
                return false;
            }
            if(this.dataList.Xhdwljkjyxs.indexOf('3')>-1 && !this.dataList.Xhdwljkjyxs2){
                 this.$toast({
                    message:'请选择视频时长'
                })
                return false;
            }
            if(this.dataList.Xhdwljkjyxs.indexOf('4')>-1 && !this.dataList.Xhdwljkjyxs4){
                 this.$toast({
                    message:'请选择微信课堂时长'
                })
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
            document.querySelector('.qs-content').scrollTop=0
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
            this.dataList.Lxfs=this.$route.query.Lxfs||'';
            this.dataList.Sfzh=this.$route.query.Sfzh||'';
            this.dataList.DistrictNo=this.$route.query.DistrictNo||'';
            this.dataList.DistrictName=this.$route.query.DistrictName||"'"
            this.dataList.Tbszjg=this.$route.query.Tbszjg||''
            this.$messagebox.confirm('问卷提交后无法修改是否继续提交？').then(action => {
                let checkDom=document.querySelectorAll('.moreCheck')
                for(let i=0;i<checkDom.length;i++){
                    this.checkObj[checkDom[i].getAttribute('data-name')]=(this.dataList[checkDom[i].getAttribute('data-name')] ||[""]).join(",")
                }
                this.$indicator.open();
                SaveQuestionair_Parent1({...this.dataList,...this.checkObj}).then(res=>{
                    localStorage.setItem('zdQuestion',this.$route.path)
                    localStorage.setItem(this.$route.path,JSON.stringify(this.dataList))
                    this.hasReady=false
                    this.$toast({
                        message:'提交成功，稍后请自行退出'
                    })
                    this.$indicator.close();
                    WeixinJSBridge.call('closeWindow');
                }).catch(err=>{
                    console.log(err)
                })
            }).catch(error=>{
                this.$indicator.close();
                console.log(error)
            })
        },
    },
    created(){
        
    },
    mounted(){
        
        if(localStorage.getItem('zdQuestion')){  //数据缓存
            if(this.$route.path== localStorage.getItem('zdQuestion')){
                 this.dataList=JSON.parse(localStorage.getItem(this.$route.path))
            }
            this.hasReady=false
            this.$messagebox.alert('您已经提交过问卷了，请勿重复提交')
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