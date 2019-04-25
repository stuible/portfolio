<template>
  <div>
    <section id="last-commit">
      <h4>Last Commit</h4>
      <p>{{lastCommitMessage}}</p>
    </section>
    <section>
      <h4>Linkedin</h4>
    </section>
    <section>
      <h4>Twitter</h4>
    </section>
    <section>
      <h4>Instagram</h4>
    </section>
    <!-- <ul>
          <li v-for="commit in commits" v-bind:key="commit.id">{{commit.payload.commits[0].message}}</li>
    </ul>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      commits: "",
      lastCommit: undefined
    };
  },
  computed: {
    lastCommitMessage() {
      if (this.lastCommit) {
        const message = this.lastCommit.payload.commits[0].message.split("\n");
        return message[0];
      } else return "Loading Last Commit...";
    }
  },
  mounted() {
    fetch("https://api.github.com/users/stuible/events")
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        const filteredEvents = json.filter(
          event =>
            event.type === "PushEvent" &&
            event.payload.commits[0].message !== undefined
        );
        this.commits = filteredEvents;
        this.lastCommit = filteredEvents[0];
      });
  }
};
</script>

<style lang="scss">
#doing {
  section {
    background-color: white;
  box-shadow: 0 0 25px 9px rgba(0, 0, 0, 0.02);
  padding: 1em;
  margin-bottom: 1em;
  }
}
#last-commit {
  
  // border-radius: 1em;
}
</style>
