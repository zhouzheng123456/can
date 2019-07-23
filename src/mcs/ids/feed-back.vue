<template>
  <div>
    <mt-header title="意见反馈">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
    <group>
      <cell title="问题描述"></cell>
      <x-textarea :max="200" placeholder="请输入您的反馈信息" ></x-textarea>
    </group>
    <div style="padding:15px">
      <div style="line-height:25px">上次相关问题的照片或者截图</div>
      <div>
        <div style="background-color:#bfbfbf;display: inline-block;text-align: center;padding: 20px;border: 1px solid #9a9a9a;">
          <img src="../../assets/imgs/photo.png" width="30" alt="">
          <p style="font-size:14px;line-height:20px">拍摄 / 相册</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Group, XTextarea, Cell } from 'vux'
export default {

  components: { Group, XTextarea, Cell },

  computed: {},

  beforeMount () {},

  mounted () {},

  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },

  watch: {}

}

</script>
<style lang='' scoped>

</style>
