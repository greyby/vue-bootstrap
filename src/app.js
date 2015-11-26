require('bootstrap')
require('bootstrap/dist/css/bootstrap.css')

import Vue from 'vue'
import Router from 'vue-router'
import App from './app.vue'
import PageA from './views/view-a.vue'
import PageB from './views/view-b.vue'

// install router
Vue.use(Router)

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