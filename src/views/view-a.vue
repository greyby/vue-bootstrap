<style>
</style>

<template>
  <div class="view" v-transition>
  	<app-header msg="{{msg}}"></app-header>
  	<app-pane side="left" name="{{leftName}}"></app-pane>
  	<app-pane side="right" name="{{rightName}}"></app-pane>
  	<app-footer author="{{author}}"></app-footer>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      msg: 'This is page A.',
      leftName: 'Bruce Lee',
      rightName: 'Chuck Norris',
      author: 'greyby'
    }
  },
  components: {
    'app-header': require('../components/header.vue'),
    'app-pane': require('../components/pane.vue'),
    'app-footer': require('../components/footer.vue')
  }
}
</script>
