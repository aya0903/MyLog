<!-- カレンダー画面 -->
<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import NavigationBar from '@/components/NavigationBar.vue'
import { useUserStore } from '@/stores/user'

const currentDate = ref(new Date())
const userStore = useUserStore()
const diaries = ref([])
const userId = userStore.$state.id

const emotionColors  = { 
  きらきら: "#F56C6C",
  うきうき: "#E6A23C",
  にこにこ: "#F5D69B",
  ふつう: "#67C23A",
  もやもや: "#a0cfff",
  しょんぼり: "#409EFF",
  うるうる: "#8E71C7",
};

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:3000/api/diaries/user/${userId}`)
    diaries.value = response.data
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
</script>

<template>
  <div class="calendar-container">
    <h1 class="title">カレンダー</h1>
    <div class="calendar-wrapper">
      <el-calendar v-model="currentDate">
        <template #date-cell="{ data }">
          <div class="date-cell">
            <!-- 日付番号 -->
            <div 
              class="date-number"
              :style="{ opacity: data.type !== 'current-month' ? '0.3' : '1' }"
            >
              {{ data.date.getDate() }}
            </div>
            <div class="emotion">
              <div 
                v-for="diary in diaries
                  .filter(d => data.day === formatDateToYMD(d.day))
                  .slice(0, 5)"
                :key=diary.id>
                <div
                  v-if="data.day === formatDateToYMD(diary.day)" 
                  :style="{ backgroundColor: emotionColors[diary.emotion] }"
                  class="emotion-dot">
                </div>
              </div>
            </div>
          </div> 
        </template>
      </el-calendar>
    </div>
  </div>
  <NavigationBar />
</template>

<style scoped>
.calendar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 60px;
  min-height: 100vh;
  position: relative;
  height: 100vh;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
  padding-bottom: 20px;
}

.calendar-wrapper {
  transform: scale(0.85);
}

.date-cell {
  position: relative;
  height: 100%;
}

.date-number {
  position: absolute;
  top: 4px;
  left: 6px;
  font-size: 14px;
  color: #333;
}

.emotion {
  display: flex;
  position: absolute;
  top: 30px;
  left: 6px;
}

.emotion-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 6px;
}
</style>