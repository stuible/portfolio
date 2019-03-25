<template>
  <div id="content" class="container">
    <div class="sidebar">
      <div class="absolute-wrapper">
        <img src="/logo.svg" alt>
      </div>
    </div>
    <div class="scrollable">
      <nav>
        <ul>
          <li>
            <nuxt-link to="/" @click.native="scrollTo('__layout')">Josh Stuible</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/#portfolio" @click.native="scrollTo('portfolio')">Portfolio</nuxt-link>
          </li>
          <li>
            <nuxt-link to="freelance">Freelance</nuxt-link>
          </li>
          <li>
            <nuxt-link to="resume">Resume</nuxt-link>
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
  methods: {
    scrollTo(anchor) {
      // Scroll to a certain element
      if (document.querySelector("#" + anchor)) {
        document.querySelector("#" + anchor).scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  }
};
</script>


<style lang="scss">
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
}
.scrollable {
  flex-grow: 1;
}

footer {
  text-align: center;
  padding: 5em 0;
}
</style>
