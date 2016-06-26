<template lang="pug">
div#app
  site-header
  site-footer
  modal(v-bind:show="showModal", title="npm.world", close-button, @ok="handleOk", @cancel="handleCancel")
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
  },
  data () {
    return {
      showModal: true
    }
  },
  methods: {
    handleOk () {
      this.showModal = false
      alert('OK')
    },
    handleCancel () {
      this.showModal = false
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
