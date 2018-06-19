<template>
  <div class="bfooter">
    <span class="bfooter__title">BLOCKS</span>
    <ul class="bfooter__contentWrapper">
      <li class='blockitem' v-for='block in currentUserBlocks' :key='block.no' :click='showBlockTx(block.no)'>
        <el-tag type="info">{{block.no}}</el-tag>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["currentUserBlocks"])
  },
  methods: {
    showBlockTx(no){

    }
  }
};
</script>
<style lang="scss" scoped>
.bfooter {
  height: 100%;
  background-color: rgb(239, 235, 245);

  .bfooter__title {
    position: relative;
    top: 50%;
    float: left;
    left: 5px;
    transform: translateY(-50%);
  }

  .bfooter__contentWrapper {
    position: relative;
    top: 50%;
    float: left;
    left: 15px;
    transform: translateY(-50%);
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
}
</style>
