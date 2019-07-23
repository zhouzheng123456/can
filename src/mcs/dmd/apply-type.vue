<template>
  <div>
    <mt-header title="类别选择">
      <span @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
    <group>
      <cell title="个人基本信息" is-link></cell>
      <cell title="经济及住房" is-link></cell>
      <cell title="教育" is-link></cell>
      <cell title="就业扶贫" is-link></cell>
      <cell title="社会保障" is-link></cell>
      <cell title="基本医疗与康复" is-link></cell>
      <cell title="无障碍" is-link></cell>
      <cell title="文化体育" is-link></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {

  components: { Group, Cell },

  computed: {},

  beforeMount () {},

  mounted () {},

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
