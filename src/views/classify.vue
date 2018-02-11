<template>
  <div>
    <!-- <text class="abc">分类</text> -->
    <!-- <p @click="get()">获取数据</p> -->
    <div class="seaWarp">
			<image class="backimg" src="./src/img/back1.png" onclick="window.history.go(-1)"></image>
			<input type="text" class="search" id="search" placeholder="请输入商品名称" />
			<image class="seachimg" src="./src/img/seach.png"></image>
		</div>
    <ul class="filterWarp">
			<li class="liFilter">上架时间</li>
			<li class="liFilter">销量</li>
			<li class="liFilter">价格</li>
			<li class="liFilter">筛选</li>
		</ul>
    <div class="wrapper">
    <router-link :to="{name:'detail', params: { id: i.goodsInfoId }}" class="list" v-for="i in getData" :key="i" :pruid="i.goodsInfoId" @click="jump('/detail')">
        <p class="imgName"><image :src="i.goodsInfoImgId" class="logo"></image></p>
        <div class="fig">
          <p class="title1">{{i.productName}}</p>
          <p class="price">￥{{i.warePrice}}</p>
        </div>
    </router-link>
    </div>
    <app-header></app-header>
  </div>
</template>
<style scoped>
.seaWarp{
  height: 100px;
  width: 100%;
  background-color: #50C896;
  position: relative;
}
.backimg{
  width: 16px;
  height: 32px;
  position: absolute;
  top: 35px;
  left: 25px;
}
.search{
  outline: none;
  border: 2px solid #50c896;
  border-radius: 30px;
  font-size: 24px;
  height: 55px;
  padding-left: 18px;
  position: absolute;
  top: 25px;
  right: 100px;
  width: 550px;
}
.seachimg{
  width: 28px;
  height: 32px;
  position: absolute;
  top: 35px;
  right: 120px;
}
.filterWarp{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  border-bottom: 2px solid #50C896;
}
.liFilter{
  font-size: 28px;
  width: 187.5px;
  height: 55px;
  line-height: 55px;
  text-align: center;
  border-left: 1px solid #e0e0e0;
}
.liFilter:first-of-type{
  border: none;
}
.wrapper{
    padding-bottom: 120px;
}
.list{
  height:230px;
  display: block;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  margin: 5px 0;
}
.list .imgName{
  width:200px;
  height:200px;
  float:left;
  margin:0 20px;
}

.list .fig{
  width:550px;
  height: 220px;
  border-bottom:1px solid gray;
}
.list .imgName .logo{ width:200px;height:200px;}
.list .title1{
  color: #000;
  flex-wrap:wrap;
  font-size: 28px;
  width:500px;
  margin-top: 30px;
}
.price{
  font-size: 34px;
  color: #fd8112;
  margin-top: 20px;
}
</style>
<script>
import Axios from 'axios'
import Detail from './detail.vue'
import AppHeader from '../components/app-header.vue'
export default {
    data() {
      return{
        getData: []
      }
    },
    components: { AppHeader },
    methods: {
      jump (to) {
        var that = this;
        if (this.$router) {
          this.$router.push(to);
          // console.log(event);
          // console.log(id)
        }
        that.type = to;
      },
      get:function(){
        var that = this;
        // console.log(this);
        Axios.get('./../src/data/data.json').then(function(res){
          // console.log(res.data.pb.list);
          // console.log(that);
          that.getData = res.data.pb.list;
        })
      }
    },
    mounted(){
      this.get();
    }



  }
</script>
