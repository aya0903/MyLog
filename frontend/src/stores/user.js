// stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: '',
    name: '',
    birthday: '',
    gender: '',
    email: '',
    password: '',
  }),
  actions: {
    update(id, name, birthday, gender, email, password) {
      this.id = id
      this.name = name
      this.birthday = birthday
      this.gender = gender
      this.email = email
      this.password = password
    },
    updateEmail(email) {
      this.email = email
    },
    updatePassword(password) {
      this.password = password
    },
    delete() {
      this.id = ''
      this.name = ''
      this.birthday = ''
      this.gender = ''
      this.email = ''
      this.password = ''
    },
  },
})
