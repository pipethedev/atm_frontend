<template>
  <div>
    <div class="card_wallet" style="height: auto">
      <div
        v-if="bal"
        align="right"
        class="pt-3 profile_sm"
        v-click-outside="remove"
        @click="toggle"
      >
        <img src="../assets/img/bell.svg" height="27" width="27" class="mr-3" />
        <router-link :to="{ path: '/profile' }">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            height="32"
            width="32"
            alt="Women"
            class="rounded-circle mr-3"
          />
        </router-link>
        <slide-y-up-transition v-if="avail">
          <Notification />
        </slide-y-up-transition>
      </div>
      <div v-else class="pt-4"></div>
      <center class="bal">
        <div>
          <p class="text-white" style="font-size: 16px">Wallet Balance</p>
          <h3 class="text-white cash">N {{ value }}</h3>
          <p class="text-white" id="product-sans" @click="show">
            N {{ this.$cookie.get("amountPlayed") }}
            <font-awesome-icon icon="pen" class="ml-2" size="lg" />
          </p>
          <div v-if="bal">
            <flutterwave-pay-button
              :tx_ref="generateReference()"
              :amount="0"
              currency="NGN"
              payment_options="card,ussd"
              redirect_url=""
              class="btn bg-white text-dark fund-button text-capitalize pb-4"
              :customer="{
                name: this.user.name,
                email: this.user.email,
                phone_number: this.user.phone_number,
              }"
              :customizations="{
                title: 'Allthingsmore',
                description: 'Allthingsmore account funding',
                logo:
                  'https://www.flaticon.com/svg/static/icons/svg/566/566295.svg',
              }"
              :callback="makePaymentCallback"
              :onclose="closedPaymentModal"
            >
              Fund Wallet
            </flutterwave-pay-button>
            <div class="container pb-4 mt-3">
              <button class="btn btn-md btn-block video-btn text-capitalize">
                How it works
              </button>
            </div>
          </div>
          <div class="pt-4" v-else></div>
        </div>
      </center>
    </div>
    <modal
      name="money"
      @opened="opened"
      :height="250"
      :adaptive="adaptive"
      :draggable="draggable"
    >
      <div class="background">
        <form class="container pt-6" @submit.prevent="saveMoney">
          <div class="form-group">
            <label for="amount">Type the amount you want to bet on.</label>
            <input
              type="number"
              id="amount"
              placeholder="200"
              v-model.trim="amount"
              class="form-control bg-lightGray border-0"
            />
          </div>
          <div class="form-group">
            <button class="btn btn-block" style="background: #020F60">
              <div align="center" v-if="seen">
                <fulfilling-bouncing-circle-spinner
                  :animation-duration="4000"
                  :size="24"
                  color="#fff"
                />
              </div>
              <div v-else><span class="text-white">Save</span></div>
            </button>
          </div>
        </form>
      </div>
    </modal>
  </div>
</template>
<style scoped>
@import url("../assets/css/main.css");

@font-face {
  font-family: "Product Sans";
  src: local("Product Sans"),
    url(../assets/fonts/Product-Sans-Regular.ttf)format("truetype");
}
.card_active {
  position: relative;
  top: -35px;
}
span {
  font-family: "Product Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #CDD4ED;
}
.bg-lightGray {
  background: #CDD4ED;
}
.back,
.forward {
  display: inline-block;
}
label {
  font-family: "Product Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #708090;
}
.selection {
  height: 80px;
  background: #E9F8FF;
  opacity: 0.5;
  border: 0.5px solid #9DAEBC;
  box-sizing: border-box;
  border-radius: 20px 20px 0px 0px;
}
.selection-2 {
  height: 50px;
  background: #E9F8FF;
  opacity: 0.5;
  border: 0.5px solid #9DAEBC;
  box-sizing: border-box;
  border-radius: 20px 20px 0px 0px;
}
.continue {
  background: #0727A6;
  border-radius: 15px;
  border: none;
  /* height: 40px; */
  font-family: "Product Sans", sans-serif;
  text-transform: capitalize;
  width: 111px;
}
.activeClass {
  background: yellow;
  border: 1px solid #784E0A;
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
import { mapGetters } from "vuex";
import ClickOutside from "vue-click-outside";
import Notification from "@/components/Notification.vue";
import { FulfillingBouncingCircleSpinner } from "epic-spinners";
export default {
  props: {
    bal: {
      type: Boolean,
      default: true,
    },
  },
  name: "Wallet",
  data() {
    return {
      avail: false,
      seen: false,
      value: 0,
      amount: "",
      opened: false,
      adaptive: true,
      draggable: true,
    };
  },
  created() {
    this.fetchWallet();
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  components: {
    FulfillingBouncingCircleSpinner,
    Notification,
  },
  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  },
  // do not forget this section
  directives: {
    ClickOutside,
  },
  methods: {
    toggle() {
      this.avail = !this.avail;
    },
    remove() {
      this.avail = false;
    },
    saveMoney() {
      this.seen = true;
      if (this.value >= this.amount) {
        this.$cookie.set("amountPlayed", this.amount, 1825);
        setTimeout(() => {
          this.seen = false;
          this.$toast.success(`Amount saved`, {
            position: "top",
          });
        }, 1500);
        setTimeout(() => {
          this.$toast.success(`Amount saved`, {
            position: "top",
          });
        }, 2500);
      } else {
        this.seen = false;
        this.$toast.error(`Insufficient funds`, {
          position: "top",
        });
      }
    },
    show() {
      this.$modal.show("money", { draggable: true });
    },
    hide() {
      this.$modal.hide("money");
    },
    fetchWallet() {
      axios
        .get(`wallet/${this.user._id}`)
        .then((response) => {
          this.value = response.data.value;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    makePaymentCallback(response) {
      if (response.status === "successful") {
        axios
          .put(`wallet/${this.user._id}`, {
            status: "Approved",
            amount: response.amount,
            type: "credit",
          })
          .then((response) => {
            console.log(response);
            this.fetchWallet();
            this.$toast.success("Your wallet has been funded", {
              position: "top",
            });
          })
          .catch((error) => {
            console.log(error);
            this.$toast.error(error, {
              position: "top",
            });
          });
      }
    },
    closedPaymentModal() {
      console.log("closed");
    },
    generateReference() {
      let date = new Date();
      return date.getTime().toString();
    },
  },
};
</script>