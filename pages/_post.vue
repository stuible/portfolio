<template>
  <main id="post">
    <section>
      <h1>{{ post.title }}</h1>
      <div class="content">
        <nuxt-img v-if="post.image" :src="post.image" image-style="small" :alt="post.title"/>
        <p>{{post.description}}</p>
      </div>
    </section>
    <section v-for="content in post.content" v-bind:key="content.title">
      <h2>{{content.title}}</h2>
      <div class="content">
        <nuxt-img
          v-if="content.image"
          :src="content.image"
          image-style="small"
          :alt="content.title"
        />
        <p v-html="content.text"/>
      </div>
    </section>
    <!-- {{post}} -->
  </main>
</template>

<script>
export default {
  async asyncData({ app, route }) {
    const post = await app.$content("posts").get(route.path);
    return {
      post: post
    };
  }
};
</script>

<style lang="scss">
#post {
  section {
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-template-rows: auto auto;
    grid-template-areas: "title title" ". content";
    row-gap: 1em;
    margin-bottom: 2em;

    img {
      margin-bottom: 1em;
    }

    h1,
    h2 {
      grid-area: title;
    }

    .content,
    p {
      grid-area: content;
    }
  }
}
</style>
