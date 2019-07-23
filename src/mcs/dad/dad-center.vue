<template>
  <div>
    <mt-header title="个人档案">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
    <div style="padding: 10px 10px 0px 10px">
      <div style="width:100%;background-color:#1EDD80;box-sizing: border-box;padding: 10px;border-radius: 5px;">
        <div style="display:inline-block;width:35%">
          <img src="../../assets/imgs/touxiang.jpg" alt="" width="90%" height="150px" style="background-size:cover">
        </div>
        <div style="display:inline-block;width:63%;line-height: 38px;color: white;font-size:14px;overflow: hidden;">
          <p>姓名: 卫庄</p>
          <p>残疾类别: 视力一级</p>
          <p>身份证: 330102199805063025</p>
          <p>残疾证: 33010219980506302512</p>
        </div>
        <div style="text-align:center"> <span style="color:white;font-size:14px">有效期限: 2019.03.01 - 2029.03.01</span>
         
        </div>
      </div>
      <group>
        <cell title="家庭信息" @click.native="go_family" is-link></cell>
        <cell title="银行信息" @click.native="go_bank" is-link></cell>
        <cell title="证照信息" @click.native="go_card" is-link></cell>
        <cell title="政策信息" @click.native="go_law" is-link></cell>
      </group>
    </div>
  </div>
</template>

<script>
import { Cell, Group } from 'vux'

export default {

  components: { Cell, Group },

  computed: {},

  beforeMount () {},

  mounted () {},

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    go_family() {
      this.$router.push('/dad/famil-info');
    },
    go_bank() {
      
      },
    go_card() {
      this.$router.push('/dad/card-info');
    },
    go_law() {

    }
  },

  watch: {}

}

</script>
<style lang='' scoped>

</style>
