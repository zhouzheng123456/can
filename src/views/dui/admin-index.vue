<template>
  <div>
    <!-- <div class="backimg" :style="{backgroundImage: 'url(' + img + ')' }">
      <mt-header :title="message">
        <span slot="left"></span>
        <img src="../../assets/imgs/lingdang.png" v-show="comingNotice" v-bind:class="[comingNotice ? shake : noshake]" slot="right" @click="goNotice" style="" >
      </mt-header>
      <div class="noticeS" v-show="comingNotice"></div>
    </div> -->
    <router-view></router-view>
    <mt-tabbar v-model="message" id="tabbar">
      <mt-tab-item id="首页">
        <i class="iconfont icon-shouye1 icon_size"></i>
        <p class="text_size">首页</p>
      </mt-tab-item>
      <mt-tab-item id="服务">
        <i class="iconfont icon-yingyong icon_size"></i>
        <p class="text_size">服务</p>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <i class="iconfont icon-wo icon_size"></i>
        <p class="text_size">我的</p>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { Badge } from 'vux'
// import img from "@/assets/imgs/banyuan.png";
export default {
  components: {Badge},

  data() {
    return {
      flag: false,
      message: "首页",
      comingNotice: false,
      shake: 'shake',
      noshake: 'noshake'
    };
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    gosetting() {
      this.$router.push("/ids/setting");
    },
    goNotice() {
      this.$router.push("/msg/notice-list");
    }
  },

  created() {
    if (this.$route.path == "/dui/me") {
      this.message = "我的";
    } else if (this.$route.path == "/dui/work") {
      this.message = "服务";
    } else {
      this.message = "首页";
    }
  },

  watch: {
    message: function(val, oldVal) {
      // 这里就可以通过 val 的值变更来确定去向
      switch (val) {
        case "首页":
          this.$router.push("/dui/home");
          break;
        case "服务":
          this.$router.push("/dui/work");
          break;
        case "我的":
          this.$router.push("/dui/me");
          break;
      }
    },
    '$route.path':function (newVal, oldVal) {
          if (newVal == "/dui/me") {
            this.message = "我的";
          } else if (newVal == "/dui/work") {
            this.message = "服务";
          } else {
            this.message = "首页";
          }
        },
  }
};
</script>

<style lang='css' scoped>
.backimg {
  width: 100%;
  height: 350px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
  position: relative;
}
.icon_size {
  font-size: 55px;
}
.text_size {
  font-size: 15px;
  margin-top: 10px;
}
.noticeS{
  background: red;
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: absolute;
  right: 3%;
  top: 6%;
}

.shake{
  width:40px;
  height:35px;
  -webkit-animation: shake 4s ease infinite;
  animation: shake 4s ease infinite;
}
.noshake{
  width:40px;
  height:35px;
}

@keyframes shake {
  0% {
    -webkit-transform: rotate(-15deg);
    -ms-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }
 
  2% {
    -webkit-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    transform: rotate(15deg);
  }
 
  4% {
    -webkit-transform: rotate(-18deg);
    -ms-transform: rotate(-18deg);
    transform: rotate(-18deg);
  }
 
  6% {
    -webkit-transform: rotate(18deg);
    -ms-transform: rotate(18deg);
    transform: rotate(18deg);
  }
 
  8% {
    -webkit-transform: rotate(-22deg);
    -ms-transform: rotate(-22deg);
    transform: rotate(-22deg);
  }
 
  10% {
    -webkit-transform: rotate(22deg);
    -ms-transform: rotate(22deg);
    transform: rotate(22deg);
  }
 
  12% {
    -webkit-transform: rotate(-18deg);
    -ms-transform: rotate(-18deg);
    transform: rotate(-18deg);
  }
 
  14% {
    -webkit-transform: rotate(18deg);
    -ms-transform: rotate(18deg);
    transform: rotate(18deg);
  }
 
  16% {
    -webkit-transform: rotate(-12deg);
    -ms-transform: rotate(-12deg);
    transform: rotate(-12deg);
  }
 
  18% {
    -webkit-transform: rotate(12deg);
    -ms-transform: rotate(12deg);
    transform: rotate(12deg);
  }
 
  20%, 100% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
</style>
