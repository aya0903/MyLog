<!-- ログイン画面 -->

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useCompleteStore } from '@/stores/complete'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import axios from 'axios'

const router = useRouter()
const userStore = useUserStore()
const completeStore = useCompleteStore()
const email = ref("")
const password = ref("")

const register = () => {
  router.push('/register')
}

const submit = async () => {
  if (!email.value || !password.value) {
    ElMessage.error("未入力の項目があります")
    return 
  }
  try {
    const response = await axios.post('http://localhost:3000/api/login', {
      email: email.value,
      password: password.value
    })

    if (response.data.success) {
      // ログイン成功
      completeStore.update('ログイン', '/')
      router.push('/complete')
      
      // ログイン者の状態管理
      const { id, name, birthday, gender, email, password } = response.data.user
      const convertBirthday = new Date(birthday).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })
      userStore.update(id, name, convertBirthday, gender, email, password)
    } else {
      // ログイン失敗
      ElMessage.error('メールアドレスとパスワードが一致しません。')
    }
  } catch (error) {
    console.log("ログインエラー:", error)
    if (error.response.data.message) {
      ElMessage.error(error.response.data.message)
    } else {
      ElMessage.error('通信エラーが発生しました。')
    }
  }
}
</script>

<template>
  <div class="about">
    <p class="title">ログイン</p>

    <main class="form-area">
      <el-input
        class="input"
        placeholder="メールアドレス"
        v-model="email"
      ></el-input>
      <el-input
        class="input"
        placeholder="パスワード"
        v-model="password"
        show-password
      ></el-input>
      <el-link type="primary" class="register-link" @click="register">
        新規会員登録はこちら
      </el-link>
    </main>

    <footer class="button-group">
      <el-button type="primary" plain @click="submit">送信</el-button>
    </footer>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 30px;
  padding: 100px 0;
  text-align: center;
}

.form-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.input {
  width: 400px;
}

.register-link {
  margin-top: 8px;
  font-size: 14px;
}

.button-group {
  padding-top: 100px;
}
</style>
