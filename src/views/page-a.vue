<template>
  <div class="container" >
  <validator name="validation1">
  <app-header v-bind:msg="msg"></app-header>
      <div class="form-group" :class="{ 'has-error': true }">
        <input type="text" class="form-control input-lg" v-model="mobile" placeholder="mobile" aria-label="mobile" v-validate:mobile="{ required: true, minlength: 5, maxlength: 12 }">
            <p class="help-block" v-show="$validation1.mobile.required && $validation1.mobile.dirty">mobile required</p>
            <p class="help-block" v-show="$validation1.mobile.minlength && $validation1.mobile.dirty">mobile is too short</p>
            <p class="help-block" v-show="$validation1.mobile.maxlength && $validation1.mobile.dirty">mobile is too long</p>
      </div>
      <div class="form-group">
        <input type="text" class="form-control input-lg" v-model="name" placeholder="name" aria-label="name" v-validate:name="{ required: true, minlength: 2, maxlength: 8 }">
          <p class="help-block" v-show="$validation1.name.required && $validation1.name.dirty">name required</p>
          <p class="help-block" v-show="$validation1.name.minlength && $validation1.name.dirty">name is too short</p>
          <p class="help-block" v-show="$validation1.name.maxlength && $validation1.name.dirty">name is too long</p>
      </div>
        
      <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
    <app-footer v-bind:author="author"></app-footer>
  </validator>
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
      author: 'greyby',
      mobile: '',
      name: ''
    }
  },
  components: {
    AppHeader,
    AppPane,
    AppFooter
  }
}
</script>