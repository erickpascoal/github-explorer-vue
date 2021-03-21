<template>
  <!-- <Dashboard /> -->
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  background: #e1e1e1 url("./assets/images/background.svg") no-repeat 70% top;
  -webkit-font-smoothing: antialiased;
}
body,
input,
button {
  font: 16px Roboto, sans-serif;
}
a,
button {
  cursor: pointer;
}
#app {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}
</style>