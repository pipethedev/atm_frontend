<template>
  <div class="container">
    <p
      class="text-center pt-3"
      style="
        color: #031042;
        font-family: 'Product Sans', sans-serif;
        font-weight: 600;
        font-size: 18px;
      "
    >
      Game History
    </p>
    <div style="overflow-y: auto; height: 80vh">
      <table class="table table-hover">
        <thead class="header_dark">
          <tr class="header">
            <th scope="col">Result</th>
            <th scope="col">Number</th>
            <th scope="col">Color</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <!-- {{games}} -->
          <tr v-for="game in games" :key="game._id">
            <th scope="row">
              <div v-if="game.win == 'true'">
                <img src="../assets/correct.svg" />
              </div>
              <div v-if="game.win == 'made'">
                <img src="../assets/bot.svg" />
              </div>
              <div v-if="game.win == 'false'">
                <img src="../assets/cancel.svg" />
              </div>
            </th>

            <th>{{ game.qty }}</th>
            <th>
              <div>
                <svg
                  class="mr-2"
                  v-for="color in game.color"
                  :key="color"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="7.5" cy="7.5" r="7.5" :fill="color" />
                </svg>
              </div>
            </th>
            <th>{{ game.createdAt | moment("MMMM Do YYYY") }}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
th {
  font-size: 14px;
  color: #031042;
  font-family: "Product Sans", sans-serif;
}
</style>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "History",
  data() {
    return {
      games: "",
    };
  },
  created() {
    this.getGames();
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {
    getGames() {
      axios
        .get(`bet/${this.user._id}`)
        .then((response) => {
          this.games = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
  },
};
</script>