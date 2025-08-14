<!-- 会員情報編集画面 -->
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

const name = ref(userStore.$state.name)
const birthday = ref(userStore.$state.birthday)
const gender = ref(userStore.$state.gender)

const back = () => router.back()

const submit = async () => {
  if (!name.value || !birthday.value || !gender.value) {
    ElMessage.error("未入力の項目があります。")
    return;
  }

  if (name.value.length > 128) {
    ElMessage.error("ニックネームは128文字以内で入力してください。")
    return;
  }

  try {
    const response = await axios.post('http://localhost:3000/api/updateRegister',{
      id: userStore.$state.id,
      name: name.value,
      birthday: birthday.value,
      gender: gender.value
    })

    if (response.data.success) {
      userStore.updateName(name.value)
      userStore.updateBirthday(birthday.value)
      userStore.updateGender(gender.value) 

      router.push('/complete')
      CompleteStore.update('会員情報の編集', '/my-page')
  } else {
    ElMessage.error('会員情報の更新に失敗しました。')
  }
  } catch (error) {
    console.log("会員情報更新エラー:", error)
    if (error.response.data.message) {
      ElMessage.error(error.response.data.message)
    } else {
      ElMessage.error('通信エラーが発生しました。')
    }
  }
}
</script>

<template>
  <p class="title">会員情報編集</p>
  <div class="edit-register"> 
    <el-input class="input-box" placeholder="ニックネーム" v-model="name"></el-input>
    <el-date-picker
      class="input-box"
      v-model="birthday"
      type="date"
      placeholder="生年月日"
      format="YYYY年MM月DD日"
      value-format="YYYY-MM-DD"
      :default-value="new Date('2000-04-01')"
    />
    <div class="gender">
      <div class="radio-label">性別</div>
      <el-radio-group v-model="gender" class="radio-group">
        <el-radio label="男性" />
        <el-radio label="女性" />
        <el-radio label="その他" />
      </el-radio-group>
    </div>
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

.edit-register {
  width: 400px;
  margin: 0 auto;
}

.input-box {
  width: 100%;
  padding-bottom: 20px;
}

::v-deep(.el-date-editor) {
  width: 100% !important;
}

::v-deep(.el-input__wrapper) {
  width: 100% !important;
}

.gender {
  display: flex;
  align-items: center;
  padding-bottom: 100px;
  padding-top: 20px;
}

.radio-label {
  width: 60px;
  text-align: center;
}

.radio-group {
  justify-content: center;
  display: flex;
  flex: 1;
}

.button-group {
  display: flex;  
  justify-content: space-evenly;
}

</style>
