<template>
  <div id="content" class="container">
    <div class="sidebar">
      <img src="/logo.svg" alt="">
    </div>
    <nuxt />
    <div class="sidebar"></div>
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

#content{
  display: flex;
}
.sidebar{
  width: 100px;
  img{
    width: 100px;
  }
}


</style>
