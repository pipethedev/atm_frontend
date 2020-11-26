<template>
  <div>
    <div class="vld-parent">
      <loading
        :active.sync="isLoading"
        :can-cancel="false"
        :is-full-page="fullPage"
      ></loading>
    </div>
    <center v-if="!expired">
      <p class="count_text">Count Down</p>
      <p class="text-dark timer">{{ displayMinutes }} : {{ displaySeconds }}</p>
    </center>
    <div align="center" v-else>
      <button
        @click="doAjax"
        class="btn bg-dark text-white fund-button text-capitalize text-white"
      >
        Continue
      </button>
    </div>
    <br />
  </div>
</template>
<style lang="css" scoped>
@import url("../assets/css/main.css");
@font-face {
  font-family: "Product Sans";
  src: local("Product Sans"),
    url(../assets/fonts/Product-Sans-Regular.ttf) format("truetype");
}
.card_active {
  position: relative;
  top: -35px;
}
.back,
.forward {
  display: inline-block;
}

.selection {
  height: 80px;
  background: #e9f8ff;
  opacity: 0.5;
  border: 0.5px solid #9daebc;
  box-sizing: border-box;
  border-radius: 20px 20px 0px 0px;
}
.selection-2 {
  height: 50px;
  background: #e9f8ff;
  opacity: 0.5;
  border: 0.5px solid #9daebc;
  box-sizing: border-box;
  border-radius: 20px 20px 0px 0px;
}
.continue {
  background: #0727a6;
  border-radius: 15px;
  border: none;
  /* height: 40px; */
  font-family: "Product Sans", sans-serif;
  text-transform: capitalize;
  width: 111px;
}
.activeClass {
  background: yellow;
  border: 1px solid #784e0a;
}
.card_wallet {
  font-family: "Product Sans", sans-serif;
  background-color: #000;
  height: 300px;
  border-radius: 20px;
  background-image: url("../assets/img/main_bg.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
<script>
// Import component
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "Counter",
  props: ["year", "month", "date", "hour", "minute", "second", "millisecond"],
  data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0,
    extra: 1,
    expired: false,
    isLoading: false,
    fullPage: true,
  }),
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
    end() {
      return new Date(
        this.year,
        this.month,
        this.date,
        this.hour,
        this.minute,
        this.second,
        this.millisecond
      );
    },
  },
  mounted() {
    this.showRemaining();
  },
  components: {
    Loading,
  },
  methods: {
    formatNum: (num) => (num < 10 ? "0" + num : num),
    doAjax() {
      this.isLoading = true;
      setTimeout(() => {
        axios
          .post(`bet/computer_play/${this.user._id}`)
          .then((response) => {
            if (response.data.status === 201) {
              this.isLoading = false;
            }
            location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      }, 3000);
    },
    onCancel() {
      console.log("User cancelled the loader.");
    },
    showRemaining() {
      let day = new Date();
      let main = new Date(
        day.getFullYear(),
        day.getMonth(),
        day.getDate(),
        day.getHours(),
        parseInt(day.getMinutes() + 3.8),
        0,
        0
      );
      const timer = setInterval(() => {
        const month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        const now = new Date();
        //format Date(year, month, date,hour, minutes, seconds, millseconds)
        const end = main;
        const distance = end.getTime() - now.getTime();
        if (distance < 0) {
          clearInterval(timer);
          this.expired = true;
          setTimeout(() => {
            this.isLoading = true;
          }, 3100);
          setTimeout(() => {
            this.doAjax();
          }, 5000);
          this.return;
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);

        this.displayMinutes = this.formatNum(minutes);
        this.displaySeconds = this.formatNum(seconds);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
      }, 1000);
    },
  },
};
</script>


