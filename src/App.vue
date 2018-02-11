<template>
  <!-- <div @androidback="back"> -->
  <div>
    <router-view style="flex:1"></router-view>
    <!-- <app-header></app-header> -->
  </div>
</template>

<script>
import AppHeader from './components/app-header.vue'
  export default {
    components: { AppHeader }
  }
</script>
