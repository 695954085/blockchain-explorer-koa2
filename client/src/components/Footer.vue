<template>
  <div class="bfooter">
    <span class="bfooter__title is-vertical">BLOCKS</span>
    <ul class="bfooter__contentWrapper is-vertical">
      <li class='blockitem' v-for='block in currentUserBlocks' :key='block.number' v-on:click="changeCurrentBlockNo(block.number)">
        <el-tag :type="block.isSelected ? 'success' : 'danger'">{{block.number}}</el-tag>
      </li>
    </ul>
    <el-button :disabled='currentUser.user === undefined ? true : false' @click='commit' class="is-vertical" type="primary" icon="el-icon-plus" circle></el-button>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import { invoke, requestLogin } from "@/api";
import _ from "lodash";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["currentUserBlocks"]),
    ...mapState(["currentUser", "loginUser"])
  },
  methods: {
    ...mapMutations(["changeCurrentBlockNo","updateUserList"]),
    async commit() {
      try {
        let { value } = await this.$prompt("Commit", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消"
        });
        let { data, status, statusText } = await invoke({
          user: this.currentUser.user,
          value: value
        });
        if (status !== 200 || !data.message ) {
          this.$message({
            message: statusText || "服务器异常",
            type: "error"
          });
          return;
        }
        // 上传成功,重新获取blocks数据
        let result = await requestLogin({
          user: this.loginUser.username
        });
        if (result.status !== 200 ) {
          this.$message({
            message: result.statusText || "服务器异常",
            type: "error"
          });
          return;
        }
        this.updateUserList(result.data.message)
      } catch (error) {
        this.$message({
          type: "error",
          message: error.message || "取消输入"
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.is-vertical {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.bfooter {
  height: 100%;
  background-color: rgb(239, 235, 245);

  .bfooter__title {
    float: left;
    left: 5px;
  }

  .bfooter__contentWrapper {
    float: left;
    left: 15px;
    list-style: none;
    margin: 0;
    padding-left: 0;
    .blockitem {
      cursor: pointer;
      float: left;
      margin-left: 10px;
      &:nth-child(1) {
        margin-left: 0;
      }
      &:last-child {
        overflow: hidden;
      }
    }
  }

  .el-button {
    float: right;
    margin-right: 5px;
  }
}
</style>
