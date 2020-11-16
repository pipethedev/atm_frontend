<template>
  <div>
    <div style="position: fixed; bottom: 4%; right: 2%">
      <div class="btn-group">
        <div>
          <button
            @click.prevent="show"
            class="btn btn-block btn-large btn-warning border-0"
            style="border-radius: 50%; height: 60px; width: 60px"
          >
            <div style="padding-left: 6px; padding-top: -2px">
              <font-awesome-icon icon="lock" class="mr-1" size="lg" />
            </div>
          </button>
          <button
            class="btn btn-block btn-large btn-dark border-0"
            style="border-radius: 50%; height: 60px; width: 60px"
            @click="withDraw()"
          >
            <div style="padding-left: 4px; padding-top: 0px">
              <font-awesome-icon
                icon="hand-holding-usd"
                class="mr-1"
                size="lg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
    <modal name="modal-cashout" @opened="opened" :height="450">
      <div class="container" style="overflow: auto">
        <h4 class="pt-2">You can block users from earning at a given time</h4>
        <form class="pt-3" @submit.prevent="blockUser">
          <div class="form-group">
            <label for="exampleInputEmail1">Start time</label>
            <input
              type="time"
              class="form-control"
              v-model.trim="start"
              required
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">End Time</label>
            <input
              type="time"
              required
              class="form-control"
              v-model.trim="end"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Date</label>
            <input
              type="date"
              class="form-control"
              required
              v-model.trim="day"
            />
          </div>
          <button type="submit" class="btn btn-danger btn-block">
            <div align="center" v-if="seen">
              <fulfilling-bouncing-circle-spinner
                :animation-duration="4000"
                :size="24"
                color="#fff"
              />
            </div>
            <div v-else>Block Winnngs</div>
          </button>
        </form>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FulfillingBouncingCircleSpinner } from "epic-spinners";
import axios from "axios";
export default {
  name: "ModalCashout",
  data() {
    return {
      seen: false,
      start: "",
      end: "",
      day: "",
      id: "",
      opened: false,
    };
  },
  created() {
    this.id = this.user._id;
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  components : {
    FulfillingBouncingCircleSpinner
  },
  methods: {
    withDraw(){
      this.$router.replace({
        name : 'Withdraw'
      })
    },
    show() {
      this.$modal.show("modal-cashout", { draggable: true });
    },
    hide() {
      this.$modal.hide("modal-cashout");
    },
    blockUser() {
      axios
        .patch("user/block_winnings", {
          id: this.id,
          start: this.start,
          end: this.end,
          day: this.day,
        })
        .then((response) => {
          this.seen = true;
          if (response.status == 200) {
            setTimeout(() => {
              this.seen = false;
            }, 2000);
            setTimeout(() => {
              this.$toast.success(`${response.data.message}`, {
                position: "top-left",
              });
            }, 3200);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="css" scoped>
@import url("https://htmlstream.com/front-dashboard/assets/css/vendor.min.css");
@import url("../assets/css/theme.min.css");
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300&display=swap");
body {
  font-family: "Product Sans", sans-serif;
}
h4,
label,
span {
  font-family: "Nunito", sans-serif;
}
</style>