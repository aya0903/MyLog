// stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    birthday: '',
    gender: '',
    email: '',
    password: '',
  }),
  actions: {
    update(name, birthday, gender, email, password) {
      this.name = name
      this.birthday = birthday
      this.gender = gender
      this.email = email
      this.password = password
    },
    delete() {
      this.name = ''
      this.birthday = ''
      this.gender = ''
      this.email = ''
      this.password = ''
    },
  },
})
