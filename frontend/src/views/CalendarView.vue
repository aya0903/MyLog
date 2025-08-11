<!-- カレンダー画面 -->

<script setup>
import { ref } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'

const currentDate = ref(new Date())

// const feelings = [
//   { user_id: 1, feeling: 'red', date: '2025-06-26' },
//   { user_id: 1, feeling: 'blue', date: '2025-06-15' },
//   { user_id: 1, feeling: 'yellow', date: '2025-06-10' },
// ]
</script>

<template>
  <div class="calendar-container">
    <h1 class="title">カレンダー</h1>
    <div class="month-label">{{ currentDate.toLocaleDateString('ja-JP', { month: 'long' }) }}</div>
  
    <div class="calendar-wrapper">
      <el-calendar v-model="currentDate">
        <template #date-cell="{ data }">
          <div class="date-cell">
            {{ console.log(data) }}
            <div class="date-number" :style="{ opacity: data.type !== 'current-month' ? '0.3' : '1' }">
              {{ data ? data.date.getDate() : '' }}
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

.month-label {
  font-size: 20px;
  font-weight: bold;
}

.calendar-wrapper {
  transform: scale(0.85);
}

.date-cell {
  position: relative;
}

.date-number {
  position: absolute;
  top: 4px;
  left: 6px;
  font-size: 14px;
  color: #333;
}

.emotion-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>