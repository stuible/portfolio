<template>
  <div class="stuible-image">
    <div
      class="stuible-image-wrapper"
      :style="{'padding-bottom': aspectRatioPadding, 'background-color': colour}"
    >
      <img :src="$props.src" :alt="$props.alt" ref="image" :class="{loading: loading}" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["src", "alt", "aspectRatio", "colour"],
  data() {
    return {
      aspectRatioPadding: this.aspectRatio
        ? this.aspectRatio * 100 + "%"
        : false,
      loading: false,
      loaded: false
      //   colour: this.colour
    };
  },
  mounted() {
    if (this.$refs.image.complete) {
      this.loaded = true;
    } else {
      this.loading = true;
      this.$refs.image.onload = () => {
        this.loading = false;
        this.loaded = true;
      };
    }
  }
};
</script>

<style lang="scss">
.stuible-image {
  position: relative;
  overflow: hidden;
  width: 100%;
  display: inline-block;

  .loading {
    opacity: 0;
  }
}
.stuible-image-wrapper {
  //   background-color: #f1f1f1;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    // z-index: 1;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: ease-out;
    transform: translateZ(0);
  }
}
</style>