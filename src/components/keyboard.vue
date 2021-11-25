<template>
    <div class="keyboard">
        <div class="btn-text">
            <div class="key-text">藍</div>
            <div class="key-text">紅</div>
            <div class="key-text">綠</div>
            <div class="key-text">棕</div>
            <div class="key-text">橘</div>
            <div class="key-text">黃</div>
            <div class="key-text">更多</div>
            <div class="key-text">幹線</div>
        </div>
        <div class="btn-num">
            <div class="key-num">1</div>
            <div class="key-num">2</div>
            <div class="key-num">3</div>
            <div class="key-num">4</div>
            <div class="key-num">5</div>
            <div class="key-num">6</div>
            <div class="key-num">7</div>
            <div class="key-num">8</div>
            <div class="key-num">9</div>
            <div class="key-num">0</div>
            <div class="key-num">重設</div>
            <div class="key-num">C</div>
        </div>
    </div>
</template>

<script>
export default {

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