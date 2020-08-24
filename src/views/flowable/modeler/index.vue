<template>

  <div class="app-container">
    <div class="filter-container">
      <el-select
        v-model="listQuery.modelType"
        size="small"
        placeholder="模板类型"
        style="width: 230px"
      >
        <el-option
          v-for="item in modelTypeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-input
        v-model="listQuery.tenantName"
        placeholder="租户名称"
        size="small"
        style="width: 230px;"
      />
      <el-input
        v-model="listQuery.name"
        placeholder="模板名称"
        size="small"
        style="width: 230px;"
      />
      <el-button size="small" type="success">搜索</el-button>
      <el-button size="small" type="warning">重置</el-button>
    </div>
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
        width="230"
      />
      <el-table-column
        prop="name"
        label="模板名称"
        width="230"
      />
      <el-table-column
        prop="modelType"
        label="模板类型"
        width="230"
      />
      <el-table-column
        prop="created"
        label="创建时间"
        width="230"
      />
      <el-table-column
        prop="lastUpdated"
        label="最后更新时间"
        width="230"
      />
      <el-table-column
        prop="version"
        label="版本"
        width="80"
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

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.currentPage1"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modeler',
    data(){
      return{
        page: {
          currentPage1: 5,
          currentPage2: 5,
          currentPage3: 5,
          currentPage4: 4
        },
        listQuery: {
          name: '',
          modelType: '',
          tenantName: '',
          tenantId: ''
        },
        modelTypeOptions: [{
          value: '0',
          label: '业务流程引擎'
        }, {
          value: '2',
          label: '表单引擎'
        },{
          value: '3',
          label: '应用程序'
        },{
          value: '4',
          label: '决策引擎'
        },{
          value: '5',
          label: '案例模型引擎'
        }
        ],
        tableData:[{
          modelKey: 'SimpleFallbackFlow',
          name: 'SimpleFallbackFlow',
          modelType: '1',
          created: '2020-06-22 16:49:26',
          lastUpdated: '2020-06-22 16:49:26',
          version: 1
        },
        {
          modelKey: 'SimpleFallbackFlow',
          name: 'SimpleFallbackFlow',
          modelType: '1',
          created: '2020-06-22 16:49:26',
          lastUpdated: '2020-06-22 16:49:26',
          version: 1
        }
        ]
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
  }
</script>

<style scoped>

</style>
