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