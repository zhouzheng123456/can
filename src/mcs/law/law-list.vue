<template>
  <div class="law_list_vue">
    <!-- <mt-header title="人脸采集">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header> -->
    <div style="height: 50px;position: relative;background-color:#1EDD80;overflow:hidden;text-align:center">
      <div @click="goBack" style="position: absolute;color:white;line-height:50px;padding:0 10px">
        <i class="mintui mintui-back"></i>
      </div>
      <div style="text-align:center;margin-top:10px;display:inline-block;overflow:hidden">
        <span class="tab_btn_l" :class="is_sel ? 'nvtive' : 'not_nvtive'" @click="btn_kxfl">可享福利</span>
        <span class="tab_btn_r" :class="!is_sel ? 'nvtive' : 'not_nvtive'" @click="btn_all">政策汇总</span>
      </div>
    </div>
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      placeholder="请输入查询关键字"
      position="absolute"
      auto-scroll-to-top
      top="46px"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search">
    </search>
    <div style="background-color: white;">
      <ul style="padding: 0 10px">
        <li class="ul_li_box">
          <div style="width:80%;display:inline-block">
            <p style="line-height: 24px;">重度护理补贴</p>
            <p style="line-height: 24px;font-size: 14px;color: #9a9a9a;"><span>残联</span> <span>2019-03-05</span> </p>
          </div>
          <div class="ul_li_box_btn">
            <p class="ul_li_btn">申请</p>
          </div>
        </li>
        <li class="ul_li_box">
          <div style="width:80%;display:inline-block">
            <p style="line-height: 24px;">康复服务补贴</p>
            <p style="line-height: 24px;font-size: 14px;color: #9a9a9a;"><span>残联</span> <span>2019-03-05</span> </p>
          </div>
          <div class="ul_li_box_btn">
            <p class="ul_li_btn">申请</p>
          </div>
        </li>
        <li class="ul_li_box" @click="go_law_view">
          <div style="width:80%;display:inline-block">
            <p style="line-height: 24px;">残疾子女教育补贴</p>
            <p style="line-height: 24px;font-size: 14px;color: #9a9a9a;"><span>残联</span> <span>2019-03-05</span> </p>
          </div>
          <div class="ul_li_box_btn">
            <p class="ul_li_btn">申请</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Search, Group } from 'vux'

export default {

  components: { Search, Group },

  data() {
    return {
      is_sel: true,
      results: [],
      value: ''
    }
  },

  computed: {},

  beforeMount () {},

  mounted () {},

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    btn_kxfl() {
      this.is_sel = !this.is_sel;
    },
    btn_all() {
      this.is_sel = !this.is_sel;
    },
    // 查询详情
    go_law_view() {
      this.$router.push('/law/law-view')
    },
    resultClick(val) {
      console.log('resultClick',val);
    },
    getResult(val) {
      console.log('getResult',val);
    },
    onCancel(val) {
      console.log('onCancel',val);
    },
    onSubmit(val) {
      console.log('onCancel',val);
    }
  },

  watch: {}

}

</script>
<style lang='' scoped>
.tab_btn_l {
  border: none;
  padding: 12px 15px;
  float: left;
  border-radius: 10px 0 0 10px;
  border: 1px solid white;
}
.tab_btn_r {
  border: none;
  padding: 12px 15px;
  border-radius: 0 10px 10px 0;
  border: 1px solid white;
  float: right;
}
.nvtive {
  background: white;
  color: black;
}
.not_nvtive {
  color: white;
}
.ul_li_box {
  width:100%;
  overflow: hidden;
  border-bottom: 1px solid #9a9a9a;
}
.ul_li_box_btn {
  width:18%;
  display:inline-block;
  text-align: right;
  padding-top: 20px;
  overflow: hidden;
}
.ul_li_btn {
  border-radius:40px;
  color:white;
  background-color:#1EDD80;
  color: white;
  background-color: rgb(30, 221, 128);
  font-size: 28px;
  display: inline-block;
  width: 72px;
  height: 72px;
  line-height: 72px;
  text-align: center;
}
</style>
