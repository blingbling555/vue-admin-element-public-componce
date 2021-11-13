<template>
<div>
  <LoadDetail :componentUrl="componentUrl" :key="componentUrl"></LoadDetail>
</div>
</template>

<script>
import LoadDetail from '@/views/commonCollect/LoadDetail/index.vue'
import { commonVueList } from '@/constance'
export default {
  name: 'Index',
  components: {
    LoadDetail
  },
  data() {
    return {
      componentUrl: commonVueList.find(item => item.url === this.$route.params.url)?.componentUrl
    }
  },
  mounted() {
    console.log(commonVueList.find(item => item.url === this.$route.params.url))
  }
}
</script>

<style scoped>

</style>
