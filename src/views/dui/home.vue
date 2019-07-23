<template>
  <div class="home_vue">
    <div :style ="{backgroundImage: 'url(' + home_bmg + ')' }" class="bmg_css" ref="home_bmg" style="overflow:hidden">
      <div style="margin-top:50px">
        <img src="../../assets/imgs/logo.png" alt="" width="70px" style="vertical-align: top">
        <div style="display:inline-block">
          <p style="font-weight: bold;margin: 10px 0">王某某.联系人</p>
          <p style="display: inline-block;padding: 2px 15px;background-color: #70e4a3;border-radius: 20px;color: white;">已关联</p>
        </div>
      </div>
    </div>
    <div id="content_box">
      <flexbox style="padding: 10px 0 0 0;">
        <flexbox-item>
          <div class="flex-demo" @click="go_jy_apply">
            <i class="iconfont icon-gerenxinxi font_size" style="background:#70e4a3"></i>
            <p style="margin:15px;font-size:14px">随手领取</p>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <i class="iconfont icon-gerenxinxi font_size" style="background:#70e4a3"></i>
            <p style="margin:15px;font-size:14px">随手拍</p>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo" @click="go_need">
            <i class="iconfont icon-gerenxinxi font_size" style="background:#70e4a3"></i>
            <p style="margin:15px;font-size:14px">提需求</p>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <i class="iconfont icon-gerenxinxi font_size" style="background:#70e4a3"></i>
            <p style="margin:15px;font-size:14px">更多应用</p>
          </div>
        </flexbox-item>
      </flexbox>
      <img src="../../assets/imgs/lunbo.jpg" alt="" width="100%" height="100px" style="background-size:cover">
      <group>
        <cell title="服务号" value="更多 >>" ></cell>
        <cell >
          <div slot="child" style="width:100%">
            <flexbox style="padding: 10px 0;">
              <flexbox-item :span="3">
                <div class="flex-demo1">
                  <i class="iconfont icon-gerenxinxi font_size" style="background:#70e4a3"></i>
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="flex-demo1">
                  <p> <span>标题一</span> <span style="font-size:14px;color:#9a9a9a;float:right">20:32</span> </p>
                  <p style="font-size:14px;color:#9a9a9a;">描述描述描述描述描述描述</p>
                </div>
              </flexbox-item>
            </flexbox>
          </div>
        </cell>
        <cell >
          <div slot="child" style="width:100%">
            <flexbox style="padding: 10px 0;">
              <flexbox-item :span="3">
                <div class="flex-demo1">
                  <i class="iconfont icon-gerenxinxi font_size" style="background:#70e4a3"></i>
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="flex-demo1">
                  <p> <span>标题二</span> <span style="font-size:14px;color:#9a9a9a;float:right">20:32</span> </p>
                  <p style="font-size:14px;color:#9a9a9a;">描述描述描述描述描述描述</p>
                </div>
              </flexbox-item>
            </flexbox>
          </div>
        </cell>
        <cell >
          <div slot="child" style="width:100%">
            <flexbox style="padding: 10px 0;">
              <flexbox-item :span="3">
                <div class="flex-demo1">
                  <i class="iconfont icon-gerenxinxi font_size" style="background:#70e4a3"></i>
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="flex-demo1" @click="go_law">
                  <p> <span>标题三</span> <span style="font-size:14px;color:#9a9a9a;float:right">20:32</span> </p>
                  <p style="font-size:14px;color:#9a9a9a;">政策政策政策</p>
                </div>
              </flexbox-item>
            </flexbox>
          </div>
        </cell>
      </group>
    </div>
  </div>
</template>

<script>
import home_bmg from '@/assets/imgs/toubu.png'
import { Flexbox, FlexboxItem, Group, Cell } from 'vux'
export default {

  components: { Flexbox, FlexboxItem, Group, Cell },

  data() {
    return {
      home_bmg: home_bmg
    }
  },

  computed: {},

  beforeMount () {},

  mounted () {
  },

  methods: {
    go_law() {
      this.$router.push('/law/law-list')
    },
    go_need() {
      this.$router.push('/dmd/dmd-need')
    },
    go_jy_apply() {
      this.$router.push('/dmd/jy-apply')
    },
  },

  watch: {}

}

</script>
<style lang='' scoped>
.bmg_css {
  width: 100%;
  height: 320px;
  background-size: cover;
}
.flex-demo {
  text-align: center;
  background-clip: padding-box;
}
.flex-demo1 {
  text-align: left;
  background-clip: padding-box;
}
.font_size {
  font-size: 48px;
  border-radius: 10px;
  padding: 15px;
  color: white;
}
</style>
