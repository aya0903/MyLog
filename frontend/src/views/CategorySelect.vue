<!-- カテゴリー選択画面 -->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { useCompleteStore } from '@/stores/complete'
import { ElMessage } from 'element-plus'
import axios from 'axios'
import { useDiaryStore } from '@/stores/diary'

const router = useRouter()
const userStore = useUserStore()
const completeStore = useCompleteStore()
const diaryStore = useDiaryStore()

const categories = ['自分', '友達', '家族', '仕事', '学校', 'お出かけ']

const selectedCategory = ref("")

const selectCategory = (category) => {
  selectedCategory.value = category
}

const back = () => router.back()

const submit = async () => {
  if (!selectedCategory.value) {
    ElMessage.error("カテゴリーを選択してください")
    return
  }
  try {
    const response = await axios.post('http://localhost:3000/api/postDiary', {
      user_id: userStore.id,
      content: diaryStore.content,
      picture: diaryStore.picture,
      emotion: diaryStore.emotion,
      tag: selectedCategory.value
    })
    if (response.data.success) {
      diaryStore.updateTag(selectCategory.value)

      router.push('/complete')
      completeStore.update('日記の投稿', '/home')
    } else {
      ElMessage.error('日記の投稿に失敗しました。')
    }
  } catch (error) {
    console.log("日記投稿エラー:", error)
    if (error.response.data.message) {
      ElMessage.error(error.response?.data?.message)
    } else {
      ElMessage.error('通信エラーが発生しました。')
    }
  }
}
</script>

<template>
  <p class="title">なにについて？</p>
  <div class="outer-container">
    <div class="category-list">
      <div
        v-for="category in categories"
        :key="category"
        class="category-box"
        :style="{ backgroundColor: '#ddd', opacity: selectedCategory === category ? 1 : 0.5 }"
        @click="selectCategory(category)"
      >
        {{ category }}
      </div>
    </div>

    <div class="button-group">
      <el-button type="info" plain @click="back">戻る</el-button>
      <el-button type="primary" plain @click="submit">投稿</el-button>
    </div>
  </div>
</template>

<style scoped>
.title {
  padding-bottom: 20px;
  font-size: 30px;
  padding-top: 100px;
  text-align: center;
}
.outer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
}

.category-box {
  padding: 10px;
  text-align: center;
  font-size: 15px;
  border-radius: 10px;
}

.button-group {
  display: flex;  
  justify-content: space-evenly;
  width: 300px;
  padding-top: 50px;
}
</style>
