<template>
  <nav id="top-nav" :class="{open: mobileNavOpen}">
    <button id="hamburger-menu" @click="mobileNavOpen = !mobileNavOpen">
      <span id="hamburger-icon"></span> JOSH STUIBLE
    </button>
    <ul>
      <li v-for="item in nav" v-bind:key="item.name">
        <nuxt-link
          v-if="item.scroll != undefined"
          :to="item.link + item.hash"
          @click.native="$emit('clicked', item.scroll);mobileNavOpen = false"
        >{{item.name}}</nuxt-link>
        <nuxt-link v-else :to="item.link" @click.native="mobileNavOpen = false">{{item.name}}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
    props: {
        nav: Array
    },
    data(){
        return {
            mobileNavOpen: false,

        }
    }
};
</script>

<style lang="scss">
//Main Nav
#top-nav {
  height: $topNavHeight;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1em;

  ul {
    list-style: none;
    display: block;
    justify-content: space-between;

    position: fixed;
    margin: 0;
    padding: 2em;
    height: 100vh;
    top: 0;
    left: 0;

    background-color: $colourMedium;
    list-style-type: none;

    // transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    z-index: 3;
  }
  li {
    display: block;
    padding-bottom: 0.25em;
    // cursor: pointer;
  }

  a {
    text-decoration: none;
    color: $colourDark;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.06em;

    @include breakpoint(phablet) {
      font-size: 15px;
    }
  }

  //Mobile Nav Open Class
  &.open {
    ul {
      transform: translate(0, 0);
    }
  }

  @include breakpoint(phone) {
    margin-bottom: 4em;

    ul {
      display: flex;
      position: unset;
      width: unset;
      transform-origin: unset;
      transform: unset;
      height: unset;
      background-color: unset;
      padding: 0;
    }

    li {
      display: inline-block;
      border-bottom: 5px solid #edeaea;
    }
  }
}

// Hamburger Menu
#hamburger-menu {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 150px + 15px;
  left: 0;
  text-align: right;
  background-color: white;
  border: none;
  padding: 1em;
  position: fixed;
  cursor: pointer;
  font-weight: 300;
  border-radius: 0 20px 20px 0;
  z-index: 2;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

  @include breakpoint(phone) {
    display: none;
  }
}

#hamburger-icon {
  content: "";
  top: 2.4em;
  width: 1em;
  height: 1px;
  background: black;
  box-shadow: 0 0.33em 0 0 black, 0 0.67em 0 0 black;
}
</style>
