<template>
  <h1>{{msg}}</h1>
</template>

<script>
export default {
	name: 'Header',
	
  props: {
  	msg: String
  }
}
</script>

<style lang="stylus">
.app-header
  	color #bada55
</style>