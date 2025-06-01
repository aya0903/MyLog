<template>
  <div class="about">
    <header class="header">
      <h1>ログイン</h1>
    </header>

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
      <el-link type="primary" class="register-link">
        新規会員登録はこちら
      </el-link>
    </main>

    <footer class="footer">
      <el-button class="button" type="primary">送信</el-button>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mailAddress: '',
      password: '',
    };
  },
};
</script>

<style scoped>
.about {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 150px 20px;
  box-sizing: border-box;
}

/* 上部中央 */
.header {
  text-align: center;
}

/* 中央の入力フォーム */
.form-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* インプットの幅 */
.input {
  width: 400px;
}

/* 新規会員登録リンク */
.register-link {
  margin-top: 8px;
  font-size: 14px;
}

/* 下部中央 */
.footer {
  text-align: center;
  button {
    width: 150px;
  }
}
</style>
