<script>
import axios from "axios";

export default {
  data: function () {
    return {
      monkey: {},
    };
  },

  created: function () {
    axios
      .get("http://localhost:3000/monkeys/" + this.$route.params.id + ".json")
      .then((response) => {
        console.log(response.data);
        this.monkey = response.data;
      });
  },
};
</script>

<template>
  <div id="monkey-business">
    <div id="monkey-name">{{ monkey.name }}</div>
    <div id="description-label">Description</div>
    <div id="monkey-description">{{ monkey.description }}</div>
    <div id="monkey-facts">{{ monkey.facts }}</div>
    <div id="size-label">Size:</div>
    <div id="monkey-size">{{ monkey.size }}</div>
    <div id="weight-label">weight:</div>
    <div id="monkey-weight">{{ monkey.weight }}</div>
    <div id="location-label">location:</div>
    <div id="monkey-location">{{ monkey.location }}</div>
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            :src="monkey.images[0].image_url"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            :src="monkey.images[1].image_url"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            :src="monkey.images[0].image_url"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
#carouselExampleFade {
  position: absolute;
  top: 125px;
  right: 100px;
  height: 270px;
  width: 480px;
}
#monkey-name {
  position: absolute;
  top: 100px;
  left: 385px;
  font-size: 30px;
}
#monkey-description {
  position: fixed;
  float: left;
  padding: 10px;
  top: 300px;
  left: 100px;
  font-size: 20px;
  width: 800px;
}
#monkey-facts {
  position: fixed;
  padding: 10px;
  top: 500px;
  left: 100px;
  font-size: 20px;
  width: 800px;
}
#fact-label {
  position: fixed;
  top: 450px;
  left: 100px;
  font-size: 25px;
  width: 800px;
}
#description-label {
  position: fixed;
  top: 250px;
  left: 100px;
  font-size: 25px;
  width: 800px;
}
#size-label {
  position: fixed;
  top: 450px;
  left: 770px;
  font-size: 25px;
  width: 800px;
}
#monkey-size {
  position: fixed;
  top: 475px;
  left: 770px;
  font-size: 25px;
  width: 800px;
}
#weight-label {
  position: fixed;
  top: 525px;
  left: 770px;
  font-size: 25px;
  width: 800px;
}
#monkey-weight {
  position: fixed;
  top: 555px;
  left: 770px;
  font-size: 25px;
  width: 800px;
}
#location-label {
  position: fixed;
  top: 600px;
  left: 770px;
  font-size: 25px;
  width: 800px;
}
#monkey-location {
  position: fixed;
  top: 630px;
  left: 970px;
  font-size: 25px;
  width: 400px;
}
</style>
