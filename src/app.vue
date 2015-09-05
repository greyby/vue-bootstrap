<template>
<div class="nav">
    <a v-link="/page-a">Go to page A</a>
    <a v-link="/page-b">Go to page B</a>
</div>
<router-view></router-view>


<!-- <component is="{{view}}"
      class="view"
      params="{{params}}"
      keep-alive
      v-transition
      transition-mode="out-in">
    </component> -->
    </div>
</template>

<script>
module.exports = {
  el: '#app'
}
</script>

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