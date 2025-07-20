<!-- カテゴリー選択画面 -->
<script setup>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { useCompleteStore } from '@/stores/complete'

const completeStore = useCompleteStore()

const router = useRouter()

const categories = ['自分', '友達', '家族', '仕事', '学校', 'お出かけ']

const selectedCategory = reactive({
  name: '',
})

const selectCategory = (category) => {
  selectedCategory.name = category
}

const back = () => router.back()

const submit = () => {
  if (!selectedCategory.name) {
    alert('なにについて？')
    return
  }
  router.push('/complete')
  completeStore.update('日記の投稿', '/')
  
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
        :class="{ selected: selectedCategory.name === category }"
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
  background-color: #ddd;
  padding: 10px;
  text-align: center;
  font-size: 15px;
  border-radius: 10px;
}

.category-box:hover {
  background-color: #bbb;
}

.category-box.selected {
  background-color: #87cefa;
  color: white;
}

.button-group {
  display: flex;  
  justify-content: space-evenly;
  width: 300px;
  padding-top: 50px;
}
</style>
