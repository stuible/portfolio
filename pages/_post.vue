<template>
  <div>
    <h1>{{ post.title }}</h1>
    <!-- <img :src="post.image + '?style=small'" alt=""> -->
    <nuxt-img v-if="post.image" :src="post.image" image-style="small" alt="Never forget alt tags!" />
    <div v-html="post.body" />
    <!-- {{post}} -->
  </div>
</template>

<script>
export default {
  async asyncData({ app, route }) {
    const post = await app.$content('posts').get(route.path)
    return {
      post: post,
    }
  }
}
</script>

<style>
img {
  width: 500px;
}
</style>
