<template lang="pug">
header.navbar.navbar-light.bg-faded
  a.navbar-brand(href="/") npm.world
  ul.nav.navbar-nav
    li.nav-item.active
      a.nav-link(href="/") Home
        span.sr-only (current)
    li.nav-item
      a.nav-link(href="#") Features
  form.form-inline.pull-xs-right
    input.form-control(type="text", placeholder="Search")
    button.btn.btn-success-outline(type="submit") Search
</nav>

</template>
<script>
export default {
}
</script>
