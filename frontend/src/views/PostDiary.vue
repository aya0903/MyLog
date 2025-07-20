<!-- 日記投稿画面 -->

<script setup>
import { useRouter } from 'vue-router'
import { nextTick, reactive } from 'vue'

const router = useRouter()

const form = reactive({
  content: '',
  image: null,
})

const back = () => {
  router.push('/') // ホームに戻る
}

const next = () => {
  router.push('/emotion') //感情選択画面に移動
}
</script>

<template>
  <div class="outer-container">
    <div class="content">
      <el-input
        v-model="form.content"
        type="textarea"
        rows="6"
        placeholder="今日の日記を書いてください"
        class="input-area"
      />

      <el-upload
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

    <div class="button-group">
      <el-button type="info" plain @click="back">戻る</el-button>
      <el-button type="primary" plain @click="next">次へ</el-button>
    </div>
  </div>
</template>

<style scoped>
.outer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 150px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  max-width: 400px;

}

.input-area {
  width: 100%;
}

.upload-area {
  width: 100%;
  border: 2px dashed #dcdfe6;
  border-radius: 6px;
  padding: 20px;
  text-align: center;
}

.button-group {
  display: flex;  
  justify-content: space-evenly;
  padding-top: 100px;
  width: 400px;
}

</style>
