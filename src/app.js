require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');

var Vue = require('vue')
var Router = require('director').Router
var app = new Vue(require('./app.vue'))
var router = new Router()



router.on('/:page', function (page) {
  app.view = page
})

router.configure({
  notfound: function () {
    router.setRoute('/page-a')
  }
})

router.init('/page-a')