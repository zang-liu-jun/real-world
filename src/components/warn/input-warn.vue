<template>
  <div>
    <transition name="show">
      <span>{{message}}</span>
    </transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  message:{
    type:String,
    required:true
  }
})
</script>

<style scoped lang="scss">
  span {
    font-size: 14px;
    color: $warn-red;
  }
</style>
