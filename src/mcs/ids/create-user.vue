<template>
  <div>
    <mt-header title="创建账号">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
    <div ref="content_box" class="create_user">
      <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <x-input 
          ref="phone"
          placeholder="请输入手机号"
          is-type="china-mobile"
          keyboard="number"
          v-model="phone"
          :show-clear="false"
          required>
          <img slot="label" style="padding-right:10px;display:block;" src="../../assets/imgs/shouji.png" width="24" height="24">
        </x-input>
        <x-input 
          ref="valid_code"
          placeholder="短信验证码"
          v-model="valid_code"
          required
          :show-clear="false">
          <img slot="label" style="padding-right:10px;display:block;" src="../../assets/imgs/xiaoxi.png" width="24" height="24">
          <x-button slot="right" type="primary" mini @click.native="get_code">获取验证码</x-button>
        </x-input>
        <x-input
          ref="one_pwd" 
          placeholder="请输入密码"
          v-model="one_pwd"
          required
          type="password"
          :show-clear="false">
          <img slot="label" style="padding-right:10px;display:block;" src="../../assets/imgs/mima.png" width="24" height="24">
        </x-input>
        <x-input
          ref="two_pwd" 
          placeholder="请确认密码"
          v-model="two_pwd"
          required
          type="password"
          :equal-with="one_pwd"
          :show-clear="false">
          <img slot="label" style="padding-right:10px;display:block;" src="../../assets/imgs/mima.png" width="24" height="24">
        </x-input>
        <x-input 
          placeholder="邀请码 (选填)"
          v-model="invite_code"
          :show-clear="false">
          <img slot="label" style="padding-right:10px;display:block;" src="../../assets/imgs/yaoqingma.png" width="24" height="24">
        </x-input>
        <check-icon :value.sync="is_check" style="padding-left:12px">
          <span style="font-size:14px;color:#9a9a9a">已阅读并同意</span> 
          <span style="font-size:14px;color:#0094ff" >《用户协议》</span> 
        </check-icon>
      </group>  
    </div>
    <x-button type="primary" @click.native="next_step">下一步</x-button>
  </div>
</template>

<script>
import { XButton, Group, XInput, CheckIcon, AlertModule  } from 'vux'
import { MessageBox } from "mint-ui";
export default {

  components: { XButton, Group, XInput, CheckIcon  },

  data() {
    return {
      phone: '',
      valid_code: '',
      one_pwd: '',
      two_pwd: '',
      invite_code: '',
      is_check:false,
      verify_phone: false,
      verify_code: false,
      verify_one_pwd: false,
      verify_two_pwd: false,
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
      this.verify_phone = this.$refs.phone.valid;
      this.verify_valie_code = this.$refs.valid_code.valid;
      this.verify_one_pwd = this.$refs.one_pwd.valid;
      this.verify_two_pwd = this.$refs.two_pwd.valid;
      if(this.is_check && this.verify_phone && this.verify_valie_code && this.verify_one_pwd && this.verify_two_pwd) {
        this.$router.push('/ids/create-realname');
      } else {
        MessageBox('提示', '请填写完整和选择');
      }
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
