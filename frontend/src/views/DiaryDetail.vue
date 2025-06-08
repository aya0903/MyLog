<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// 仮データ（実際は props や API から取得）
const diary = {
  date: '2025-06-08',
  content: '今日はとても良い一日でした。',
  image: 'https://placekitten.com/300/200',
  emotion: 'にこにこ',
  category: '友達',
}

const goBack = () => {
  router.back()
}

const editDiary = () => {
  // 編集画面に遷移（後で作成）
  router.push('/edit-diary')
}

const deleteDiary = () => {
  // 削除処理（簡易確認）
  if (confirm('本当に削除しますか？')) {
    alert('削除しました')
    router.push('/home')
  }
}
</script>

<template>
  <div class="container">
    <!-- 上部：日付と編集・削除ボタン -->
    <div class="top-bar">
      <div class="date">{{ diary.date }}</div>
      <div class="actions">
        <el-button type="primary" size="small" @click="editDiary">編集</el-button>
        <el-button type="danger" size="small" @click="deleteDiary">削除</el-button>
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
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
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
}

.date {
  font-size: 18px;
  font-weight: bold;
}

.actions > * {
  margin-left: 8px;
}

.content {
  margin: 20px 0;
  text-align: center;
}

.text {
  margin-bottom: 10px;
  font-size: 16px;
}

.image {
  max-width: 100%;
  border-radius: 8px;
}

.tags {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.footer {
  display: flex;
  justify-content: flex-start;
}
</style>
