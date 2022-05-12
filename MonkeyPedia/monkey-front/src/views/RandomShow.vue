<script>
import axios from "axios";

export default {
  data: function () {
    return {
      monkeys: [],
      number: {},
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
};
</script>

<template>
  <div class="row">
    <div v-for="monkey in monkeys" v-bind:key="monkey.id" class="col-sm-3 mb-1">
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
          <h5 class="card-title">{{ monkey.name }}</h5>
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
