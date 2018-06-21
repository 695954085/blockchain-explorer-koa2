<template>
  <div class="bheader">
    <span class="bheader__iconMenu" v-show="!showMenuIcon" @click='showLeftSide'>
      <i class="el-icon-menu"></i>
    </span>
    <div class="bheader__selectUser">
      <span class="selectUser__title">CurrentUser</span>
      <el-select v-model="selectUser" placeholder="请选择当前用户" v-on:change="changeCurrentUser">
        <el-option v-for="item in userListSelectOptions" :key="item" :label="item" :value="item">
        </el-option>
      </el-select>
    </div>
    <div class="bheader__profile">
      <img src="../assets/logo.png" alt="" class="profile__avatar">
      <el-dropdown>
        <span class="el-dropdown-link">
          {{loginUser.username}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters,mapMutations } from "vuex";
export default {
  data() {
    return {
      selectUser: ""
    };
  },
  props: ["showMenuIcon"],
  computed: {
    ...mapState(["currentUser", "loginUser","userList"]),
    ...mapGetters(["userListSelectOptions"])
  },
  methods: {
    ...mapMutations(['changeCurrentUser']),
    showLeftSide() {
      this.$emit("showLeftSide");
    },
  },
  mounted(){
    // this.selectUser = this.userList[0].username;
  }
};
</script>
<style lang="scss" scoped>
.bheader {
  background-color: rgb(236, 230, 242);
  height: 100%;
  position: relative;

  .bheader__profile {
    position: absolute;
    right: 5px;
    display: flex;
    align-items: center;
    transform: translateY(-50%);
    top: 50%;
    .profile__avatar {
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
    .el-dropdown {
      cursor: pointer;
      font-size: 16px;
    }
  }

  .bheader__iconMenu {
    font-size: 20px;
    position: relative;
    float: left;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    cursor: pointer;

    &:hover {
      color: rgb(216, 216, 199);
    }
  }
  .bheader__selectUser {
    font-size: 20px;
    position: relative;
    float: left;
    top: 50%;
    left: 25px;
    transform: translateY(-50%);

    .selectUser__title {
      display: inline-block;
    }
  }
}
</style>
