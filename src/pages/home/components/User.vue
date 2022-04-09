<template>
  <div class="main-container">
    <div class="user-view view">
      <div class="major-area">
        <div class="user-info-block block shadow">
          <img :src="userStore.user.image" class="avatar lazy">
          <div class="info-box">
            <div class="top">
              <h1>{{userStore.user.username}}</h1>
            </div>
            <div class="position">
              <div title="填写个人技术栈" class="info-input">你的个人技术栈是什么？</div>
            </div>
            <div class="intro">
              <div title="填写自我介绍" class="info-input">自我介绍？</div>
            </div>
          </div>
          <div class="action-box">
            <div class="link-box">
              <a title="Github" class="github-link link">
                <svg width="21px" height="18px"></svg>
              </a>
              <a title="设置个人主页" class="site-link link">
                <svg width="21px" height="18px"></svg>
              </a>
            </div>
            <el-button class="setting-btn btn">编辑个人资料</el-button>
          </div>
        </div>
      </div>
      <div class="minor-area"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useUserStore} from "@/store";
const userStore = useUserStore();

</script>

<style scoped>
html {
  color: #333;
  background-color: #f4f5f5;
}
body {
  margin: 0;
  font-size: 12px;
  line-height: normal;
  overflow-y: scroll;
}
.main-container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
}

.main-container>.view {
  margin-top: 1.767rem;
}
.user-view {
    display: flex;
    background: purple;
    margin-bottom: 6rem;
}

.major-area {
  flex: 1 1 auto;
  min-width: 0;
}
.minor-area {
  flex: 0 0 auto;
  margin-left: 1rem;
  width: 15rem;
  line-height: 1.2;

}
.user-info-block {
  display: flex;
  padding: 2.5rem;
}

.block {
  background-color: #fff;
  border-radius: 2px;
}

.shadow {
  box-shadow:  1px 2px 0 rgb(0 0 0 / 5%);
}
.user-info-block .avatar {
  flex: 0 0 auto;
  width: 7.5rem;
  height: 7.5rem;
  background-color: #f9f9f9;
  border-radius: 50%;
  margin-right: 2.4rem;
}
.lazy {
  position: relative;
}
.user-info-block .info-box {
  flex: 1 1 auto;
  margin-right: 2rem;
}

.info-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.user-info-block .action-box {
  flex: 0 0 auto;
  display: flex;
  flex-direction:column;
  align-items: flex-end;
}

.info-box .top {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.info-box .position,.info-box .intro {
  font-size: 1.25rem;
  line-height: 1.5;
  color: #72777b;
  overflow: hidden;
}

.info-box .position .info-input {
  color: #4a68ad;
  cursor: pointer;
}

.info-box .intro {
  margin-top: .4rem
}

.info-box .intro .info-input {
  color: #4a68ad;
  cursor: pointer;
}

.user-info-block .action-box .link-box{
    margin-bottom: auto;
}

.user-info-block .action-box .setting-btn{
    width: 9.834rem;
    color: #3780f7;
}

.user-info-block .action-box .btn {
  margin: 1rem 0 0;
  padding: 0;
  height: 2.834rem;
  font-size: 1.333rem;
  border: 1px solid;
}

.link {
  margin-left: 1rem;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: #909090;
}

/*  */
</style>
