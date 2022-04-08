<template>
  <div class="outer-box">
    <div ref="container" :class="layout==='展开'?'container active':'container'">
      <el-tag type="info" color="white" v-for="(item,index) in tagsArr" v-show="index<(layout==='展开'?5:tagsArr.length)" round effect="light" class="tag">{{item}}</el-tag>
      <span class="layout" @click="layoutTags">{{layout}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {getAllTags} from "@/service/tags/getAllTags";
import {onMounted, reactive, ref} from "vue";
import {ElMessage} from 'element-plus'

let tagsArr=reactive<string[]>([])

onMounted(()=>{
  getAllTags()
  .then(res=>{
    tagsArr.push(...res)
  })
  .catch(err=>{
    ElMessage.error(err.message)
  })
})

onMounted(()=>{
  // container.value.style.height=25+'px'
})

let container:any=ref(null)
let layout=ref<string>('展开')
function layoutTags(){
  if(layout.value==='收起'){
    // container.value.style.height=25+"px"
    layout.value="展开"
  }else {
    // container.value.style.height='auto'
    layout.value="收起"
  }

}


</script>

<style scoped lang="scss">
.outer-box {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  .container {
    width: 50vw;
    height: auto;
    display: inline-flex;
    flex-wrap: wrap;
    gap: 10px;
    transition: all 0.5s;
    .tag {
      border-radius: 15px;
      &:hover {
        cursor:pointer;
      }
    }
    .layout {
      color: #8B8B8F;
      font-size: 0.8rem;
      &:hover {
        cursor:pointer;
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .outer-box .container {
    width: 90vw;
  }
}

</style>
