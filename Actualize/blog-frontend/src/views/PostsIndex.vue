<script>
import axios from "axios";
export default {
  data: function () {
    return {
      posts: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      this.posts = response.data;
      console.log("All posts", this.posts);
    });
  },
};
</script>

<template>
  <h1>All Posts</h1>
  <div v-for="post in posts" v-bind:key="post.id">
    <h2>{{ post.title }}</h2>
    <img v-bind:src="`${post.image_url}`" v-bind:alt="post.title" />
    <p>{{ post.body }}</p>
    <a v-bind:href="`/posts/${post.id}`">More</a>
  </div>
</template>
