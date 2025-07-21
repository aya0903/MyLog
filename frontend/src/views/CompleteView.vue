<!-- 完了画面 -->

<script setup>
import { useRouter } from 'vue-router'
import { useCompleteStore } from '@/stores/complete'

const completeStore =  useCompleteStore()
const router = useRouter()

function close() {
  router.push(completeStore.$state.link)
}
</script>

<template>
  <div class="complete-screen">
    <!-- ロゴ画像：画面上中央 -->
    <div class="logo-message-group">
      <img src="../assets/MyLog_logo.png" alt="ロゴ" class="logo" />
      <div class="message">{{ completeStore.$state.text }}が完了しました。</div>
    </div>
    <el-button type="info" plain @click="close">閉じる</el-button>
  </div>
</template>

<style scoped>
.complete-screen {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 200px;
}

/* ロゴと完了の文字が持ってる面積*/
.logo-message-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 200px;
}

/* 画像 */
.logo {
  height: 100px;
}

/* 完了の文字 */
.message {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin: 0 20px;
}
</style>
