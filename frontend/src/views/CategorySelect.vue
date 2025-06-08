<script setup>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

const router = useRouter()

const categories = ['自分', '友達', '家族', '仕事', '学校', 'お出かけ']

const selectedCategory = reactive({
  name: '',
})

const selectCategory = (category) => {
  selectedCategory.name = category
}

const goBack = () => {
  router.back()
}

const goNext = () => {
  if (!selectedCategory.name) {
    alert('なにについて？')
    return
  }
  console.log('選択カテゴリー:', selectedCategory.name)
  router.push('/next-screen') // 次の画面に遷移（適宜変えてね）
}
</script>

<template>
  <div class="outer-container">
    <h2>なにについて？</h2>
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
      <button @click="goBack" class="big-button">戻る</button>
      <button @click="goNext" class="big-button">投稿</button>
    </div>
  </div>
</template>

<style scoped>
.outer-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px 0;
  width: 300px;
}

.category-box {
  padding: 20px;
  background-color: #ddd;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  text-align: center;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.category-box:hover {
  background-color: #bbb;
}

.category-box.selected {
  background-color: #87cefa; /* 選択中は色変える */
  color: white;
}

.button-group {
  display: flex;
  justify-content: space-between;
  width: 300px;
}

.big-button {
  padding: 15px 30px;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
