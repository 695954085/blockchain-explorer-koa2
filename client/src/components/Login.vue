<template>
  <el-form :model="ruleForm2" :rules="rules" ref="form" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item class='item__button'>
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">登录</el-button>
    </el-form-item>
    <div class="to-register">
      <span class="register__content" @click="toRegister">register</span>
    </div>
  </el-form>
</template>

<script>
/* eslint-disable */
import { requestLogin } from "@/api";
import { mapMutations } from "vuex";
import _ from 'lodash'

export default {
  name: "login",
  data() {
    return {
      ruleForm2: {
        account: "",
        checkPass: ""
      },
      logining: false,
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      checked: true
    };
  },
  methods: {
    ...mapMutations(["saveUserList", "saveAdmin"]),
    handleSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.logining = true;
          let loginParams = {
            user: this.ruleForm2.account
          };
          requestLogin(loginParams).then(response => {
            this.logining = false;
            let { data, status, statusText } = response;
            if (status !== 200) {
              this.$message({
                message: statusText || "服务器异常",
                type: "error"
              });
              this.logining = false
              return;
            }
            // 把data放进去state中
            this.saveUserList(data.message);
            this.saveAdmin(this.ruleForm2.account);
            this.$router.push("/");
          }).catch(error => {
              this.$message({
                message: error.message || "服务器异常",
                type: "error"
              });
              this.logining = false
          });
        }
      });
    },
    toRegister() {
      this.$router.push("/register");
    }
  }
};
</script>
<style scoped lang="scss">
@import "~element-ui/packages/theme-chalk/src/common/var";
.login-container {
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px 10px #cac6c6;
}

.login-container .title {
  margin: 0 auto 40px auto;
  text-align: center;
  color: #505458;
}

.login-container .remember {
  margin: 0 0 35px 0;
  display: block;
  text-align: left;
}

.to-register {
  padding-top: 5px;
  text-align: right;

  .register__content {
    color: $--color-primary;
    cursor: pointer;
    &:hover {
      color: $--color-warning;
    }
    &.is-active {
      text-decoration-line: underline;
    }
  }
}

.item__button {
  margin-bottom: 10px;
}
</style>

