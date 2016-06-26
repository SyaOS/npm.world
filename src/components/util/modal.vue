<template lang="pug">
div.modal(v-bind:class="{'fade': !show}")
  div.modal-dialog(role="document")
    div.modal-content
      slot(name="header")
        div.modal-header
          button.close(v-if="closeButton", type="button", data-dismiss="modal", aria-label="Close", @click="handleCancel")
            span(aria-hidden="true") &times;
          h4.modal-title(v-text="title")
      div.modal-body
        slot
      slot(name="footer")
        div.modal-footer
          button.btn.btn-secondary(type="button", data-dismiss="modal", @click="handleCancel") Cancel
          button.btn.btn-primary(type="button", @click="handleOk") OK
</template>
<script>
export default {
  props: ['show', "title", "close-button"],
  methods: {
    handleOk () {
      this.$emit('ok')
    },
    handleCancel () {
      this.$emit('cancel')
    }
  }
}
</script>
<style lang="stylus">
.modal
  display block
</style>
