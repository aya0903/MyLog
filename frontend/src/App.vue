<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
<div class="app-container">
    <RouterView />
  </div>
</template>

<style scoped>
/* グローバルに適用 */
.app-container {
  width: 100%;
}
</style>
