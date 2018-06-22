<template>
  <div class='leftside'>
    <span class='leftside__closebutton' v-on:click='showLeftSide'>
      <i class='el-icon-close'></i>
    </span>
    <!-- <ul>
      <li v-for="user in userList" :key="user.id">
        <div></div>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
  },
  methods:{
    showLeftSide(){
      this.$emit('showLeftSide');
    }
  }
};
</script>

<style lang='scss' scoped>
.leftside {
  background-color: rgb(187, 126, 126);
  width: 100%;
  height: 100%;
  overflow: hidden;
  .leftside__closebutton {
    float: right;
    margin: 5px;
    cursor: pointer;

    &:hover{
      color: rgb(197, 207, 216);
    }
  }
}
</style>

