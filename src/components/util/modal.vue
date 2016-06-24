<template lang="pug">
div.modal(v-bind:class="{'fade': !show}")
  div.modal-dialog(role="document")
    div.modal-content
      div.modal-header
        button.close(type="button", data-dismiss="modal", aria-label="Close")
          span(aria-hidden="true") &times;
        h4.modal-title Modal title
      div.modal-body
        p One fine body&hellip;
      div.modal-footer
        button.btn.btn-secondary(type="button", data-dismiss="modal") Close
        button.btn.btn-primary(type="button") Save changes
</template>
<script>
export default {
  props: ['show']
}
</script>
<style lang="stylus">
.modal
  display block
</style>
