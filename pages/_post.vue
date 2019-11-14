<template>
  <main id="post">
    <section class="intro">
      <div
        :alt="`${post.title} Icon`"
        class="icon"
        v-html="post.icon"
      />
      <div class="titles">
        <h1>{{ post.title }}</h1>
        <h2>{{ post.postType }}</h2>
      </div>
      <div class="content">
        <a
          v-if="post.link"
          class="post-link"
          :href="post.link"
          target="_blank"
        >View Project</a>
        <!-- <nuxt-img
          v-if="isImage(post.hero)"
          :src="post.hero"
          responsive-style="medium"
          :alt="post.title"
        />
        <video v-else-if="isVideo(post.image)" :src="'/images' + post.image" muted autoplay></video> -->
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
                src="google.com"
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
  async asyncData({ app, route, $axios }) {
    return {
      post: await $axios.$get('/posts/' + route.path),
      techIcons: {}
    };
  },
  methods: {
    // getTechByName(name) {
    //   return this.tech.find(obj => {
    //     return obj.title === name;
    //   });
    // },
    isImage(image) {
      if (!image) return false;
      const ext = image.split(".").pop();

      switch (ext) {
        case "jpg":
        case "jpeg":
        case "svg":
        case "png":
        case "webp":
        case "gif":
          return true;
          break;
        default:
          return false;
          break;
      }
    },
    isVideo(image) {
      if (!image) return false;
      const ext = image.split(".").pop();

      switch (ext) {
        case "mp4":
        case "mov":
          return true;
          break;
        default:
          return false;
          break;
      }
    }
  },
  mounted() {
    // this.tech.forEach((item, index) => {
    //   // this.techIcons[item.title] = require(`~/static/images${
    //   //   item.image
    //   // }?inline`);
    //   // console.log(this.techIcons[item.title]);
    // });
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

  video {
    margin-bottom: 1em;
  }

  section.intro {
    // display: grid;
    grid-template-columns: auto;
    grid-template-areas: "icon" "title" "content";
    // row-gap: 1em;
    // margin-bottom: 2em;

    .icon {
      grid-area: icon;
      height: 4.5em;
      padding-right: 2em;
      width: 7em;

      svg {
        width: 100%;
        height: auto;
      }
    }

    @include breakpoint(phone) {
      grid-template-columns: 5em 6fr;
      grid-template-areas: "icon title" "content content";
      .icon {
        width: 100%;
      }
    }

    @include breakpoint(thone) {
      grid-template-areas: "icon title" ". content";

      // .icon {
      //   width: 100%;
      // }
    }

    .titles {
      grid-area: title;
    }
  }
  section {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: "title" "content";
    row-gap: 1em;
    margin-bottom: 2em;

    @include breakpoint(thone) {
      grid-template-columns: 5em 6fr;
      grid-template-areas: "title title" ". content";
    }

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
      // width: 70%;
      height: 40px;
      // height: 100%;
    }
    figcaption {
      // align-self:
    }
  }
}
</style>
