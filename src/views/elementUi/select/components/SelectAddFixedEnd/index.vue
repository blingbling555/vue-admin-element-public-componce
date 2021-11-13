<template>
  <el-select
    v-model="value"
    placeholder="请选择"
    class="select-class"
    popper-class="select-popper-fixed-end"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
    <div class="fixed">固定到尾部</div>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      options: [],
      value: ''
    }
  },
  mounted() {
    for( let i = 0; i <=30; i++) {
      this.options.push({
        value: `value ${i + 1}`,
        label: `label ${i + 1}`
      })
    }
  }
}

</script>

<style lang="scss">
 .select-popper-fixed-end {
  .fixed {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #f2eded;
  }
 .el-select-dropdown__item:last-of-type{
   margin-bottom: 50px;
 }
 }
</style>
