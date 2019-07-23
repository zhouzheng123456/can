<template>
  <div>
    <mt-header title="设置">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
    <div ref="content_box">
      <group label-width="5em" label-align="left" >
        <cell title="注册手机号" value="13572420570"></cell>
        <cell title="修改密码" @click.native="go_set_password" is-link></cell>
        <cell title="关于我们" @click.native="go_set_we" is-link></cell>
      </group>
    </div>
    <x-button @click.native="exit_sys">退出系统</x-button>
  </div>
</template>

<script>
import { Group, Cell, XButton } from 'vux'
export default {

  components: { Group, Cell, XButton },

  computed: {},

  beforeMount () {},

  mounted () {
    this.$refs.content_box.style.height = document.documentElement.clientHeight - 116 + 'px';
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    go_set_we () {
      this.$router.push('/ids/we');
    },
    go_set_password () {
      this.$router.push('/ids/set-password');
    },
    exit_sys() {

    }
  },

  watch: {}

}

</script>
<style lang='' scoped>

</style>
