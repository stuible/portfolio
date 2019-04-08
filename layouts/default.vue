<template>
  <div id="content" class="container" v-on:scroll="onScroll(event)">
    <div class="sidebar">
      <div class="absolute-wrapper">
        <!-- LOGO -->
        <nuxt-link to="/" @click.native="scrollTo('__layout')">
          <img id="logo" src="~static/logo.svg?data" alt="JS">
        </nuxt-link>
        <!-- /LOGO -->
        <side-nav :nav="nav" :opacity="sidebarNavOpacity" :display="sidebarNavDisplay" @clicked="scrollTo"/>
      </div>
    </div>
    <div class="scrollable">
      <top-nav :nav="nav" @clicked="scrollTo"/>
      <nuxt/>
      <footer>{{"Design & Implementation by Josh Stuible in Vancouver"}}</footer>
    </div>
    <div class="sidebar"></div>
  </div>
</template>

<script>
import sideNav from '~/components/global/SideNav.vue';
import topNav from '~/components/global/TopNav.vue';
export default {
  components: {
    sideNav,
    topNav
  },
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
      sidebarNavOpacity: 0,
      mobileNavOpen: false
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
  padding-top: 1em;

  @include breakpoint(phone) {
    padding-top: 5em;
  }
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

}
.scrollable {
  flex-grow: 1;

}

footer {
  text-align: center;
  padding: calc(4em + 20vh) 0 5em 0;
  min-height: 50px;
}
</style>
