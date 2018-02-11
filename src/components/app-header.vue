<template>
  <div class="header">
      <div class="link" @click="jump('/top')" :class="type=='/top'?'active':''">
        <image class="title" :src="type=='/top'?'src/img/home.png':'src/img/home1.png'"></image>
      </div>
      <div class="link" @click="jump('/new')" :class="type=='/new'?'active':''">
        <image class="title" :src="type=='/new'?'src/img/menu.png':'src/img/menu1.png'"></image>
      </div>
      <div class="link" @click="jump('/show')" :class="type=='/show'?'active':''">
        <image class="title3" :src="type=='/show'?'src/img/gw.png':'src/img/gw1.png'"></image>
        <text class="pruCount">{{counta}}</text>
      </div>
      <div class="link" @click="jump('/ask')" :class="type=='/ask'?'active':''">
        <image class="title" :src="type=='/ask'?'src/img/my.png':'src/img/my1.png'"></image>
      </div>
  </div>
</template>
<script>
  import Axios from 'axios'
  export default {
    data() {
      return{
        type:'',
        count: 0
      }
    },
    methods: {
      jump (to) {
        var that = this;
        if (this.$router) {
          this.$router.push(to);
          // console.log(event);
        }
        that.type = to;
        // console.log("1111"+this.$store.state.count)//store!!!
      },
      first(){
        var that = this;
        // console.log(that.$route.path)
        that.type=that.$route.path;
        var lsLength = localStorage.length;
        var aa=0;
        for(var i=0;i<lsLength;i++){
          var getKey=localStorage.key(i);
          var getVal=localStorage.getItem(getKey);
          aa = aa+parseInt(getVal);
          // console.log(aa);
        }
        that.$store.commit('incrementaaa',aa)
      }
    },
    mounted(){
      this.first();
    },
    computed: {
      counta () {
        return this.$store.state.count;
      }
    }
  }
</script>


<style>
  .header {
    position: fixed;
    bottom: 0;
    height: 120px;
    width: 750px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #DDDDDD;
    background-color: #f7f7f8;
    /*background-color: pink;*/
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
  }
  .link {
    flex:1;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .title {
    font-family: Verdana, Geneva, sans-serif;
    display: flex;
    width: 50px;
    height: 68px;
  }
  .title3 {
    font-family: Verdana, Geneva, sans-serif;
    display: flex;
    width: 70px;
    height: 68px;
    position: relative;
  }
  .pruCount{
    position: absolute;
    right: 40px;
    top: 8px;
    background-color: red;
    color: #fff;
    font-size: 24px;
    min-width: 35px;
    text-align: center;
    height: 35px;
    line-height: 35px;
    border-radius: 50%;

  }
  .active{ background-color: #50c896; }
</style>
