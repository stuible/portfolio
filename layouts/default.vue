<template>
  <div id="content" class="container" v-on:scroll="onScroll(event)">
    <div class="sidebar">
      <div class="absolute-wrapper">
        <nuxt-link to="/" @click.native="scrollTo('__layout')">
          <img src="/logo.svg" alt>
        </nuxt-link>
        <nav :style="{opacity: sidebarNavOpacity}">
          <ul>
            <li v-for="item in nav" v-bind:key="item.name">
              <nuxt-link
                v-if="item.scroll != undefined"
                :to="item.link + item.hash"
                @click.native="scrollTo(item.scroll)"
              >{{item.name}}</nuxt-link>
              <nuxt-link v-else :to="item.link">{{item.name}}</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="scrollable">
      <nav>
        <ul>
          <li v-for="item in nav" v-bind:key="item.name">
            <nuxt-link
              v-if="item.scroll != undefined"
              :to="item.link + item.hash"
              @click.native="scrollTo(item.scroll)"
            >{{item.name}}</nuxt-link>
            <nuxt-link v-else :to="item.link">{{item.name}}</nuxt-link>
          </li>
        </ul>
      </nav>
      <nuxt/>
      <footer>{{"Design & Implementation by Josh Stuible in Vancouver"}}</footer>
    </div>
    <div class="sidebar"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          name: "Josh Stuible",
          link: "/",
          scroll: "__layout",
          hash: ""
        },
        {
          name: "Portfolio",
          link: "/",
          scroll: "portfolio",
          hash: "#portfolio"
        },
        {
          name: "Freelance",
          link: "/freelance"
        },
        {
          name: "Resume",
          link: "/resume"
        }
      ],
      sidebarNavOpacity: 0
    };
  },
  methods: {
    scrollTo(anchor) {
      // Scroll to a certain element
      if (document.querySelector("#" + anchor)) {
        document.querySelector("#" + anchor).scrollIntoView({
          behavior: "smooth"
        });
      }
    },
    onScroll(event) {
      // console.log(event.pageY);
      // console.log(this.map(event.pageY, 70, 124, 0, 100) / 100);
      this.sidebarNavOpacity = this.map(event.pageY, 90, 150, 0, 100) / 100;
    },
    map(value, r0, r1, r2, r3) {
      var mag = value - r0,
        sgn = value < 0 ? -1 : 1;
      var map = (sgn * mag * (r3 - r2)) / (r1 - r0);
      // console.log(map);
      if(map < r2) return r2
      else if(map > r3) return r3
      else return map;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  }
  // destroyed() {
  //   window.removeEventListener("scroll", this.onScroll);
  // }
};
</script>


<style lang="scss">
#content {
  display: flex;
  padding-top: 5em;
}
.sidebar {
  min-width: 150px;
  max-width: 150px;
  // position: relative;

  .absolute-wrapper {
    position: fixed;
    width: 150px;
    display: block;
  }

  img {
    max-width: 100%;
    height: $topNavHeight;
  }

  nav {
    text-align: right;
    padding: 3.5em 2em;
    opacity: 0;
  }
}
.scrollable {
  flex-grow: 1;

  nav {
    height: $topNavHeight;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 4em;

    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
    }
    li {
      display: inline-block;
      a {
        text-decoration: none;
        color: $colourDark;
        text-transform: uppercase;
      }
    }
  }
}

footer {
  text-align: center;
  padding: 5em 0;
}
</style>
