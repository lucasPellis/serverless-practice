<template>
  <div class="container">
    <div>


      <a v-on:click="loadBands">Load Bands</a>
      <ul v-bind:key="band.name" v-for="band in bands">
        <li>{{ band.name }} - {{ band.genre }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      bands: [],
    };
  },
  methods: {
    async loadBands() {
      try {
        this.bands = await this.$axios.$get("/api/bands.js");
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
