<script>
import axios from "axios";

export default {
  data: function () {
    return {
      monkeys: [],
      currentMonkey: {},
      images: [],
      //   monkeyFilter: "",
    };
  },

  created: function () {
    axios.get("http://localhost:3000/monkeys.json").then((response) => {
      this.monkeys = response.data;
      console.log(this.monkeys);
    });
  },
  function() {
    axios.get("http://localhost:3000/images.json").then((response) => {
      this.images = response.data;
      console.log(this.images);
    });
  },
};
</script>

<template>
  <div class="row">
    <div
      v-for="monkey in monkeys"
      v-bind:key="monkey.id"
      class="col-sm-3 mb-2 mt-2"
    >
      <div
        class="card"
        style="
      width: 300px
      height: 300px"
      >
        <div class="p-3 bg-success text-white">{{ monkey.name }}</div>
        <img
          :src="monkey.images[0].image_url"
          class="card-img-top"
          alt="no monke pic :,("
        />
        <div class="card-body bg-success text-white">
          <p class="card-text">
            {{ monkey.description }}
          </p>
          <a
            v-bind:href="`/monkeys/${monkey.id}`"
            class="btn bg-success text-white"
            >More info</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
