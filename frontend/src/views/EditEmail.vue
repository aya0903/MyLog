<!-- メールアドレス再設定画面 -->
<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useCompleteStore } from '@/stores/complete'
import {useUserStore} from '@/stores/user'
import { ElMessage } from 'element-plus'
import axios from 'axios'

const email = ref('')
const confirmEmail = ref('')

const router = useRouter()

const CompleteStore = useCompleteStore()
const userStore = useUserStore()

const users = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/users')
    users.value = response.data
    console.log("取得したデータ", response.data)
  } catch (error) {
  console.error("ユーザー取得エラー", error)
  }
})

const back = () => router.back()

const submit = async () => {

  console.log("userStore.email:", userStore.email)

  if (!email.value || !confirmEmail.value) {
    ElMessage.error("未入力の項目があります")
    return
  }
  if (email.value !== confirmEmail.value) {
    ElMessage.error("メールアドレスが一致しません")
    return
  }
try {
  const response = await axios.post('http://localhost:3000/api/email', {
    currentEmail: userStore.email,
    NewEmail: email.value,
    confirmEmail: confirmEmail.value
    })

    if (response.data.success) {
      CompleteStore.update('メールアドレスの再設定', '/my-page')
      router.push('/complete')
    } else {
      ElMessage.error('メールアドレスが一致しません。')      
    }
  } catch (error) {
    console.log("アドレス変更エラー:", error)
    if (error.response.data.message) {
      ElMessage.error(error.response.data.message) 
    } else {
      ElMessage.error('通信エラーが発生しました。');  
    }
  }
};
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