<template>
<div class="pc">
    <div class="header">
    <img src="../assets/head.png" alt="">
    </div>
    <div class="bus-search">
        <div class="head">
            <router-link to="/">
                <i class='bx bx-chevron-left'></i>
            </router-link>
            <div class="search-box">
                <i class='bx bx-search'></i>
                <input type="search" placeholder="今天要搭哪輛公車呢？">
            </div>
            <i class='bx bx-x'></i>
        </div>
        <div class="container">
            <img src="../assets/default.png" alt="">
            <h2>搜尋公車</h2>
            <p>輸入公車號碼</p>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/share.scss';
@import '../assets/media.scss';
.pc{
    background-image:url("https://source.unsplash.com/random/1440x800/?bus");
    height: 100vh;
    width: 100%;
    position: relative;
    .header{
    background: rgba(255, 255, 255, 0.4);
    text-align: center;
    }
}
.bus-search{
    width: 80%;
    height: 70%;
    background-color: $bg-color;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    @include mobile{
        width: 100%;
        height: 100vh;
    }
    .head{
        background-color: #fff;
        padding: 10px;
        box-shadow:0  1px #aaa;
        .search-box{
        display: inline-block;
        width: 80%;
        position: relative;
            .bx-search{
                position: absolute;
                left: 15px;
                top:10px;
            }
            input{
                margin-left:5px ;
                background-color: #F3F3F3;
                border-radius: 20px;
                padding: 10px 0 10px 30px ;
                border: none;   
                width: 100%;
            }
        }
    }
    
    .container{
        text-align: center;
        margin-top:30%;
        h2{
            color: $text-color;
            font-size: $title-font-size;
        }
    }
}
</style>