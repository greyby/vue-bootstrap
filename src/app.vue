<style lang="stylus">
html, body
  font-family Helvetica, Arial, sans-serif

.view
  transition all .4s ease
  position absolute
  &.v-enter
    opacity 0
    -webkit-transform translate3d(100px, 0, 0)
    transform translate3d(100px, 0, 0)
  &.v-leave
    opacity 0
    -webkit-transform translate3d(-100px, 0, 0)
    transform translate3d(-100px, 0, 0)
</style>

<template>
<div class="nav">
    <a href="#page-a">Go to page A</a>
    <a href="#page-b">Go to page B</a>
</div>
<component is="{{view}}"></component>

<!-- <component is="{{view}}"
      class="view"
      params="{{params}}"
      keep-alive
      v-transition
      transition-mode="out-in">
    </component> -->
</template>

<script>
module.exports = {
  el: '#app',
  data: {
    view: 'page-a'
  },
  components: {
    'page-a': require('./views/view-a.vue'),
    'page-b': require('./views/view-b.vue')
  }
}
</script>