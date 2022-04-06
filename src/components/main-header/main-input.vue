<template>
  <div class="input-box" ref="father">
    <input type="text" @focus="inputFocus" @blur="inputUnFocus">
    <button ref="btn" @click.stop="startSearch">
      <el-icon :color="iconColor"><search /></el-icon>
    </button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

let father=ref(null)
let btn=ref(null)
let iconColor=ref<string>("black")
function inputFocus(){
  (father.value as any).style.borderColor="#409EFF";
  (father.value as any).style.width=20+"rem";
  (btn.value as any).style.backgroundColor="#EAF2FF";
  iconColor.value="#409EFF"
}
function inputUnFocus(){
  (father.value as any).style.borderColor="#C2C8D1";
  (father.value as any).style.width=12+"rem";
  (btn.value as any).style.backgroundColor="#EFEFEF";
  iconColor.value="black"
}

function startSearch(){

}
</script>

<style scoped lang="scss">
.input-box {
  display: inline-flex;
  justify-content: space-between;
  width: 12rem;
  height: 2rem;
  padding-left: 5px;
  border: 1px solid #C2C8D1;
  border-radius: 5px;
  transition: all 0.3s;
  &:focus {
    border: 1px solid $main-blue;
  }
  input {
    width: 60%;
    height: 100%;
    outline:none;
    border:none;
    background:none;
  }
  button {
    width: 20%;
    height: 100%;
    margin: 0;
    padding: 0;
    /*自定义边框*/
    border: 0;
    /*消除默认点击蓝色边框效果*/
    outline: none;
    cursor: pointer;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>
