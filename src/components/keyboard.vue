<template>
    <div class="keyboard">
        <div class="btn-text">
            <div class="key-text" v-for="item in text" :key="item" @click="clickKey(item)">{{item}}</div>
        </div>
        <div class="btn-num">
            <div class="key-num" v-for="item in num" :key="item" @click="clickKey(item)">{{item}}</div>
            <div class="key-num" @click="clear">重設</div>
            <div class="key-num" @click="back"><i class='bx bx-arrow-back'></i></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            text:['藍','紅','綠','棕','橘','黃','-','幹線'],
            num:['1','2','3','4','5','6','7','8','9','0']
        }
    },
    props: {
        clickKey:Function,
        clear:Function,
        back:Function
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/share.scss';
.keyboard{
    background-color: #484848;
    display: flex;
    padding: 10px 5px;
    font-weight: bold;
    font-size: 20px;
    .btn-text{
        width: 40%;
    }
    .btn-num{
        width: 60%;
    }
    .key-text,.key-num{
        width: 66px;
        height: 44px;
        text-align: center;
        line-height: 44px;
        color: #fff;
        border-radius: 10px;
        margin: 3px;
    }
    .key-text{
        background-color: $btn-text-color;
        display: inline-block;
    }
    .key-num{
        background-color: $btn-num-color;
        display: inline-block;
    }
}

</style>