<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 仮初期データ
const form = reactive({
  content: '今日は楽しい日だった！',
  image: null,
  imageUrl: '',
  category: '友達',
  emotion: 'にこにこ'
})

const categoryValue = ref('')
const emotionValue = ref('')

const categoryOptions = [
  {
    value: '自分',
    label: '自分',
  },
  {
    value: '友達',
    label: '友達',
  },
  {
    value: '家族',
    label: '家族',
  },
  {
    value: '仕事',
    label: '仕事',
  },
  {
    value: '学校',
    label: '学校',
  },
  {
    value: 'お出かけ',
    label: 'お出かけ',
  },
]

const emotionOptions = [
  {
    value: 'きらきら',
    label: 'きらきら',
  },
  {
    value: 'うきうき',
    label: 'うきうき',
  },
  {
    value: 'にこにこ',
    label: 'にこにこ',
  },
  {
    value: 'ふつう',
    label: 'ふつう',
  },
  {
    value: 'もやもや',
    label: 'もやもや',
  },
  {
    value: 'しょんぼり',
    label: 'しょんぼり',
  },  {
    value: 'うるうる',
    label: 'うるうる',
  },
]

const handleImageChange = (e) => {
  const file = e.target.files[0]
  form.image = file
  if (file) {
    form.imageUrl = URL.createObjectURL(file)
  }
}

const goBack = () => {
  router.push('/diary-detail')
}

const updateDiary = () => {
  console.log('更新データ:', form)
  router.push('/complete')
}
</script>

<template>
  <div class="container">

    <textarea v-model="form.content" placeholder="本文を入力" class="textarea"></textarea>

    <input type="file" @change="handleImageChange" class="file-input" />

    <div class="preview">
      <img v-if="form.imageUrl" :src="form.imageUrl" alt="選択された画像" class="preview-image" />
    </div>
  <div class="tags">
    <div class="tag" @click="goToCategorySelect">カテゴリー：{{ form.category }}</div>
    <div class="tag" @click="goToEmotionSelect">感情：{{ form.emotion }}</div>
  </div>

  <div class="select-container">
    <el-select
      v-model="categoryValue"
      placeholder="カテゴリー"
      style="width: 180px"
      >
      <el-option
        v-for="item in categoryOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
      </el-select>

      <el-select
        v-model="emotionValue"
        placeholder="感情"
        style="width: 180px"
        placement="bottom-start"
      >
      <el-option
        v-for="item in emotionOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
      </el-select>
  </div>

    <div class="buttons">
      <button @click="goBack">戻る</button>
      <button @click="updateDiary">更新</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  gap: 20px;
}
.textarea {
  width: 300px;
  height: 150px;
  padding: 10px;
  resize: none;
}
.file-input {
  margin-top: 10px;
}
.preview-image {
  max-width: 200px;
  margin-top: 10px;
}
.tags {
  display: flex;
  gap: 85px;
}
.tag {
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 5px;
}
.select-container {
  display: flex;
  gap: 30px;
  margin-bottom: 10px;
}
.buttons {
  display: flex;
  gap: 50px;
  margin-top: 50px;
}
button {
  height: 40px;
  width: 80px;
}
</style>
