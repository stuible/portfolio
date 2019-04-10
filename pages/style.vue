<template>
  <main>
    <h1>Style Guide</h1>
    <section id="branding">
      <h2>Branding</h2>
      <section>
        <h3>Brand</h3>
        <p>I (Josh Stuible) am a Web Developer and designer that strives for simple yet effective design that is enjoyable to interact with.</p>
      </section>
      <section>
        <h3>Colour</h3>
        <p>A monochrome colour pallet was so that it would take a back seat to what's really important: the portfolio.</p>
        <div class="colour-wrapper">
          <div class="colour light">#FAFAFA</div>
          <div class="colour medium">#E9E9E9</div>
          <div class="colour dark">#333333</div>
          <div class="colour darker">#000000</div>
        </div>
      </section>
      <section>
        <h3>Type</h3>
        <h4>Neue Haas Grotesk</h4>
        <p>Header Type</p>
        <p>A Modern Sans serif Used in Title as Navigation</p>
        <div class="type-demo-wrapper">
          <div class="type-demo light one">abcdefghijklmnopqrstuvwxyz</div>
          <div class="type-demo one">abcdefghijklmnopqrstuvwxyz</div>
          <div class="type-demo bold one">abcdefghijklmnopqrstuvwxyz</div>
        </div>

        <h4>Helvetica</h4>
        <p>Main copy typeface</p>
        <div class="type-demo-wrapper">
          <div class="type-demo light two">abcdefghijklmnopqrstuvwxyz</div>
          <div class="type-demo two">abcdefghijklmnopqrstuvwxyz</div>
          <div class="type-demo bold two">abcdefghijklmnopqrstuvwxyz</div>
        </div>
      </section>
    </section>

    <!-- INTERACTIVE ELEMENTS SECTION // -->
    <section id="interactive_elements">
      <h2>Interactive Elements</h2>

      <section>
        <h3>In-text link</h3>

        <h4>CSS selector:</h4>
        <p>.link</p>

        <h4>Sample code:</h4>
        <pre><code>&lt;a href="#" class="link"&gt;Link&lt;/a&gt;</code></pre>

        <h4>Rendered element:</h4>
        <a class="link" href="#">Link</a>
      </section>

      <!-- Default Button styling section -->
      <section>
        <h3>Navigation Link</h3>

        <h4>CSS selector:</h4>
        <p>.link-item</p>

        <h4>Sample code:</h4>
        <pre><code>&lt;a href="#" class="link-item"&gt;A Nav Link&lt;/a&gt;</code></pre>

        <h4>Rendered element:</h4>
        <div class="body-style">
          <a class="link-item" href="#">A Nav Link</a>
        </div>
      </section>

      <section>
        <h3>Submit/Reset Buttons</h3>

        <h4>CSS selector:</h4>
        <p>.button</p>

        <h4>Sample code:</h4>
        <pre><code>&lt;a href="#" class="button"&gt;Submit&lt;/a&gt;</code></pre>

        <h4>Rendered element:</h4>
        <a href="#" class="button">Submit</a>
      </section>
    </section>
    <!-- // INTERACTIVE ELEMENTS SECTION -->

    <!-- TEXT ELEMENTS SECTION // -->
    <section id="text_elements">
      <h2>Text Elements</h2>

      <section>
        <h3>Headings</h3>

        <h4>CSS selector:</h4>
        <p>N/A</p>

        <h4>Sample code:</h4>
        <pre>
