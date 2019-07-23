<template>
  <div>
    <mt-header title="进度查询">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
    <div ref="content_box">
      <flow>
        <flow-state state="1" title="已填报" is-done></flow-state>
        <flow-line is-done></flow-line>
        <flow-state state="2" title="评估中" is-done></flow-state>
        <flow-line is-done></flow-line>
        <flow-state state="3" title="实施中" is-done></flow-state>
        <flow-line tip="进行中" ></flow-line>
        <flow-state state="4" title="已完成"></flow-state>
        <flow-line></flow-line>
        <flow-state state="5" title="待评价"></flow-state>
      </flow>
      <checklist title="1、未就诊或治疗原因?" :options="radio_list" v-model="radioValue" :max="1" @on-change="change"></checklist>
      <checklist title="1、针对自身残疾,是否得到或使用过以下服务?" :options="check_list" v-model="checkValue" @on-change="change"></checklist>
    </div>
    <x-button type="primary" @click.native="submit">重新提交</x-button>
  </div>
</template>

<script>
import { Flow, FlowState, FlowLine, Checklist, XButton } from 'vux'
export default {

  components: { Flow, FlowState, FlowLine, Checklist, XButton },

  data() {
    return {
      step_num: 2,
      radioValue: ['1'],
      radio_list: [{key: '1', value: '是'}, {key: '2', value: '否'}],
      checkValue: ['1','2','3'],
      check_list: [
        {key: '1', value: '手术'},
        {key: '2', value: '药物'},
        {key: '3', value: '功能康复'},
        {key: '4', value: '辅助器械'},
        {key: '5', value: '护理'},
        {key: '6', value: '未得到'}
        ],
    }
  },

  computed: {},

  beforeMount () {},

  mounted () {
    this.$refs.content_box.style.height = document.documentElement.clientHeight - 96 + 'px';
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    change(val) {
      console.log(val);
    },
    submit() {

    }
  },

  watch: {}

}

</script>
<style lang='' scoped>

</style>
