<!-- ホーム画面 -->

<script setup>
import { useRouter } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'

const diary = {
  date: '2025-06-08',
  content: '今日はとても良い一日でした。',
  image: 'https://placekitten.com/300/200',
  emotion: 'にこにこ',
  category: '友達',
}

const router = useRouter()

const submit = () => {
  router.push('/post-diary')
}
</script>

<template>
  <div class="home">
    <div class="content">
      <div class="detail">
        <div class="date">{{ diary.date }}</div>
        <div class="text">{{ diary.content }}</div>
      </div>
      <img v-if="diary.image" :src="diary.image" alt="日記画像" class="image" />
    </div>
    <div class="content">
      <div class="detail">
        <div class="date">{{ diary.date }}</div>
        <div class="text">{{ diary.content }}</div>
      </div>
      <img v-if="diary.image" :src="diary.image" alt="日記画像" class="image" />
    </div>

    <div class="button">
      <el-button type="primary" plain @click="submit">日記をかく</el-button>
    </div>
  </div>
  <NavigationBar />
</template>

<style scoped>
.home {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-top: 100px;
}

.content {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.detail {
  border: 1px solid #B3E19D;
  border-radius: 10px;
  padding: 15px;
}

.image {
  border: 1px solid #B3E19D;
  border-radius: 10px;
  padding: 15px;
}

.button {
  padding-top: 20px;
}
</style>