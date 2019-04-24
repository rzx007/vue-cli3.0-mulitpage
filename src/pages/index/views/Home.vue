<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <h1>{{time}}</h1>
  </div>
</template>

<script>
import { setInterval } from "timers";
export default {
  name: "home",
  data() {
    return {
      time: ""
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
