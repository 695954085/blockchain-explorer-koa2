<template>
  <el-container>
    <el-aside width="300px" v-show="isShowLeftSide">
      <leftside v-on:showLeftSide='showLeftSide'></leftside>
    </el-aside>
    <el-container>
      <el-header>
        <bheader v-bind:showMenuIcon="isShowLeftSide" v-on:showLeftSide='showLeftSide'></bheader>
      </el-header>
      <el-main><mainside></mainside></el-main>
      <el-footer><chain></chain></el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainSide from "@/components/MainSide";
import LeftSide from "@/components/LeftSide";
export default {
  data() {
    return {
      isShowLeftSide: true
    };
  },
  components: {
    chain: Footer,
    mainside: MainSide,
    bheader: Header,
    leftside: LeftSide
  },
  methods: {
    showLeftSide() {
      this.isShowLeftSide = !this.isShowLeftSide;
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

  .el-main{
    padding: 0;
    overflow: hidden;
    display: flex;
  }

  .el-footer{
    padding: 0;
  }
}
</style>
