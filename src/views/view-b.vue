<style>
</style>

<template>
  <div class="view" v-transition>
    <h1>This is page B.</h1>
    <p>I'm... a bit less complicated.</p>
    <app-footer author="greyby.org"></app-footer>
  </div>
</template>

<script>
module.exports = {
  components: {
    'app-footer': require('../components/footer.vue')
  }
}
</script>
