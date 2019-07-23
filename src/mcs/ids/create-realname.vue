<template>
  <div class="create_realname_vue">
    <mt-header title="实名认证">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
    <div id="content_box" class="create-realname">
      <div class="label_text">姓名</div>
      <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <x-input placeholder="请输入姓名" v-model="username" placeholder-align="center" required :show-clear="false"></x-input>
      </group>
      <div class="label_text">身份证</div>
      <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <x-input placeholder="请输入身份证号" v-model="disablecard" placeholder-align="center" :is-type="valid_card" required :show-clear="false"></x-input>
      </group>
      <p style="text-align: right;color: #9a9a9a;padding: 10px 0 0 0;" @click="open_card">证件识别</p>
      <x-button type="primary" @click.native="next_step" style="margin-top:30px">确认</x-button>
    </div>
    <img ref="img_box" src="../../assets/imgs/shimin.jpg" alt="" style="background-size:cover;width:100%">
    <div v-transfer-dom>
      <popup v-model="is_face" position="top" max-height="70%">
          <div style="text-align:center;padding:10px;position:relative">
            <video id="video" height="320" width="250" poster="../../assets/imgs/renlian.png"></video>
            <div class="line_face" style="width:240px;height:2px;"></div>
          </div>
          <div style="padding:10px">
            <flexbox>
              <flexbox-item>
                <x-button type="primary" @click.native="is_face = false">关闭</x-button>
              </flexbox-item>
              <flexbox-item>
                <x-button type="primary" @click.native="start_in">开始</x-button>
              </flexbox-item>
            </flexbox>
          </div>
      </popup>
    </div>
  </div>
</template>

