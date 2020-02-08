<template>
  <main id="post">
    <section class="intro">
      <div :alt="`${post.title} Icon`" class="icon" v-html="post.icon" />
      <div class="titles">
        <h1>{{ post.title }}</h1>
        <h2>{{ post.postType }}</h2>
      </div>
      <div class="content">
        <a v-if="post.link" class="post-link" :href="post.link" target="_blank">View Project</a>
        <!-- <img v-if="post.hero.type == 'image'" :src="post.hero.url" :alt="post.title" /> -->
        <stuible-img
          v-if="post.hero.type == 'image'"
          :src="post.hero.url"
          :alt="post.title"
          :aspect-ratio="post.hero.aspect_ratio"
          :colour="post.hero.extension != 'png' ? post.hero.colour : ''"
        />
        <video v-else-if="post.hero.type == 'video'" :src="post.hero.url" muted autoplay></video>
        <p>{{post.description}}</p>
      </div>
    </section>
    <section>
      <h3>Tools</h3>
      <div class="content">
        <ul class="tools">
          <li v-for="tech in post.technology" v-bind:key="tech.id" class="tool">
            <div class="icon" v-html="tech.icon"></div>
            <div class="title">{{tech.title}}</div>
          </li>
        </ul>
      </div>
    </section>
    <section v-for="content in post.content" v-bind:key="content.title">
      <h3>{{content.title}}</h3>
      <div class="content">
        <stuible-img
          v-if="content.image"
          :src="content.image.url"
          :alt="content.title"
          :aspect-ratio="content.image.aspect_ratio"
          :colour="content.image.extension != 'png' ? content.image.colour : ''"
        />
        <p v-html="content.body" />
      </div>
    </section>
    <!-- {{post}} -->
  </main>
</template>

<script>
import StuibleImg from "~/components/StuibleImg.vue";
export default {
  components: {
    StuibleImg
  },
  async asyncData({ route, $payloadURL, $axios }) {
    //if generated and works as client navigation, fetch previously saved static JSON payload
    if (process.static && process.client && $payloadURL)
      return await $axios.$get($payloadURL(route));

    //your request logic
    const post = await $axios.$get("/posts/" + route.params.post);
    return {
      post
    };
  },
  computed: {},
  methods: {},
  mounted() {

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
        height: 100%;
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
      margin-bottom: 1em;
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
    .icon {
      // width: 70%;
      height: 40px;
      margin-bottom: 1em;

      svg {
        height: 100%;
        width: 100%;
      }
    }
    .title {
      // align-self:
    }
  }
}
</style>
