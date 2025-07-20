<!-- メールアドレス再設定画面 -->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCompleteStore } from '@/stores/complete'

const email = ref('')
const confirmEmail = ref('')

const router = useRouter()

const CompleteStore = useCompleteStore()

const back = () => router.back()

const submit = () => {
  router.push('/complete')
  CompleteStore.update('メールアドレスの再設定', '/my-page')
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