<template>
  <div class="mainSide">
    <el-row>
      <el-col :span="12">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>{{currentUser.user}}</el-breadcrumb-item>
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
      <el-col :span='5'>
        <span>CurrentHash: </span>
        <el-tooltip class="item" effect="dark" :content="currentBlock.currentHash" placement="top-start">
          <span class="blockdetail__currentHash">{{currentBlock.currentHash}}</span>
        </el-tooltip>
      </el-col>
    </el-row>
    <el-row class="txdetail">
      <el-col :span="20">
        <el-table :data="currentBlock.txs" style="width: 100%" border>
          <el-table-column prop="id" label='id' width="280">
          </el-table-column>
          <el-table-column prop="timestamp" label='timestamp' width="180">
          </el-table-column>
          <el-table-column prop="nonce" label='nonce' width="180">
          </el-table-column>
          <el-table-column label='content'>
            <template slot-scope="scope">
              <span>{{scope.row.content}}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import _ from "lodash";
export default {
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapState(["currentUser", "currentBlockNo"]),
    ...mapGetters(['currentUserBlocks']),
    currentBlock() {
      if (!_.isEmpty(this.currentUser) && this.currentBlockNo !== -1) {
        // return this.currentUser.blocks[this.currentBlockNo];
        return this.currentUserBlocks.find(value => {
          return value.number == this.currentBlockNo;
        });
      }
      return Object.create(null);
    }
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
  background-color: white;
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
      display: flex;

      .blockdetail__dataHash,
      .blockdetail__currentHash {
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
  .txdetail {
    margin: 10px;
    text-align: left;

    .cell {
      word-break: normal;
      display: inline-block;
      text-overflow: unset;
    }
  }
}
</style>
