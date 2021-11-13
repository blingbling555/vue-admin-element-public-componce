<template>
  <div id="scrollFixedTop" :class="{'fixed-top-wrapper': isFixed}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ScrollFixedToTop',
  props: {
    fixedEleSelector: {
      type: String,
      desc: '需要固定元素的选择器,比如 .el-select, #app等',
      required: true
    },
    fixedEleOffsetTop: {
      type: Number,
      desc: '需要固定元素距离顶部的距离，这个需要跟滚动条滚动的距离比较'
    },
    fixedEleTop: {
      type: Number,
      default: 0,
      desc: '需要固定的元素固定時，距离顶部需要top值'
    }
  },
  data() {
    return {
      isFixed: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler.bind(this))
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler.bind(this))
  },
  methods: {
    scrollHandler() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const fixedEle = document.querySelector(this.fixedEleSelector)
      if (!fixedEle) {
        return new Error('传入的DOM选择器错误，找不到改选择器')
      }
      if (scrollTop >= this.fixedEleOffsetTop) {
        if (this.isFixed) {
          return
        }
        this.isFixed = true
        fixedEle.classList.add('fixed-top-element-box')
        fixedEle.style.top = `${this.fixedEleTop || 0}px`
      } else {
        if (!this.isFixed) {
          return
        }
        fixedEle.classList.remove('fixed-top-element-box')
        this.isFixed = false
        fixedEle.style.top = 0
      }
    }
  }
}
</script>

<style scoped lang="scss">
  #scrollFixedTop .fixed-top-element-box {
    position: fixed;
    z-index: 999;
    width: calc(100% - 210px);
    margin-left: 210px;
    background: white;
    padding: 10px 40px;
    left: 0;
    box-shadow: 2px 5px 5px rgba(0,0,0,.1);

  }
</style>
