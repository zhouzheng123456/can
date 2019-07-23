<template>
  <div>
    <mt-header title="家庭信息">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
      <span @click="edit" slot="right" v-if="is_btn">
        <mt-button slot="right">编辑</mt-button>
      </span>
    </mt-header>
    <div ref="content_box">
      <group label-width="6.5em">
        <x-input 
          ref="name"
          title="监护人姓名"
          v-model="name"
          :disabled="is_edit"
          :show-clear="false"
          text-align="right"
          required></x-input>
        <x-input
          ref="phone"
          title="监护人手机"
          v-model="phone"
          is-type="china-mobile"
          keyboard="number"
          :disabled="is_edit"
          :show-clear="false"
          text-align="right"
          required></x-input>
        <x-input
          ref="call"
          title="家庭号码"
          v-model="call"
          :is-type="valid_family"
          :disabled="is_edit"
          :show-clear="false"
          text-align="right"></x-input>
      </group>
    </div>
    <x-button type="primary" v-if="!is_edit" @click.native="submit">提交</x-button>
  </div>
</template>

<script>
import { XInput, Group, XButton } from 'vux'
import { MessageBox } from "mint-ui";
export default {

  components: { XInput, Group, XButton },

  computed: {},

  data() {
    return {
      name: '卫庄',
      phone: '13572420570',
      call: '0278-12345689',
      is_edit: true,
      is_btn: true,
      valid_family: function(value) { 
        return {
          valid: /0\d{2,3}-\d{7,8}/.test(value),
          msg: '请输入正确座机号'
        }
      },
      verify_name: false,
      verify_phone: false,
      verify_call: false
    }
  },

  beforeMount () {},

  mounted () {
    this.$refs.content_box.style.height = document.documentElement.clientHeight - 116 + 'px';
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    // 编辑
    edit() {
      this.is_edit = false,
      this.is_btn = false
    },
    // 提交
    submit() {
      this.verify_phone = this.$refs.phone.valid;
      this.verify_name = this.$refs.name.valid;
      this.verify_call = this.$refs.name.valid;
      if(this.verify_phone && this.verify_name && this.verify_call) {
        this.$router.go(-1);
      } else {
        MessageBox('提示', '请完整填写信息');
      }
    }
  },

  watch: {}

}

</script>
<style lang='' scoped>

</style>
