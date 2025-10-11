<script setup>
import { useRouter } from 'vue-router'
import { Calendar, House, Document, User } from '@element-plus/icons-vue'

const router = useRouter()

const home = () => {
  router.push('/home')
}

const log = () => {
  router.push('/log')
}

const calendar = () => {
  router.push('/calendar')
}

const myPage = () => {
  router.push('/my-page')
}


</script>

<template>
  <el-tabs
    type="border-card"
    class="nav-tabs"
  >
    <el-tab-pane name="home">
      <template #label>
        <span class="tab-label" @click="home"><el-icon><House /></el-icon>ホーム</span>
      </template>
    </el-tab-pane>  
    <el-tab-pane name="log">
      <template #label>
        <span class="tab-label" @click="log"><el-icon><Document /></el-icon>ログ</span>
      </template>
    </el-tab-pane>  
    <el-tab-pane name="calendar">
      <template #label>
        <span class="tab-label" @click="calendar"><el-icon><Calendar /></el-icon>カレンダー</span>
      </template>
    </el-tab-pane>  
    <el-tab-pane name="mypage">
      <template #label>
        <span class="tab-label" @click="myPage"><el-icon><User /></el-icon>マイページ</span>
      </template>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped>
.nav-tabs {
  width: 100%;
  position: fixed;
  bottom: 0;
}

:deep(.el-tabs__nav) {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

:deep(.el-tabs__item) {
  flex: 1;
  text-align: center;
  padding: 12px 0;
}

:deep(.el-tabs__content) {
  padding: 0 !important;
}

.tab-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
</style>