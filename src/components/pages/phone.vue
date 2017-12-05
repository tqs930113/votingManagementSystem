<template>
  <div class="base-table">
    <nav>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-menu"></i>表格</el-breadcrumb-item>
        <el-breadcrumb-item>基础表格</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>
    <div class="tool-bar">
        <el-button class="control" type="primary" icon="el-icon-delete" >批量删除</el-button>
        <el-select class="control"   v-model="classifications" filterable placeholder="请选择">
          <el-option
            v-for="item in classificationsOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input class="control input" placeholder="请输入关键词" clearable v-model="keyWord" ></el-input>
        <el-button class="control" type="primary" icon="el-icon-search" >搜索</el-button>
    </div>
    <div class="table">
        <el-table
        :default-sort = "{prop: 'date', order: 'descending'}"
        border
        header-row-class-name="tabel-header"
        highlight-current-row
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="40">
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            width="120"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column 
            width="150"
            label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- <div style="margin-top: 20px">
          <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
          <el-button @click="toggleSelection()">取消选择</el-button>
        </div> -->
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      handleEdit (index, row) {
        console.log(index, row)
        this.$message({
          showClose: true,
          message: `编辑第${index + 1}行`,
          type: 'success'
        })
      },
      handleDelete (index, row) {
        console.log(index, row)
        this.$message({
          showClose: true,
          message: `删除第${index + 1}行`,
          type: 'warning'
        })
      }
    },
    data () {
      return {
        classificationsOptions: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        classifications: '',
        keyWord: '',
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄11111111111111啊是的范德萨发范德萨撒范德萨发大发大发'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    }
  }
</script>
<style>
.base-table{
  padding:30px;
}
.base-table nav{
  padding: 20px 0 ;
}
.base-table nav i{
  padding-right: 5px;
  font-weight: bold;
}
.base-table .tool-bar::after{
  content: " ";
  display: block;
  clear: both;
  zoom: 1;
}
.base-table .tool-bar .control{
  float: left;
  margin-right: 10px;
}
.base-table .tool-bar .input{
  width:220px;
}
.base-table .table{
  margin-top: 20px;
}
.base-table .table .tabel-header{
  background-color:#eef1f6;
}
.base-table .table .cell{
  text-align: left;
}
.base-table .pagination{
  margin-top:20px;
  text-align: right;
}
</style>

