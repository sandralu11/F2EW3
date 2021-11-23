<template>
  <div class="home">
    <div class="btn">
        <div>
          <img src="../assets/bus.png" alt="">
          <div>
            <h2>搜尋公車</h2>
            <p>輸入公車號，查找公車路線</p>
          </div>
        </div>
        <i class='bx bx-chevron-right'></i>
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
.home{
  background-image:url("https://source.unsplash.com/random/1440x800/?bus");
  height: 100vh;
  width: 100%;
  .btn{
    background-color: #fff;
    h2{
      color: $text-color;
      font-size: $title-font-size;
    }
  }
}

</style>