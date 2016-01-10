<template>
  <div class="container" >
  <validator name="validation1">
  <app-header v-bind:msg="msg"></app-header>
      <div class="form-group" >
          <input type="text" class="form-control input-lg" v-model="email" placeholder="email" aria-label="email" v-validate:email="{ required: true, minlength: 2, maxlength: 6 }">
          
            <p class="help-block" v-show="$validation1.email.required && $validation1.email.dirty">email required</p>
            <p class="help-block" v-show="$validation1.email.minlength && $validation1.email.dirty">too short</p>
            <p class="help-block" v-show="$validation1.email.maxlength && $validation1.email.dirty">too long</p>
        </div>
        <div class="form-group has-error">
          <input type="text" class="form-control input-lg" v-model="account" placeholder="account" aria-label="account" v-validate:account="{ required: true, minlength: 3, maxlength: 8 }">
            <p class="help-block" v-show="$validation1.account.required && $validation1.account.dirty">account required</p>
            <p class="help-block" v-show="$validation1.account.minlength && $validation1.account.dirty">too short</p>
            <p class="help-block" v-show="$validation1.account.maxlength && $validation1.account.dirty">too long</p>
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
  name: 'PageB',
  data () {
    return {
      msg: 'This is page B.',
      author: 'greyby',
      email: '',
      account: '',
      isA: true,
      isB: false
    }
  },
  components: {
    AppHeader,
    AppPane,
    AppFooter
  }
}
</script>