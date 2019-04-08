<template>
  <main id="resume">
    <h1>Resume</h1>
    <!-- <a :href="'/images' + resume.body.pdf">pdf</a> -->
    <!-- <iframe :src="'/images' + resume.body.pdf" width="100%" height="500px"></iframe> -->
    <object width="100%" height="800" :data="'/images' + resume.body.pdf">
      <a :href="'/images' + resume.body.pdf">Download PDF</a>
    </object>
    <!-- <pdf src="thing" :page="1">
      <template slot="loading">loading content here...</template>
    </pdf> -->
  </main>
</template>

<script>
// import pdf from 'vue-pdf'
// import pdf from "pdfvuer";

export default {
  components: {
    // pdf
  },
  async asyncData({ app }) {
    return {
      resume: await app.$content("pages").get("resume")
    };
  }
};
</script>

<style>
</style>
