<template>
<div class="nav">
    <a v-link="{ path: '/pagea' }">Go to page A</a>
    <a v-link="{ path: '/pageb' }">Go to page B</a>
</div>
<router-view></router-view>
</template>

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