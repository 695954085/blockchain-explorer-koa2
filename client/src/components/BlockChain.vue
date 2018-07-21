<template>
  <el-container>
    <el-aside width="300px" v-show="isShowLeftSide">
      <leftside v-on:showLeftSide='showLeftSide'></leftside>
    </el-aside>
    <el-container>
      <el-header>
        <bheader v-bind:showMenuIcon="isShowLeftSide" v-on:showLeftSide='showLeftSide'></bheader>
      </el-header>
      <el-main>
        <mainside></mainside>
      </el-main>
      <el-footer>
        <chain></chain>
      </el-footer>
    </el-container>
    <div class="mask" v-show="loading">
      <i class="el-icon-loading "></i>
    </div>
  </el-container>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainSide from "@/components/MainSide";
import LeftSide from "@/components/LeftSide";
import { requestLogin } from "../api";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      isShowLeftSide: false,
      loading: true
    };
  },
  components: {
    chain: Footer,
    mainside: MainSide,
    bheader: Header,
    leftside: LeftSide
  },
  methods: {
    ...mapMutations(["saveUserList"]),
    showLeftSide() {
      this.isShowLeftSide = !this.isShowLeftSide;
    }
  },
  computed: {
    ...mapState(["loginUser"])
  },
  async mounted() {
    try {
      let params = {
        user: this.loginUser.username
      };
      let value = await requestLogin(params);
      let { data, status, statusText } = value;
      if (status !== 200) {
        this.$message({
          message: "服务器异常，请再次刷新",
          type: "error"
        });
        return;
      }
      // 判斷message
      let { message } = data;
      this.saveUserList(message);
      this.loading = false;
    } catch (err) {
      console.log(err);
      this.$message({
        message: "服务器异常，请再次刷新",
        type: "error"
      });
      return;
    }
  }
};
</script>

<style lang='scss' scoped>
.el-container:nth-child(1) {
  box-sizing: border-box;
  height: 100%;
  padding: 8px;

  .el-header {
    padding: 0;
  }

  .el-main {
    padding: 0;
    overflow: hidden;
    display: flex;
  }

  .el-footer {
    padding: 0;
  }
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(219, 205, 205, 0.3);
  z-index: 1000;

  &>i{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: auto;
    font-size: 2rem;
  }
}
</style>
