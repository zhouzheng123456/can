<template>
  <div class="jy_process_vue">
    <div style="height: 130px;position: relative;background-color:#25c56d;overflow:hidden">
      <div @click="goBack" style="position: absolute;color:white;line-height:50px;padding:0 10px">
        <i class="mintui mintui-back"></i>
      </div>
      <p style="line-height:50px;color:white;text-align:center">进度查询</p>
      <div style="overflow:hidden">
        <img src="../../assets/imgs/logo.png" alt="" width="70px" style="vertical-align: top">
        <div style="display:inline-block">
          <p style="font-weight: bold;margin: 10px 0;color:white">王某某.联系人</p>
          <p style="display: inline-block;font-size:14px;color: white;">采集残疾人日常生活需求</p>
        </div>
      </div>
    </div>
    <flow orientation="vertical" style="height:250px;">
      <flow-state state="1" is-done>
        <div slot="title" style="line-height:18px">
         <p style="font-weight:bold">申请</p>
         <p style="color:#9a9a9a">王默默提交了申请</p>
         <p style="color:#9a9a9a">2019-01-01 10:09</p>
        </div>
      </flow-state>
      <flow-line is-done></flow-line>

      <flow-state state="2" is-done>
        <div slot="title" style="line-height:18px">
         <p style="font-weight:bold">受理中</p>
         <p style="color:#9a9a9a">社区残联受理中</p>
         <p style="color:#9a9a9a">2019-01-01 10:09</p>
        </div>
      </flow-state>
      <flow-line tip="进行中..."></flow-line>

      <flow-state state="3">
        <div slot="title" style="line-height:18px">
         <p style="font-weight:bold">审核</p>
         <p style="height:17px"></p>
         <p style="height:17px"></p>
        </div>
      </flow-state>
      <flow-line></flow-line>

      <flow-state state="4">
        <div slot="title" style="line-height:18px">
         <p style="font-weight:bold">已完成</p>
         <p style="height:17px"></p>
         <p style="height:17px"></p>
        </div>
      </flow-state>
    </flow>
    <!-- <x-button type="primary" @click.native="go_link">测试跳转</x-button> -->
  </div>
</template>

<script>
import { Flow, FlowState, FlowLine, XButton } from 'vux'
export default {

  components: { Flow, FlowState, FlowLine, XButton },

  computed: {},

  beforeMount () {},

  mounted () {
    
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    go_link() {
      this.$router.push('/dmd/apply-record')
    }
  },

  watch: {}

}

</script>
<style lang='' scoped>

	.timeline-demo p {
		color: #888;
		font-size: 0.8rem;
	}
	.timeline-demo h4 {
		color: #666;
		font-weight: normal;
	}
	.timeline-demo .recent {
		color: rgb(4, 190, 2)
	}
</style>
