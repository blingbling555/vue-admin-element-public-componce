<template>
  <div>
    <OverflowTips :text="textData"  :maxLines="3" effect="dark">
    </OverflowTips>
  </div>

</template>

<script>
import OverflowTips from '../index'
export default {
  name: 'TestOverflowTips',
  components: {
    OverflowTips
  },
  data() {
    return {
      maxLines: 3,
      textData: '从仓颉造字的古老传说到公元前仓颉造字的古老传说到公元前1000多仓颉造字的古老传说到公元前1000多仓颉造字的古老传说到公元前1000多1000多年前甲骨文的发现，历代中国学者一直致力于揭开汉'
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
