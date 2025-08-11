<!-- パスワード再設定画面 -->

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCompleteStore } from '@/stores/complete'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import axios from 'axios'

const router = useRouter()
const userStore = useUserStore()
const completeStore =useCompleteStore()

const password = ref("")
const newPassword = ref("")
const confirmPassword = ref("")

const back = () => router.back()

const submit = async () => {
  if (!password.value || !newPassword.value || !confirmPassword.value) {
    ElMessage.error("未入力の項目があります")
    return
  }

  if (newPassword.value !== confirmPassword.value) {
    ElMessage.error("パスワードが一致しません。")
    return 
  }

  if (newPassword.value.length > 255) {
    ElMessage.error("パスワードは255文字以内で入力してください。");
    return;
  }

  try {
    const response = await axios.post('http://localhost:3000/api/updatePassword', {
      id: userStore.$state.id,
      password: password.value,
      newPassword: newPassword.value,
    })

    if (response.data.success) {
      router.push('/complete')
      completeStore.update('パスワードの再設定', '/my-page')
      userStore.updatePassword(password)
    } else {
      ElMessage.error('パスワードの更新に失敗しました。')
    }
  } catch (error) {
    console.log("パスワード更新エラー:", error)
    if (error.response.data.message) {
      ElMessage.error(error.response.data.message)
    } else {
      ElMessage.error('通信エラーが発生しました。')
    }
  }
}
</script>

<template>
  <p class="title">パスワード再設定</p>
  <div class="password">
    <el-input class="edit-password" v-model="password" placeholder="現在のパスワード" />

    <el-input
      class="edit-password"
      v-model="newPassword"
      type="password"
      placeholder="新しいパスワード"
      show-password
    />

    <el-input
      class="edit-password"
      v-model="confirmPassword"
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