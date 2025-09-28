<!-- ホーム画面 -->

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted  } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'
import axios from 'axios'
import { useDiaryStore } from '../stores/diary'

const diaryStore = useDiaryStore()
const diaries = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/diaries')
    diaries.value = response.data
    console.log("取得したデータ:", response.data)
  } catch (error) {
    console.error("ユーザー取得エラー:", error)
  } 
})

const truncate = (text) => {
  if (text.length > 20) {
    return text.slice(0, 20) + "…";
  }
  return text;
};

const router = useRouter()

const openDiaryDetail = (id) => {
  diaryStore.updateId(id)
  router.push('/diary-detail')
}

const submit = () => {
  router.push('/post-diary')
}
</script>

<template>
  <div class="home">
    <div v-for="diary in diaries" :key="diary.id" class="content">
      <div class="detail">
        <div class="date">{{ diary.day }}</div>
        <div class="text">{{ truncate(diary.content) }}</div>
      </div>
      <div class="diary-image">
        <img v-show="diary.picture" :src="diary.picture" alt="日記画像" class="image" />
      </div>
      <div class="detail-button">
        <el-button type="info" plain @click="openDiaryDetail(diary.id)">詳細</el-button>
      </div>    
    </div>
  </div>
  <div class="button">
    <el-button type="primary" plain @click="submit">日記をかく</el-button>
  </div>
  <NavigationBar />
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 80px 0px 155px 0px;
}

.content {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.detail {
  width: 250px;
  height: 100px;
  border: 1px solid #B3E19D;
  border-radius: 10px;
  padding: 15px;
  
}

.diary-image {
  width: 120px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  border: 1px solid #B3E19D;
  border-radius: 10px;
  padding: 15px;
  height: 100px;
  width: 100px;
  object-fit: contain;
}

.detail-button {
  display: flex;
  align-items: center;
}

.button {
  position: fixed;
  bottom: 40px;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center; 
  padding: 20px 30px;
}
</style>