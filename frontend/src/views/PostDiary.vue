<script setup>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

const router = useRouter()

const form = reactive({
  content: '',
  image: null,
})

const goBack = () => {
  router.push('/home') // ホームに戻る
}

const goNext = () => {
  console.log('送信内容:', form)
  router.push('/confirm') //　感情選択画面に移動
}
</script>

<template>
  <div class="outer-container">
    <div class="content">
      <!-- テキスト入力 -->
      <el-input
        v-model="form.content"
        type="textarea"
        rows="6"
        placeholder="今日の日記を書いてください"
        class="input-area"
      />

      <!-- 写真アップロード -->
      <el-upload
        class="upload-area"
        drag
        action="#"
        :show-file-list="false"
        :before-upload="(file) => {
          form.image = file
          return false
        }"
      >
        <i class="el-icon-upload" />
        <div class="el-upload__text">ここに画像をドラッグするか、クリックして選択</div>
      </el-upload>
    </div>

    <!-- 下部ボタン -->
    <div class="button-group">
      <el-button class="big-button" @click="goBack">戻る</el-button>
      <el-button class="big-button" type="primary" @click="goNext">次へ</el-button>
    </div>
  </div>
</template>

<style scoped>
.outer-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 縦方向中央 */
  align-items: center;
  padding: 20px;
  padding-bottom: 90px;
  box-sizing: border-box;
  position: relative;
}

/* 中央の入力エリア（縦並び） */
.content {
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  max-width: 500px;
}

/* テキスト入力欄 */
.input-area {
  width: 100%;
}

/* アップロードエリア */
.upload-area {
  width: 100%;
  border: 2px dashed #dcdfe6;
  border-radius: 6px;
  padding: 20px;
  text-align: center;
}

/* ボタンエリア（画面下部固定） */
.button-group {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 150px;
}

/* ボタンのサイズ調整 */
.big-button {
  padding: 15px 28px;
  font-size: 1.2rem;
}
</style>
