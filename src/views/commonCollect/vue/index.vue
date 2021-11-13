<template>
  <div class="test-container">
    <div v-for="item in commonVueList" :key="item.url" @click="goDetail(item)" class="test-item">{{ item.name }}</div>
  </div>
</template>

<script>
import { commonVueList } from '@/constance'

export default {
  name: 'List',
  components: {
  },
  data() {
    return {
      commonVueList
    }
  },
  methods: {
    goDetail(item) {
      this.$router.push({
        path: `/vue/detail/${item.url}`
      })
    }
  }
}
</script>

<style scoped lang="scss">
.test-container {
  display: grid;
  grid-template-columns: repeat(3, 25%);
  grid-row-gap: 10px;
  grid-column-gap: 10px;
}
.test-item {
  padding: 10px;
  background: #ece8e85e;
  cursor: pointer;

}
</style>
