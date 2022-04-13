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
  methods: {
    updatePost: function () {
      console.log("Update a post!");

      axios
        .patch(
          "http://localhost:3000/posts/" + this.$route.params.id + ".json",
          this.post
        )
        .then((response) => {
          console.log("Success", response.data);
          this.$router.push("/posts");
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>

<template>
  <form v-on:submit.prevent="updatePost()">
    <h1>This is the place to update a post!</h1>

    <div>
      <div class="form-group">
        title:
        <input type="text" v-model="post.title" />
      </div>
      <div class="form-group">
        body:
        <input type="text" v-model="post.body" />
      </div>
      image_url:
      <input type="text" v-model="post.image_url" />
    </div>
    <input type="submit" value="update" />
  </form>

  <a href="/posts">Back to all posts</a>
</template>
