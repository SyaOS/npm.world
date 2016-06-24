<template lang="pug">
div#app
  site-header
  site-footer
  modal(show)
</template>

<script>
import SiteHeader from './util/site-header.vue'
import SiteFooter from './util/site-footer.vue'
import Modal from './util/modal.vue'
export default {
  components: {
    modal: Modal,
    siteHeader: SiteHeader,
    SiteFooter: SiteFooter
  }
}
</script>
<style lang="stylus" scoped>
</style>
