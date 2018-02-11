<template>
  <div>
    <text onclick="window.history.go(-1)">&lt;&lt;返回上一页</text>
    <text class="abc">商品详情页,pruid：{{pruid}}</text>
    <image class="pruImg" :src="imgUrl" ></image>
    <text class="abc">{{pruData.productName}}</text>
    <text class="abc">{{pruData.thirdName}}</text>
    <text class="abc"> 价格是：￥{{pruData.warePrice}}</text>
    <div class="pruNumChange">
      <span class="addsubPru" @click="addPru()">+</span>
      <span class="countdetail">{{ countPru }}</span>
      <span class="addsubPru" @click="subPru()">-</span>
      <text class="addCart" @click="addCart()">加入购物车</text>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
// import Vuex from 'vuex'
// import count from './../vuex/count.js'
import AppHeader from '../components/app-header.vue'
export default {
  components: { AppHeader },
  data(){
    return{
      pruid:'',
      pruData:[],
      imgUrl:"",
      countPru:1
    }
  },
  created:function(){
    let id = this.$route.params.id;
    this.pruid = id;
  },
  methods: {
    prudetail(){
      var that = this;
      Axios.get('./../src/data/data.json').then(function(res){
        var data = res.data.pb.list;
        for(var i=0;i<data.length;i++){
          if(that.pruid==data[i].goodsInfoId){
            that.pruData = data[i];
            that.imgUrl = data[i].goodsInfoImgId
          }
        }
      })
    },
    //增加数量
    addPru(){
      var that = this;
      that.countPru=that.countPru+1;
    },
    //减少数量
    subPru(){
      var that = this;
      if(that.countPru==0){
        return
      }
      that.countPru=that.countPru-1;
    },
    //加入购物车
    addCart(){
      var that = this;
      var Num="";
      for(var i=0;i<6;i++) {
        Num+=Math.floor(Math.random()*10);
      }
      var a = Num+that.pruid;
      var b = that.countPru;
      localStorage.setItem(a,b);
      // console.log(that.$store)
      // that.$store.commit('increment')
			// console.log(that.$store.state.count)
    }
  },
  mounted(){
    this.prudetail();
  }
}
</script>
<style scoped>
  .abc { font-size: 50px; }
  .pruImg{ width:500px; height: 500px; border: 1px solid gray;}
  .addCart {
    font-size: 30px;
    color:orange;
    width: 180px;
    text-align: center;
    /*height: 100px;*/
    border: 1px solid gray;
    margin: 20px;
   }
  .pruNumChange{
    display: flex;
    flex-direction:row;
    justify-content: flex-start;
    align-items: center;;

  }
  .addsubPru{
    /*display: inline;*/
    font-size: 50px;
    text-align: center;
    line-height: 60px;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    border: 1px solid orange;
    color: orange;
    margin: 0 20px;
  }
  .countdetail{
    font-size: 50px;

  }
</style>
