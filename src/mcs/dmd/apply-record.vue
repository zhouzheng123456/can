<template>
  <div class="apply_record_vue">
    <mt-header title="历史记录">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
    <group>
      <cell>
        <div slot="child" style="width:100%">
          <div style="overflow:hidden;display:inline-block;width:60%">
            <p>就业申请</p>
            <p style="font-size:14px;color:#9a9a9a">申请时间: 2019-01-01 10:09</p>
          </div>
          <div style="overflow:hidden;display:inline-block;width:38%">
            <x-icon style="float: right;" type="ios-arrow-forward" size="30"></x-icon>
            <span style="float: right;line-height: 33px;color:orange">审核中</span>
          </div>
        </div>
      </cell>
      <cell>
        <div slot="child" style="width:100%">
          <div style="overflow:hidden;display:inline-block;width:60%">
            <p>就业申请</p>
            <p style="font-size:14px;color:#9a9a9a">申请时间: 2019-01-01 10:09</p>
          </div>
          <div style="overflow:hidden;display:inline-block;width:38%">
            <x-icon style="float: right;" type="ios-arrow-forward" size="30"></x-icon>
            <span style="float: right;line-height: 33px;color:red">不同意</span>
          </div>
        </div>
      </cell>
      <cell>
        <div slot="child" style="width:100%">
          <div style="overflow:hidden;display:inline-block;width:60%">
            <p>就业申请</p>
            <p style="font-size:14px;color:#9a9a9a">申请时间: 2019-01-01 10:09</p>
          </div>
          <div style="overflow:hidden;display:inline-block;width:38%">
            <x-icon style="float: right;" type="ios-arrow-forward" size="30"></x-icon>
            <span style="float: right;line-height: 33px;color:green">同意</span>
          </div>
        </div>
      </cell>
      
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {

  components: { Group, Cell },

  computed: {},

  beforeMount () {},

  mounted () {},

  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },

  watch: {}

}

</script>
<style lang='' scoped>
.vux-x-icon {
  fill: #bfbfbf;
}
</style>
