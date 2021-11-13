<template>
  <el-tabs type="border-card" class="tab-container">
    <el-tab-pane label="固定尾部">
      <SelectAddFixedEnd></SelectAddFixedEnd>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import SelectAddFixedEnd from './components/SelectAddFixedEnd/index'
export default {
  name: 'Index',
  components: {
    SelectAddFixedEnd
  }
}
</script>

<style scoped lang="scss">
  .tab-container {
    height: calc(100vh - 50px);
  }
</style>
