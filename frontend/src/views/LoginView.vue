<!-- ログイン画面 -->

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const mailAddress = ref("")
const password = ref("")

const register = () => {
  router.push('/register')
}

const submit = () => {
  router.push('/')
}
</script>

<template>
  <div class="about">
    <p class="title">ログイン</p>

    <main class="form-area">
      <el-input
        class="input"
        placeholder="メールアドレス"
        v-model="mailAddress"
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
