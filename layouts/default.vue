<template>
  <div id="content" class="container" v-on:scroll="onScroll(event)">
    <div class="sidebar">
      <div class="absolute-wrapper">
        <nuxt-link to="/" @click.native="scrollTo('__layout')">
          <img id="logo" src="~static/logo.svg?data" alt="JS">
        </nuxt-link>
        <nav :style="{opacity: sidebarNavOpacity, display: sidebarNavDisplay}">
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
  computed: {
    sidebarNavDisplay() {
      if (this.sidebarNavOpacity === 0) return "none";
      else return "";
    }
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
        this.sidebarNavOpacity = Math.min(1, Math.max(0, -scrollPercent));
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
$sidebarWidthSmall: 150px;
$sidebarWidthMedium: 200px;
$sidebarWidthLarge: 200px;
.sidebar {
  min-width: $sidebarWidthSmall;
  max-width: $sidebarWidthSmall;
  // position: relative;
  display: none;

  @include breakpoint(phablet) {
    display: block;
  }

  @include breakpoint(tablet) {
    min-width: $sidebarWidthMedium;
    max-width: $sidebarWidthMedium;
  }

  // @include breakpoint(desktop) {
  //   // display: block;
  // }

  @include breakpoint(desktophd) {
    min-width: $sidebarWidthLarge;
    max-width: $sidebarWidthLarge;
  }

  .absolute-wrapper {
    position: fixed;
    width: $sidebarWidthSmall;
    display: block;
    text-align: right;
    padding-right: 3em;

    @include breakpoint(tablet) {
      width: $sidebarWidthMedium;
      padding-right: 4em;
    }

    @include breakpoint(desktophd) {
      width: $sidebarWidthLarge;
      padding-right: 5em;
    }
  }

  img#logo {
    width: auto;
    // max-width: 100%;
    height: $topNavHeight;
  }

  nav {
    // text-align: right;
    padding: 1.5em 0.3em 0 0;
    opacity: 0;
    transition: opacity 200ms;
    line-height: 1.75em;
    text-transform: uppercase;
    font-size: 14px;
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
      display: none;
      justify-content: space-between;
    }
    li {
      display: inline-block;
      border-bottom: 5px solid #edeaea;
      padding-bottom: 0.25em;
      // cursor: pointer;
      a {
        text-decoration: none;
        color: $colourDark;
        text-transform: uppercase;
      }
    }

    @include breakpoint(phone) {
      ul {
        display: flex;
      }
    }
  }
}

footer {
  text-align: center;
  padding: 5em 0;
}
</style>
