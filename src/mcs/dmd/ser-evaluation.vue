<template>
  <div class="ser_evaluation_vue">
    <mt-header title="评价">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
    <div ref="content_box" style="padding: 10px 10px 0 10px">
      <div style="box-shadow: 2px 2px #d2d0d0;">
        <div style="background-color:#30d3d2;padding: 5px 10px;color: white;">基本医疗与保障</div>
        <div style="background-color:white">
          <group>
            <cell
            title="1、未就诊或治疗原因"
            is-link
            :border-intent="false"
            :arrow-direction="is_sel ? 'up' : 'down'"
            @click.native="is_sel = !is_sel"></cell>
            <template v-if="is_sel">
              <checklist :options="radio_list" v-model="radioValue" :max="1"></checklist>
            </template>
          </group>
          <div style="padding:10px">
            <p>反馈原因:</p>
            <span style="line-height: 24px;font-size: 14px;color: #9a9a9a;">各种冠冕堂皇的原因反正就是这些那些个,就是不符合,不予发放</span>
          </div>
          <group>
            <cell title="满意度评价:" >
              <rater v-model="rater_val"></rater>
            </cell>
          </group>
          <group>
            <x-textarea :max="200" placeholder="请填写您的评价" ></x-textarea>
          </group>
        </div>
      </div>
    </div>
    <x-button type="primary" @click.native="submit">提交</x-button>
  </div>
</template>

<script>
import { Cell, Checklist, XHr, Rater, Group, XTextarea, XButton } from 'vux'
export default {

  components: { Cell, Checklist, XHr, Rater, Group, XTextarea, XButton },

  data() {
    return {
      is_sel: false,
      radioValue: ['1'],
      radio_list: [{key: '1', value: '是'}, {key: '2', value: '否'}],
      rater_val: '3'
    }
  }, 

  computed: {},

  beforeMount () {},

  mounted () {
    this.$refs.content_box.style.height = document.documentElement.clientHeight - 106 + 'px';
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    submit() {

    }
  },

  watch: {}

}

</script>
<style lang='' scoped>

</style>
