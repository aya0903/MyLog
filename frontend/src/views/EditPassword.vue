<!-- パスワード再設定画面 -->

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCompleteStore } from '@/stores/complete'

const password = ref("")
const NewPassword = ref("")
const ConfirmPassword = ref("")

const router = useRouter()
const completeStore =useCompleteStore()

const back = () => router.back()

const submit = () => {
  router.push('/complete')
  completeStore.update('パスワードの再設定', '/my-page')
}
</script>

<template>
  <p class="title">パスワード再設定</p>
  <div class="password">
    <el-input class="edit-password" v-model="password" placeholder="現在のパスワード" />

    <el-input
      class="edit-password"
      v-model="NewPassword"
      type="password"
      placeholder="新しいパスワード"
      show-password
    />

    <el-input
      class="edit-password"
      v-model="ConfirmPassword"
      type="password"
      placeholder="新しいパスワード(確認用)"
      show-password
    />

    <div class="button-group">
      <el-button type="info"  plain @click="back">戻る</el-button>
      <el-button type="primary" plain @click="submit">送信</el-button>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 30px;
  padding: 100px 0;
  text-align: center;
}

.password {
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.edit-password {
  padding-bottom: 20px;
}

.button-group {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding-top: 100px;
}
</style>