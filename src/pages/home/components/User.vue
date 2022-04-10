<template>
  <div class="main-container">
    <div class="user-view view">
      <div class="major-area">
        <div class="user-info-block block shadow">
          <div class="conic">
            <img :src="userStore.user.image" class="avatar lazy">
          </div>
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
                <svg width="21" height="18" xmlns="http://www.w3.org/2000/svg" class="icon github-icon"><path data-v-63b5b45a="" fill="#161614" fill-rule="nonzero" d="M1.857 9.203c0 3.624 2.456 6.698 5.862 7.782.429.076.585-.177.585-.395 0-.194-.007-.71-.012-1.395-2.384.496-2.887-1.1-2.887-1.1-.39-.947-.952-1.2-.952-1.2-.778-.508.06-.498.06-.498.86.058 1.312.846 1.312.846.765 1.253 2.007.89 2.495.68.078-.529.3-.89.544-1.095-1.903-.207-3.904-.911-3.904-4.054 0-.896.334-1.628.882-2.201-.088-.208-.383-1.042.084-2.171 0 0 .72-.22 2.357.84a8.557 8.557 0 0 1 2.146-.276 8.566 8.566 0 0 1 2.146.277c1.636-1.062 2.354-.841 2.354-.841.468 1.129.174 1.963.086 2.17.55.574.881 1.306.881 2.202 0 3.15-2.004 3.844-3.913 4.047.307.253.581.754.581 1.52 0 1.096-.01 1.98-.01 2.25 0 .219.154.474.589.394C16.546 15.898 19 12.825 19 9.203 19 4.673 15.162 1 10.428 1c-4.733 0-8.57 3.672-8.57 8.203z"></path></svg>
              </a>
              <a title="设置个人主页" class="site-link link">
                <svg width="21" height="18" xmlns="http://www.w3.org/2000/svg" class="icon site-icon"><path data-v-63b5b45a="" fill="#0062D1" fill-rule="evenodd" d="M12.956 5.684l-.04.08-.472-.043.1-.432.412.395m-1.459-1.84l-.663-.29c.452-.216.55-.17.663.29m1.683.133l-.11.02-2.015-2.098 2.394 1.091c-.271.228-.428.554-.269.987M10.334 1.93l.564-.205.078.074c-.11.127-.208.269-.339.366-.025.02-.175-.133-.303-.235m.018.619c.517.025.862.358 1.221.667l-.078.14-1.209-.688.066-.119M8.885 2.42c.202.051.393.085.57.157.03.012.03.253-.013.274-.146.076-.318.101-.49.149l-.067-.58m2.267 10.777c-.182-.2-.338-.423-.5-.64-.276-.366-.293-.75-.065-1.145.07-.122.152-.253.17-.388.035-.271-.13-.335-.376-.359-.18-.018-.463-.107-.503-.23-.189-.588-.728-.62-1.152-.773-.428-.153-.745-.336-.924-.78-.129-.318-.336-.603-.508-.903l-.05.018.167.739c-.112-.174-.185-.25-.215-.34-.207-.623-.481-1.237-.576-1.878-.055-.371.183-.788.292-1.183.016-.057.079-.112.073-.163a18.42 18.42 0 0 0-.13-.918c-.072-.432-.29-.504-.633-.22-.111.093-.232.172-.348.258l-.096-.101c.225-.28.41-.608.682-.826.39-.314.724-.756 1.386-.535.344.115.715.18 1.074.291.308.095.695-.076 1.047-.13L9.95 2.88l.515.339c.045.25-.04.443-.388.46-.091.004-.188.079-.266.142-.425.343-.399.572.086.822.533.274.533.274.701.638.053-.291.102-.583.16-.873.033-.168.079-.333.119-.5.14.065.276.143.422.193.376.13.691.347.952.65.09.106.186.207.335.373l-1.124.517-.005.152c.459-.47.5.087.737.173-.026.05-.04.09-.048.09-.687-.114-.782.618-1.207.877-.035.022-.08.083-.073.112.09.337-.14.482-.34.672-.085.082-.098.266-.1.405-.003.117.057.236.09.354l-.092.05c-.055-.068-.126-.128-.162-.205-.168-.358-.384-.435-.752-.27a.495.495 0 0 1-.247.03c-.368-.04-.555.09-.624.449-.08.408.103.87.385.92.087.015.205-.061.284-.126.11-.09.198-.209.295-.315l.103.053-.142.613c.119.035.238.046.327.104.08.053.18.154.184.239.028.482.425.716.835.475.6-.353 1.192-.206 1.736.098.37.208.659.564 1.022.792.251.157.563.222.855.305.451.128.51.226.304.651-.152.314-.269.674-.5.915-.506.527-1.079.986-1.617 1.482-.458.422-1.224.548-1.254 1.382-.353-.038-.461-.232-.383-.535.109-.425.244-.844.355-1.27.111-.42.019-.79-.277-1.115m4.934-8.278l-.128.09-.47-.757.098-.07.5.737m.487 3.061c.028-.165.062-.333.055-.498a.946.946 0 0 1 .424-.863c.071-.05.24-.06.293-.01.144.137.313.3.361.482.263 1.008.355 2.031.134 3.148-.233-.259-.4-.224-.585-.023-.163.177-.298.147-.441-.085-.42-.685-.365-1.41-.24-2.15m-.288-2.535c-.02-.281-.034-.563-.056-.935.747.402.751 1.15 1.09 1.682l-.452-.537-.078 1.066c-.338-.259-.543-.46-.46-.847.028-.133-.033-.285-.044-.43M10.857 1C6.525 1 3 4.589 3 9s3.525 8 7.857 8c4.333 0 7.857-3.589 7.857-8s-3.524-8-7.857-8"></path></svg>
              </a>
            </div>
            <el-button class="setting-btn btn">编辑个人资料</el-button>
          </div>
        </div>
        <div class="list-block">
          <div class="detail-list">
            <div class="list-header">
              <div class="header-content">
                <a href="" class="nav-item">
                  <div class="item-title">动态</div>
                </a>
                <a href="" class="nav-item">
                  <div class="item-title">文章</div>
                </a>
                <a href="" class="nav-item">
                  <div class="item-title">收藏</div>
                </a>
                <a href="" class="nav-item">
                  <div class="item-title">关注</div>
                </a>
                <a href="" class="nav-item">
                  <div class="item-title">赞</div>
                  <div class="item-count">3</div>
                  <div class="item-count">
                    <i class="ion-arrow-down-b"></i>
                  </div>
                </a>
                <div class="search-icon-container">
                  <a href="">
                    <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/4faa6e4d3204581da39135d50cec3f73.svg" class="search-icon">
                  </a>
                </div>
              </div>
              <div class="search-content"></div>
            </div>
            <div class="list-body"></div>
          </div>
        </div>
      </div>
      <div class="minor-area">
        <div class="sticky-wrap sticky">
          <div class="follow-block block shadow">
            <a href="" class="follow-item">
              <div class="item-title">关注了</div>
              <div class="item-count">11</div>
            </a>
            <a href="" class="follow-item">
              <div class="item-title">关注者</div>
              <div class="item-count">0</div>
            </a>
          </div>
          <div class="more-block block">
            <a href="" class="more-item">
              <div class="item-title">收藏</div>
              <div class="item-count">5</div>
            </a>
            <div class="more-item">
              <div class="item-title">加入于</div>
              <div class="item-count">2021-07-17</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useUserStore} from "@/store";
