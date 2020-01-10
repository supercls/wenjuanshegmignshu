<template>
    <transition name="fade">
            <mt-picker  class="animationDIc" :slots="citySlots"  @change="onValuesChange" value-key="value" showToolbar :itemHeight="itemHeight" style="z-index:9999">
                <mt-header title="">
                    <mt-button slot="left" class="cancle" @click="cancleaddress">取消</mt-button>
                    <mt-button slot="right" class="sure" @click="selectaddress">确定</mt-button>
                </mt-header>
            </mt-picker>
    </transition>
</template>
<script>
import {GetSzdq,GetCommunity} from '@/api/user'
export default {
    inject: ['toGdata'],
    data(){
        return{
            itemHeight:43,
            pickers:null,
            list1:[],
            list2:[],
            addressProvince: '',
            addressProvinceId: '',
            addressCity: '',
            addressCityId: '',
            citySlots: [
                {
                    flex: 1,
                    values: [],
                    className: 'slot1',
                    textAlign: 'center',
                    defaultIndex:0
                }, {
                    divider: true,
                    content: '-',
                    className: 'slot2'
                }, {
                    flex: 1,
                    values: [],
                    className: 'slot3',
                    textAlign: 'center',
                    defaultIndex:0
                }
            ],
            data: {
                privinceName: '',
                provinceId: '',
                cityName: '',
                cityId: '',
                address: '',
                areaText: ''
            },
            
        }
    },
    props:{
        slots:{
            type:Array,
            dafault:[]
        },
        show:{
            type: Boolean,
        },
        province:{
            type:String,
            default:''
        },
        city:{
            type:String,
            default:''
        },
        county:{
            type:String,
            default:''
        }
    },

    methods: {
        // 筛选器值变化时调用
        onValuesChange(picker, values) {
            this.areaPicker = picker
            let pickerArray1 = []
            let parentId = ''
            address.some((val,index) =>{
                if(val.value == values[0]){
                    parentId = val.id
                }
                return true
            })
            pickerArray1 = cityCodeList.filter((val,index) =>{
                return val.parentId == values[0].id
            })
            picker.setSlotValues(1, pickerArray1)
            this.addressProvince = values[0]
            this.addressCity = values[1]
            this.addressCityId = cityCodeList[this.addressCity] + ''
        },
        loadAreaList() {
            address = this.list1
            cityCodeList = this.list2
            this.citySlots[0].values = this.list1
            this.citySlots[2].values = this.list2
        },
        choiceArea() { // 设置默认选中
            if (this.province !== '' && this.city !== '') {
                let Findex = 0;let Sindex = 0;
                this.citySlots[0].values.some((val,index) =>{
                    if(val.value == this.province){
                        Findex = index
                        return true
                    }
                })
                this.citySlots[2].values.some((val,index) =>{
                    if(val.value == this.city){
                        Sindex = val.id
                        return true
                    }
                })
                this.citySlots[0].defaultIndex =  parseInt(Findex)
                this.citySlots[2].defaultIndex = parseInt(Sindex)

            }
        },
        cancleaddress() {
            let show = false;
            let isClose = true
            this.$emit('changeValue', {show, isClose});
        },
        selectaddress() {
            let show = false;
            let result, province, city, county,NumbId;
            this.province = this.addressProvince.value
            this.city = this.addressCity.value
            this.data.provinceId = this.addressProvinceId
            this.data.cityId = this.addressCityId
            this.county = ''
            this.data.areaText = this.province + this.city
            province = this.addressProvince.value
            city = this.addressCity.value
            NumbId = this.addressCity.id
            county = ''
            this.data.areaText = this.province + this.city
            this.$emit('changeValue', {show,province,city,county,NumbId});
        },
        async GetSzdq(){   //获取地区
            try{
                let data = await GetSzdq();
                let dataArray = data.dtData;
                for(let i = 0 ; i<dataArray.length;i++){
                    let obj={
                        id:i,
                        value:dataArray[i].Szdq,
                        parentId:'0'
                    }
                    this.list1.push(obj)
                    let Sdata = await GetCommunity({
                        szdq:dataArray[i].Szdq
                    })
                    Sdata.dtData.map((item,index) =>{
                        let Sobj={
                            id:index,
                            value:item.Sq,
                            parentId:i
                        }
                        this.list2.push(Sobj)
                    })
                }
            }catch(e){
                this.$toast({
                    message:'地址出现错误'
                })
                console.log(e)
            }
        }
    },
    async created(){
        let data =await this.GetSzdq()
        this.loadAreaList()
        this.choiceArea()
    },
    mounted(){

    }
}
let address =[]
let provinceCodeList = []
let cityCodeList = []
</script>
<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: .3s;
    }

    .fade-enter,
    .fade-leave-to {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }
    .picker{
        position: fixed;
        bottom: 0;
        left: 0;
        background: #fff;
        width: 100%;
        z-index: 9999 ;
    }
    .mint-header{
        background: #fff;
        border-bottom: 1px solid #F7F7F7;
        color: #333;
        padding:0 30px;
    }
    .cancle{
        color: #646464;
        flex: 1;
        font-size: 32px;
    }
    .sure{
        color: #26a2ff;
        flex: 1;
        font-size: 32px;
    }
    .picker-item.picker-selected{color:#26A2FF;}
</style>


