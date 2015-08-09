var Vue = require('vue')
var app = new Vue(require('./app.vue'))

app.view = 'page-a'

function route () {
  app.view = window.location.hash.slice(1) || 'page-a'
}

window.addEventListener('hashchange', route)
window.addEventListener('load', route)