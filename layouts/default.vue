<template>
  <div id="content" class="container">
    <div class="sidebar">
      <div class="wrapper">
        <img src="/logo.svg" alt>
      </div>
    </div>
    <div class="scrollable">
      <nav>
        <ul>
          <li>
            <nuxt-link to="/">Josh Stuible</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Portfolio</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Freelance</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Resume</nuxt-link>
          </li>
        </ul>
      </nav>
      <nuxt/>
    </div>
    <div class="sidebar"></div>
  </div>
</template>

<style lang="scss">
nav {
  height: $topNavHeight;
  display: flex;
  justify-content: center;
  flex-direction: column;

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

  img {
    max-width: 100%;
    height: $topNavHeight;
  }
}
.scrollable {
  flex-grow: 1;
}
</style>
