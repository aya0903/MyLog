<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  name: '',
  birthdate: '',
  gender: '',
  email: '',
  password: '',
})

const goBack = () => {
  router.push('/login')
}

const submitForm = () => {
  console.log('送信データ:', form)
  router.push('/complete')
}
</script>

<template>
  <div class="outer-container">
    <div class="register-container">
      <h2 class="title">会員登録</h2>

      <el-form :model="form" label-position="top" class="form">
        <el-form-item label="名前">
          <el-input v-model="form.name" placeholder="ニックネームを入力してください" />
        </el-form-item>

        <el-form-item label="生年月日">
          <el-date-picker
            v-model="form.birthdate"
            type="date"
            placeholder="生年月日を選択してください"
            format="YYYY/MM/DD"
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
          <el-button class="big-button" @click="goBack">戻る</el-button>
          <el-button class="big-button" type="primary" @click="submitForm">送信</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>


<style scoped>
/* 画面全体中央寄せ用ラッパー */
.outer-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 登録フォームのボックス */
.register-container {
  width: 400px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff; 
}

/* 会員登録の文字 */
.title {
  text-align: center;
  margin-bottom: 20px;
}

/* 名前からPWまでの入力フォーム */
.form {
  display: flex;
  flex-direction: column;
}

/* ボタン */
.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

/* ボタン大きさ調整 */
.big-button {
  padding: 25px 32px;
  font-size: 1.2rem;
}
</style>
