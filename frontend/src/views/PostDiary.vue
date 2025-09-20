<!-- 日記投稿画面 -->
<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useDiaryStore } from '@/stores/diary'

const router = useRouter()
const diaryStore = useDiaryStore()
const previewUrl = ref(null)

const form = reactive({
  content: '',
  picture: null,
})

const handleBeforeUpload = (file) => {
  previewUrl.value = URL.createObjectURL(file) // プレビュー用URL

  const reader = new FileReader()
  reader.onload = () => {
    form.picture = reader.result
  }
  reader.readAsDataURL(file)

  return false
}

const back = () => router.back()

const next = () => {
  if (!form.content) {
    ElMessage.error("本文を入力してください")
    return
  }

  diaryStore.updateContentData(form.content, form.picture)
  router.push('/emotion')
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
        :before-upload="handleBeforeUpload"
      >
        <i class="el-icon-upload" />
        <div class="el-upload__text">ここに画像をドラッグするか、クリックして選択</div>
      </el-upload>

      <div v-if="previewUrl" style="margin-top: 20px;">
        <img :src="previewUrl" alt="選択した画像" style="max-width: 200px;" />
      </div>
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