const userStore = useUserStore();

</script>

<style scoped lang="scss">
/* #region */
html {
  color: #333;
  background-color: #f4f5f5;
}
body {
  word-break: break-word;
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
    margin-bottom: 6rem;
}
.major-area {
  flex: 1 1 auto;
  min-width: 0;
}
/* #endregion */
.minor-area {
  flex: 0 0 auto;
  margin-left: 1rem;
  width: 15rem;
  line-height: 1.2;
}
/* #region */
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
  margin-right: 2.4rem;
  border-radius: 50%;
}
.lazy {
  position: relative;
}
.user-info-block .info-box {
  flex: 1 1 auto;
  margin-right: 2rem;
  margin-left: 1.5rem;
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
  margin-bottom: 3rem;
  margin-top: 1.5rem;
}
.user-info-block .action-box .setting-btn{
    width: 9rem;
    color: #3780f7;
}
.user-info-block .action-box .btn {
  margin: 1rem 0;
  padding: 0;
  height: 2.834rem;
  font-size: 1.333rem;
  border: 1px solid;
}
.link {
  margin-right: 1rem;
  margin-left: 1rem;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: #909090;
}

@keyframes rotate {
    100% {
        transform: rotate(1turn);
    }
}

.conic {
    position: relative;
    z-index: 0;
    width: 134px;
    height: 135px;
    margin: 18px;
    border-radius: 5%;
    overflow: hidden;
    padding: 8px;
    
    
    &::before {
        content: '';
        position: absolute;
        z-index: -2;
        left: -50%;
        top: -50%;
        width: 200%;
        height: 200%;
        background-color: #1a232a;
        background-repeat: no-repeat;
        background-position: 0 0;
        background-image: conic-gradient(transparent, rgba(168, 239, 255, 1), transparent 30%);
        animation: rotate 4s linear infinite;
    }
    
    &::after {
        content: '';
        position: absolute;
        z-index: -1;
        left: 6px;
        top: 6px;
        width: calc(100% - 12px);
        height: calc(100% - 12px);
        background: #000;
        border-radius: 5px;
    }
}

