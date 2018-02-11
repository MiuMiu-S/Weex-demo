<template>
  <div>
    <text class="abc">开发中.....</text>
    <text class="abc">窗口id为：{{winid}}</text>

  </div>
</template>


<script>
export default {
  data(){
    return{
      winid:''
    }
  },
  created:function(){
    let id = this.$route.params.id;
    this.winid = id;
  }
}

</script>


<style scoped>
  .abc {
    font-size: 50px;
    text-align: center;
  }

</style>
