import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
// 导入 svgIcon
import installIcons from '@/icons'
import router from './router'

const app = createApp(App)
installElementPlus(app)
installIcons(app)

app.use(router).mount('#app')
