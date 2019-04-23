<template>
  <div>
      <div id="last-commit">
          <h4>Last Commit</h4>
          <p>{{lastCommitMessage}}</p>
      </div>
      <!-- <ul>
          <li v-for="commit in commits" v-bind:key="commit.id">{{commit.payload.commits[0].message}}</li>
      </ul> -->
  </div>
</template>

<script>
export default {
  data() {
      return {
          commits: '',
          lastCommit: undefined
      }
  },
  computed: {
      lastCommitMessage(){
          if(this.lastCommit){
              return this.lastCommit.payload.commits[0].message;
          }
          else return 'Loading Last Commit...'
      }
  },
  mounted() {
    fetch("https://api.github.com/users/stuible/events")
      .then(function(response) {
        return response.json();
      })
      .then(json => {
          const filteredEvents = json.filter(event => event.type === 'PushEvent' && event.payload.commits[0].message !== undefined);
        this.commits = filteredEvents;
        this.lastCommit = filteredEvents[0];
      });
  }
};
</script>

<style lang="scss">
</style>
