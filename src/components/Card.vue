<template>
    <div class="card" @click="callback(positon)">
        <div class="bus-top">
            <div class="bus-num">
                <i class='bx bx-bus' ></i>
                <span>307</span>
            </div>
        </div>
        <div class="direction">
            <div class="active">往捷運石牌站</div>
            <div>往舊莊</div>
        </div>
        <div class="time">3秒更新</div>
        <div class="station-list">
            <div class="item">
                <div>
                <div class="state no-bus">未發車</div>
                <div class="name">舊裝國小</div>
                </div>
                <div class="tag">636-u5</div>
            </div>
            <div class="item">
                <div>
                <div class="state bus-pitting">進站中</div>
                <div class="name">舊裝國小</div>
                </div>
                <div class="tag">636-u5</div>
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
export default {
    props:{
        callback:Function,
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/share.scss';
.card{
    background: linear-gradient(180deg, #AEDDD7 52.1%, rgba(174, 221, 215, 0) 100%);
    height: 100vh;
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
        }
        .tag{
            padding:0 10px;
            font-size: 10px;
            color: #fff;
            background-color: $blue;
            border-radius: 20px;
            line-height: 40px;
            
        }
    }
}
</style>