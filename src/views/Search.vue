<template>
    <div class="bus-search">
        <div class="head">
            <router-link to="/">
                <i class='bx bx-chevron-left'></i>
            </router-link>
            <div class="search-box">
                <i class='bx bx-search'></i>
                <input type="search" placeholder="今天要搭哪輛公車呢？">
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
.bus-search{
    background-color: $bg-color;
    height: 100vh;
    .head{
        background-color: #fff;
        padding: 10px;
        box-shadow:0  1px #aaa;
    }
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
</style>