<code>&lt;h1&gt;Heading One&lt;/h1&gt;
&lt;h2&gt;Heading Two&lt;/h2&gt;
&lt;h3&gt;Heading Three&lt;/h3&gt;
&lt;h4&gt;Heading Four&lt;/h4&gt;</code>
        </pre>

        <h4>Rendered elements:</h4>

        <h1>Heading One</h1>
        <h2>Heading Two</h2>
        <h3>Heading Three</h3>
        <h4>Heading Four</h4>
      </section>

      <section>
        <h3>Paragraphs</h3>

        <h4>CSS selector:</h4>
        <p>N/A</p>

        <h4>Sample code:</h4>
        <pre><code>&lt;p&gt;Lorem ipsum dolor sit, amet consectetur adipisicing elit.&lt;/p&gt;</code></pre>

        <h4>Rendered element:</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione deleniti id minima aspernatur dolor
          veritatis laborum non, exercitationem commodi accusamus. Exercitationem sed eum doloribus necessitatibus
          accusamus dolore nulla numquam vero.
        </p>
      </section>

      <section>
        <h3>Numbered Lists</h3>

        <h4>CSS selector:</h4>
        <p>N/A</p>

        <h4>Sample code:</h4>
        <pre> <code>&lt;ol&gt;
  &lt;li&gt;Thing&lt;/li&gt;
  &lt;li&gt;Thing&lt;/li&gt;
  &lt;li&gt;Thing&lt;/li&gt;
&lt;/ol&gt;</code></pre>

        <h4>Rendered element:</h4>
        <ol>
          <li>Thing</li>
          <li>Thing</li>
          <li>Thing</li>
        </ol>
      </section>
    </section>
    <!-- // TEXT ELEMENTS SECTION -->

    <!-- COMBINED ELEMENTS SECTION // -->
    <section id="combined_elements">
      <h2>Combined Elements</h2>

      <section>
        <h3>Main Navigation</h3>
        <div class="body-style">
          <nav>
            <a class="link-item" href="#">Page One</a>
            <a class="link-item" href="#">Page Two</a>
            <a class="link-item" href="#">Page Three</a>
          </nav>
        </div>
      </section>
    </section>

    <section id="citations">
      <h2>Resources</h2>
      <ul>
        <li v-for="source in sources" v-bind:key="source.name">
          <strong>{{source.name}}</strong>
          {{source.comment}}
          <a class="link" :href="source.url">{{source.link}}</a>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo
  },
  async asyncData({ app }) {
    return {
      sources: [
        {
          name: "Neue Haas Grotesk",
          comment: "is a font from",
          link: "Adobe Fonts",
          url: "https://fonts.adobe.com/fonts/neue-haas-grotesk"
        },
        {
          name: "Sass",
          comment: "is CSS preprocessor from",
          link: "Sass-lang.com",
          url: "https://sass-lang.com/"
        },
        {
          name: "Nuxt",
          comment: "is a front-end static site generate using node.js and Vue from",
          link: "Nuxtjs.org",
          url: "https://nuxtjs.org/"
        },
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
pre {
  background-color: $colourMedium;
  color: $colourDark;
  padding: 1em;
  margin-bottom: 1em;
}

main > section {
  padding-bottom: 1em;
  margin-bottom: 2em;
  border-bottom: 2px solid $colourMedium;
}

section section {
  margin-bottom: 2em;
}

h1 {
  margin-bottom: 1em;
  color: $colourDark;
}

h2 {
  margin-bottom: 1em;
  text-transform: uppercase;
  font-weight: 300;
  color: $colourDark;
}

h3 {
  margin-bottom: 1em;
}

p {
  margin-bottom: 1em;
}

/* Colors */

.colour-wrapper {
  margin-top: 3em;
  text-align: center;
  display: flex;
  justify-content: center;
}

.colour {
  display: flex;
  height: 4em;
  width: 6em;
  //   border-radius: 15px;
  margin-right: 1em;
  align-items: center;
  justify-content: center;
}

.colour.light {
  background-color: $colourLight;
  border: 1px solid $colourDark;
}

.colour.medium {
  background-color: $colourMedium;
  color: $colourDark;
}

.colour.dark {
  background-color: $colourDark;
  color: $colourLight;
}

.colour.darker {
  background-color: #000;
  color: $colourLight;
}

// FONTS
.type-demo {
  font-weight: 500;
  font-size: 2em;
  &.one {
    font-family: "Neue Haas Grotesk", sans-serif;
  }

  &.two {
    font-family: "Helvetica", sans-serif;
  }
  &.light {
    font-weight: 200;
  }
  &.bold {
    font-weight: 900;
  }
}

.type-demo-wrapper {
  margin-bottom: 2em;
}

#citations {
  li {
    margin-bottom: 1em;
  }
}
</style>
