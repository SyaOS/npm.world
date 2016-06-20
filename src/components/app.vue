<template lang="pug">
div#app
  site-header
  site-footer
</template>

<script>
import SiteHeader from './util/site-header.vue'
import SiteFooter from './util/site-footer.vue'
export default {
  components: {
    siteHeader: SiteHeader,
    SiteFooter: SiteFooter
  }
}
</script>
<style lang="stylus" scoped>
</style>
