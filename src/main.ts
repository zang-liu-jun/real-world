import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./route"
import ElementPlus from 'element-plus'
import * as ElIcons from "@element-plus/icons-vue"
import 'element-plus/dist/index.css'
import "@/assets/style/initialize.scss"
import "@/assets/style/rem.scss"

/*import {useStorage} from "@vueuse/core";

const state=useStorage("test",{hello:"hi",age:12})
console.log(state)
state.value.age+=1
console.log(state.value.age)*/

const app = createApp(App);


app.use(createPinia());



app.use(ElementPlus)
for (const name in ElIcons){
  app.component(name,(ElIcons as any)[name])
}

app.use(router)

app.mount("#app");
