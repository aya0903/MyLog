// stores/complete.js
import { defineStore } from 'pinia'

export const useDiaryStore = defineStore('diary', {
  state: () => ({
    id: '',
    content: '',
    picture: '',
    emotion: '',
    tag: '',
  }),
  actions: {
    updateId(id) {
      this.id = id
    },
    updateContentData(content, picture) {
      this.content = content
      this.picture = picture
    },
    updateEmotion(emotion) {
      this.emotion = emotion
    },
    updateTag(tag) {
      this.tag = tag
    },
    delete() {
      this.id = ''
      this.content = ''
      this.picture = ''
      this.emotion = ''
      this.tag = ''
    },
  },
  persist: true,
})
