<template>
  <div>
    <text class="abc">购物车</text>
    <router-link :to="{name:'detail', params: { id: i.id }}" class="list" v-for="i in infoarr" :key="i" :pruid="i.id" @click="jump('/detail')">
        <p class="imgName"><image :src="i.img" class="logo"></image></p>
        <div class="fig">
          <p class="title1">{{i.name}}</p>
          <p class="price">￥{{i.warePrice}}</p>
          <p class="price">数量：{{i.count}}</p>
        </div>
    </router-link>
    <app-header></app-header>
  </div>
</template>
<script>
  import AppHeader from '../components/app-header.vue'
  import Axios from 'axios'
  export default {
    components: { AppHeader },
    data(){
      return{
        infoarr:[],//商品信息
        lsData:[]//localStorage中的信息
      }
    },
    methods: {
      jump (to) {
        var that = this;
        if (this.$router) {
          this.$router.push(to);
        }
        that.type = to;
      },
      showPru(){
        var that = this;
        var lsLength = localStorage.length;
        for(var i=0;i<lsLength;i++){
          var getKey=localStorage.key(i);
          var getVal=localStorage.getItem(getKey);
          var idPru = getKey.slice(6);
          // console.log(idPru+"----"+getVal);
          var localData = {idPru:idPru,getVal:getVal};
          that.lsData.push(localData);
        }
        // console.log(that.lsData)
        Axios.get('./../src/data/data.json').then(function(res){
          var data = res.data.pb.list;
          for(var j=0;j<that.lsData.length;j++){
            // console.log(11);
            for(var i=0;i<data.length;i++){
              // console.log(that.lsData[j].idPru);
              if(that.lsData[j].idPru==data[i].goodsInfoId){
                // console.log(33);
                var pruinfo = {id:data[i].goodsInfoId};
                pruinfo.name = data[i].productName;
                pruinfo.img = data[i].goodsInfoImgId;
                pruinfo.warePrice = data[i].warePrice;
                pruinfo.count = that.lsData[j].getVal;
                // console.log(pruinfo);
                that.infoarr.push(pruinfo);
              }
            }
          }
        })
      }
    },
    mounted(){
      this.showPru();
    }
  }
</script>
<style scoped>
  .abc {
    font-size: 40px;
    text-align: center;
  }
  .list{
    height: 300px;
    display: block;
    border-bottom:1px solid gray;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;
  }
  .list .imgName{
    width:300px;
    height:300px;
    float:left;
    margin:10px 20px;
  }
  .list .fig{
    width:500px;
  }
  .list .imgName .logo{ width:200px;height:200px;}
  .list .title1{
    color: #000;
    flex-wrap:wrap;
  }
</style>
