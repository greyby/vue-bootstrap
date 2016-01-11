require('bootstrap')
require('bootstrap/dist/css/bootstrap.css')
require('./css/app.css')

import Vue from 'vue'
import Router from 'vue-router'
import Validator from 'vue-validator'
import App from './app.vue'
import PageA from './views/page-a.vue'
import PageB from './views/page-b.vue'

// install router
Vue.use(Router)

Vue.use(Validator)

// debug mode
Vue.config.debug = true

// NOTE: we need to set the Vue.config `warnExpressionErrors` property value to `false` value.
//       see also https://github.com/vuejs/vue-validator/issues/111
Vue.config.warnExpressionErrors = false

// NOTE: if you want to define the error message of build-in validator, you can re-define the build-in validator.
//       see the https://github.com/vuejs/vue-validator#global-error-message
Vue.validator('maxlength', {
  message (field) {
    return field + ' is too long'
  },
  check: Vue.validator('maxlength')
})

Vue.validator('minlength', {
  message (field) {
    return field + ' is too short'
  },
  check: Vue.validator('minlength')
})
Vue.validator('required', {
  message (field) {
    return field + ' required'
  },
  check: Vue.validator('required')
})

// strict mode
Vue.config.strict = true
// var app = new Vue(require('./app.vue'))
var router = new Router({
	hashbang: true,
	history: false
})


router.map({
	'/pagea/': {
		component: PageA
	},
	'/pageb/': {
		component: PageB
	}
})

router.redirect({
	'*': '/pagea'
})

router.start(App, '#app')
