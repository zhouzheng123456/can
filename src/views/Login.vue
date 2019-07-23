<template>
  <div class="backColor" ref="mydiv">
      <div class="top">
        <img src="../assets/imgs/login.png" alt="">
        <img src="../assets/imgs/logo.png" alt="">
      </div>
      <div class="middle">
          <div class="myinput">
              <i class="iconfont icon-wo icon_size" style="color:#999999"></i>
              <input type="text" placeholder="用户名" ref="username">
          </div>
          <div class="myinput">
              <i class="iconfont icon-mima icon_size" style="color:#999999"></i>
              <input type="password" id="password" ref="password" placeholder="密码" >
              <img src="../assets/imgs/eyeclose.png" v-if="show" alt="" @click="check">
              <img src="../assets/imgs/eyeopen.png" v-else alt="" @click="check">
          </div>
      </div>
    <p class="forget" @click="set_pwd">忘记密码</p>
    <div style="text-align:center">
      <button class="mybtn" @click="login">账号登录</button>
    </div>
    <p style="overflow:hidden;padding:20px 38px">
      <span style="float:left;color:#999999" @click="open_face">人脸登录</span>
      <span @click="create_role" style="float:right;color:#999999">创建账号</span>
    </p>
    <!-- <p class="creat" style="text-align:center" @click="create_role">创建账号</p> -->
    <div v-transfer-dom>
      <popup v-model="is_face" position="top" max-height="70%">
          <div class="video_box" style="text-align:center;padding:10px;position:relative">
            <video id="video" height="320" width="250" poster="../assets/imgs/renlian.png"></video>
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
import $ from 'jquery';
import { MessageBox } from "mint-ui";
import { TransferDom, Popup, Group, Cell, XButton, Flexbox, FlexboxItem } from 'vux'
if(window.plus){
  //点手机虚拟返回键
  document.addEventListener("plusready", function() {
    // 注册返回按键事件
    plus.key.addEventListener('backbutton', function() {
        // 事件处理
        if (confirm('确认退出？')) {
            plus.runtime.quit();
          }
    }, false);
  });
}
export default {
  directives: {
    TransferDom
  },
  components: { TransferDom, Popup, Group, Cell, XButton, Flexbox, FlexboxItem },
  data(){
      return {
        show: true,
        is_face: false,
        video: null,
        face_img: ''
      }
  },
  created(){

  },
  mounted(){
      this.$refs.mydiv.style.height = window.innerHeight + 'px';
  },
  methods:{
      check(){
          this.show = !this.show;
          if (this.show) {
              $("#password").prop('type','password');
          }else{
              $("#password").prop('type','text');
          }
      },
      login(){
          let userValue = this.$refs.username.value;
          userValue = userValue.trim();
          let pwdValue = this.$refs.password.value;
          pwdValue = pwdValue.trim();
          if(userValue.length === 0){
              MessageBox('提示', '请输入正确的手机号码');
              return false;
          };
          let pass =  (/^1[3|4|5|7|8][0-9]{9}$/).test(userValue);
          if (!pass) {
              MessageBox('提示', '请输入正确的手机号码格式');
              return false;
          };
          if(pwdValue.length === 0){
              MessageBox('提示', '请输入密码');
              return false;
          };
         this.$router.push('/dui');
    },
    // 创建账号
    create_role() {
      this.$router.push('/ids/create-role');
    },
    // 找回密码
    set_pwd() {
      this.$router.push('/ids/set-password');
    },
    // 人脸登录
    open_face() {
      this.is_face = true;
      this.initVideo();
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
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(this.video, 0, 0, w, h);
        // var url = canvas.toDataURL('image/png');
        var base64 = canvas.toDataURL('image/*', 1 || 0.8 );
        this.face_img = base64
      }, 
    // 验证, 人脸对比
    start_in() {
      if(localStorage.getItem('face_img')){
        this.screenShot();
        this.face_img = this.face_img.split('base64,')[1];
        var match_img = localStorage.getItem('face_img');
        var params = `[{
              "image": "${match_img}",
              "image_type": "BASE64",
              "face_type": "LIVE",
              "quality_control": "LOW",
              "liveness_control": "LOW"
            },{
                "image": "${this.face_img}",
                "image_type": "BASE64",
                "face_type": "IDCARD",
                "quality_control": "LOW",
                "liveness_control": "LOW"
            }]`;
        this.$API.IDS_API.match(params).then(res => {
          if(res.data.error_code == 0) {
            this.is_face = false;
            this.$router.push('/dui')
          } else {
            MessageBox('提示', '登录失败,图像不清晰,请重新识别');
          }
          console.log('返回',res);
        }).catch(err => {
          MessageBox('提示', '图片不清晰,请重新进行人脸识别');
          console.log('错误',err);
        })
      } else {
          MessageBox('提示', '查询无记录,请先去进行人脸采集');
      }
    }
  }
}
</script>
<style scoped>
.backColor{
    background: white;
}
.top{
    position: relative;
}
.top img:nth-child(1){
    width: 100%;
    height: 500px;
}
.top img:nth-child(2){
    width: 200px;
    position: absolute;
    left: 36%;
    top: 23%;
}
.middle{
    margin: 40px 0 0 0;
}
input::-webkit-input-placeholder { /* WebKit browsers */
  color: #999999;
}
.myinput{
    position: relative;
    text-align: center
}
.myinput input{
    outline: none;
    box-sizing: border-box;
    background: #F4F4F4;
    color: #999999;
    width: 85%;
    border-radius: 50px;
    padding: 30px 30px 30px 90px;
}
.myinput input:nth-child(2){
    margin: 40px 0 0 0;
}
.myinput i {
    position: absolute;
    left: 10%;
    top: 40%;
}
.myinput img{
    width: 50px;
    position: absolute;
    right: 11%;
    top: 45%;
}
.forget{
    text-align: right;
    padding: 5% 10% 5% 0;
    color: #2A8DFE;
}
.mybtn{
    background: linear-gradient(to right, #1EDD80 , #25C56D);
    width: 80%;
    padding: 30px 0 30px 0;
    border-radius:50px; 
    border-color: #1EDD80;
    outline: none;
    color: white;
    font-size: 30px;
    letter-spacing: 10px;
}
.creat{
    color: #999999;
    margin: 40px 0 0 0;
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
