<template>
  <div>
    <!-- <text class="abc">首页</text> -->
    <image class="logo" resize="cover" src="./src/img/logo.png"></image>
    <div class="searchWarp">
			<input type="text" class="search" readonly id="search" placeholder="请输入商品名称" />
			<image class="searchImg" resize="cover" src="./src/img/seach.png"></image>
		</div>
    <slider class="slider" interval="3000" auto-play="true">
      <div class="frame" v-for="img in imageList">
        <image class="image" resize="cover" :src="img.src"></image>
      </div>
      <indicator></indicator>
    </slider>
    <ul class="ulBar" >
        <router-link :to="{name:'test', params: { id: imgbar.id }}" class="lilBar" v-for="imgbar in imageBar" winid="imgbar.id" :key="imgbar" @click="jump('/test')">
          <text class="barname">{{imgbar.name}}</text>
          <image class="imgbarname" resize="cover" :src="imgbar.src"></image>
        </router-link>
      <!-- <li class="lilBar" v-for="imgbar in imageBar" winid="imgbar.id">
        <text class="barname">{{imgbar.name}}</text>
        <image class="imgbarname" resize="cover" :src="imgbar.src"></image>
      </li> -->
    </ul>
    <ul class="ulNav" >
      <router-link :to="{name:'test', params: { id: imgnav.id }}" class="lilNav" v-for="imgnav in imageNav" winid="imgnav.id" :key="imgnav" @click="jump('/test')">
        <image class="imgnav" resize="cover" :src="imgnav.src"></image>
        <text class="imgname">{{imgnav.name}}</text>
      </router-link>
      <!-- <li class="lilNav" v-for="imgnav in imageNav" winid="imgnav.id">
        <image class="imgnav" resize="cover" :src="imgnav.src"></image>
        <text class="imgname">{{imgnav.name}}</text>
      </li> -->
    </ul>
    <app-header></app-header>
    </div>

  </div>
</template>
<style scoped>
  .abc {
    font-size: 50px;
    text-align: center;
  }
  .logo{
    position: absolute;
    top: 20px;
    left: 20px;
    display: inline-block;
    width: 180px;
    height: 75px;
    z-index: 666;
  }
  .searchWarp{
    position: absolute;
    top: 25px;
    right: 160px;
    width: 350px;
    z-index: 666;
    /*background-color: pink;*/
  }
  .search{
    outline: none;
    border: 2px solid #50c896;
    border-radius: 30px;
    font-size: 24px;
    height: 55px;
    padding-left: 18px;
    background: none;
  }
  .searchImg{
    position: absolute;
    top: 10px;
    right: 15px;
    display: block;
    width: 30px;
    height: 35px;
  }

  .image {
    width: 750px;
    height: 364px;
  }
  .slider {
    /*margin-top: 25px;*/
    /*margin-left: 15px;*/
    width: 750px;
    height: 364px;
  }
  .frame {
    width: 750px;
    height: 364px;
    position: relative;
  }
  .ulNav{
    margin-left: 22px;
    width: 706px;
    height: 600px;
    /*background-color: gray;*/
    flex-direction: row;
    padding-top: 25px;
    margin-bottom: 118px;
  }

  .lilNav{
    display: inline-block;
    width: 220px;
    height: 180px;
    /*background-color: pink;*/
    margin-left: 11.5px;
    margin-top: 11.5px;
    text-align: center;
  }
  .imgnav{
    width: 120px;
    height: 120px;
    display: inline-block;
  }
  .imgname{
    display: block;
    width: 220px;
    text-align: center;
    font-size: 25px;
    margin-top: 10px;
  }
  .ulBar{
    width: 750px;
    height: 217.5px;
    flex-direction: row;
    background-color: #f7f7f7;
  }
  .lilBar{
    width:187.5px;
    height: 187.5px;
    /*background-color: gray;*/
    display: inline-block;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: #fff;
    /*border-top: 2px solid #adadad;
    border-bottom: 2px solid #adadad;*/
    border-right: 2px solid #dcdcdc;
  }
  .lilBar:last-of-type{
    border-right: none;
  }
  .imgbarname{
    width: 105px;
    height: 105px;

    display: inline-block;
  }
  .barname{
    display: block;
    width: 187.5px;
    text-align: center;
    font-size: 25px;
    margin-top: 15px;
    margin-bottom: 13px;
    /*background-color: red;*/
    /*border: 1px solid #000;*/
  }




</style>
<script>
import AppHeader from '../components/app-header.vue'
  export default {
    components: { AppHeader },
    data () {
      return {
        imageList: [
          { src: 'http://kstoreimages.b0.upaiyun.com/1472549803206.jpg'},
          { src: 'http://kstoreimages.b0.upaiyun.com/1472549818211.jpg'},
          { src: 'http://kstoreimages.b0.upaiyun.com/1472549830366.jpg'}
        ],
        imageNav: [
          { src: './src/img/1.png',name:'茶馆',id:"1111"},
          { src: './src/img/2.png',name:'老字号',id:"2222"},
          { src: './src/img/3.png',name:'君临天下',id:"3333"},
          { src: './src/img/4.png',name:'君临天下',id:"4444"},
          { src: './src/img/5.png',name:'君临天下',id:"5555"},
          { src: './src/img/6.png',name:'君临啊天下',id:"6666"},
          { src: './src/img/7.png',name:'960天下',id:"7777"},
          { src: './src/img/8.png',name:'君临天下',id:"8888"},
          { src: './src/img/9.png',name:'临天下',id:"9999"}
        ],
        imageBar: [
          { src: './src/img/101.jpg',name:'君临天下',id:"1234"},
          { src: './src/img/102.jpg',name:'君临天下',id:"5678"},
          { src: './src/img/103.jpg',name:'君临天下',id:"9012"},
          { src: './src/img/104.jpg',name:'君临天',id:"3456"},
        ]
      }
    },
    methods: {
      jump (to) {
        var that = this;
        if (this.$router) {
          this.$router.push(to);
          // console.log(event);
          // console.log(id)
        }
        that.type = to;
      }
    }
  }
</script>




<!-- <template>
  <div>

    <slider class="slider" interval="3000" auto-play="true">
      <div class="frame" v-for="img in imageList">
        <image class="image" resize="cover" :src="img.src"></image>
      </div>
    </slider>
    <app-header></app-header>
  </div>
</template>

<script>

export default {
  components: { AppHeader },
  data () {
      return {
        imageList: [
          { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
        ]
      }
    }
}
</script>


<style scoped>
  .abc {
    font-size: 50px;
    text-align: center;
  }
  .image {
    width: 700px;
    height: 700px;
  }
  .slider {
    margin-top: 25px;
    margin-left: 25px;
    width: 700px;
    height: 700px;
    border-width: 2px;
    border-style: solid;
    border-color: #41B883;
  }
  .frame {
    width: 700px;
    height: 700px;
    position: relative;

</style> -->
