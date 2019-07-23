<template>
  <div>
    <mt-header title="账号关联">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
    <div ref="content_box">
      <group label-width="5em" label-margin-right="2em" label-align="left">
        <x-input title="残疾人姓名" placeholder="请输入残疾人姓名" v-model="name" :show-clear="false" text-align="right"></x-input>
        <x-input title="残疾证号码" placeholder="请输入残疾证号码" v-model="card" :show-clear="false" text-align="right"></x-input>
        <x-input title="手机号码" placeholder="请输入手机号码" v-model="phone" :show-clear="false" text-align="right"></x-input>
        <x-input placeholder="输入验证码" v-model="valid_code" :show-clear="false">
          <x-button slot="right" type="primary" mini @click.native="get_code">获取验证码</x-button>
        </x-input>
        <cell inline-desc='注: 关联账号后, 该账号将等同采集人使用,请在关联账号时确认为残疾人本人意愿'></cell>
      </group>  
    </div>
    <x-button type="primary" @click.native="submit">提交</x-button>
  </div>
</template>

<script>
import { Group, XInput, XButton, Cell } from 'vux'
export default {

  components: { Group, XInput, XButton, Cell },

  data() {
    return {
      name: '王默默',
      card: '420115199908040507',
      phone: '13572420570',
      valid_code: ''
    }
  },

  computed: {},

  beforeMount () {},

  mounted () {
    this.$refs.content_box.style.height = document.documentElement.clientHeight - 116 + 'px';
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    get_code() {

    },
    submit() {
    
    }
  },

  watch: {}

}

</script>
<style lang='' scoped>

</style>
