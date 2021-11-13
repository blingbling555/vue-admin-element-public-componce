<template>
  <div>
    <ScrollFixedToTop fixedEleSelector=".sss" :fixedEleOffsetTop="fixedEleOffsetTop" :fixedEleTop="fixedEleTop">

      <ul class="aa">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li class="sss">ssssssssssss</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </ScrollFixedToTop>

  </div>
</template>

<script>
import ScrollFixedToTop from '@/views/commonCollect/vue/components/ScrollFixedToTop'
export default {
  name: 'Routine',
  data() {
    return {
      fixedEleOffsetTop: 0,
      fixedEleTop: 0
    }
  },
  mounted() {
    // 因为上面有个nav头，所以需要减一个50
    this.fixedEleOffsetTop = document.querySelector('.sss').offsetTop - 50
    this.fixedEleTop = document.querySelector('.fixed-header').offsetHeight
  },
  components: {
    ScrollFixedToTop
  }
}
</script>

<style scoped lang="scss">
.aa li{
  height: 50px;
  border: 1px solid red;
  margin-bottom: 40px;
}
</style>
