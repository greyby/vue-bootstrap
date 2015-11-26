<template>
  <div class="view">
  	<app-header v-bind:msg="msg"></app-header>
  	<app-pane side="left" v-bind:name="leftName"></app-pane>
  	<app-pane side="right" v-bind:name="rightName"></app-pane>
  	<app-footer v-bind:author="author"></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header.vue'
import AppPane from '../components/pane.vue'
import AppFooter from '../components/footer.vue'

export default {
  name: 'PageA',
  data () {
    return {
      msg: 'This is page A.',
      leftName: 'Bruce Lee',
      rightName: 'Chuck Norris',
      author: 'greyby'
    }
  },
  components: {
    AppHeader,
    AppPane,
    AppFooter
  }
}
</script>