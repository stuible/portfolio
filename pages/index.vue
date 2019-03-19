<template>
  <section>
    <div>
      <div class="links">
        <ul>
          <li v-for="post in orderedPosts" v-bind:key="post.meta.index">
            <!-- {{post}} -->
            <nuxt-link :to="post.permalink">{{ post.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo
  },
  async asyncData({ app }) {
    return {
      posts: await app.$content('posts').getAll()
    }
  },
  computed: {
    orderedPosts(){
      return this.posts.sort((a, b) => (a.order > b.order) ? 1 : -1)
    }
  }
}
</script>

<style>

.links {
  padding-top: 15px;
}
</style>
