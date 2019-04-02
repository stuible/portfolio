<template>
  <main id="post">
    <section>
      <h1>{{ post.title }}</h1>
      <div class="content">
        <nuxt-img v-if="post.image" :src="post.image" image-style="medium" :alt="post.title"/>
        <p>{{post.description}}</p>
      </div>
    </section>
    <section>
      <h2>Tools</h2>
      <div class="content">
        <ul class="tools">
          <li v-for="techName in post.technologies" v-bind:key="techName">
            <figure>
              <img
                :src="require(`~/static/images${getTechByName(techName).image}?data`)"
                :alt="techName"
              >
              <figcaption>{{techName}}</figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
    <section v-for="content in post.content" v-bind:key="content.title">
      <h2>{{content.title}}</h2>
      <div class="content">
        <nuxt-img
          v-if="content.image"
          :src="content.image"
          image-style="medium"
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
    return {
      post: await app.$content("posts").get(route.path),
      tech: await app.$content("tech").getAll()
    };
  },
  methods: {
    getTechByName(name) {
      return this.tech.find(obj => {
        return obj.title === name;
      });
    }
  },
  mounted(){
    // require(`~/static/images${getTechByName('CSS3').image}?inline`)
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
      width: 100%;
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

  .tools {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    li {
      width: 75px;
      margin: 0 1em;
      text-align: center;
      // display: inline;
    }
    img {
      width: 70%;
    }
  }
}
</style>
