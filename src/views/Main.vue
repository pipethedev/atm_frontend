<template>
  <div class="pb-5">
    <div class="vld-parent">
      <loading
        :active.sync="isLoading"
        :can-cancel="true"
        :is-full-page="fullPage"
      ></loading>
    </div>
    <div class="container mt-3">
      <div align="right" class="profile_lg pb-4">
        <img
          src="../assets/img/bell_dark.svg"
          height="27"
          width="27"
          class="mr-3"
          v-click-outside="hideModal"
          v-show="!check"
          @click="toggleOpen"
        />
        <font-awesome-icon
          icon="times"
          class="mr-4"
          size="lg"
          v-show="check"
          @click="toggleOpen"
        />
        <router-link :to="{ path: '/profile' }">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            height="32"
            width="32"
            alt="Women"
            class="rounded-circle mr-3"
          />
        </router-link>
        <slide-y-up-transition v-show="check">
          <Notification />
        </slide-y-up-transition>
      </div>
      <div class="row">
        <div class="col-lg-7">
          <Wallet :admin="check" />
          <div class="count_down mt-6">
            <Counter />
          </div>
          <slide-x-right-transition :duration="500">
            <div class="color_selection" v-if="show == false">
              <div
                class="selection"
                style="z-index: -1"
                v-if="this.game.colors.length > 0"
              >
                <div align="center" class="row">
                  <center style="padding-top: 0.85rem" class="container col-12">
                    <p
                      style="font-family: Product Sans; display: inline"
                      class="col-6"
                      v-for="data in game.colors"
                      :key="data"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 15 15"
                        fill="none"
                        style="margin-top: -0.5%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="7.5" cy="7.5" r="7.5" :fill="data" /></svg
                      ><span
                        class="ml-2"
                        style="color: #020f60; font-weight: 600"
                        >{{ data }}</span
                      >
                    </p>
                  </center>
                </div>
              </div>
              <div class="color-card" :class="{ card_active: isActive }">
                <div class="container">
                  <center class="pt-4"><p>Choose a color</p></center>
                  <div class="color_body pt-2" align="center">
                    <div class="row row_body">
                      <div class="col" style="cursor: pointer">
                        <div
                          class="red"
                          style="background: #d63031"
                          @click="addColor('red')"
                        >
                          <p class="bg_text">Red</p>
                        </div>
                      </div>
                      <div class="col" style="cursor: pointer">
                        <div class="blue" @click="addColor('blue')">
                          <p class="bg_text">Blue</p>
                        </div>
                      </div>
                      <div class="col" style="cursor: pointer">
                        <div class="4 green" @click="addColor('green')">
                          <p class="bg_text">Green</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div align="right" class="pt-5" v-if="display">
                    <button
                      class="btn btn-primary btn-block continue"
                      @click.prevent="selectNumber"
                    >
                      Next
                      <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        class="ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.16663 1.5L6.66663 7L1.16663 12.5"
                          stroke="#CDD4ED"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </slide-x-right-transition>
          <slide-x-right-transition :duration="1500" v-if="final == false">
            <div
              class="number_card mt-2"
              style="background: #e9f8ff"
              v-show="show"
            >
              <div
                class="selection-2 border-0"
                style="z-index: -1"
                v-if="this.game.colors.length > 0"
              >
                <div align="center" class="row">
                  <center style="padding-top: 0.85rem" class="container col-12">
                    <p
                      style="font-family: Product Sans; display: inline"
                      class="col-6"
                      v-for="data in game.colors"
                      :key="data"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 15 15"
                        fill="none"
                        style="margin-top: -0.5%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="7.5" cy="7.5" r="7.5" :fill="data" /></svg
                      ><span
                        class="ml-2"
                        style="color: #020f60; font-weight: 600"
                        >{{ data }}</span
                      >
                    </p>
                  </center>
                </div>
              </div>
              <div
                class="number_box"
                align="center"
                style="
                  background: #deecf3;
                  border-radius: 20px;
                  padding-bottom: 54px;
                "
              >
                <div class="container">
                  <p class="text-center pt-1" style="font-weight: 400">
                    Choose a Number
                  </p>
                </div>
                <div class="row container" align="center">
                  <div class="col">
                    <div
                      class="circle-option"
                      :class="num == 0 ? 'activeClass' : 'is-outlined'"
                      @click="registerDigit(0)"
                    >
                      <p class="text-center">0</p>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="circle-option"
                      :class="num == 1 ? 'activeClass' : 'is-outlined'"
                      @click="registerDigit(1)"
                    >
                      <p class="text-center">1</p>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="circle-option"
                      :class="num == 2 ? 'activeClass' : 'is-outlined'"
                      @click="registerDigit(2)"
                    >
                      <p class="text-center">2</p>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="circle-option"
                      :class="num == 3 ? 'activeClass' : 'is-outlined'"
                      @click="registerDigit(3)"
                    >
                      <p class="text-center">3</p>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="circle-option"
                      :class="num == 4 ? 'activeClass' : 'is-outlined'"
                      @click="registerDigit(4)"
                    >
                      <p class="text-center">4</p>
                    </div>
                  </div>
                </div>
                <div class="row container mt-2" align="center">
                  <div class="col">
                    <div
                      class="circle-option"
                      :class="num == 5 ? 'activeClass' : 'is-outlined'"
                      @click="registerDigit(5)"
                    >
                      <p class="text-center">5</p>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="circle-option"
                      :class="num == 6 ? 'activeClass' : 'is-outlined'"
                      @click="registerDigit(6)"
                    >
                      <p class="text-center">6</p>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="circle-option"
                      :class="num == 7 ? 'activeClass' : 'is-outlined'"
                      @click="registerDigit(7)"
                    >
                      <p class="text-center">7</p>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="circle-option"
                      :class="num == 8 ? 'activeClass' : 'is-outlined'"
                      @click="registerDigit(8)"
                    >
                      <p class="text-center">8</p>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="circle-option"
                      :class="num == 9 ? 'activeClass' : 'is-outlined'"
                      @click="registerDigit(9)"
                    >
                      <p class="text-center">9</p>
                    </div>
                  </div>
                </div>
                <div class="action_button pt-3 container">
                  <div class="back float-left" align="left">
                    <button
                      class="btn btn-primary btn-block continue"
                      @click.prevent="selectGame"
                    >
                      Back
                    </button>
                  </div>

                  <div
                    class="forward float-right"
                    align="right"
                    v-if="numberSelect"
                  >
                    <button
                      class="btn btn-primary btn-block continue"
                      @click.prevent="selectGame"
                    >
                      Next
                      <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        class="ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.16663 1.5L6.66663 7L1.16663 12.5"
                          stroke="#CDD4ED"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </slide-x-right-transition>
          <slide-x-right-transition :duration="1500">
            <div class="play_card mt-1" v-show="final">
              <div class="container">
                <div class="row pt-3" align="center">
                  <div class="col-6">
                    <p class="pt-1" v-for="data in game.colors" :key="data">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="7.5" cy="7.5" r="7.5" :fill="data" /></svg
                      ><span class="ml-3">{{ data }}</span>
                    </p>
                  </div>
                  <div class="col-6">
                    <p class="pt-1">
                      Number
                      <span
                        style="
                          color: #020f60;
                          font-family: 'Product Sans', sans-serif;
                          font-weight: 700;
                        "
                        >{{ num }}</span
                      >
                    </p>
                  </div>
                </div>
                <div class="action-box pt-4" align="center">
                  <button class="btn play_button" @click="playGame()">
                    <span>Play</span>
                  </button>
                  <p class="text-center pt-4">
                    <a href="#" class="cancel">Cancel</a>
                  </p>
                </div>
              </div>
            </div>
          </slide-x-right-transition>
        </div>
        <div class="container col-lg-5">
          <div
            class="player_record pb-4"
            style="background: #ebebeb; border-radius: 19px"
          >
            <History />
          </div>
        </div>
      </div>
    </div>
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
import axios from "axios";
import Wallet from "@/components/Wallet";
import Counter from "@/components/Counter";
import History from "@/components/History";
import { mapGetters } from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { SlideXRightTransition } from "vue2-transitions";
import { SlideYUpTransition } from "vue2-transitions";
import ClickOutside from "vue-click-outside";
import Notification from "@/components/Notification.vue";
export default {
  name: "Main",
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  data() {
    return {
      check: false,
      num: "",
      show: false,
      final: false,
      isLoading: false,
      fullPage: true,
      numberSelect: false,
      isActive: false,
      showPlay: false,
      display: false,
      cash: "",
      game: {
        colors: [],
        amount: this.$cookie.get("amountPlayed"),
        value: null,
        user_id: "",
      },
    };
  },
  created() {
    this.game.user_id = this.user._id;
    if (this.user.admin) {
      this.check = true;
    }
    this.fetchWallet();
  },
  components: {
    Wallet,
    History,
    Counter,
    Loading,
    Notification,
    SlideXRightTransition,
    SlideYUpTransition,
  },
  methods: {
    track() {
      this.$ga.page("/home");
    },
    toggleOpen() {
      this.check = !this.check;
    },
    hideModal() {
      this.check = false;
    },
    fetchWallet() {
      axios
        .get(`wallet/${this.user._id}`)
        .then((response) => {
          this.cash = response.data.value;
          this.game.amount = response.data.debitable;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    arrayContains(arr, searchFor) {
      if (typeof arr.includes == "undefined") {
        var arrLength = arr.length;
        for (var i = 0; i < arrLength; i++) {
          if (arr[i] === searchFor) {
            return true;
          }
        }
        return false;
      }
      return arr.includes(searchFor);
    },
    addColor(color) {
      let colors = this.game.colors;

      if (colors.length < 2) {
        if (this.arrayContains(colors, color)) {
          this.$toast.error(`You have selected ${color} before`, {
            position: "top-right",
          });
        } else {
          colors.push(color);
          this.isActive = true;
        }

        this.display = true;
      } else {
        this.$toast.error(`You can't add more than 2 colors`, {
          position: "top-right",
        });
      }
    },
    selectNumber() {
      this.show = true;
    },
    selectGame() {
      this.final = true;
    },
    registerDigit(number) {
      this.num = number;
      this.game.value = number;
      this.numberSelect = true;
    },
    onCancel() {
      console.log("User cancelled the loader.");
    },
    playGame() {
      if (this.game.amount > this.cash) {
        this.$toast.error(`Insufficient funds`, {
          position: "top",
        });
      } else {
        axios
          .post("bet", {
            colors: this.game.colors,
            amount: this.game.amount,
            value: this.game.value,
            user_id: this.game.user_id,
          })
          .then((response) => {
            if (response.data.status === 201) {
              this.isLoading = true;
              setTimeout(() => {
                this.isLoading = false;
              }, 3000);
              location.reload();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  mounted() {
    this.popupItem = this.$el;
  },
  directives: {
    ClickOutside,
  },
  metaInfo() {
    return {
      title: "A.T.M Home",
      meta: [
        {
          vmid: "description",
          name: "description",
          content: "Welcome to A.T.M, earn money by predictions",
        },
      ],
    };
  },
};
</script>