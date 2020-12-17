import { App } from 'vue'
import Header from './Header.vue'
export default {
  install (Vue: App, options: any[]) {
    Vue.component(Header.name, Header)
  }
}
