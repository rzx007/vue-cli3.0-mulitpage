<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <h1>{{time}}</h1>
    <!-- hello-world全局组件 -->
    <!-- <hello-world msg='hello Vue'></hello-world> -->
    <template v-for="(item,index) in datas" >
      <component :is="item.component" :msg='item.value' :key="index"></component>
    </template>
  </div>
</template>

<script>
import { setInterval } from "timers";
export default {
  name: "home",
  data() {
    return {
      time: "",
      datas:[{
        value:'hello Vue',
        component:'hello-world'
      },{
        value:'hello World',
        component:'hello-world'
      }]
    };
  },
  methods: {
    getTimeStr() {
      this.time = new Date().toLocaleString();
    }
  },
  mounted() {
    setInterval(()=> {
      this.getTimeStr();
    }, 1000);
  },
  computed() {},
  watch() {}
};
</script>
