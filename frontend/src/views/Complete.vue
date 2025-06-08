<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  itemName: {
    type: String,
    required: true
  },
  redirectPath: {
    type: String,
    required: true
  }
})

const router = useRouter()

function close() {
  router.push(props.redirectPath)
}
</script>

<template>
  <div class="complete-screen">
    <!-- ロゴ画像：画面上中央 -->
<div class="logo-message-group">
  <img src="../assets/MyLog_logo.png" alt="ロゴ" class="logo" />
  <div class="message">{{ itemName }}が完了しました。</div>
</div>

    <!-- 下部の閉じるボタン -->
    <div class="button-container">
      <button @click="close">閉じる</button>
    </div>
  </div>
</template>

<style scoped>
.complete-screen {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 縦方向に中央寄せ */
  align-items: center;     /* 横方向に中央寄せ */
  gap: 200px;               /* 要素間のスペース */
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
  max-height: 60px;
}

/* 完了の文字 */
.message {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin: 0 20px;
}

/* 閉じるボタン */
button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
}

</style>
