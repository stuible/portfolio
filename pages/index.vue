<template>
  <section>
    <section id="about-me">
      <nuxt-img
        v-if="home.body.image"
        :src="home.body.image"
        image-style="small"
        alt="Never forget alt tags!"
        class="profile"
      />
      <div class="title">{{ home.body.title }}</div>
      <div class="subtitle">{{ home.body.subtitle }}</div>
      <div class="bio">{{ home.body.bio }}</div>
    </section>
    <section class="posts">
      <ul>
        <li v-for="post in orderedPosts" v-bind:key="post.meta.index">
          <nuxt-link :to="post.permalink">{{ post.title }}</nuxt-link>
        </li>
      </ul>
    </section>
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
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 2em;
  }

  li {
    position: relative;
    width: 100%;

    &::before {
      content: "";
      display: block;
      padding-top: 100%;
    }

    a {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      text-align: center;
      background-color: lightgray;
    }
  }
}

#about-me{
  img{
    width: 150px;
  }
}
</style>
