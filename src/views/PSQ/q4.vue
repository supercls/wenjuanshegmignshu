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
                                    class="requrePage1" data-name="Mqnl"  unit="岁"
                                     :slotContent="slotContent3F" typeItem="pickeMore" :disabled="true"
                                     label="3.母亲年龄____周岁" >
                                </drage-input>
                            </div>
                            <div class="form-list">
                                <drage-input v-model="dataList.Fqnl" :keyValue.sync="dataList.Fqnl"
                                 class="requrePage1" data-name="Fqnl"  unit="岁"
                                     :slotContent="slotContent3F" typeItem="pickeMore" :disabled="true"
                                     label="4.父亲年龄____周岁" >
                                </drage-input>
                            </div>
                            <div class="form-list">
                                <drage-input v-model="dataList.Ndmz" :keyValue.sync="dataList.Ndmz"
                                class="requrePage1" data-name="Ndmz"
                                     :slotContent="slotContent2"  typeItem="pickeMore"
                                     :disabled="true" :iconRight="true" label="5.您的民族" >
                                </drage-input>
                            </div>
                            <div class="form-list">
                                <drage-input v-model="dataList.Zfmz" :keyValue.sync="dataList.Zfmz"
                                class="requrePage1" data-name="Zfmz"
                                     :slotContent="slotContent2"  typeItem="pickeMore"
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
                                        v-model="dataList.Fqzy"
                                        class="requrePage1" data-name="Fqzy"  data-next="Fqzy2"   data-count="8"
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
                                    :keyValue.sync="dataList.Hzcstz"  type="number"  isNum="4"
                                    placeholder="例如3000"
                                     class="requrePage1" data-name="Hzcstz"
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
                                <p class="form-p1">17.孩子满1岁后-3岁期间每年至少要做几次健康体检？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage2" data-name="Zjcjkjc"
                                        v-model="dataList.Zjcjkjc"
                                        :options="[{ label: '不知道',value: '1'},{ label: '2次',value: '2'},{ label: '4次',value: '3'},{ label: '6次',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">18.宝宝6个月后应继续母乳喂养，可持续到宝宝几岁？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage2" data-name="Mrwydjgy"
                                        v-model="dataList.Mrwydjgy"
                                        :options="[{ label: '1岁',value: '1'},{ label: '1岁半',value: '2'},{ label: '2岁',value: '3'},{ label: '3岁',value: '4'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">19.下列食物中，含铁最丰富的是？</p>
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
                                <p class="form-p1">20.以下哪种维生素可以促进铁的吸收？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                         class="requrePage2" data-name="Nzwsfcjtxs"
                                        v-model="dataList.Nzwsfcjtxs"
                                        :options="[{ label: '维生素A',value: '1'},{ label: '维生素B',value: '2'},{ label: '维生素C',value: '3'},{ label: '维生素D',value: '4'},{ label: '不清楚',value: '5'}]">
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
                                <p class="form-p1">22.2岁以上的宝宝看视频、玩电子游戏等视屏时间，每天不超过多长时间？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                         class="requrePage2" data-name="Bbkspsj"
                                        v-model="dataList.Bbkspsj"
                                        :options="[{ label: '15分钟',value: '1'},{ label: '30分钟',value: '2'},{ label: '1小时',value: '3'},{ label: '2小时',value: '4'},{ label: '不清楚',value: '5'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">23.以下哪种微量元素有预防龋齿作用？</p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                         class="requrePage2" data-name="Nzwlysyyfqczy"
                                        v-model="dataList.Nzwlysyyfqczy"
                                        :options="[{ label: '锌',value: '1'},{ label: '铁',value: '2'},{ label: '氟 ',value: '3'},{ label: '碘',value: '4'},{ label: '不清楚',value: '5'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">24.关于2-3岁幼儿饮食，您认为正确的说法是（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        class="requrePage2 moreCheck" data-name="Yeyszqdsf"
                                        v-model="dataList.Yeyszqdsf"
                                        :options="[{ label: '每天食物包括肉蛋奶 ',value: '1'},{ label: '按时进餐',value: '2'},{ label: '可多喝果汁补充水分 ',value: '3'},{ label: '每顿饭鼓励孩子尽量多吃促进身体发育',value: '4'},{ label: '正餐进食量不足时可以适量吃零食补充营养 ',value: '5'},{ label: '不清楚 ',value: '6'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">25.2岁的宝宝出现哪些情况，提示可能存在发育异常？（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        class="requrePage2 moreCheck" data-name="Nxqkknczfyyc"
                                        v-model="dataList.Nxqkknczfyyc"
                                        :options="[{ label: '不能集中注意力',value: '1'},{ label: '不能按照要求做简单的事情',value: '2'},{ label: '不会用筷子吃饭 ',value: '3'},{ label: '不会扶栏杆上楼梯/台阶',value: '4'},{ label: '不知道 ',value: '5'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">26.您认为家中以下哪些行为是可以预防儿童意外伤害？（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        class="requrePage2 moreCheck" data-name="Nxxwkyyfetywsh"
                                        v-model="dataList.Nxxwkyyfetywsh"
                                        :options="[{ label: '电源进行防护',value: '1'},{ label: '热水瓶放在宝宝够不到的地方',value: '2'},{ label: '儿童床放置在窗边',value: '3'},{ label: '宝宝的洗澡水先放热水再放冷水',value: '4'},{ label: '家具边角加防护垫',value: '5'},{ label: '以上都正确',value: '6'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">27.您是否给孩子喝果汁（包括自制的鲜果汁）？</p>
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
                                <p class="form-p1">28.您用哪些方法鼓励孩子吃各种食物？（可多选） </p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        class="requrePage2 moreCheck" data-name="Ynzffglhzcgzsw" data-next="Ynzffglhzcgzsw2"   data-count="6"
                                        v-model="dataList.Ynzffglhzcgzsw"
                                        :options="[{ label: '拥抱或表扬孩子',value: '1'},{ label: '玩玩具或讲故事',value: '2'},{ label: '边看电视边吃 ',value: '3'},{ label: '甜食或零食作为奖励 ',value: '4'},{ label: '追着喂 ',value: '5'},{ label: '其他 ',value: '6'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.Ynzffglhzcgzsw||[]).indexOf('6')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Ynzffglhzcgzsw2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">29.您的宝宝开始用婴儿牙刷刷牙的时间</p>
                                    <div class="check-list">
                                    <super-checklist
                                        title=""
                                        :max="1"
                                        defaultValue="8"
                                        pickContent="fourSixth"
                                        class="requrePage2 moreCheck" data-name="Bbkssysj"  data-next="Bbkssysj2"  data-count="1"
                                        v-model="dataList.Bbkssysj"
                                        :options="[{ label: '____个月开始',value: '1',picker:true,filed:dataList.Bbkssysj2,name:'dataList.Bbkssysj2',placeholder:'请选择',icon:'个月',},{ label: '还没有开始',value: '2'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">30.您的宝宝是否在吃维生素D或维生素AD ？</p>
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
                                <p class="form-p1">31.最近一个月，您的宝宝有以下问题吗？（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        @change="changeValue(dataList.Zjbbwt,'Zjbbwt','1')"
                                        class="requrePage2 moreCheck" data-name="Zjbbwt"   data-count="9"  data-next="Zjbbwt2"
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
                                <p class="form-p1">32.请选出三种您最需要的育儿知识（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        class="requrePage3 moreCheck" data-name="Xydyezs"  data-count="8"  data-next="Xydyezs2"
                                        v-model="dataList.Xydyezs"
                                        :max="3"
                                        :options="[{ label: '生长发育',value: '1'},{ label: '生活护理',value: '2'},{ label: '营养与喂养 ',value: '3'},{ label: '常见病预防',value: '4'},{ label: '早期发展',value: '5'},{ label: '安全防护',value: '6'},{ label: '五官保健（眼、耳、口腔保健）',value: '7'},{ label: '其他',value: '8'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.Xydyezs||[]).indexOf('8')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Xydyezs2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">33.请选出三种您最常采用的育儿知识获取渠道（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        class="requrePage3 moreCheck" data-name="Yezshqqd"  data-count="9"  data-next="Yezshqqd2"
                                        v-model="dataList.Yezshqqd"
                                        :max="3"
                                        :options="[{ label: '医护人员',value: '1'},{ label: '孕妇学校课堂',value: '2'},{ label: '家庭成员或朋友 ',value: '3'},{ label: '宣传手册、宣传单及折',value: '4'},{ label: '书籍/报刊/杂志',value: '5'},{ label: '广播/电视',value: '6'},{ label: '母婴健康类APP',value: '7'},{ label: '其他网络：微信、百度等 ',value: '8'},{ label: '其他',value: '9'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.Yezshqqd||[]).indexOf('9')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Yezshqqd2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">34.请选出您最喜欢的三种网络健康教育知识呈现形式：（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        defaultValue="15"
                                        class="requrePage3 moreCheck" data-name="Xhdwljkjyxs"  data-count="6"  data-next="Xhdwljkjyxs3"
                                        v-model="dataList.Xhdwljkjyxs"
                                        :max="3"            
                                        :options="[{ label: '文字形式',value: '1'},{ label: '音频',value: '2',picker:true,filed:dataList.Xhdwljkjyxs1,name:'dataList.Xhdwljkjyxs1',placeholder:'请选择音频时长',icon:'分钟'},{ label: '视频',value: '3',picker:true,filed:dataList.Xhdwljkjyxs2,name:'dataList.Xhdwljkjyxs2',placeholder:'请选择视频时长',icon:'分钟'},{ label: '微信课堂',value: '4',picker:true,filed:dataList.Xhdwljkjyxs4,name:'dataList.Xhdwljkjyxs4',placeholder:'请选择时长',icon:'分钟'},{ label: '图片',value: '5'},{ label: '其他',value: '6'}]">
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
                                <p class="form-p1">35.您是否下载使用《母子健康APP》?</p>
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
                                <p class="form-p1">36.您未下载使用的原因是</p>
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
                                <p class="form-p1">37.您是否看过《母子健康APP》健康教育内容？</p>
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
                           <div class="form-list" v-if="(dataList.Wxzyy.length==0) && dataList.SfkgAppnr !='1'">
                                <p class="form-p1">38.您未看过的原因是</p>
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
                            <div class="form-list" v-if="(dataList.Wxzyy.length==0) && dataList.Wkgyy.length==0">
                                <p class="form-p1">39.您能否在《母子健康APP》中得到您需要的知识？</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        :max="1"
                                         class="requrePage4 moreCheck" data-name="NfzAppddsxzs"
                                        v-model="dataList.NfzAppddsxzs"
                                        :options="[{ label: '全部能找到',value: '1'},{ label: '大部分能得到',value:'2'},{ label: '只能得到一部分',value:'3'},{ label: '完全不能',value:'4'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list" v-if="(dataList.Wxzyy.length==0) && dataList.Wkgyy.length==0">
                                <p class="form-p1">40.您对母子健康app健康教育内容是否满意? </p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage4" data-name="Jjnrsfmy"
                                        v-model="dataList.Jjnrsfmy"
                                        :options="[{ label: '非常满意 ',value: '1'},{ label: '比较满意',value:'2'},{ label: '一般',value:'3'},{ label: '比较不满意',value:'4'},{ label: '非常不满意',value:'5'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" v-if="(dataList.Wxzyy.length==0) && dataList.Wkgyy.length==0">
                                <p class="form-p1">41.您对母子健康app健康教育呈现形式是否满意? </p>
                                <div class="check-list">
                                    <super-radio
                                        title=""
                                        class="requrePage4" data-name="Cxxssfmy"
                                        v-model="dataList.Cxxssfmy"
                                        :options="[{ label: '非常满意',value: '1'},{ label: '比较满意',value:'2'},{ label: '一般',value:'3'},{ label: '比较不满意',value:'4'},{ label: '非常不满意',value:'5'}]">
                                    </super-radio>
                                </div>
                            </div>
                            <div class="form-list" v-if="(dataList.Wxzyy.length==0) && dataList.Wkgyy.length==0">
                                <p class="form-p1">42.您认为《母子健康APP》健康教育形式和内容存在哪些问题？（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        v-model="dataList.Jjnrwt"
                                        class="requrePage4 moreCheck" data-name="Jjnrwt" data-next="Jjnrwt2"  data-count="8"

                                        :options="[{ label: '没有问题',value: '1'},{ label: '查找不方便 ',value: '2'},{ label: '文字太多，不爱看 ',value: '3'},{ label: '内容太专业，看不懂 ',value: '4'},{ label: '内容不全面，想看的内容查不到',value: '5'},{ label: '形式单一，不够吸引人',value: '6'},{ label: '图片不合适',value: '7'},{ label: '其他 ',value: '8'}]">
                                    </super-checklist>
                                    <mt-field v-if="(dataList.Jjnrwt||[]).indexOf('8')>-1" placeholder="其他（请详述）" type="textarea" rows="3" v-model="dataList.Jjnrwt2"></mt-field>
                                </div>
                            </div>
                            <div class="form-list" v-if="(dataList.Wxzyy.length==0) && dataList.Wkgyy.length==0">
                                <p class="form-p1">43.您认为针对《母子健康APP》健康教育内容应如何进一步完善？（应用APP的回答，问卷结束）</p>
                                <div class="check-list">
                                    <mt-field class="requrePage4" data-name="Jjnrrhws" placeholder="应用APP的回答" type="textarea" rows="3" v-model="dataList.Jjnrrhws"></mt-field>
                                </div>
                            </div>
                            <div class="form-list" v-if="!dataList.Jjnrrhws">
                                <p class="form-p1">44.您希望《母子健康APP》的健康教育内容是什么？（未用APP的回答，问卷结束）</p>
                                <div class="check-list">
                                    <mt-field class="requrePage4" data-name="Xwjjnr" placeholder="应用APP的回答" type="textarea" rows="3" v-model="dataList.Xwjjnr"></mt-field>
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
                            <button   class="btn" @click="submitForm('requrePage4')"   :class= "{ disabledBtn:  !hasReady }">提交</button>
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
import {SaveQuestionair_Parent2} from '@/api/user.js'
export default {
    name:'hello',
    data(){
        return {
            dataList:{
                Wxzyy:[],
                Wkgyy:[],
                Xhdwljkjyxs:[],
                Jjnrwt:[],
                Bbkssysj:[],
                Hzcstz:'',
                Wxzyy:'',
                Pybblxpdsj:'',
                Pybbyscfsj:''
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
            slotContent3F:{
                columns:1,
                default:[{text:'26周岁',value:'25'}],
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
                    || (((this.dataList[arrDom[i].getAttribute('data-name')]||'').toString()).indexOf(arrDom[i].getAttribute('data-count')|| 'M')>-1
                    && !this.dataList[arrDom[i].getAttribute('data-next')]))
                    {
                    if(!arrDom[i].querySelector('.mint-cell-text')){
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
            this.dataList.DistrictName=this.$route.query.DistrictName||''
            this.dataList.Tbszjg=this.$route.query.Tbszjg||''
            this.$messagebox.confirm('确定执行问卷提交后无法修改是否继续提交？').then(action => {
                let checkDom=document.querySelectorAll('.moreCheck')
                for(let i=0;i<checkDom.length;i++){
                    this.checkObj[checkDom[i].getAttribute('data-name')]=(this.dataList[checkDom[i].getAttribute('data-name')] ||[""]).join(",")
                }
                this.$indicator.open();
                SaveQuestionair_Parent2({...this.dataList,...this.checkObj}).then(res=>{
                    localStorage.setItem(this.$route.path,JSON.stringify(this.dataList))
                    localStorage.setItem('zdQuestion',this.$route.path)
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
            }).catch(error=>{
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