<template>
  <el-tabs type="border-card" class="tab-container" v-model="activeName">
    <el-tab-pane label="tree过滤" name="treeFiler">
      <TreeFilter></TreeFilter>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import TreeFilter from './components/TreeFilter/index'
export default {
  name: 'Index',
  components: {
    TreeFilter
  },
  data() {
    return {
      activeName: 'treeFiler'
    }
  }
}
</script>

<style scoped lang="scss">
.tab-container {
  height: calc(100vh - 50px);
}
</style>
