<!-- ログ画面 -->

<script setup>
import { ref } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'

const totalPosts = ref(12)
const totalChars = ref(1536)
</script>

<template>
  <div class="log-container">
    <h1 class="title">ログ</h1>

    <div class="stats">
      <div class="stat-item">
        <div class="label">投稿数</div>
        <div class="value">{{ totalPosts }}</div>
      </div>
      <div class="stat-item">
        <div class="label">文字数</div>
        <div class="value">{{ totalChars }}</div>
      </div>
    </div>
  </div>
  <NavigationBar />
</template>


<style scoped>
.log-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 20px;
  padding-bottom: 60px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin: 50px;
}

.stats {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 50px;
}

  .stat-item {
  text-align: center;
  background-color: #99ccff;
  padding: 24px 32px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 160px;
}

.label {
  font-size: 16px;
  color: #666;
}

.value {
  font-size: 22px;
  font-weight: bold;
  margin-top: 5px;
}
</style>