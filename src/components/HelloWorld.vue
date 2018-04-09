<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="test-wzy" @click="onName('哈哈哈')">
      {{count}}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HelloWorld', 
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  created(){
    console.log(this.$store)
  },
   computed:mapState({
     count: state => state.test.count,
   },
  ),
  methods:{
    ...mapActions({
      upName:'updateLoadingStatus',
    }),
    onName(item){
      this.upName(item);
      // console.log(this.upName())
      // this.$store.dispatch('updateLoadingStatus',item)
      console.log('111')
      // this.$store.commit('UPDATELOADINGSTATUS',item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
      .test-wzy{
        color:red;
        font-size: 40px;
      }
</style>
