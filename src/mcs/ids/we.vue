<template>
  <div>
   <mt-header title="关于我们">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
    <div style="background-color:white;text-align:center;position:relative" ref="content_box">
      <img src="../../assets/imgs/logo.png" width="150" alt="" style="transform: translateY(60%);">
      <p style="transform: translateY(476%);color:#bfbfbf">v 1.0.1</p>
      <div style="position: absolute;bottom: 100px;width: 65%;left: 50%;transform: translateX(-50%);">
        <flexbox style="color:green;text-align:center">
          <flexbox-item style="border-right:1px solid green">
            联系电话
          </flexbox-item>
          <flexbox-item style="border-right:1px solid green">
            官方邮箱
          </flexbox-item>
          <flexbox-item>
            官方微信
          </flexbox-item>
        </flexbox>
        <div style="color:#9a9a9a;line-height:33px">版权所有: 杭州卓坤科技有限公司</div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
export default {

  components: { Flexbox, FlexboxItem },

  computed: {},

  beforeMount () {},

  mounted () {
    this.$refs.content_box.style.height = document.documentElement.clientHeight - 51 + 'px';
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },

  watch: {}

}

</script>
<style lang='' scoped>

</style>
