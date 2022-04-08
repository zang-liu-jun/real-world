<template>
  <div class="main-box">
    <textarea class="edit" v-model="text" @input="parseMarkdown"></textarea>
    <div class="show" v-html="parse" id="write"></div>
  </div>
</template>

<script setup lang="ts">
import MarkdownIt from "markdown-it"
import {ref} from "vue";
import "@/components/markdown/notion-light-classic.css"

const md = new MarkdownIt()

let text=ref<string>('')
let parse = ref<string>('')

function parseMarkdown(){
  parse.value = md.render(text.value)
}


</script>

<style scoped lang="scss">
.main-box {
  display: flex;
  height: 93vh;
}
.edit {
  height: 100%;
  width: 50vw;
  padding: 10px;
  background-color: #F8F9FA;
  outline: none;
  resize: none;
  border: 1px solid #EEF3F8;
}
.show {
  height: 100%;
  width: 50vw;
  padding: 10px;
}
</style>
