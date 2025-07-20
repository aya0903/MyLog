<!-- 感情選択画面 -->

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const emotions = [
  { label: 'きらきら', color: '#8E71C7' },
  { label: 'うきうき', color: '#409EFF' },
  { label: 'にこにこ', color: '#a0cfff' },
  { label: 'ふつう', color: '#67C23A' },
  { label: 'もやもや', color: '#F5D69B' },
  { label: 'しょんぼり', color: '#E6A23C' },
  { label: 'うるうる', color: '#F56C6C' },
]

const selected = ref('')

const selectEmotion = (emotion) => {
  selected.value = emotion
}

const back = () => router.back()

const submit = () => {
  router.push('/category')
}
</script>

<template>
  <div class="emotion-container">
    <p class="title">どんなきもち？</p>
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
      <el-button type="info" plain @click="back">戻る</el-button>
      <el-button type="primary" plain @click="submit">次へ</el-button>
    </div>
  </div>
</template>

<style scoped>
.emotion-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  padding-bottom: 20px;
  font-size: 30px;
  padding-top: 100px;
  text-align: center;
}

.emotion-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
}

.emotion-box {
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
