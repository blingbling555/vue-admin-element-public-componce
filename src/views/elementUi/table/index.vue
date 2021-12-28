<template>
  <el-tabs type="border-card" class="tabs-container" v-model="activeName">
    <el-tab-pane label="多个表格" name="moreTable">
      <MoreTable></MoreTable>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import MoreTable from "@/views/elementUi/table/components/MoreTable";
export default {
  components: {
    MoreTable
  },
  data() {
    return {
      activeName: 'moreTable'
    }
  }

}
</script>
<style scoped lang="scss">
  .tabs-container {
    height: calc(100vh - 50px);
  }
</style>
