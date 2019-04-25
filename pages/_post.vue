<template>
  <main id="post">
    <section class="intro">
      <img
        :src="require(`~/static/images${post.icon}?data`)"
        :alt="`${post.title} Icon`"
        class="icon"
      >
      <div class="titles">
        <h1>{{ post.title }}</h1>
        <h2>Web Design</h2>
      </div>
      <div class="content">
        <a v-if="true" class="post-link" href="#">View Thing</a>
        <nuxt-img v-if="post.image" :src="post.image" responsive-style="medium" :alt="post.title"/>
        <p>{{post.description}}</p>
      </div>
    </section>
    <section>
      <h3>Tools</h3>
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
      <h3>{{content.title}}</h3>
      <div class="content">
        <nuxt-img
          v-if="content.image"
          :src="content.image"
          responsive-style="medium"
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
      tech: await app.$content("tech").getAll(),
      techIcons: {}
    };
  },
  methods: {
    getTechByName(name) {
      return this.tech.find(obj => {
        return obj.title === name;
      });
    }
  },
  mounted() {
    this.tech.forEach((item, index) => {
      this.techIcons[item.title] = require(`~/static/images${
        item.image
      }?inline`);
      // console.log(this.techIcons[item.title]);
    });
    // require(`~/static/images${getTechByName('CSS3').image}?inline`)
  }
};
</script>

<style lang="scss">
#post {
  h1 {
    font-size: 3.5em;
    line-height: 1em;
  }

  h2 {
    line-height: 1em;
    font-size: 1.25em;
    font-weight: 300;
    text-transform: uppercase;
  }

  .post-link {
    display: inline-block;
    font-weight: 600;
    padding-bottom: 0.4em;
    border-bottom: 2px solid gray;
    margin-bottom: 2em;
  }

  section.intro {
    // display: grid;
    // grid-template-columns: 1fr 6fr;
    grid-template-areas: "icon title" ". content";
    // row-gap: 1em;
    // margin-bottom: 2em;

    .icon {
      grid-area: icon;
      height: 5em;
      padding-right: 2em;
    }

    .titles {
      grid-area: title;
    }
  }
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

    // h1,
    h3 {
      grid-area: title;
      text-transform: uppercase;
      font-size: 0.8em;
      letter-spacing: 0.1em;
      font-weight: 600;
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
      // height: 75px;
      margin: 0 1em;
      text-align: center;
      // display: inline;
    }
    img {
      width: 70%;
      height: 55px;
      // height: 100%;
    }
    figcaption {
      // align-self: 
    }
  }
}
</style>
