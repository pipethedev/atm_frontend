<template>
  <div style="background: #E5E5E5; height: 100%">
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
        <Wallet :bal="false" />
      </div>
      <div class="pt-5">
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
            <button class="btn btn-block text-white bg-darkBlue">
              <span class="text-capitalize">Send to bank</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Wallet from "@/components/Wallet";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "Withdraw",
  data() {
    return {
      banks: "",
      amount: "",
      account_number: "",
      bank: "",
      value: "",
    };
  },
  components: {
    Wallet,
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  created() {
    this.getBanks();
    this.fetchWallet();
    this.account_number = this.user.account_number;
    this.bank = this.user.bank_code;
  },
  methods: {
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
    withDrawal() {
      if (this.value >= this.amount) {
        axios
          .put(`wallet/withdraw/${this.user._id}`, {
            amount: this.amount,
            account_number: this.account_number,
            bank_code: this.bank,
          })
          .then((response) => {
            console.log(response);
            if (response.data.json.status == "success") {
              this.$toast.success(
                `A sum of ${this.amount} has been credited to your account`,
                {
                  position: "top",
                }
              );
              setTimeout(() => {
                location.reload();
              }, 3000);
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
  background: #0727A6;
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
  color: #CDD4ED;
}
.profile {
  font-family: "Product Sans", sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  color: #031042;
}
.bg-lightGray {
  background: #CDD4ED;
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