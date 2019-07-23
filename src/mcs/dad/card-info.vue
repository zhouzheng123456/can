<template>
  <div>
    <mt-header title="证件信息">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
      <span @click="edit" slot="right" v-if="is_btn">
        <mt-button slot="right">编辑</mt-button>
      </span>
    </mt-header>
    <div ref="content_box" style="padding: 0 5px">
      <divider>身份证正反照</divider>
      <flexbox>
        <flexbox-item>
          <div class="flex-demo">
            <img src="../../assets/imgs/card_z.jpg" alt="">
            <div class="zhezhao" v-if="is_edit">
              <img src="../../assets/imgs/photo.png" width="40" alt="" style="margin-top:25px">
              <p style="color:white;font-size:14px">拍摄 / 相册</p>
            </div>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <img src="../../assets/imgs/card_f.jpg" alt="">
            <div class="zhezhao" v-if="is_edit">
              <img src="../../assets/imgs/photo.png" width="40" alt="" style="margin-top:25px">
              <p style="color:white;font-size:14px">拍摄 / 相册</p>
            </div>
          </div>
        </flexbox-item>
      </flexbox>
      <divider>残疾证正反照</divider>
      <flexbox>
        <flexbox-item>
          <div class="flex-demo">
            <img src="../../assets/imgs/dcard_z.jpg" alt="">
            <div class="zhezhao" v-if="is_edit">
              <img src="../../assets/imgs/photo.png" width="40" alt="" style="margin-top:25px">
              <p style="color:white;font-size:14px">拍摄 / 相册</p>
            </div>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <img src="../../assets/imgs/dcard_f.jpg" alt="">
            <div class="zhezhao" v-if="is_edit">
              <img src="../../assets/imgs/photo.png" width="40" alt="" style="margin-top:25px">
              <p style="color:white;font-size:14px">拍摄 / 相册</p>
            </div>
          </div>
        </flexbox-item>
      </flexbox>
      <divider>户口簿照片</divider>
      <flexbox>
        <flexbox-item>
          <div class="flex-demo">
            <img src="../../assets/imgs/hk_z.jpg" alt="">
            <div class="zhezhao" v-if="is_edit">
              <img src="../../assets/imgs/photo.png" width="40" alt="" style="margin-top:25px">
              <p style="color:white;font-size:14px">拍摄 / 相册</p>
            </div>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <img src="../../assets/imgs/hk_f.jpg" alt="">
            <div class="zhezhao" v-if="is_edit">
              <img src="../../assets/imgs/photo.png" width="40" alt="" style="margin-top:25px">
              <p style="color:white;font-size:14px">拍摄 / 相册</p>
            </div>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <x-button type="primary" @click.native="submit" v-if="is_edit">提交</x-button>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Divider, XButton } from 'vux'
export default {

  components: { Flexbox, FlexboxItem, Divider, XButton },

  data () {
    return {
      is_edit: false,
      is_btn: true,
    }
  },

  computed: {},

  beforeMount () {},

  mounted () {
    this.$refs.content_box.style.height = document.documentElement.clientHeight - 116 + 'px';
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    // 编辑
    edit() {
      this.is_edit = true;
      this.is_btn = false;
    },
    // 提交
    submit() {
      this.$router.go(-1);
    }
  },

  watch: {}

}

</script>
<style lang='' scoped>
.flex-demo {
  text-align: center;
  position: relative;
  /* color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box; */
}
.flex-demo > img {
  background-size: cover;
  width: 100%;
}
.zhezhao {
  position: absolute;
  width: 100%;
  height: 216px;
  top: 0;
  background: rgba(70, 66, 66, 0.43);
}
</style>
