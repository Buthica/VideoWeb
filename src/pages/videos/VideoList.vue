<template>
  <section>FILTER</section>
  <section>
    <!-- <ul v-if="hasVideos">
      <li v-for="video in filteredVideos" :key="video.id">
        {{ video.title }}
        {{ video.uploader }}
      </li>
    </ul>
    <h3 v-else>No coaches found.</h3> -->
    <div class="container" v-if="hasVideos">
      <div class="row">
        <div class="col-sm-4"  v-for="video in filteredVideos" :key="video.id">
          <video src=""></video>
          <h3>{{ video.title }} </h3>
          <h4>{{ video.uploader }}</h4>
          <p>{{ video.views }} views | {{ video.date }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    computed: {
      filteredVideos() {
        return this.$store.getters['videos/videos'];
      },
      hasVideos() {
        return this.$store.getters['videos/hasVideos'];
      }
    }
  }
</script>

<style scoped>
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
  @import "//ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
  @import "//maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js";

  video {
    background-color: red;
  }
  
</style>