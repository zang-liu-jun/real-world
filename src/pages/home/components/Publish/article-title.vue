<template>
  <div class="input-box">
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        placeholder="标题..."
    >
  </div>
</template>

<script lang="ts" setup>
defineProps({
  modelValue:{
    type:String
  }
})
</script>

<style lang="scss" scoped>
.input-box {
  height: 100%;
}
input {
  outline: none;
  border: none;
  width: 40vw;
  padding-left: 10px;
  height: 100%;
  font-size: 2rem;
}
</style>
