<template>
  <main>
    <section id="about" data-love="nadine">
      <!-- <nuxt-img
        v-if="home.body.image"
        :src="home.body.image"
        image-style="thumb"
        alt="Josh Stuible's Beautiful Face"
        class="profile"
      />-->
      <div id="profile-wrapper">
        <div
          id="profile-pic"
          v-lazy:background-image="{src: '/images' + '/uploads/tempprofpic.png', loading: profPlaceholder, preLoad: 1 }"
        ></div>

        <!-- <img
          :src="profPlaceholder"
          v-lazy="{src: '/uploads/tempprofpic.png', loading: profPlaceholder, preLoad: 1 }"
          alt="Josh Stuible's Beautiful Face"
        >-->
      </div>

      <div id="titles">
        <h1 class="title">{{ home.portfolioName }}</h1>
        <h2 class="subtitle">{{ home.subtitle }}</h2>
        <p id="bio">{{ home.bio }}</p>
      </div>
    </section>
    <section id="services">
      <h3 class="hide-visually">Services</h3>
      <section id="what">
        <h3>What I do</h3>
        <ul>
          <li
            v-for="service in home.services"
            v-bind:key="service.title"
            @mouseover="setTechHighlights(service.technology)"
            @mouseleave="setTechHighlights([])"
          >{{service.title}}</li>
        </ul>
      </section>
      <section id="how">
        <h3>How I do</h3>
        <ul>
          <li
            v-for="tech in home.technology"
            v-bind:key="tech.title"
            :class="{ fade: !isHighlighted(tech.id)  }"
          >
            <h6>{{tech.title}}</h6>

            <div class="icon" v-html="tech.icon"></div>

            <!-- <img
              :src=""
              :alt="techName + ' Icon'"
            >-->
          </li>
        </ul>
      </section>
    </section>
    <section id="portfolio">
      <h3>What I've Done</h3>
      <ul>
        <li v-for="post in posts" v-bind:key="post.id">
          <div class="info">
            <h5>{{ post.title }}</h5>
            <h6>{{ post.postType }}</h6>
          </div>
          <nuxt-link :to="post.slug" v-html="post.icon"></nuxt-link>
        </li>
      </ul>
    </section>
    <section id="doing">
      <h3>What I'm Doing</h3>
      <doing />
    </section>
  </main>
</template>

<script>
import Doing from '~/components/home/Doing.vue'

export default {
  components: {
    Doing
  },
  async asyncData({ $axios, $payloadURL, route }) {
    //if generated and works as client navigation, fetch previously saved static JSON payload
    if (process.static && process.client && $payloadURL)
      return await $axios.$get($payloadURL(route));

    //your request logic
    const posts = await $axios.$get("/posts");
    const home = await $axios.$get("/pages/home");
    return {
      home: home,
      posts: posts.data
    };
  },
  data() {
    return {
      // posts: posts.data,
      // tech: await app.$content("tech").getAll(),
      // home: home,
      highlightedTech: [],
      profPlaceholder:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcv33LfwAHkgMr6KeirAAAAABJRU5ErkJggg=="
    };
  },
  computed: {
    // orderedPosts() {
    //   console.log( this.posts);
    //   return this.posts.sort((a, b) => (a.order > b.order ? 1 : -1));
    // }
  },
  methods: {
    isHighlighted(tech) {
      // If the technology is found in the list of tech or the list of tech is empty
      // Return true
      if (
        this.highlightedTech.length == 0 ||
        this.highlightedTech.some(e => e === tech)
      ) {
        return true;
      }
      return false;
    },
    setTechHighlights(tech) {
      this.highlightedTech = tech;
    },
    getTechByName(name) {
      return this.tech.find(obj => {
        return obj.title === name;
      });
    }
  }
};
</script>

<style lang="scss">
#doing,
#services,
#portfolio {
  h3 {
    font-size: 7.25vw;
    text-transform: uppercase;
    margin-bottom: 2em;
    font-weight: 500;

    @include breakpoint(phone) {
      font-size: 1em;
      // margin-bottom: 2em;
    }

    @include breakpoint(thone) {
      font-size: 1.5em;
      // margin-bottom: 1em;
    }
    @include breakpoint(phablet) {
      font-size: 1.5em;
    }
    @include breakpoint(tablet) {
      font-size: 1.5em;
    }
    @include breakpoint(desktop) {
      font-size: 2em;
    }

    &::before {
      content: "< ";
    }
    &::after {
      content: " />";
    }
    &::before,
    &::after {
      color: #777777;
    }
  }
}

#portfolio {
  padding-top: map-get($mainGridGap, desktophd);

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: map-get($mainGridGap, phone);

    @include breakpoint(phone) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: map-get($mainGridGap, phablet);
    }

    @include breakpoint(phablet) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: map-get($mainGridGap, tablet);
    }

    @include breakpoint(desktop) {
      grid-template-columns: $mainGridColumns;
      grid-gap: map-get($mainGridGap, desktophd);
    }
  }

  svg {
    width: 100%;
    height: 100%;
  }

  

  li {
    position: relative;
    width: 100%;

    &::before {
      content: "";
      display: block;
      padding-top: 100%;
    }

    .info {
      color: black;
      position: absolute;
      top: -25px;
      opacity: 0;
      transition: all 100ms ease-in;
      text-transform: uppercase;

      h5,
      h6 {
        font-weight: 300;
        white-space: nowrap;
      }
    }

    &:hover,
    &:focus-within {
      .info {
        top: -35px;
        opacity: 1;
      }
    }

    a {
      padding: 30%;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: $colourMedium;

      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }
  }
}

