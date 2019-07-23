<template>
  <div>
    <mt-header title="人脸采集">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
    <div ref="content_box" style="background-color:white">
      <img src="../../assets/imgs/face.jpg" alt="" width="100%" style="margin-top:100px">
      <img src="../../assets/imgs/face_btm.jpg" alt="" width="100%">
      <div style="text-align:center;font-weight:bold">请确保是 ** 本人操作</div>
    </div>
    <x-button type="primary" @click.native="next_step">人脸录入</x-button>
  </div>
</template>

<script>
// if(window.plus){
//   //点手机虚拟返回键
//   document.addEventListener("plusready", function() {
//     // 注册返回按键事件
//     plus.key.addEventListener('backbutton', function() {
//         // 事件处理
//         window.history.go(-1);
//     }, false);
//   });
// }
import { XButton } from 'vux'
export default {

  components: { XButton },

  data() {
    return {
      is_dis_sel: 0,
      is_con_sel: 1
    }
  },

  computed: {},

  beforeMount () {},

  mounted () {
    this.$refs.content_box.style.height = document.documentElement.clientHeight - 96 + 'px';
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    // 人脸采集
    next_step() {
      this.$router.push('/ids/create-faceIn')
    }
  },

  watch: {}

}

</script>
<style lang='' scoped>
</style>
