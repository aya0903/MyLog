<!-- 感情選択画面 -->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useDiaryStore } from '@/stores/diary'

const router = useRouter()
const diaryStore = useDiaryStore()

const emotions = [
  { label: 'きらきら', color: '#F56C6C' },
  { label: 'うきうき', color: '#E6A23C' },
  { label: 'にこにこ', color: '#F5D69B' },
  { label: 'ふつう', color: '#67C23A' },
  { label: 'もやもや', color: '#a0cfff' },
  { label: 'しょんぼり', color: '#409EFF' },
  { label: 'うるうる', color: '#8E71C7' }
]

const selectedEmotion = ref("")

const selectEmotion = (emotion) => {
  selectedEmotion.value = emotion
}

const back = () => router.back()

const next = () => {
  if (!selectedEmotion.value) {
    ElMessage.error("感情を選択してください")
    return
  }
  diaryStore.updateEmotion(selectedEmotion.value)
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
        :style="{ backgroundColor: emotion.color, opacity: selectedEmotion === emotion.label ? '1' : '0.5' }"
        @click="selectEmotion(emotion.label)"
      >
        {{ emotion.label }}
      </div>
    </div>
    <div class="button-group">
      <el-button type="info" plain @click="back">戻る</el-button>
      <el-button type="primary" plain @click="next">次へ</el-button>
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
