<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const emotions = [
  { label: 'きらきら', color: '#fba09d' },
  { label: 'うきうき', color: '#fbb39d' },
  { label: 'にこにこ', color: '#fbc99d' },
  { label: 'ふつう', color: '#fbdf9d' },
  { label: 'もやもや', color: '#e9e5af' },
  { label: 'しょんぼり', color: '#c8ddbb' },
  { label: 'うるうる', color: '#b6e2dd' },
]

const selected = ref('')

const selectEmotion = (emotion) => {
  selected.value = emotion
}

const goBack = () => {
  router.push('/post-diary')
}

const goNext = () => {
  console.log('選択された感情:', selected.value)
  router.push('/complete') // 仮の遷移先
}
</script>

<template>
  <div class="emotion-container">
    <h2 class="title">どんなきもち？</h2>
    <div class="emotion-list">
      <div
        v-for="emotion in emotions"
        :key="emotion.label"
        class="emotion-box"
        :style="{ backgroundColor: emotion.color, border: selected === emotion.label ? '3px solid #333' : 'none' }"
        @click="selectEmotion(emotion.label)"
      >
        {{ emotion.label }}
      </div>
    </div>
    <div class="button-group">
      <el-button class="big-button" @click="goBack">戻る</el-button>
      <el-button class="big-button" type="primary" @click="goNext" :disabled="!selected">次へ</el-button>
    </div>
  </div>
</template>

<style scoped>
.emotion-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  justify-content: center;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.emotion-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
}

.emotion-box {
  padding: 15px;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
}

.emotion-box:hover {
  opacity: 0.8;
}

.button-group {
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-top: 30px;
}

.big-button {
  padding: 15px 30px;
  font-size: 1.1rem;
}
</style>
