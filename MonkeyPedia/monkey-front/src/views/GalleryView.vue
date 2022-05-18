<script>
import axios from "axios";

export default {
  data: function () {
    return {
      images: [],
    };
  },

  created: function () {
    axios.get("http://localhost:3000/images.json").then((response) => {
      console.log(response.data);
      this.images = response.data;
    });
  },
};
</script>

<template>
  <div class="row">
    <div
      v-for="image in images"
      v-bind:key="image.id"
      class="col-sm-6 mb-1 p-2"
    >
      <img :src="image.image_url" alt="balls" width="730" height="432" />
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
