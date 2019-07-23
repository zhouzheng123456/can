<template>
  <div>
    <mt-header title="设置密码">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
    <div ref="content_box" class="create_user">
      <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <x-input placeholder="请输入手机号" v-model="phone" :show-clear="false">
          <img slot="label" style="padding-right:10px;display:block;" src="../../assets/imgs/shouji.png" width="24" height="24">
        </x-input>
        <x-input placeholder="短信验证码" v-model="valid_code" :show-clear="false">
          <img slot="label" style="padding-right:10px;display:block;" src="../../assets/imgs/xiaoxi.png" width="24" height="24">
          <x-button slot="right" type="primary" mini @click.native="get_code">获取验证码</x-button>
        </x-input>
        <x-input placeholder="请输入密码" v-model="one_pwd" :show-clear="false">
          <img slot="label" style="padding-right:10px;display:block;" src="../../assets/imgs/mima.png" width="24" height="24">
        </x-input>
        <x-input placeholder="请确认密码" v-model="two_pwd" :show-clear="false">
          <img slot="label" style="padding-right:10px;display:block;" src="../../assets/imgs/mima.png" width="24" height="24">
        </x-input>
      </group>  
    </div>
    <x-button type="primary" @click.native="next_step">确认</x-button>
  </div>
</template>

<script>
import { XButton, Group, XInput, CheckIcon  } from 'vux'
export default {

  components: { XButton, Group, XInput, CheckIcon  },

  data() {
    return {
      phone: '',
      valid_code: '',
      one_pwd: '',
      two_pwd: ''
    }
  },

  computed: {},

  beforeMount () {},

  mounted () {
    this.$refs.content_box.style.height = document.documentElement.clientHeight - 115 + 'px';
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    // 获取验证码
    get_code() {

    },
    // 下一步
    next_step() {
      this.$router.go(-1);
    }
  },

  watch: {}

}

</script>
<style lang='' scoped>
.create_user .weui-cell {
  padding: 20px 15px
}
</style>
