<template>
  <div>
    <div class="container">
      <div class="header pt-3 pb-1">
        <a href="/profile">
          <div class="arrow_back float-left">
            <font-awesome-icon
              icon="arrow-left"
              size="lg"
              style="color: black"
            />
          </div>
        </a>
        <div align="center">
          <a href="#" class="text-center profile text-dark with"
            >Your Game Selection History</a
          >
        </div>
      </div>
      <div class="player_record pb-4" style="border-radius: 19px">
        <div class="container">
          <div class="row">
            <table class="table table-hover col-12">
              <thead class="header_dark">
                <tr class="header">
                  <th scope="col">Result</th>
                  <th scope="col">Number</th>
                  <th scope="col">Selection</th>
                  <th scope="col">Color</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <!-- {{games}} -->
                <tr v-for="game in games" :key="game._id">
                  <th scope="row">
                    <div v-if="game.type">
                      <img src="../assets/correct.svg" />
                    </div>
                    <div v-else>
                      <img src="../assets/cancel.svg" />
                    </div>
                  </th>

                  <th>{{ game.qty }}</th>
                  <th>
                    <div>
                      <svg
                        class="mr-2"
                        v-for="color in game.colors"
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
                  <th>
                    <div>
                      <svg
                        class="mr-2"
                        v-for="color in game.computer"
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
                  <th class="text-danger" v-if="!game.type">- NGN {{ game.gain_lost }}</th>
                  <th class="text-success" v-if="game.type">+ NGN {{ game.gain_lost }}</th>
                  <th>{{ game.createdAt | moment("from") }}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
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
        .get(`bet/user/${this.user._id}`)
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

<style lang="css" scoped>
.with {
  font-family: "Product Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #cdd4ed;
}
</style>