// stores/complete.js
import { defineStore } from 'pinia'

export const useCompleteStore = defineStore('complete', {
  state: () => ({
    text: '',
    link: '',
  }),
  actions: {
    update(text, link) {
      this.text = text
      this.link = link
    },
    delete() {
      this.text = ''
      this.link = ''
    },
  },
  persist: true,
})
