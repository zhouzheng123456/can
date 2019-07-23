<template>
  <div>
    <div id="container" ref="content_box"></div> 
  </div>
</template>

<script>

export default {

  components: {},

  computed: {},

  beforeMount () {},

  mounted () {
    this.$refs.content_box.style.height = document.documentElement.clientHeight + 'px';
    this.$refs.content_box.style.width = document.documentElement.clientWidth + 'px';
    var map = new BMap.Map("container");    
    var point = new BMap.Point(116.404, 39.915);    
    map.centerAndZoom(point, 15);    
    window.setTimeout(function(){  
        map.panTo(new BMap.Point(116.409, 39.918));    
      }, 2000);
    // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
    // //添加地图类型控件
    // map.addControl(new BMap.MapTypeControl({
    //   mapTypes:[
    //           BMAP_NORMAL_MAP,
    //           BMAP_HYBRID_MAP
    //       ]}));	  
    // map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  },

  methods: {},

  watch: {}

}

</script>
<style lang='' scoped>

</style>
