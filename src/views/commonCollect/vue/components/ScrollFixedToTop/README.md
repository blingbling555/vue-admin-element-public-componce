## 功能介绍
实现滚动到某个位置，把某个类名元素固定到某个位置

## 属性介绍

| 参数              | 说明                                                       | 类型   | 可选值 | 默认值 |
| ----------------- | ---------------------------------------------------------- | ------ | ------ | ------ |
| fixedEleSelector  | 需要固定元素的选择器,比如 .el-select, #app等               | String | 无     | 无     |
| fixedEleOffsetTop | 需要固定元素距离顶部的距离，这个需要跟滚动条滚动的距离比较 | Number | 无     | 无     |
| fixedEleTop       | 需要固定的元素固定時，距离顶部需要top值                    | Number | 无     | 0      |

## 实例 

### 一般元素
```vue
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
import ScrollFixedToTop from './ScrollFixedToTop/index'
export default {
  name: "index",
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

```

### element 的 el-tab固定