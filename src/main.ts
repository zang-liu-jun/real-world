import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./route"
import ElementPlus from 'element-plus'
import * as ElIcons from "@element-plus/icons-vue"
import 'element-plus/dist/index.css'
import "@/assets/style/initialize.scss"
import "@/assets/style/rem.scss"


const app = createApp(App);


app.use(createPinia());



app.use(ElementPlus)
for (const name in ElIcons){
  app.component(name,(ElIcons as any)[name])
}

app.use(router)

app.mount("#app");
