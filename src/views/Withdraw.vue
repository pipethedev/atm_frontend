<template>
  <body style="background: #e5e5e5; height: 100%">
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="fullPage"
    ></loading>
    <div class="container pb-7">
      <div class="header pt-3">
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
          <a href="#" class="text-center profile">Withdraw your funds</a>
        </div>
      </div>
      <div class="pt-4">
        <Wallet :bal="false" :admin="check" />
      </div>
      <div class="pt-5">
        <p v-if="games.length <= 4" class="text-center text-danger">
          You can't withdraw until you have played 4 games.
        </p>
        <form @submit.prevent="withDrawal">
          <div class="form-group">
            <label for="amount">How much will you like to withdraw ?</label>
            <input
              type="number"
              class="form-control border-0 bg-lightGray"
              id="amount"
              v-model.trim="amount"
            />
          </div>
          <div class="form-group">
            <label for="amount">Enter Account Number</label>
            <input
              type="number"
              class="form-control border-0 bg-lightGray"
              id="amount"
              v-model.trim="account_number"
            />
          </div>
          <div class="form-group">
            <label for="amount">Choose bank</label>
            <select
              class="form-control border-0 bg-lightGray"
              id="amount"
              v-model="bank"
            >
              <option :value="bank.code" v-for="bank in banks" :key="bank.code">
                {{ bank.name }}
              </option>
            </select>
          </div>
          <div class="form-group mt-5" align="center">
            <button
              class="btn btn-block text-white bg-darkBlue"
              :disabled="disabled"
            >
              <span class="text-capitalize">Send to bank</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </body>
</template>

<script>
import Wallet from "@/components/Wallet";
import { mapGetters } from "vuex";
import { page } from "vue-analytics";
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "Withdraw",
  data() {
    return {
      id: "",
      banks: "",
      amount: "",
      account_number: "",
      bank: "044",
      value: "",
      games : [],
      isLoading: false,
      fullPage: true,
      check: false,
      disabled: false,
    };
  },
  components: {
    Wallet,
    Loading,
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  created() {
    this.account_number = this.user.account_number;
    this.bank = this.user.bank_code.toString();
    this.getBanks();
    this.fetchWallet();
    this.getGames();
    if (this.user.admin) {
      this.check = true;
    }
  },
  methods: {
    track() {
      page("/");
    },
    getBanks() {
      axios
        .get("https://api.paystack.co/bank")
        .then((response) => {
          this.banks = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
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
    getGames() {
      axios
        .get(`bet/user/${this.user._id}`)
        .then((response) => {
          this.games = response.data;
          if(response.data.length <= 4){
            this.disabled = true;
          }
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
    withDrawal() {
      this.isLoading = true;
      console.log(`wallet/withdraw/${this.user._id}`);
      if (this.value >= this.amount) {
        axios
          .put(`wallet/withdraw/${this.user._id}`, {
            amount: this.amount,
            account_number: this.account_number,
            bank_code: this.bank,
          })
          .then((response) => {
            if (response.data.json.status == "success") {
              setTimeout(() => {
                this.$toast.success(
                  `A sum of ${this.amount} has been credited to your account`,
                  {
                    position: "top",
                  }
                );
              }, 2000);
              setTimeout(() => {
                location.reload();
              }, 4000);
            } else {
              this.$toast.error(`Invalid account details`, {
                position: "top",
              });
            }
          })
          .catch((err) => {
            this.$toast.error(`Invalid account details`, {
              position: "top",
            });
            console.log(err);
          });
      } else {
        this.$toast.error(`You can't withdraw more than NGN ${this.value}`, {
          position: "top",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-darkBlue {
  background: #0727a6;
  border-radius: 15px;
  width: 241px;
  height: 50px;
}
select {
  font-family: "Product Sans", sans-serif;
}
.bg-darkBlue span {
  font-family: "Product Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #cdd4ed;
}
.profile {
  font-family: "Product Sans", sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  color: #031042;
}
.bg-lightGray {
  background: #cdd4ed;
}
label {
  font-family: "Product Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #708090;
}
</style>