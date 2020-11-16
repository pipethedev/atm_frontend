<template>
  <div>
    <div class="card_wallet" style="height:auto;"> 
      <div v-if="bal" align="right" class="pt-3 profile_sm">
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
      </div>
      <div v-else class="pt-4"></div>
      <center class="bal">
        <div>
          <p class="text-white" style="font-size:16px;">Wallet Balance</p>
          <h3 class="text-white cash">N {{ value }}</h3>
          <p class="text-white" id="product-sans">+ N 3100</p>
          <div v-if="bal">
            <flutterwave-pay-button
              :tx_ref="generateReference()"
              :amount="0"
              currency="NGN"
              payment_options="card,ussd"
              redirect_url=""
              class="btn bg-white text-dark fund-button text-capitalize pb-4"
              :customer="{
                name: 'Muritala David',
                email: 'davmuri1414@gmail.com',
                phone_number: '08104444843',
              }"
              :customizations="{
                title: 'Allthingsmore',
                description: 'Allthingsmore account funding',
                logo: 'https://cdn.filestackcontent.com/pswiOouHQEei4Atodqov',
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
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
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
      value: 0,
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
  methods: {
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