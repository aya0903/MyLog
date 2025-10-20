<!-- 日記編集画面 -->
<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useDiaryStore } from '../stores/diary'
import { useCompleteStore } from '@/stores/complete'

const router = useRouter()
const diaryStore = useDiaryStore()
const id = diaryStore.$state.id
const completeStore = useCompleteStore()

const content = ref(diaryStore.$state.content)
const picture = ref(diaryStore.$state.picture)
const emotion = ref(diaryStore.$state.emotion)
const tag = ref(diaryStore.$state.tag)
const previewUrl = ref(diaryStore.$state.picture)

const tagOptions = [
  {
    value: '自分',
    label: '自分',
  },
  {
    value: '友達',
    label: '友達',
  },
  {
    value: '家族',
    label: '家族',
  },
  {
    value: '仕事',
    label: '仕事',
  },
  {
    value: '学校',
    label: '学校',
  },
  {
    value: 'お出かけ',
    label: 'お出かけ',
  },
]

const emotionOptions = [
  {
    value: 'きらきら',
    label: 'きらきら',
  },
  {
    value: 'うきうき',
    label: 'うきうき',
  },
  {
    value: 'にこにこ',
    label: 'にこにこ',
  },
  {
    value: 'ふつう',
    label: 'ふつう',
  },
  {
    value: 'もやもや',
    label: 'もやもや',
  },
  {
    value: 'しょんぼり',
    label: 'しょんぼり',
  },  {
    value: 'うるうる',
    label: 'うるうる',
  },
]

const handleImageChange = (file) => {
  previewUrl.value = URL.createObjectURL(file.target.files[0])

  const reader = new FileReader()
  reader.onload = () => {
    picture.value = reader.result
  }
  reader.readAsDataURL(file.target.files[0])
  return false
}

const back = () => router.back()

const submit = async () => {
  try {
  await axios.post(`http://localhost:3000/api/diaries/${id}`, {
    content: content.value,
    picture: picture.value,
    emotion: emotion.value,
    tag: tag.value,
  })
    router.push('/complete')
    completeStore.update('日記の編集', '/home')
  } catch (error) {

    console.error("日記編集エラー:", error)
    if (error.response.data.message) {
      ElMessage.error(error.response.data.message)
    } else {
      ElMessage.error('通信エラーが発生しました。')
    }
  }
}
</script>

<template>
  <div class="container">
    <el-input
      v-model="content"
      type="textarea"
      :rows="6"
      class="input-area"
    />

    <input type="file" @change="handleImageChange" class="file-input" />
    <div class="preview">
      <img v-if="previewUrl" :src="previewUrl" alt="日記画像" class="preview-image" />
    </div>

    <div class="select-container">
      <el-select
        v-model="emotion"
        placeholder="感情"
        style="width: 180px"
        placement="bottom-start"      
        >
        <el-option
          v-for="emotion in emotionOptions"
          :key="emotion.value"
          :label="emotion.label"
          :value="emotion.value"
        />
        </el-select>
  
        <el-select
          v-model="tag"
          placeholder="カテゴリー"
          style="width: 180px"
          placement="bottom-start"
        >
        <el-option
          v-for="tag in tagOptions"
          :key="tag.value"
          :label="tag.label"
          :value="tag.value"
        />
        </el-select>
    </div>
    <div class="buttons">
      <el-button type="info" plain @click="back">戻る</el-button>
      <el-button type="primary" plain @click="submit">更新</el-button>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  margin: 0 auto;
}

.text {
  width: 300px;
  height: 150px;
  padding: 10px;
  resize: none;
}

.input-area {
  width: 100%;
}

.file-input {
  margin-top: 10px;
  padding-top: 30px;
}

.preview-image {
  max-width: 200px;
  margin-top: 10px;
}

.tag {
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 5px;
}

.select-container {
  display: flex;
  gap: 30px;
  padding-top: 50px;
}

.buttons {
  display: flex;  
  justify-content: space-evenly;
  padding-top: 70px;
  width: 400px;
}
</style>
