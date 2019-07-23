<template>
  <div style="background-color:white">
    <div :style ="{backgroundImage: 'url(' + me_bmg + ')' }" class="bmg_css" ref="home_bmg" style="overflow:hidden;position:relative">
      <div @click="goBack" style="position: absolute;color:white;line-height:50px;padding:0 10px">
        <i class="mintui mintui-back"></i>
      </div>
      <p style="line-height:50px;color:white;position: absolute;left: 50%;transform: translateX(-50%);">进度查询</p>
      <div style="margin-top:50px">
        <img src="../../assets/imgs/logo.png" alt="" width="70px" style="vertical-align: top">
        <div style="display:inline-block">
          <p style="font-weight: bold;margin: 10px 0;color:white">王某某.联系人</p>
          <p style="display: inline-block;padding: 2px 15px;background-color: #70e4a3;border-radius: 20px;color: white;">已关联</p>
        </div>
      </div>
    </div>
    <div ref="content_box">
      <group label-width="5em" label-align="left" title="个人信息">
        <x-input title="姓名" placeholder="请输入姓名" v-model="name" text-align="right"></x-input>
        <popup-picker title="性别" placeholder="请选择性别" :data="sex_list" v-model="sex_val" value-text-align="right"></popup-picker>
        <x-input title="手机号" placeholder="请输入手机号" v-model="phone" text-align="right"></x-input>
        <x-input title="地区" placeholder="请输入地区" v-model="address" text-align="right"></x-input>
        <x-input title="身份证号" placeholder="请输入身份证号" v-model="card" text-align="right"></x-input>
      </group>
      <group label-width="5em" label-align="left" title="绑定残疾人信息">
        <x-input title="残疾人姓名" placeholder="请输入残疾人姓名" v-model="d_name" text-align="right"></x-input>
        <x-input title="身份证号码" placeholder="请输入身份证号码" v-model="d_card" text-align="right"></x-input>
        <x-input title="残疾证号码" placeholder="请输入残疾证号码" v-model="d_dcard" text-align="right"></x-input>
        <x-input title="家庭住址" placeholder="请输入家庭住址" v-model="d_address" text-align="right"></x-input>
      </group>
    </div>
    <x-button type="primary" @click.native="submit">提交</x-button>
  </div>
</template>

<script>
import me_bmg from '../../assets/imgs/login.png'
import { Group, XButton, XInput, PopupPicker } from 'vux'
export default {

  components: { Group, XButton, XInput, PopupPicker },

  data() {
    return {
      me_bmg: me_bmg,
      name:'王默默',
      phone: '13572420570',
      address: '湖北省武汉市洪山区长航蓝晶国际',
      card: '420123199908050304',
      sex_list: [['男','女']],
      sex_val: ['女'],
      d_name: '卫庄',
      d_card: '420124199508060204',
      d_dcard: '42012419950806020424',
      d_address: '湖北省武汉市洪山区蓝晶国际'
    }
  },

  computed: {},

  beforeMount () {},

  mounted () {
    this.$refs.content_box.style.height = document.documentElement.clientHeight - 216 + 'px';
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
.bmg_css {
  width: 100%;
  height: 320px;
  background-size: contain;
}
</style>
