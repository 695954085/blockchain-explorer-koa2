<template>
  <div class="mainSide">
    <el-row>
      <el-col :span="12">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>{{currentUser.username}}</el-breadcrumb-item>
          <el-breadcrumb-item>{{currentBlockNo | blockNoFilter}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row class="blockdetail">
      <el-col :span="5">
        <span>Data: </span>
        <el-tooltip class="item" effect="dark" :content="currentBlock.dataHash" placement="top-start">
          <span class="blockdetail__dataHash">{{currentBlock.dataHash}}</span>
        </el-tooltip>
      </el-col>
    </el-row>
    <el-row class="txdetail">
      <el-col :span="20">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
import _ from "lodash";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  watch: {},
  computed: {
    ...mapState(["currentUser", "currentBlockNo"]),
    currentBlock() {
      if (!_.isEmpty(this.currentUser) && this.currentBlockNo !== -1) {
        return this.currentUser.blocks[this.currentBlockNo];
      }
      return Object.create(null);
    },
  },
  filters: {
    blockNoFilter(value) {
      if (value === -1) {
        return "";
      }
      if (typeof value == "number") {
        return "BLOCK" + value;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.mainSide {
  background-color: rgb(136, 136, 51);
  flex-grow: 1;
  flex-shrink: 1;

  .el-breadcrumb {
    margin: 10px;
    font-size: 20px;
  }

  .blockdetail {
    margin: 10px;
    text-align: left;

    .el-col {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;

      .blockdetail__dataHash {
        width: 50px;
        display: inline-block;
      }
    }
  }
  .txdetail{
    margin: 10px;
    text-align: left;
  }
}
</style>
