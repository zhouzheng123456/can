<template>
  <div>
    <mt-header title="角色类型">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
    <div ref="content_box">
      <div class="sel-role-text">请选择角色类型</div>
      <div class="sel-person" @click="dis_person" :class="{'sel-active':is_dis_sel == 0}">
        <p class="person">残疾人</p>
        <p class="des-person">肢体,残疾,智力或感官长期有损伤的人</p>
      </div>
      <div class="sel-person"  @click="con_person" :class="{'sel-active':is_con_sel == 0}">
        <p class="person">联系人</p>
        <p class="des-person">残疾人指定的监护人</p>
        <!-- <span>
          <icon type="success-no-circle"></icon>
        </span> -->
      </div>
    </div>
    <x-button type="primary" @click.native="next_step">下一步</x-button>
  </div>
</template>

<script>
// if(window.plus){
//   //点手机虚拟返回键
//   document.addEventListener("plusready", function() {
//     // 注册返回按键事件
//     plus.key.addEventListener('backbutton', function() {
//         // 事件处理
//         window.history.go(-1);
//     }, false);
//   });
// }
import { XButton, Icon } from 'vux'
export default {

  components: { XButton, Icon },

  data() {
    return {
      is_dis_sel: 0,
      is_con_sel: 1
    }
  },

  computed: {},

  beforeMount () {},

  mounted () {
    this.$refs.content_box.style.height = document.documentElement.clientHeight - 96 + 'px';
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    // 选择残疾人
    dis_person() {
      this.is_dis_sel = 0;
      this.is_con_sel = 1;
    },
    // 选择联系人
    con_person() {
      this.is_dis_sel = 1;
      this.is_con_sel = 0;
    },
    // 下一步
    next_step() {
       this.$router.push('/ids/create-user');
    }
  },

  watch: {}

}

</script>
<style lang='' scoped>
.sel-role-text {
  text-align: center;
  padding: 50px 20px;
  font-size: 36px;
}
.sel-person {
  padding: 30px 20px;
  margin: 0px 20px 20px 20px;
  border: 1px solid #9a9a9a;
  border-radius: 10px;
}
.person {
  font-size: 36px;
  padding: 5px 0;
}
.des-person {
  color: #9a9a9a;
  padding: 5px 0;
}
.sel-active {
  border-color: #22c06b;
  box-shadow: 1px 1px #22c06b;
}
</style>
