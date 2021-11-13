<template>
  <div>
    <component :is="model"></component>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    componentUrl: {
      type: String,
      required: true
    }
  },
  components: {
    // 这种方式，第二次进来不会重新渲染
    // instanceComp: (resolve) => {
    //   const params = location.pathname.replace('/test/detail/', '').split('-').join('/')
    //   // 用import没法用模板字符创，换成了require可以
    //   // return import(`../List/components/${params}.vue`)
    //   return require([`../List/components/${params}.vue`], resolve)
    // }
  },
  data() {
    return {
      model: ''
    }
  },
  mounted() {
    console.log(this.componentUrl)
    console.log(this.componentUrl)
    this.model = require(`../${this.componentUrl}.vue`).default
  }
}
</script>

<style scoped>

</style>
