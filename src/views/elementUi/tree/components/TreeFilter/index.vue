<template>
  <div>
    <div>tree过滤 - 默认是不展示匹配到元素的子集，除非子集匹配上了</div>
    <el-input
      v-model="filterText"
      placeholder="输入关键字进行过滤"
    />

    <el-tree
      ref="tree"
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      :render-content="renderContent"
      :expand-on-click-node="false"
      :check-on-click-node="true"
      node-key="id"
      show-checkbox
      check-strictly
      @check-change="selectTreeNode"
    />
  </div>
</template>

<script>
export default {
  name: 'TreeFilter',

  data() {
    return {
      filterText: '',
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          isStop: true,
          canAdd: true,
          canDelete: true,
          canUpdate: true,
          disabled: true,
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2',
            isStop: false,
            canAdd: true,
            canDelete: false,
            canUpdate: true
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      selectTreeOption: [],
      id: 14,
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },

  methods: {

    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    selectTreeNode(data, checked, indeterminate) {
      if (checked) {
        this.selectTreeOption.splice(0, this.selectTreeOption.length, data.id)
        this.$refs.tree.setCheckedKeys(this.selectTreeOption)
      }
    },
    addHandler(e, data) {
      e.stopPropagation()
      console.log(e, data, data.id)
      this.$refs.tree.append({ id: ++this.id, label: `新增的${this.id}`,  canAdd: true,
        canDelete: true,
        canUpdate: true, }, data.id)

    },
    renderContent(h, { node, data, store }) {
      const { label, isStop, canAdd, canDelete, canUpdate, disabled } = data
      const canOpeartion = canAdd || canDelete || canUpdate
      const commonClass = ['icon-common']
      const addClassArr = [...commonClass]
      const updateClassArr = [...commonClass]
      const deleteClassArr = [...commonClass]
      return (
        <div class='custom-tree-node'>
          <div>
            <span>{label}</span>
            { isStop ? <span class='stop-box'>停</span> : null}
          </div>
          <div class='operation-box'>
            <el-button type='text' icon='el-icon-circle-plus-outline' class={addClassArr} disabled={!canAdd} on-click={(e) => { this.addHandler(e, data) }}></el-button>
            <el-button type='text' icon='el-icon-edit-outline' class={updateClassArr} disabled={!canUpdate}></el-button>
            <el-button type='text' icon='el-icon-delete' class={deleteClassArr} disabled={!canDelete}></el-button>

          </div>
        </div>)
    }
  }
}
</script>

<style scoped lang="scss">
.filter-tree {
  ::v-deep .el-checkbox{
    display: none;
  }
  ::v-deep.el-checkbox__inner {
    border-radius: 50%;
  }
  ::v-deep.el-tree-node.is-checked {
    .custom-tree-node div:first-child {
      color: #409EFF;
    }
  }
}
  .filter-tree ::v-deep.custom-tree-node {
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;
    &:hover .operation-box{
      display: block;
    }
    .stop-box {
      padding: 1px 8px;
      border: 1px solid gray;
      background: #ece6e6;
      display: inline-block;
      border-radius: 5px;
      margin-left: 6px;
    }
    .operation-box {
      display: none;
      .icon-common {
        color: gray;
      }
      .is-disabled {
        color: #C0C4CC;
      }
    }
  }

</style>