<script>
import { TransferDom, Popup, Group, Cell, XButton, Flexbox, FlexboxItem, XInput } from 'vux'
import { MessageBox } from "mint-ui";
export default {
  directives: {
    TransferDom
  },
  components: { TransferDom, Popup, Group, Cell, XButton, Flexbox, FlexboxItem, XInput },

  data() {
    return {
      username: '',
      disablecard: '',
      is_face: false,
      video: null,
      card_img: '',
      valid_card: function (value) {
        return {
          valid: /(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value),
          msg: '请输入正确身份证'
        }
      }
    }
  },

  computed: {},

  beforeMount () {},

  mounted () {
    this.$refs.img_box.style.height = document.documentElement.clientHeight - document.getElementById("content_box") - 51 + 'px';
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    // 下一步  https://aip.baidubce.com/rest/2.0/ocr/v1/idcard  LS3N9PHzvnV5kgKXLI6KAyGi
    // https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=LS3N9PHzvnV5kgKXLI6KAyGi&client_secret=V5WYW4MRUf55mvWdTHkUY6G3eM9XhUuy&
    /**
    {
      "refresh_token":"25.bda6a3d5d98cda695e6567bf0d08b1f9.315360000.1875843380.282335-16516705",
      "expires_in":2592000,
      "session_key":"9mzdCrymn0naZCvoGtXoozhd0UIt3PhOq4ioe5QTvxx4OSvrS2vyn7Ni06D06r8jY8czpggzuL6YZhzMV+oEMog44dtKtg==",
      "access_token":"24.18b64d2d44b4bf95d25743ed20fd8a5a.2592000.1563075380.282335-16516705",
      "scope":"public vis-ocr_ocr brain_ocr_scope brain_ocr_general brain_ocr_general_basic vis-ocr_business_license brain_ocr_webimage brain_all_scope brain_ocr_idcard brain_ocr_driving_license brain_ocr_vehicle_license vis-ocr_plate_number brain_solution brain_ocr_plate_number brain_ocr_accurate brain_ocr_accurate_basic brain_ocr_receipt brain_ocr_business_license brain_solution_iocr brain_ocr_handwriting brain_ocr_passport brain_ocr_vat_invoice brain_numbers brain_ocr_train_ticket brain_ocr_taxi_receipt vis-ocr_household_register vis-ocr_\u673a\u52a8\u8f66\u68c0\u9a8c\u5408\u683c\u8bc1\u8bc6\u522b vis-ocr_\u8f66\u8f86vin\u7801\u8bc6\u522b vis-ocr_\u5b9a\u989d\u53d1\u7968\u8bc6\u522b brain_ocr_vin brain_ocr_quota_invoice brain_ocr_household_register brain_ocr_vehicle_certificate wise_adapt lebo_resource_base lightservice_public hetu_basic lightcms_map_poi kaidian_kaidian ApsMisTest_Test\u6743\u9650 vis-classify_flower lpq_\u5f00\u653e cop_helloScope ApsMis_fangdi_permission smartapp_snsapi_base iop_autocar oauth_tp_app smartapp_smart_game_openapi oauth_sessionkey smartapp_swanid_verify smartapp_opensource_openapi smartapp_opensource_recapi","session_secret":"248b3cd2e5ac8c06bbefe4239ee79eca"}
    */
    /**
    https://aip.baidubce.com/rest/2.0/ocr/v1/idcard?access_token=24.18b64d2d44b4bf95d25743ed20fd8a5a.2592000.1563075380.282335-16516705
    */
    /**
     * MediaStreamTrack.getSources(function(sourceInfos) {
    for (var i = 0; i != sourceInfos.length; ++i) {
        var sourceInfo = sourceInfos[i]; //这里会遍历audio,video，所以要加以区分 
        if (sourceInfo.kind === 'video') { exArray.push(sourceInfo.id); }
    }
    if (!navigator.getUserMedia) {alert('不支持 getUserMedia 方法')}
 
    mediaOpts.video = {
        optional: [{
            sourceId: exArray[1]
        }]
    }
    navigator.getUserMedia(mediaOpts, successFunc, errorFunc);
});
     * 
    */

    // 初始打开视频
    initVideo() {
        var _this = this;
        var URL = window.URL || window.webkitURL;   // 获取到window.URL对象
        var constraints = { audio: true, video: { facingMode: { exact: "environment" } } }
        navigator.mediaDevices.getUserMedia(constraints).then(function(stream){
          console.log('stream', stream)
          _this.video = document.getElementById("video")
          _this.video.srcObject = stream;
          _this.video.play();   // 播放
        }).catch(function(err){
          console.log(err.name + ":: " + err.message);
        });
        // navigator.getUserMedia = navigator.getUserMedia
        //   || navigator.webkitGetUserMedia
        //   || navigator.mozGetUserMedia;
        // navigator.mediaDevices.getUserMedia({
        //  video: { facingMode: { exact: "environment" } }
        // }, function (stream) {
        //   _this.video = document.getElementById("video")
        //   _this.video.srcObject = stream;
        //   _this.video.play();   // 播放
        // }, function (error) {
        //   alert(error.name)
        //   console.log(error.name || error);
        // });
      },
    // 获取屏幕图像
     screenShot() {
       this.video = document.getElementById("video")
       var w = this.video.width,
           h = this.video.height,
           scale = w / h; 
           w = 240 || w;  //480  你想压缩到多大
           h = w / scale;
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(this.video, 0, 0, w, h);
        var url = canvas.toDataURL('image/png');
        this.card_img = url;
      },
    // 打开证件识别
    open_card() {
      this.is_face = true;
      this.initVideo();
    },
    // 身份证扫描
    start_in() {
      this.screenShot();
      this.card_img = this.card_img.split('base64,')[1]
      var par = "id_card_side=front&image=" +  encodeURIComponent(this.card_img);
      this.$API.IDS_API.scan_card(par).then(res => {
        if(res.data.image_status == 'normal') {
          this.username = res.data.words_result['姓名'].words;
          this.disablecard = res.data.words_result['公民身份号码'].words;
          this.is_face = false;
        } else {
          MessageBox('提示', '拍摄不清晰, 请重新识别');
        }
      }).catch(err => {
        console.log(err);
        MessageBox('提示', '拍摄不清晰, 请重新识别');
      })
    },
    next_step() {
      this.$router.push('/ids/create-face');
    }
  },

  watch: {}

}

</script>
<style lang='' scoped>
.create-realname {
  padding: 100px 50px 50px 50px ;
  background-color: white;
}
.label_text {
  text-align: center;
  padding: 30px 20px;
}
.line_face {
  position: absolute;
  background: green;
  left: 17%;
  bottom: 30px;
  animation: scanning 5s linear infinite;
}
@keyframes scanning {
  100% {
      transform: translateY(-630px);
  }
}
</style>
