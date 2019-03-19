<template>
  <section>
    <div class="bio">{{ home.body.bio }}</div>
    <div class="posts">
      <ul>
        <li v-for="post in orderedPosts" v-bind:key="post.meta.index">
          <!-- {{post}} -->
          <nuxt-link :to="post.permalink">{{ post.title }}</nuxt-link>
        </li>
      </ul>
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
      posts: await app.$content("posts").getAll(),
      home: await app.$content("pages").get("home")
    };
  },
  computed: {
    orderedPosts() {
      return this.posts.sort((a, b) => (a.order > b.order ? 1 : -1));
    }
  }
};
</script>

<style lang="scss">
.posts {
  padding-top: 15px;

  ul {
    display: flex;
    list-style: none;
  }

  li {
    a {
      display: inline-block;
      height: 100px;
      background-color: lightgrey;
      margin: 5px;
    }
  }
}
</style>
