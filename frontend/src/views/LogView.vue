<!-- ログ画面 -->

<script setup>
import { ref, onMounted } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'
import axios from 'axios'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const userId = ref(userStore.$state.id)
const totalPosts = ref()
const totalChars = ref()

onMounted( async () => {
  try {
    const response = await axios.post("http://localhost:3000/api/countDiary", {
      user_id: userId.value
    })
    console.log(response.data)
    totalPosts.value = response.data.totalPosts
    totalChars.value = response.data.totalChars
  }catch (error) {
    console.error("日記数・文字数取得エラー:", error)
  }
})
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
        <div class="label">合計文字数</div>
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