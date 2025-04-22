<script setup>
import { ref } from 'vue'
const inputItem = ref("")
</script>

<template>
  Priority:
  <label>
    <input v-model="inputItem" type="radio" value="low">Low
  </label>
  <label>
    <input v-model="inputItem" type="radio" value="high">High
  </label>
  {{inputItem}}
</template>

