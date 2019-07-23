<template>
  <div>
    <mt-header title="人脸采集">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
   <div ref="content_box" :style ="{backgroundImage: 'url(' + face_bmg + ')' }" class="bmg_css">
      <div class="video_box">
       <video id="video" height="150" width="150" poster="../../assets/imgs/renlian.png"></video>
      </div>
      <div class="snap">
        <canvas id="canvas" height="150" width="150"></canvas>
      </div>
   </div>
   <flexbox>
      <flexbox-item>
        <x-button type="primary" @click.native="start_in">点击采集</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="primary" @click.native="end_in">完成采集</x-button>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { XButton, Flexbox, FlexboxItem } from 'vux'
import { MessageBox } from "mint-ui";
import face_bmg from '@/assets/imgs/face_in.jpg'
export default {

  components: { XButton, Flexbox, FlexboxItem },

  data() {
    return {
      face_bmg:face_bmg,
      video: null,
      img: '',
      match_img: ''
    }
  },

  computed: {},

  beforeMount () {},

  mounted () {
    this.$refs.content_box.style.height = document.documentElement.clientHeight - 97 + 'px';
    this.initVideo();
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    // 初始打开视频
    initVideo() {
        var _this = this;
        var URL = window.URL || window.webkitURL;   // 获取到window.URL对象
        navigator.getUserMedia = navigator.getUserMedia
          || navigator.webkitGetUserMedia
          || navigator.mozGetUserMedia;

        navigator.getUserMedia({
          video: true
        }, function (stream) {
          _this.video = document.getElementById("video")
          _this.width = _this.video.width
          _this.height = _this.video.height
          _this.video.srcObject = stream;
          _this.video.play();   // 播放
          //点击截图
          /*document.getElementById("snap").addEventListener('click', function() {
            ctx.drawImage(video, 0, 0, width, height);
            var url = canvas.toDataURL('image/png');
            document.getElementById('download').href = url;
          });*/
        }, function (error) {
          alert(error.name)
          console.log(error.name || error);
        });
      },
     // 获取屏幕图像
     screenShot() {
       this.video = document.getElementById("video")
       var w = this.video.width,
           h = this.video.height,
           scale = w / h; 
           w = 240 || w;  //480  你想压缩到多大
           h = w / scale;
        // this.width = this.video.width
        // this.height = this.video.height

        var canvas = document.getElementById("canvas");
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(this.video, 0, 0, w, h);
        var base64 = canvas.toDataURL('image/*', 1 || 0.8 );
        this.img = base64;
      }, 
     // 开始采集
     start_in() {
       this.screenShot();
     },
     // 完成采集
     end_in() {
       if(this.img == ''){
         MessageBox('提示', '请先点击采集');
       } else {
          this.img = this.img.split('base64,')[1];
          var data = `{
            "image": "${this.img}",
            "image_type":"BASE64",
            "face_type": "LIVE",
            "face_field":"age,gender"
            }`
          this.$API.IDS_API.detect(data).then(res => {
            if(res.data.error_code == 0) {
              localStorage.setItem('face_img',this.img);
                this.$router.push('/')
            } else {
              MessageBox('提示', '未检测到人脸');
            }
            console.log('返回', res);
          }).catch(err => {
            MessageBox('提示', '未检测到人脸');
            console.log(err);
          }) 
      }

       // appid 16507677  //app key aoAq4fGyXyTYG9g20jGmn0IG // scr key uldN9Z6dEEI17djA2Tqzh2PuWiPNund6
       // https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=aoAq4fGyXyTYG9g20jGmn0IG&client_secret=uldN9Z6dEEI17djA2Tqzh2PuWiPNund6&
       /** {
        * "refresh_token":"25.6bfb13aab5aaef26e7be3e11e2be02cb.315360000.1875770905.282335-16507677",
        * "expires_in":2592000,
        * "session_key":"9mzdDoZVUGsUDgW2u\/r4eXP44vzpOvNuYFU0QhQf8gp+QxvIiGsPDTvOVbXj92WIxNjgRdIVzxzehmuoiBJmVZb9NY97Bg==",
        * "access_token":"24.545f2835fef5a85fc7f8c27d4c877ed5.2592000.1563002905.282335-16507677",
        * "scope":"public brain_all_scope vis-faceverify_faceverify_h5-face-liveness vis-faceverify_FACE_V3 wise_adapt lebo_resource_base lightservice_public hetu_basic lightcms_map_poi kaidian_kaidian ApsMisTest_Test\u6743\u9650 vis-classify_flower lpq_\u5f00\u653e cop_helloScope ApsMis_fangdi_permission smartapp_snsapi_base iop_autocar oauth_tp_app smartapp_smart_game_openapi oauth_sessionkey smartapp_swanid_verify smartapp_opensource_openapi smartapp_opensource_recapi",
        * "session_secret":"5d03d1518f315d51f1a3d6e02fb90f25"
        * }*/
     },
     // 人脸对比
     match() {
      //  [
      //     {
      //         "image": "sfasq35sadvsvqwr5q...",
      //         "image_type": "BASE64",
      //         "face_type": "LIVE",
      //         "quality_control": "LOW",
      //         "liveness_control": "HIGH"
      //     },
      //     {
      //         "image": "sfasq35sadvsvqwr5q...",
      //         "image_type": "BASE64",
      //         "face_type": "IDCARD",
      //         "quality_control": "LOW",
      //         "liveness_control": "HIGH"
      //     }
      // ]
     }
  },

  watch: {}

}

</script>
<style lang='' scoped>
.bmg_css {
  background-size: cover;
  position: relative;
}
.video_box {
  position: absolute;
  top: 5%;
  left: 30%;
}
.snap {
  position: absolute;
  bottom: 5%;
  left: 17%
}
</style>