#about {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: map-get($mainGridGap, phone);
  row-gap: map-get($mainGridGap, phone) / 2;
  grid-template-areas: "." "titles" "bio";

  @include breakpoint(phone) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: ". titles titles" "bio bio bio";
    column-gap: map-get($mainGridGap, phablet);
    row-gap: map-get($mainGridGap, phablet) / 2;
  }

  @include breakpoint(phablet) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: ". titles titles" "bio bio bio";
    column-gap: map-get($mainGridGap, tablet);
    row-gap: map-get($mainGridGap, tablet) / 2;
  }

  // @include breakpoint(phablet) {
  //   grid-template-columns: 1fr 1fr 1fr;
  // }
  @include breakpoint(desktop) {
    grid-template-columns: $mainGridColumns;
    grid-template-areas: ". titles titles titles";
    column-gap: map-get($mainGridGap, desktophd);
    row-gap: map-get($mainGridGap, desktophd) / 2;
  }

  img {
    width: 100%;
    // height: 100%;
  }
}

#profile-pic {
  // overflow: hidden;
  background-color: #bab3b2;
  position: relative;
  background-size: cover;
  background-position: center;
  // width: 50%;
  // transition: box-shadow 300ms linear, opacity 200ms linear;

  width: 100%;
  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  &::after {
    position: absolute;
    background-color: #bab3b2;
    content: "";
    display: block;
    // padding-bottom: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    transition: opacity 200ms linear;
    opacity: 0;
  }

  &[lazy="loading"] {
    &::after {
      opacity: 1;
    }
  }

  &[lazy="loaded"] {
    // filter: blur(0px);
    // box-shadow: inset 0 0 0 1000px rgba(186, 179, 178, 0);
    // opacity: 1;
    &::after {
      opacity: 0;
    }
  }
}

#titles {
  grid-area: titles;

  // font-size: 1em;
  font-size: 3vw;

  .title {
    // color: $colourDark;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 4em;
    letter-spacing: 0.05em;
  }

  .subtitle {
    color: #777777;
  }
  @include breakpoint(phone) {
    font-size: 0.75em;
  }
  @include breakpoint(phablet) {
    font-size: 0.6em;
  }
  @include breakpoint(tablet) {
    font-size: 0.75em;
  }
  @include breakpoint(desktop) {
    font-size: 1em;
  }
  @include breakpoint(desktophd) {
    font-size: 1em;
  }
}

#bio {
  margin-top: 1.5em;
  // grid-area: bio;
  font-size: 15px;
  font-weight: 500;
  font-family: "Helvetica", "Neue Haas Grotesk";
  letter-spacing: -0.01em;
  // border-left: 5px solid lightgrey;
  // padding-left: 15px;

  // &::before{
  //   content: '';
  //   width: 100%;
  //   border-top: 2px black solid;
  // }
}

#services {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: map-get($mainGridGap, desktophd);
  grid-template-areas: "what" "how";
  padding-top: map-get($mainGridGap, desktophd);

  @include breakpoint(phone) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: "what what how how how";
  }
  @include breakpoint(phablet) {
    grid-template-columns: $mainGridColumns;
    grid-template-areas: "what what how how";
  }

  h3 {
    margin-bottom: 1.5em;
  }

  #what {
    grid-area: what;
    ul {
      // list-style: square;
      // list-style-position: inside;
    }
    li {
      font-size: 2em;
      cursor: default;
      color: darkgray;
      padding: 0.25em 0;
      font-weight: 400;
      letter-spacing: 0.05em;

      &:hover {
        color: black;
      }

      @include breakpoint(phone) {
        font-size: 1.15em;
      }
      @include breakpoint(phablet) {
        font-size: 1.5em;
      }
      @include breakpoint(tablet) {
        font-size: 2em;
      }
      @include breakpoint(desktop) {
        font-size: 2em;
      }
    }
  }

  #how {
    grid-area: how;
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 2em;

      @include breakpoint(phone) {
        grid-template-columns: 1fr 1fr 1fr;
      }

      @include breakpoint(thone) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }

      @include breakpoint(phablet) {
        grid-template-columns: 1fr 1fr 1fr;
      }
      @include breakpoint(desktop) {
        grid-template-columns: $mainGridColumns;
      }
    }

    h6 {
      position: absolute;
      top: -10px;
      opacity: 0;
      transition: all 100ms ease-in;
    }

    li {
      position: relative;
      width: 100%;
      background-color: $colourMedium;

      &:hover {
        h6 {
          top: -20px;
          opacity: 1;
        }
      }

      &::before {
        content: "";
        display: block;
        padding-top: 100%;
      }

      &.fade {
        opacity: 0.4;
      }

      .icon {
        position: absolute;
        top: 25%;
        left: 25%;
        height: 50%;
        width: 50%;
        text-align: center;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}

#doing {
  padding-top: map-get($mainGridGap, desktophd) + 1em;
}
</style>
