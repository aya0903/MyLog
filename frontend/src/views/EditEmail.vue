<!-- メールアドレス再設定画面 -->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCompleteStore } from '@/stores/complete'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import axios from 'axios'

const router = useRouter()
const userStore = useUserStore()
const CompleteStore = useCompleteStore()

const email = ref('')
const confirmEmail = ref('')

const back = () => router.back()

const submit = async () => {
  // 未記入だったらメッセージ表示
  if (!email.value || !confirmEmail.value) {
    ElMessage.error("未入力の項目があります")
    return 
  }

  // 文字数チェック
  if (email.value.length > 255 || confirmEmail.value.length > 255) {
    ElMessage.error("メールアドレスは255文字以内で入力してください。");
    return;
  }

  // メールアドレス形式チェック（簡易）
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value) || !emailPattern.test(confirmEmail.value)) {
    ElMessage.error("メールアドレスの形式が正しくありません。");
    return;
  }

  if (email.value !== confirmEmail.value) {
    ElMessage.error("メールアドレスが一致しません。")
    return 
  }

  try {
    const response = await axios.post('http://localhost:3000/api/updateEmail', {
      id: userStore.$state.id,
      email: email.value,
    })

    if (response.data.success) {
      // メールアドレス更新完了
      router.push('/complete')
      CompleteStore.update('メールアドレスの再設定', '/my-page')
      userStore.updateEmail(email)
    } else {
      // メールアドレス更新失敗
      ElMessage.error('メールアドレス更新に失敗しました。')
    }
  } catch (error) {
    console.log("メールアドレス更新エラー:", error)
    if (error.response.data.message) {
      ElMessage.error(error.response.data.message)
    } else {
      ElMessage.error('通信エラーが発生しました。')
    }
  }
}
</script>

<template>
  <p class="title">メールアドレス再設定</p>
  
  <div class="edit-email">
    <el-input class="new-email" placeholder="新しいメールアドレス" v-model="email"></el-input>
    <el-input placeholder="新しいメールアドレス（確認用）" v-model="confirmEmail"></el-input>

    <div class="button-group">
      <el-button type="info" plain @click="back">戻る</el-button>
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

.edit-email {
  width: 400px;
  margin: 0 auto;
}

.new-email {
padding-bottom: 20px;
}

.button-group {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding-top: 100px;
}
</style>