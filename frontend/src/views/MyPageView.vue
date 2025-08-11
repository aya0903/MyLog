<!-- マイページ画面 -->
<script setup>
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import navigationBar from '@/components/NavigationBar.vue'

const router = useRouter()
const showLogoutDialog = ref(false)

// 仮データ
const nickname = ref('あやちゃん')
const birth = ref('2002/3/11')
const gender = ref('女性')

const email = ref('aya@example.com')
const password = ref("aaaaaa")

const logout = () => {
  showLogoutDialog.value = true
}

const confirmLogout = () => {
  router.push('/login')
}

const Editregister = () => router.push('/edit-register')
const EditEmail = () => router.push('/edit-email')
const EditPassword = () => router.push('/edit-password')

</script>


<template>
  <div class="my-page">
    <p class="title">マイページ</p>

    <!-- 会員情報ボックス -->
    <p class="mt">ニックネーム</p>
    <el-input class="" v-model="nickname"></el-input>

    <p class="mt">生年月日</p>
    <el-input class="" v-model="birth"></el-input>

    <p class="mt">性別</p>
    <el-input class="" v-model="gender"></el-input>

    <div class="edit-button">
      <el-button type="primary" @click="Editregister" plain>会員情報編集</el-button>
    </div>
    
    <!-- メールアドレスボックス -->
    <div>
      <p class="mt">メールアドレス</p>
      <el-input class="" v-model="email">
        <template #suffix>
          <el-button
            type="text"
            @click="EditEmail"
            class="arrow-button"
          >
            <el-icon><ArrowRight /></el-icon>
          </el-button>
        </template>
      </el-input>
    </div>

    <!-- パスワードボックス -->
    <div>
      <p  class="mt">パスワード</p>
      <el-input class="" type="password" v-model="password">
        <!-- 右側に追加するスロット -->
        <template #suffix>
          <el-button
            type="text"
            @click="EditPassword"
            class="arrow-button"
          >
            <el-icon><ArrowRight /></el-icon>
          </el-button>
        </template>
      </el-input>
    </div>

    <!-- ログアウトボタン -->
    <div class="logout-button">
      <el-button type="danger" plain @click="logout">
        ログアウト
      </el-button>
    </div>

    <!-- ログアウト確認モーダル -->
    <el-dialog
      v-model="showLogoutDialog"
      width="400px"
      align-center
    >
      <span class="center-text">ログアウトしてもよろしいですか？</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="showLogoutDialog = false">キャンセル</el-button>
          <el-button type="danger" @click="confirmLogout">ログアウト</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
  <navigationBar />
</template>

<style scoped>
.my-page {
  width: 400px;
  margin: 0 auto;
}

.title {
  font-size: 30px;
  padding-top: 100px;
  text-align: center;
}

.mt {
  padding-top: 15px;
}

.edit-button {
  padding-top: 30px;
  text-align: center;
}

.logout-button {
  padding-top: 30px;
  text-align: center;
}

.arrow-button {
  font-weight: bold;
  color: #606266; /* Element Plus の primary 色 */
}
</style>
