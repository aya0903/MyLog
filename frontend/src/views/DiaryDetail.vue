<!-- 日記詳細画面 -->

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const diary = {
  date: '2025-06-08',
  content: '今日はとても良い一日でした。',
  image: 'https://placekitten.com/300/200',
  emotion: 'にこにこ',
  category: '友達',
}

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

const confirmDelete = () => {
  alert('削除しました')
  router.push('/')
}
</script>

<template>
  <div class="container">
    <div class="top-bar">
      <div class="date">{{ diary.date }}</div>
      <div class="actions">
        <el-button type="primary" plain @click="editDiary">編集</el-button>
        <el-button type="danger" plain @click="deleteDiary">削除</el-button>
      </div>
    </div>

    <!-- 本文と写真 -->
    <div class="content">
      <div class="text">{{ diary.content }}</div>
      <img v-if="diary.image" :src="diary.image" alt="日記画像" class="image" />
    </div>

    <!-- 感情・カテゴリ -->
    <div class="tags">
      <el-tag type="info">{{ diary.emotion }}</el-tag>
      <el-tag type="success">{{ diary.category }}</el-tag>
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}

.date {
  font-size: 18px;
  font-weight: bold;
  padding-right: 10px;
}

.actions > * {
  margin-left: 16px;
  margin-right: 10px;
}

.content {
  margin: 20px 0;
  text-align: center;
  padding: 30px;
}

.text {
  margin-bottom: 10px;
  font-size: 16px;
}

.image {
  max-width: 100%;
  border-radius: 8px;
  padding: 30px;
}

.tags {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  gap: 20px;
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
  padding: 30px;
}

.dialog-footer {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>