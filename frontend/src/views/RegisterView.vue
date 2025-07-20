<!-- 会員登録画面 -->
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { useCompleteStore } from '@/stores/complete'

const router = useRouter()
const userStore = useUserStore()
const completeStore = useCompleteStore()

const form = reactive({
  name: '',
  birthday: '',
  gender: '',
  email: '',
  password: '',
})

const back = () => router.back()

const submit = () => {
  router.push('/complete')
  completeStore.update('会員登録', '/login')
  userStore.update(form.name, form.birthday, form.gender, form.email, form.password)
}
</script>

<template>
  <p class="title">会員登録</p>

  <div class="register">
    <el-form :model="form" label-position="top" class="form">
      <el-form-item label="名前">
        <el-input v-model="name" placeholder="ニックネームを入力してください" />
      </el-form-item>
      <el-form-item label="生年月日">
        <el-date-picker
          v-model="form.birthday"
          type="date"
          placeholder="生年月日を選択してください"
          format="YYYY年MM月DD日"
          value-format="YYYY-MM-DD"
          :default-value="new Date('2000-04-01')"
        />
      </el-form-item>
      <el-form-item label="性別">
        <el-radio-group v-model="form.gender">
          <el-radio label="男性" />
          <el-radio label="女性" />
          <el-radio label="その他" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="メールアドレス">
        <el-input v-model="form.email" placeholder="メールアドレスを入力してください" />
      </el-form-item>
      <el-form-item label="パスワード">
        <el-input v-model="form.password" type="password" placeholder="パスワードを入力してください" />
      </el-form-item>
      <div class="button-group">
        <el-button type="info" plain @click="back">戻る</el-button>
        <el-button type="primary" plain @click="submit">送信</el-button>
      </div>
    </el-form>
  </div>
</template>

<style scoped>
.title {
  font-size: 30px;
  padding: 100px 0 50px 0;
  text-align: center;
}

.register {
  width: 400px;
  margin: 0 auto;
}

.form {
  display: flex;
  flex-direction: column;
}

.button-group {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
}
</style>
