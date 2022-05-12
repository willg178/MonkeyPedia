<script>
import axios from "axios";

export default {
  data: function () {
    return {
      monkeys: [],
      currentMonkey: {},
      //   monkeyFilter: "",
    };
  },

  created: function () {
    axios.get("http://localhost:3000/monkeys.json").then((response) => {
      this.monkeys = response.data;
      console.log("All Monkeys");
    });
  },
};
</script>

<template>
  <div class="row">
    <div v-for="monkey in monkeys" v-bind:key="monkey.id" class="col-sm-3 mb-4">
      <div class="card" style="width: 18rem">
        <img
          src="monkey.image_url"
          class="card-img-top"
          alt="no monke pic :,("
        />
        <div class="card-body">
          <h5 class="card-title">{{ monkey.name }}</h5>
          <p class="card-text">
            {{ monkey.description }}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>
