// stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: localStorage.getItem('name') || '',
    birthday: localStorage.getItem('birthday') || '',
    gender: localStorage.getItem('gender') || '',
    email: localStorage.getItem('email') || '',
    password: '',
  }),
  actions: {
    update(name, birthday, gender, email, password) {
      this.name = name
      this.birthday = birthday
      this.gender = gender
      this.email = email
      this.password = password

      localStorage.setItem('name', name)
      localStorage.setItem('birthday', birthday)
      localStorage.setItem('gender', gender)
      localStorage.setItem('email', email)
    },
    delete() {
      this.name = ''
      this.birthday = ''
      this.gender = ''
      this.email = ''
      this.password = ''

      localStorage.removeItem('name')
      localStorage.removeItem('birthday')
      localStorage.removeItem('gender')
      localStorage.removeItem('email')
    },
  },
})
