<script>
import axios from "axios";
export default {
  data: function () {
    return {
      post: {},
    };
  },
  created: function () {
    axios
      .get("http://localhost:3000/posts/" + this.$route.params.id + ".json")
      .then((response) => {
        console.log(response.data);
        this.post = response.data;
      });
  },
};
</script>

<template>
  <!-- <p>{{ post }}</p> -->
  <h1>{{ post.title }}</h1>
  <h3>{{ post.body }}</h3>
  <img v-bind:src="`${post.image_url}`" />
  <a href="/posts">Back to all posts</a>
  <br />
  <a v-bind:href="`/posts/${post.id}/edit`">Edit</a>
</template>