@keyframes opacityChange {
    50% {
        opacity:.5;
    }
    100% {
        opacity: 1;
    }
}
/* #endregion */

/* #region */
.sticky {
  position: fixed;
  width:15rem;
  top: 4rem;
}

.follow-block {
  display: flex;
  position: relative;
  margin-bottom: 1rem;
}

.block {
  background-color: #fff;
  border-radius: 2px;
}
.shadow {
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
}
.more-block {
  background-color: transparent
}

.follow-block .follow-item {
  flex: 1 1 auto;
  padding: 1.3rem 0;
  text-align: center;
  color: #31445b;
}

a {
  text-decoration: none;
  cursor: pointer;
}

.follow-block .follow-item .item-title {
  font-size: 1.1rem;
  font-weight: 500;
}

.follow-block .follow-item .item-count {
  margin-top: .5rem;
  font-size: 1.0rem;
  font-weight: 600;
}
/* #endregion */

/* #region*/
.more-block .more-item {
  display: flex;
  padding: 1.25rem .4rem;
  font-size: 1.1rem;
  color: #000;
  border-top: 1px solid rgba(230,230,231,.5);
}

.more-block .more-item .item-title {
  margin-right: auto; 
}

.more-block .more-item:last-child {
  border-bottom: 1px solid rgba(230,230,231,.5); ;
}
/* #endregion*/

/* #region*/
.list-block {
  margin-top: 1rem;
}

.list-header {
  position: relative;
  margin: 0;
  padding: 0;
  background-color: #fff;
  height: 3rem;
  border-radius: .2rem .2rem 0 0;
  border-bottom: 1px solid #e4e6eb;
}

.list-header .header-content {
  display: flex;
  align-content: center;
  height: 100%;
  max-width: 960px;
  white-space: nowrap;
  position: relative;
  margin: 0 auto;
}
.list-header .nav-item {
  display: flex;
  flex: 0 0 auto;
  align-items:center;
  justify-content: center;
  width: 6rem;
  height: 100%;
}

.list-header .nav-item.active {
  position: relative;
}

.list-header .nav-item .item-title {
  font-size: 16px;
  color: #515767;
  font-weight: 400;
}


.list-header .nav-item.active .item-title {
  color: #252933;
  font-weight: 400;
}
.list-header .nav-item .item-count {
  margin-left: .4rem;
  font-size: 1rem;
  color: #b2abc2;
  line-height: 1;
}

list-header .nav-item .item-count i {
  color: #515767;
}

i {
  font-style: italic
}
.ion-arrow-down-b:before {
    content: "\f104";
}

.list-header .header-content .search-icon-container {
  position:sticky;
  right: 0;
  padding:0 20px 0 10px;
  margin: 0 0 0 auto;
  background-image: linear-gradient(90deg,hsla(0,0%,100%,0),#fff,#fff);
}

a {
  text-decoration: none;
  cursor: pointer;
  color: #909090;
}

.search-icon {
  margin: 1rem 0;
  width: auto;
  height: auto;
}
/* #endregion*/
</style>
