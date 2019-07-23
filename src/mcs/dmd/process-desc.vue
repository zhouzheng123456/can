<template>
  <div>
    <mt-header title="流程简介">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
    <div ref="content_box">
      <img src="../../assets/imgs/liucheng.jpg" alt="" width="100%" style="background-size:cover">
    </div>
  </div>
</template>

<script>
export default {

  components: {  },

  data() {
    return {}
  },

  computed: {},

  beforeMount () {},

  mounted () {
    this.$refs.content_box.style.height = document.documentElement.clientHeight - 51 + 'px';
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },

  watch: {}

}

</script>
<style lang='' scoped>

</style>
