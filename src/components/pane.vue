<template>
  <div class="pane">
  	<p>This is the {{side}} pane!</p>
  	<p>{{name}}</p>
  </div>
</template>

<script>
export default {
  name: 'Pane',

  props: {
    side: String,
    name: String
  }
}
</script>

<style lang="stylus">
.pane
  display inline-block
  width 300px
  height 300px
  box-sizing border-box
  padding 15px 30px
  border 2px solid #f3f3f3
  margin 10px
</style>