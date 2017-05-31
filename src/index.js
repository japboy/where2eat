import Vue from 'vue'
import { User, DiningList } from './model'
import App from './App.vue'

const app = new Vue({
  render: h => h(App)
})

async function init (ev) {
  document.removeEventListener(ev.type, init)
  app.$mount('#app')

  const user = new User()
  await user.setCurrentPosition()

  const diningList = new DiningList()
  await diningList.search(user.position)

  console.log('Hello.')
}

document.addEventListener('DOMContentLoaded', init, false)
