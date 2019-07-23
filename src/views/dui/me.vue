<template>
  <div style="background-color:white">
    <div :style ="{backgroundImage: 'url(' + me_bmg + ')' }" class="bmg_css" ref="home_bmg" style="overflow:hidden">
      <div style="margin-top:50px">
        <img src="../../assets/imgs/logo.png" alt="" width="70px" style="vertical-align: top" @click="go_view">
        <div style="display:inline-block">
          <p style="font-weight: bold;margin: 10px 0;color:white">王某某.联系人</p>
          <p style="display: inline-block;padding: 2px 15px;background-color: #70e4a3;border-radius: 20px;color: white;">已关联</p>
        </div>
      </div>
    </div>
    <group label-width="4.5em" label-margin-right="2em" label-align="left">
      <cell title="意见反馈" @click.native="go_feed_back" is-link></cell>
      <cell title="账号关联" @click.native="go_role_relation" is-link></cell>
      <cell title="设置" @click.native="go_set_user" is-link></cell>
    </group>
  </div>
</template>

<script>
import me_bmg from '../../assets/imgs/login.png'
import { Group, Cell } from 'vux'
export default {

  components: { Group, Cell },

  data() {
    return {
      me_bmg: me_bmg
    }
  },

  computed: {},

  beforeMount () {},

  mounted () {},

  methods: {
    go_view() {
      this.$router.push('/ids/user-info')
    },
    go_set_user() {
      this.$router.push('/ids/set-user')
    },
    go_feed_back() {
      this.$router.push('/ids/feed-back')
    },
    go_role_relation() {
      this.$router.push('/ids/role-relation')
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
