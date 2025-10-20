<!-- 会員登録画面 -->
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useCompleteStore } from '@/stores/complete'
import { ElMessage } from 'element-plus'
import axios from 'axios'

const router = useRouter()
const completeStore = useCompleteStore()
const form = reactive({
  name: '',
  birthday: '',
  gender: '',
  email: '',
  password: '',
})

const back = () => router.back()

const submit = async () => {
  // form配下の値がどれかしら未記入だったら即リターンする
  if (!form.name || !form.birthday || !form.gender || !form.email || !form.password) {
    ElMessage.error("未入力の項目があります")
    return 
  }

  try {
    const response = await axios.post('http://localhost:3000/api/createUser', {
      name: form.name,
      birthday: form.birthday,
      gender: form.gender,
      email: form.email,
      password: form.password,
    })

    if (response.data.success) {
      // 会員登録成功
      router.push('/complete')
      completeStore.update('会員登録', '/')
    } else {
      // 会員登録失敗
      ElMessage.error('新規会員登録に失敗しました。')
    }
  } catch (error) {
    console.log("会員登録エラー:", error)
    if (error.response.data.message) {
      ElMessage.error(error.response.data.message)
    } else {
      ElMessage.error('通信エラーが発生しました。')
    }
  }
}
</script>

<template>
  <p class="title">会員登録</p>

  <div class="register">
    <el-form :model="form" label-position="top" class="form">
      <el-form-item label="名前">
        <el-input v-model="form.name" placeholder="ニックネームを入力してください" />
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
          <el-radio value="男性">男性</el-radio>
          <el-radio value="女性">女性</el-radio>
          <el-radio value="その他">その他</el-radio>
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
