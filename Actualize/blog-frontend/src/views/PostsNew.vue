<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newPostParams: {},
      errors: [],
    };
  },
  methods: {
    createPost: function () {
      console.log("Making a new post!");
      axios
        .post("http://localhost:3000/posts.json", this.newPostParams)
        .then((response) => {
          console.log("Success", response.data);
          this.posts.push(response.data);
        })
        .catch((error) => console.log(error.response)); //error handling -> needs happy/sad paths from rails!!!
    },
  },
};
</script>

<template>
  <div class="posts-new">
    <form v-on:submit.prevent="createPost()">
      <h1>This is the place to make a new post!</h1>

      <div>
        <div class="form-group">
          Title:
          <input type="text" v-model="newPostParams.title" />
        </div>
        <div class="form-group">
          Text:
          <input type="text" v-model="newPostParams.text" />
        </div>
        <div class="form-group">
          image_url:
          <input type="text" v-model="newPostParams.image_url" />
        </div>
      </div>
      <input type="submit" value="create" />
    </form>
  </div>
</template>
