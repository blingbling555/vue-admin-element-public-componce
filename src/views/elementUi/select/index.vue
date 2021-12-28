<template>
  <el-tabs type="border-card" class="tab-container" v-model="activeName">
    <el-tab-pane label="固定尾部" name="fixedBottom">
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
  },
  data() {
    return {
      activeName: 'fixedBottom'
    }
  }
}
</script>

<style scoped lang="scss">
  .tab-container {
    height: calc(100vh - 50px);
  }
</style>
