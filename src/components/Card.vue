<template>
    <div class="card">
        <div class="bus-top">
            <router-link to="/Search">
                <i class='bx bx-chevron-left'></i>
            </router-link>
            <div class="bus-num">
                <i class='bx bx-bus' ></i>
                <span>307</span>
            </div>
        </div>
        <div class="direction">
            <div @click="direction=true" :class="{ active: direction}" v-if="stopList.length>1">往{{goStop}}</div>
            <div @click="direction=false" :class="{ active: !direction}" v-if="stopList.length>1">往{{backStop}}</div>
        </div>
        <!-- <div class="time">3秒更新</div> -->
        <div class="station-list"  v-if="stopList.length>1">
            <div v-if="direction">
                <div class="item" v-for="item in stopList[0].Stops" :key="item.StopUID" >
                    <div>
                    <div class="state no-bus">未發車</div>
                    <div class="name">{{item.StopName.Zh_tw}}</div>
                    </div>
                    <div class="tag">636-u5</div>
                </div>
            </div>
            <div v-else>
                <div class="item"   v-for="item in stopList[1].Stops" :key="item.StopUID">
                    <div>
                    <div class="state bus-pitting">進站中</div>
                    <div class="name">{{item.StopName.Zh_tw}}</div>
                    </div>
                    <div class="tag">636-u5</div>
            </div>
            </div>
            <div class="item">
                <div>
                <div class="state count-down">１分鐘</div>
                <div class="name">舊裝國小</div>
                </div>
                <div class="tag">636-u5</div>
            </div>
        </div>
    </div>
</template>

<script>
import getApi from '../lib/Authorization.js'
export default {
    data(){
        return{
            stopList:[],
            arrival:[],
            direction:true,
        }
    },
    mounted(){
        getApi.getSequence().then(res=>{
            this.stopList=res;
        }),
        getApi.getArrival().then(res=>{
            this.arrival=res;
        }),
        getApi.getRoute().then(res=>{
            this.busList=res;
        })
    },
    computed:{
        goStop:function(){
            let length=this.stopList[0].Stops.length
            let gostop=this.stopList[0].Stops[length-1]
            return gostop.StopName.Zh_tw
        },
        backStop:function(){
            let length=this.stopList[1].Stops.length
            let backstop=this.stopList[1].Stops[length-1]
            return backstop.StopName.Zh_tw
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/share.scss';
.card{
    background: linear-gradient(180deg, #AEDDD7 52.1%, rgba(174, 221, 215, 0) 100%);
    min-height: 100vh;
    position: relative;
    .bx-chevron-left{
        position: absolute;
        color: #fff;
    }
    .bus-top{
        color: #fff;
        font-size: 24px;
        padding: 20px;
        .bus-num{
            text-align: center;
        }
    }
    .direction{
        background-color: #fff;
        border-radius: 50px;
        display: flex;
        justify-content: space-around;
        color:$btn-num-color;
        padding: 2px;
        margin: 20px;
        div{
            width: 50%;
            height: 35px;
            border-radius: 50px;
            text-align: center;
            line-height: 35px;
        }
        .active{
            background-color: $blue;
            color: #fff;
        }
    }
    .time{
        color: #fff;
        width: 85%;
        text-align: right;
        margin: auto;

    }
    .item{
        margin: 5px;
        padding: 10px;
        background-color: #fff;
        border-radius: 50px;
        display: flex;
        justify-content: space-between;
        div{
            display: inline-block;
        }
        .state{
            box-sizing: border-box;
            border-radius: 14px;
            font-size: 14px;
            padding: 10px;
        }
        .no-bus{
            border: 2px solid #D9D9D9;
            background: #F3F3F3;
            color: #9A9A9A;
        }
        .bus-pitting{
            border: 2px solid #FFE5C0;
            background: #FDA728;
            color: #fff;
        }
        .count-down{
            background: #F8FCFF;
            color: #18628D;
            border: 2px solid #18628D;
        }
        .name{
            padding: 0 5px;
            font-size: 14px;
        }
        .tag{
            padding:0 8px;
            font-size: 6px;
            color: #fff;
            background-color: $blue;
            border-radius: 20px;
            line-height: 38px;
        }
    }
}
</style>