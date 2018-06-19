<template>
  <div class="mainSide">
    <el-row>
      <el-col :span="12">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>user2</el-breadcrumb-item>
          <el-breadcrumb-item>block1</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">xxx</el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.mainSide {
  background-color: rgb(136, 136, 51);
  flex-grow: 1;
  flex-shrink: 1;

  .el-breadcrumb{
    margin: 10px;
    font-size: 20px;
  }
}
</style>
