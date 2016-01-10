<template>
<div>
<div class="nav">
    <a v-link="{ path: '/pagea' }">Go to page A</a>
    <a v-link="{ path: '/pageb' }">Go to page B</a>
</div>
<router-view
keep-alive></router-view>
</div>
</template>

<style lang="stylus">
</style>