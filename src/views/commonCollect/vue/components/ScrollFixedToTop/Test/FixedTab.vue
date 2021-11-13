<template>
 <div>
   <div class="header"></div>
   <ScrollFixedToTop
     fixedEleSelector=".el-tabs__header"
     :fixedEleOffsetTop="fixedEleOffsetTop"
     :fixedEleTop="fixedEleTop">
     <el-tabs v-model="activeName" @tab-click="handleClick">
       <el-tab-pane label="用户管理" name="first">
         <div class="user-admin" v-for="item in 30" :key="item">用户管理{{ item }}</div>
       </el-tab-pane>
       <el-tab-pane label="配置管理" name="second">
         <div class="user-admin" v-for="item in 60" :key="item">配置管理{{ item }}</div>
       </el-tab-pane>
       <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
       <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
     </el-tabs>
   </ScrollFixedToTop>
 </div>
</template>

<script>
import ScrollFixedToTop from '@/views/commonCollect/vue/components/ScrollFixedToTop'

export default {
  name: 'FixedTab',
  components: {
    ScrollFixedToTop
  },
  data() {
    return {
      activeName: 'second',
      fixedEleOffsetTop: 0,
      fixedEleTop: 0
    }
  },
  mounted() {
    // 因为上面有个nav头，所以需要减一个50
    this.fixedEleOffsetTop = document.querySelector('.el-tabs__header').offsetTop - 50
    this.fixedEleTop = document.querySelector('.fixed-header').offsetHeight
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped lang="scss">
  .header {
    height: 100px;
    background: hotpink;
  }
  .user-admin {
    height: 50px;
    border: 1px solid red;
  }
  #scrollFixedTop  ::v-deep  .fixed-top-element-box.el-tabs__header {
    position: fixed;
    width: 100%;
    background: white;
    z-index: 999999;
    box-shadow: 4px 4px 4px rgb(0 0 0 / 10%);
  }
</style>
