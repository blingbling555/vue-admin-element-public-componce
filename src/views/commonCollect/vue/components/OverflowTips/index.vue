<template>
  <div>
    <el-tooltip class="item" :effect="effect" :content="text" :placement="placement" :disabled="disabledTooltips" v-bind="$attrs">
      <div class="font-wrap" :style="{'-webkit-line-clamp': maxLines}">
        <span ref="desc" class="font-inner">
          <slot>{{ text }}</slot>
        </span>
      </div>
    </el-tooltip>
  </div>

</template>

<script>
import elementResizeDetectorMaker from 'element-resize-detector'
export default {
  name: 'TestOverflowTips',
  components: {},
  props: {
    text: {
      type: String,
      default: ''
    },
    maxLines: {
      type: Number,
      default: 3
    },
    effect: {
      type: String,
      default: 'dark'
    },
    placement: {
      type: String,
      default: 'bottom'
    }
  },
  data() {
    return {
      disabledTooltips: true
    }
  },
  watch: {
    text() {
      this.isShowTooltips()
    }
  },
  mounted() {
    this.isShowTooltips()
    this.desc = this.$refs.desc
    this.removeListeners()
    this.erd = elementResizeDetectorMaker()
    this.erd.listenTo(this.desc, (element) => {
      this.isShowTooltips()
    })
    // window.removeEventListener('resize', this.resizeHandler)
    // window.addEventListener('resize', this.resizeHandler)
  },
  methods: {
    isShowTooltips() {
      this.$nextTick(() => {
        this.disabledTooltips = this.$refs.desc.getClientRects().length <= this.maxLines
      })
    },
    removeListeners() {
      this.erd?.removeAllListeners?.(this.desc)
    }
  },
  beforeDestroy() {
    // window.removeEventListener('resize', this.resizeHandler)
    this.removeListeners()
  }
}
</script>

<style scoped lang="scss">
  .font-wrap {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .font-inner {
   ::v-deep a,
   ::v-deep div,
   ::v-deep span {
      display: inline;
    }
  }
</style>
