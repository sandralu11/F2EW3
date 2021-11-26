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
                <input type="search" placeholder="今天要搭哪輛公車呢？" v-model="searchBus" disabled>
            </div>
        </div>
        <!-- <div class="container">
            <h2>搜尋公車</h2>
            <p>輸入公車號碼</p> 
        </div>             -->
        <div class="bus-list">
            <p>台北</p>
            <div class="bus-item">
                <div >
                    <img src="../assets/Vector.png" alt="">
                    <h2>307</h2>
                    <p>舊莊 - 捷運石牌站</p>
                </div>
                <i class='bx bx-chevron-right'></i>
            </div>
            <div class="bus-item">
                <div >
                    <img src="../assets/Vector.png" alt="">
                    <h2>307</h2>
                    <p>舊莊 - 捷運石牌站</p>
                </div>
                <i class='bx bx-chevron-right'></i>
            </div>
        </div>
            <footer>
                <Keyboard
                :clickKey="clickKey"
                :clear="clear"
                :back="back"
                />
            </footer>
        </div>
       
    </div>
</div>
</template>

<script>
import Keyboard from '../components/keyboard.vue'
export default {
    components: {
        Keyboard,
    }, 
    data(){
        return{
        searchBus:""
        }
    },
    methods: {
        clickKey:function(value){
        this.searchBus+=value
        },
        clear:function(){
        this.searchBus=""
        },
        back:function(){
        let stringLenght=this.searchBus.length
        this.searchBus=this.searchBus.slice(0,stringLenght-1);
        }
    }
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
    h2{
        color: $text-color;
        font-size: $title-font-size;
        font-weight: bold;
        display: inline-block;
    }
    p{
        margin: 5px 0;
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
        width: 90%;
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

    footer{
            position: fixed;
            bottom: 0;
            left: 0;
        }
    .bus-list{
        margin: 20px;
        .bus-item{
            box-shadow: 0px 2px 8px rgba(111, 137, 162, 0.2);
            border-radius: 15px;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            img{
                padding-right:10px ;
            }
            i{
                line-height: 50px;
            }
        }
    }
}
</style>