<template>
    <div class="zd-wrapper">
        <p>helloy</p>
    </div>
</template>
<script>
import helloWorld from "@/components/HelloWorld";
export default {
    name:'hello',
    data(){
        return {

        }
    },
    components:{
        helloWorld
    },
    methods:{

    },
    created(){

    },
    mounted(){
       
    },
    computed:{

    },
    filters:{

    },
}
</script>
<style scoped lang="less">
    .zd-wrapper{
        margin:0 auto;
        p{
            font-size: 30px;
            height: 50px;
            text-align: center;
        }
    }
</style>