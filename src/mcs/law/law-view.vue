<template>
  <div>
    <mt-header title="可享福利">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
    <div ref="content_box"></div>   
    <flexbox>
      <flexbox-item>
        <x-button  @click.native="ls_list">历史纪录</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="primary" @click.native="cur_apply">立即申请</x-button>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { XButton, Flexbox, FlexboxItem } from 'vux'
export default {

  components: { XButton, Flexbox, FlexboxItem },

  data() {
    return {
      childView: null,
      fatherView: null
    }
  },

  computed: {},

  beforeMount () {},

  mounted () {
    this.$refs.content_box.style.height = document.documentElement.clientHeight - 100 + 'px';
    if (window.plus) {
      this.plus_webview();
    }
  },

  methods: {
    goBack() {
      if (window.plus) {
        this.childView.close();
      }
      this.$router.go(-1);
    },
    // 外部链接
    plus_webview() {
      this.childView = plus.webview.create('https://www.baidu.com/','law',{top:'50px',bottom:'50px',scalable: true});
      this.fatherView = plus.webview.currentWebview();
      this.fatherView.append(this.childView);
    },
    // 历史记录
    ls_list() {

    },
    // 去个人档案
    cur_apply() {
      if (window.plus) {
        this.childView.close();
      }
      this.$router.push('/dad/dad-center')
    }
  },

  watch: {}

}

</script>
<style lang='' scoped>

</style>
