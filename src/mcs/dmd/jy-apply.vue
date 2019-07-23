<template>
  <div>
    <mt-header title="就业申请">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
    <div ref="content_box">
      <group label-width="6.5em" label-margin-right="2em" label-align="left">
        <x-input title="姓名" placeholder="请输入姓名" v-model="name" text-align="right"></x-input>
        <popup-picker title="性别" placeholder="请选择性别" :data="sex_list" v-model="sex_val" value-text-align="right"></popup-picker>
        <datetime title="出生年月" placeholder="请选择日期" format="YYYY-MM" v-model="birthday" value-text-align="right"></datetime>
        <x-input title="身份证号" placeholder="请输入身份证号" v-model="card" text-align="right"></x-input>
        <x-input title="残疾证号" placeholder="请输入残疾证号" v-model="dcard" text-align="right"></x-input>
        <popup-picker title="残疾类别" placeholder="请选择类别" :data="type_list" v-model="type_val" value-text-align="right"></popup-picker>
        <popup-picker title="残疾等级" placeholder="请选择等级" :data="level_list" v-model="level_val" value-text-align="right"></popup-picker>
        <popup-picker title="家庭经济状况" placeholder="请选择经济情况" :data="family_list" v-model="family_val" value-text-align="right"></popup-picker>
      </group>
    </div>
    <x-button type="primary" @click.native="submit">提交</x-button>
  </div>
</template>

<script>
import { Group, Cell, XInput, Selector, PopupPicker, Datetime, XButton } from 'vux'
export default {

  components: { Group, Cell, XInput, Selector, PopupPicker, Datetime, XButton },

  data() {
    return {
      name: '',
      birthday: '',
      gender: '',
      sex_list: [['男','女']],
      sex_val: [],
      card: '',
      dcard: '',
      type_list:[['视力','肢体','精神','智力','言语']],
      type_val:[],
      level_list:[['一级','二级','三级','四级']],
      level_val:[],
      family_list:[['困难家庭','一般困难','特别困难']],
      family_val:[]
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
    submit() {
      this.$router.push('/dmd/jy-process')
    }
  },

  watch: {}

}

</script>
<style lang='' scoped>

</style>
