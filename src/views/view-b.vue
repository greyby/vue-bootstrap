<template>
  <div class="view">
    <h1>This is page B.</h1>
    <p>I'm... a bit less complicated.</p>
    <app-footer author="greyby.org"></app-footer>
  </div>
</template>

<script>
import AppFooter from '../components/footer.vue'

export default {
	name: 'PageB',
  components: {
    AppFooter
  }
}
</script>