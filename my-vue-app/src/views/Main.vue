<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppNavbar from "@/components/AppNavbar.vue";
</script>

<template>
  <div>
    <div class="header">
      <app-header />
    </div>
    <div class="navbar">
      <app-navbar />
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.header {
  position: absolute;
  line-height: 50px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #575e6b;
}
.navbar {
  position: absolute;
  width: 230px;
  top: 50px;
  left: 0px;
  bottom: 0px;
  overflow-y: auto;
  background-color: white;
}
.main {
  position: absolute;
  top: 50px;
  left: 230px;
  bottom: 0px;
  right: 0px;
  padding: 10px;
  overflow-y: auto;
}
</style>