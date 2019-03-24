<template>
  <section>
    <section id="about">
      <div id="titles">
        <nuxt-img
          v-if="home.body.image"
          :src="home.body.image"
          image-style="small"
          alt="Never forget alt tags!"
          class="profile"
        />
        <div>
          <h1 class="title">{{ home.body.title }}</h1>
          <h2 class="subtitle">{{ home.body.subtitle }}</h2>
        </div>
      </div>
      <div class="bio">{{ home.body.bio }}</div>
    </section>
    <section id="services">
      <section id="what">
        <h3>What I do</h3>
        <ul>
          <li
            v-for="service in home.body.services"
            v-bind:key="service.name"
            @mouseover=" setTechHighlights(service.technology)"
            @mouseleave=" setTechHighlights([])"
          >{{service.name}}</li>
        </ul>
      </section>
      <section id="how">
        <h3>How I do</h3>
        <ul>
          <li
            v-for="tech in home.body.technologies"
            v-bind:key="tech.name"
            :class="{ fade: !isHighlighted(tech.name)  }"
          >
            <img v-if="tech.image" :src="'images/' + tech.image" :alt="tech.name">
          </li>
        </ul>
      </section>
    </section>
    <section id="posts">
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
      home: await app.$content("pages").get("home"),
      highlightedTech: []
    };
  },
  computed: {
    orderedPosts() {
      return this.posts.sort((a, b) => (a.order > b.order ? 1 : -1));
    }
  },
  methods: {
    isHighlighted(tech) {
      // If the technology is found in the list of tech or the list of tech is empty
      // Return true
      if (this.highlightedTech.length == 0 || this.highlightedTech.some(e => e.name === tech)) {
        return true;
      }
      return false;
    },
    setTechHighlights(tech) {
      this.highlightedTech = tech;
    }
  }
};
</script>

<style lang="scss">
#posts {
  padding-top: 15px;

  ul {
    // list-style: none;
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
      background-color: $colourMedium;
    }
  }
}

#about {
  #titles {
    display: flex;
  }

  img {
    width: 150px;
    height: 100%;
  }
}

#services {
  display: flex;

  > * {
    flex: 1 1 0;
    flex-basis: 0;
  }

  #what {
    ul {
      // list-style: none;
    }
    li {
      font-size: 2em;
    }
  }

  #how {
    ul {
      // list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-gap: 1em;
    }

    li {
      position: relative;
      width: 100%;
      background-color: $colourMedium;

      &::before {
        content: "";
        display: block;
        padding-top: 100%;
      }

      &.fade {
        opacity: 0.5;
      }

      img {
        position: absolute;
        top: 15%;
        left: 15%;
        height: 70%;
        width: 70%;
        text-align: center;
      }
    }
  }
}
</style>
