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
