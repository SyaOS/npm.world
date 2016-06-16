<template lang="pug">
div#app
  h1(v-text="msg")
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello npm.world!'
    }
  }
}
</script>

<style lang="stylus">
body
  font-family Helvetica, sans-serif
</style>
