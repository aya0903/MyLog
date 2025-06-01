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
    <div class="logo-container">
      <img src="../assets/MyLog_logo.png" alt="ロゴ" class="logo" />
    </div>

    <!-- 中央メッセージ -->
    <div class="message">
      {{ itemName }}が完了しました。
    </div>

    <!-- 下部の閉じるボタン -->
    <div class="button-container">
      <button @click="close">閉じる</button>
    </div>
  </div>
</template>

<style scoped>
.complete-screen {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* ロゴは画面上中央に固定 */
.logo-container {
  position: absolute;
  width: 200px;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.logo {
  max-height: 60px;
  /* 必要に応じてサイズ調整 */
}

/* 中央のメッセージ */
.message {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin: 0 20px;
}

/* 下部のボタン */
.button-container {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
}
</style>
