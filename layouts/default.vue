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
      var y = window.scrollY;
      var startY = 35;
      if (y > startY) {
        //$('.container-fluid.SideNav').fadeIn();
        var scrollPercent = (startY - y + 75) / startY;
        // $(".container-fluid.SideNav").show();
        this.sidebarNavOpacity = Math.min(1, Math.max(0,-scrollPercent));
      } else {
        //$('.container-fluid.SideNav').fadeOut();
        this.sidebarNavOpacity = 0;
      }
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
$sidebarWidth: 200px;
.sidebar {
  min-width: $sidebarWidth;
  max-width: $sidebarWidth;
  // position: relative;

  .absolute-wrapper {
    position: fixed;
    width: $sidebarWidth;
    display: block;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: $topNavHeight;
  }

  nav {
    text-align: right;
    padding: 3.5em 4em 0 0;
    opacity: 0;
    transition: opacity 200ms;
    line-height: 1.75em;
    text-transform: uppercase;
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
