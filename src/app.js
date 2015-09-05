require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');


var Vue = require('vue')
var VueRouter = require('vue-router')

// install router
Vue.use(VueRouter)

// debug mode
Vue.config.debug = false

// strict mode
Vue.config.strict = true
// var app = new Vue(require('./app.vue'))
var router = new VueRouter()


router.map({
	'/page-a': {
		component: require('./views/view-a.vue')
	},
	'/page-b': {
		component: require('./views/view-b.vue')
	},

	// not found
	'*': {
		component: require('./views/view-a.vue')
	}
})

var App = Vue.extend(require('./app.vue'))
router.start(App, '#app')