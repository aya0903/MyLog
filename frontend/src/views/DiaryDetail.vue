<!-- 日記詳細画面 -->
<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useDiaryStore } from '../stores/diary'

const diaryStore = useDiaryStore()
const router = useRouter()
const diary = ref([])
const id = diaryStore.$state.id

onMounted(async () => {
  try {
  const response = await axios.get(`http://localhost:3000/api/diaries/id/${id}`)
  diary.value = response.data
  const res = response.data[0]
  diaryStore.update(res.id, res.content, res.picture, res.emotion, res.tag)
  } catch (error) {
    console.error("日記取得エラー:", error)
  }
})

const formatDateToYMD = (diaryDate) => {
  const date = new Date(diaryDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const showDeleteDialog = ref(false)

const goBack = () => {
  router.back()
}

const editDiary = () => {
  router.push('/edit-diary')
}

const deleteDiary = () => {
  showDeleteDialog.value = true
}

const confirmDelete = async () => {
  try {
  await axios.delete(`http://localhost:3000/api/diaries/${id}`)
  } catch (error) {
    console.error("日記削除エラー:", error)
  }
  alert('削除しました')
  router.push('/home')
}
</script>

<template>
  <div v-for="item in diary" :key="item.id" class="container">
    <div class="top-bar">
      <div class="date">{{ formatDateToYMD(item.day) }}</div>
      <div class="actions">
        <el-button type="primary" plain @click="editDiary">編集</el-button>
        <el-button type="danger" plain @click="deleteDiary">削除</el-button>
      </div>
    </div>

    <!-- 本文と写真 -->
    <div class="content">
      <div class="text">{{ item.content }}</div>
      <img v-if="item.picture" :src="item.picture" alt="日記画像" class="image" />
    </div>

    <!-- 感情・カテゴリ -->
    <div class="tags">
      <el-tag type="success">{{ item.emotion }}</el-tag>
      <el-tag type="info">{{ item.tag }}</el-tag>
    </div>

    <!-- 下部：戻るボタン -->
    <div class="footer">
      <el-button @click="goBack">戻る</el-button>
    </div>

  <!-- 削除確認モーダル -->
    <el-dialog
      v-model="showDeleteDialog"
      width="400px"
      align-center
    >
      <span class="center-text">この日記を本当に削除しますか？</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="showDeleteDialog = false">キャンセル</el-button>
          <el-button type="danger" @click="confirmDelete">削除する</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.top-bar {
  display: flex;
  padding-top: 100px;
}

.date {
  font-size: 18px;
  font-weight: bold;
  padding-right: 70px;
}

.content {
  text-align: center;
  padding-top: 70px;
}

.text {
  font-size: 16px;
  width: 500px;
}

.image {
  border-radius: 8px;
  padding-top: 30px;
  height: 300px;
  width: 300px;
  object-fit: contain;
}

.tags {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 30px;
}

.center-text {
  display: block;
  text-align: center;
  font-size:18px;
  padding: 30px;
}

.footer {
  display: flex;
  justify-content: flex-start;
  padding-top: 70px;
}

.dialog-footer {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>