<template>
  <div class="components-container">
    <aside><strong>SplitPane</strong> If you've used
      <a href="https://codepen.io/" target="_blank"> codepen</a>,
      <a href="https://jsfiddle.net/" target="_blank"> jsfiddle </a>will not be unfamiliar.
      <a href="https://github.com/PanJiaChen/vue-split-pane" target="_blank"> Github repository</a>
    </aside>
    <split-pane split="vertical" :default-percent="25" @resize="resize">
      <template slot="paneL">
        <div class="left-container">
          <el-input
            v-model="filterText"
            placeholder="输入关键字进行过滤"
            size="small"
            prefix-icon="el-icon-search"
          />
          <el-tree
            ref="tree2"
            class="filter-tree"
            :data="data"
            :props="defaultProps"
            default-expand-all
            :filter-node-method="filterNode"
          />
        </div>
      </template>
      <template slot="paneR">
        <div class="left-container">
          <el-input
            v-model="queryParam.blurry"
            placeholder="输入名称或者邮箱搜索"
            size="small"
            style="width: 230px;"
          />
          <el-date-picker
            v-model="queryParam.createTime"
            :default-time="['00:00:00','23:59:59']"
            type="daterange"
            range-separator=":"
            size="small"
            style="width: 230px;"
            value-format="yyyy-MM-dd HH:mm:ss"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
          <el-select
            v-model="queryParam.status"
            size="small"
            placeholder="状态"
            style="width: 90px"
          >
            <el-option
              v-for="item in statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-button size="small" type="success">搜索</el-button>
          <el-button size="small" type="warning">重置</el-button>
          <el-table
            :data="tableData"
            style="width: 100%"
            size="small"
            stripe
          >
            <el-table-column
              fixed
              prop="modelKey"
              label="模板序列号"
              width="120"
            />
            <el-table-column
              prop="name"
              label="模板名称"
              width="150"
            />
            <el-table-column
              prop="province"
              label="省份"
              width="120"
            />
            <el-table-column
              prop="city"
              label="市区"
              width="120"
            />
            <el-table-column
              prop="address"
              label="地址"
              width="300"
            />
            <el-table-column
              prop="zip"
              label="邮编"
              width="120"
            />
            <el-table-column
              fixed="right"
              label="操作"
              width="100"
            >
              <template slot-scope="scope">
                <el-button size="small" type="text" @click="handleClick(scope.row)">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </template>
    </split-pane>
  </div>
</template>

<script>
import splitPane from 'vue-splitpane'
export default {
  name: 'User',
  components: { splitPane },
  data() {
    return {
      queryParam: {
        blurry: '',
        createTime: '',
        status: ''
      },
      filterText: '',
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      statusOptions: [{
        value: '0',
        label: '激活'
      }, {
        value: '1',
        label: '锁定'
      }],
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }]
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val)
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    handleClick(row) {
      console.log(row)
    },
    resize() {
      console.log('resize')
    }
  }
}
</script>

<style  scoped>
  .components-container {
    position: relative;
    height: 100vh;
  }

  .left-container {
    width: 100%;
    height: 100%;
  }

  .right-container {
    background-color: #FCE38A;
    height: 200px;
  }

  .top-container {
    background-color: #FCE38A;
    width: 100%;
    height: 100%;
  }

  .bottom-container {
    width: 100%;
    background-color: #95E1D3;
    height: 100%;
  }
</style>
