<template>
  <div class="home">
    <div class="header">
      <img src="../assets/head.png" alt="">
    </div>
    <div class="btn-group">
      <router-link to="/Search">
        <div class="btn">
            <img src="../assets/bus.png" alt="">
              <div class="btn-box">
              <h2>搜尋公車</h2>
                <p>輸入公車號</p>
            </div>
            <i class='bx bx-chevron-right'></i>
        </div>
      </router-link>
      <div class="btn">
          <img src="../assets/nearby.png" alt="">
            <div class="btn-box">
            <h2>附近站牌</h2>
              <p>搜尋您附近的公車車站</p>
          </div>
          <i class='bx bx-chevron-right'></i>
      </div>
<<<<<<< HEAD
=======
      <router-link to="about">
          鍵盤
      </router-link>
>>>>>>> 84625b5ab82c722152c838bb93ee1f031bcd6678
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/share.scss';
@import '../assets/media.scss';
.home{
  background-image:url("https://source.unsplash.com/random/1440x800/?bus");
  height: 100vh;
  width: 100%;
  .header{
    background: rgba(255, 255, 255, 0.4);
    text-align: center;
  }
  .btn-group{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    @include mobile{
        width: 90%;
    }
  }
  .btn{
    background-color: #fff;
    width: 100%;
    border-radius: 20px;
    box-shadow: 0px 2px 8px rgba(111, 137, 162, 0.2);
    padding: 20px;
    margin-top:10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .btn-box{
      display: inline;
      padding: 5px;
    }
    h2{
      color: $text-color;
      font-size: $title-font-size;
      font-weight: bold;
    }
    i{
      line-height: 66px;
    }
  }
}

</style>