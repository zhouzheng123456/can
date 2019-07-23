<template>
  <div>
    <div :style ="{backgroundImage: 'url(' + top_bmg + ')' }" class="bmg_css" ref="home_bmg" style="overflow:hidden">
      <div style="height: 50px;position: relative;overflow:hidden;text-align:center">
        <div @click="goBack" style="position: absolute;color:white;line-height:50px;padding:0 10px">
          <i class="mintui mintui-back"></i>
        </div>
        <p style="line-height:50px;color:white">提需求</p>
      </div>
      <div style="overflow:hidden">
        <img src="../../assets/imgs/logo.png" alt="" width="70px" style="vertical-align: top">
        <div style="display:inline-block">
          <p style="font-weight: bold;margin: 10px 0;color:white">王某某.联系人</p>
          <p style="display: inline-block;font-size:14px;color: white;">采集残疾人日常生活需求</p>
        </div>
        <div style="float: right;color: white;font-size: 14px;background-color: orange;padding: 5px;border-radius: 20px;margin: 30px 10px 0 0;" @click="go_lc">流程简介</div>
      </div>
    </div>
    <scroll :lists="lists"></scroll>
    <div>
      <img src="../../assets/imgs/need_cer.jpg" width="100%" height="120" style="background-size:cover" alt="">
    </div>
    <div style="padding: 10px 10px 0 10px;">
      <div style="border-radius: 5px;border: 1px solid #bfbfbf;">
        <div style="padding: 5px 10px;overflow: hidden;background-color: #ec9b04;color: white;font-size: 14px;">
          <span>基本医疗与保障</span>
          <span style="float: right;">2019.03.01</span>
        </div>
        <div style="padding: 5px 10px;">
          <p style="line-height: 24px;">问题描述</p>
          <p style="font-size: 14px;color: #9a9a9a;line-height: 18px;padding: 5px 0;border-bottom: 1px solid #bfbfbf;">
            很多很多的描述,无以名状的描述,无以言表的描述,无言以对的描述,无关痛痒的描述
          </p>
          <p style="padding: 5px 0;font-size: 14px;">
            <span style="color: #9a9a9a;">状态 :</span>
            <span style="color: #ec9b04;">评估中</span>
          </p>
        </div>
      </div>
      <div class="mar_box"></div>
      <div style="border-radius: 5px;border: 1px solid #bfbfbf;" @click="go_ssz">
        <div style="padding: 5px 10px;overflow: hidden;background-color: #30d2d2;color: white;font-size: 14px;">
          <span>基本医疗与保障</span>
          <span style="float: right;">2019.03.01</span>
        </div>
        <div style="padding: 5px 10px;">
          <p style="line-height: 24px;">问题描述</p>
          <p style="font-size: 14px;color: #9a9a9a;line-height: 18px;padding: 5px 0;border-bottom: 1px solid #bfbfbf;">
            很多很多的描述,无以名状的描述,无以言表的描述,无言以对的描述,无关痛痒的描述
          </p>
          <p style="padding: 5px 0;font-size: 14px;">
            <span style="color: #9a9a9a;">状态 :</span>
            <span style="color: #30d2d2;">实施中</span>
          </p>
        </div>
      </div>
      <div class="mar_box"></div>
      <div style="border-radius: 5px;border: 1px solid #bfbfbf;">
        <div style="padding: 5px 10px;overflow: hidden;background-color: #ff6e61;color: white;font-size: 14px;">
          <span>基本医疗与保障</span>
          <span style="float: right;">2019.03.01</span>
        </div>
        <div style="padding: 5px 10px;">
          <p style="line-height: 24px;">问题描述</p>
          <p style="font-size: 14px;color: #9a9a9a;line-height: 18px;padding: 5px 0;border-bottom: 1px solid #bfbfbf;">
            很多很多的描述,无以名状的描述,无以言表的描述,无言以对的描述,无关痛痒的描述
          </p>
          <p style="padding: 5px 0 0 0;font-size: 14px;overflow:hidden">
            <span style="color: #9a9a9a;">状态 :</span>
            <span style="color: #ff6e61;line-height:22px">已拒绝</span> 
            <span style="float: right;padding: 3px 8px;border: 1px solid orange;border-radius: 50px;color: orange;">立即评价</span> 
          </p>
        </div>
      </div>
      <div class="mar_box"></div>
      <div style="border-radius: 5px;border: 1px solid #bfbfbf;" @click="go_ywj">
        <div style="padding: 5px 10px;overflow: hidden;background-color: #25c56d;color: white;font-size: 14px;">
          <span>基本医疗与保障</span>
          <span style="float: right;">2019.03.01</span>
        </div>
        <div style="padding: 5px 10px;">
          <p style="line-height: 24px;">问题描述</p>
          <p style="font-size: 14px;color: #9a9a9a;line-height: 18px;padding: 5px 0;border-bottom: 1px solid #bfbfbf;">
            很多很多的描述,无以名状的描述,无以言表的描述,无言以对的描述,无关痛痒的描述
          </p>
          <p style="padding: 5px 0 0 0;font-size: 14px;overflow:hidden">
            <span style="color: #9a9a9a;">状态 :</span>
            <span style="color: #25c56d;line-height:22px">已完结</span>
            <span style="float: right;padding: 3px 8px;border: 1px solid orange;border-radius: 50px;color: orange;">立即评价</span> 
          </p>
        </div>
      </div>
      <div style="position: fixed;bottom: 30px;right: 15px;" @click="add_apply"><x-icon type="ios-plus" size="50"></x-icon></div>
    </div>
  </div>
</template>

<script>
import top_bmg from '@/assets/imgs/need_top.jpg'
import scroll from '../../components/scroll-text'
export default {

  components: { scroll },

  data() {
    return {
      top_bmg: top_bmg,
      lists:['根据中国残疾人联合会要求,调研残疾人需求, 请在10月前完成']   //轮播中的文字
    }
  },

  computed: {},

  beforeMount () {},

  mounted () {
    
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    go_ywj() {
      this.$router.push('/dmd/ser-evaluation');
    },
    go_ssz() {
      this.$router.push('/dmd/process-view');
    },
    go_lc() {
      this.$router.push('/dmd/process-desc');
    },
    add_apply() {
      this.$router.push('/dmd/apply-type');
    }
  },

  watch: {}

}

</script>
<style lang='' scoped>
.bmg_css {
  width: 100%;
  height: 280px;
  background-size: cover;
}
.mar_box {
  width: 100%;
  height: 20px;
}
.vux-x-icon {
  fill: #06bf65;
}
</style>
