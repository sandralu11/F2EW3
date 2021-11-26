<template>
<div>
    <input type="text" v-model="searchBus" disabled>
    <Keyboard
      :clickKey="clickKey"
      :clear="clear"
      :back="back"
    />
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

<style>

</style>
