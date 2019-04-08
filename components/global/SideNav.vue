<template>
  <nav id="side-nav" :style="{opacity: opacity, display: display}">
    <ul>
      <li v-for="item in nav" v-bind:key="item.name">
        <nuxt-link
          v-if="item.scroll != undefined"
          :to="item.link + item.hash"
          @click.native="$emit('clicked', item.scroll)"
        >{{item.name}}</nuxt-link>
        <nuxt-link v-else :to="item.link">{{item.name}}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    opacity: Number,
    display: String,
    nav: Array
  }
};
</script>

<style lang="scss">
#side-nav {
  padding: 1.5em 0.3em 0 0;
  opacity: 0;
  transition: opacity 200ms;
  line-height: 1.75em;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 0.01em;
}
</style>
