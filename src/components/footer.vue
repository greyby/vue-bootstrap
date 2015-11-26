<template>
  <div class="footer">
  © 2015 {{author}}
  </div>
</template>

<script>
export default {
	name: 'Footer',

  props: {
  	author: String
  }
}
</script>
