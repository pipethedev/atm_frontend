<template>
  <div>
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="fullPage"
    ></loading>
    <Navbar></Navbar>
    <div class="card mb-3 mb-lg- container mt-4" style="border-radius: 0px">
      <div class="card-header">
        <h2 class="card-title h4">Basic information</h2>
      </div>

      <!-- Body -->
      <div class="card-body">
        <!-- Form -->
        <form @submit.prevent="updateProfile">
          <!-- Form Group -->
          <div class="row form-group">
            <label for="emailLabel" class="col-sm-3 col-form-label input-label"
              >Full Name</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control bg-lightGray border-0"
                placeholder="John Doe"
                v-model.trim="name"
              />
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="row form-group">
            <label for="phoneLabel" class="col-sm-3 col-form-label input-label"
              >Email Adress</label
            >

            <div class="col-sm-9">
              <input
                type="email"
                class="js-masked-input form-control bg-lightGray border-0"
                id="phoneLabel"
                placeholder="johndoe@email.com"
                v-model.trim="email"
              />
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="row form-group">
            <label
              for="organizationLabel"
              class="col-sm-3 col-form-label input-label"
              >Phone Number</label
            >

            <div class="col-sm-9">
              <input
                type="phone"
                class="form-control bg-lightGray border-0"
                id="organizationLabel"
                v-model.trim="phone_number"
                placeholder="+2348000000000"
              />
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="row form-group">
            <label
              for="departmentLabel"
              class="col-sm-3 col-form-label input-label"
              >Account Number</label
            >

            <div class="col-sm-9">
              <input
                type="number"
                class="form-control bg-lightGray border-0"
                v-model.trim="account"
                placeholder="Bank Account Number"
              />
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="row form-group">
            <label
              for="locationLabel"
              class="col-sm-3 col-form-label input-label"
              >Bank Code</label
            >

            <div class="col-sm-9">
              <div class="mb-3">
                <select
                  class="form-control form-control-lg bg-lightGray border-0"
                  v-model.trim="bank_code"
                >
                  <option
                    :value="bank.code"
                    v-for="bank in banks"
                    :key="bank.code"
                  >
                    {{ bank.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <!-- End Form Group -->

          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-dark">Save changes</button>
          </div>
        </form>
        <!-- End Form -->
      </div>
      <!-- End Body -->
    </div>
  </div>
</template>
<style scoped>
/* @import url("https://htmlstream.com/front-dashboard/assets/css/vendor.min.css"); */
@import url("https://snappyng.000webhostapp.com/theme.min.css");
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Product Sans", sans-serif;
}
.Password__field {
  background-color: #f1f1f1;
  border: 1px solid #f1f1f1;
  border-radius: 2px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 13px;
  width: 100%;
}
.bg-lightGray {
  background: #cdd4ed;
}
</style>
<script>
import { mapGetters } from "vuex";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "Settings",
  data() {
    return {
      banks: "",
      name: "",
      email: "",
      phone_number: "",
      account: "",
      bank_code: "",
      isLoading: false,
      fullPage: true,
    };
  },
  created() {
    this.getBanks();
    console.log(this.user);
    this.name = this.user.name;
    this.email = this.user.email;
    this.phone_number = this.user.phone_number;
    this.account = this.user.account_number;
    this.bank_code = this.user.bank_code;
  },
  components: {
    Navbar,
    Loading,
  },
  methods: {
    updateProfile() {
      axios
        .put(`users/${this.user._id}`, {
          name: this.name,
          email: this.email,
          account_number: this.account,
          phone_number: this.phone_number,
          bank_code: this.bank_code,
        })
        .then((response) => {
          this.isLoading = true;
          if (response.data.status == 200) {
            localStorage.setItem("token", response.data.token);
            this.$toast.success(`Account successfully updated`, {
              position: "top",
            });
            setTimeout(() => {
              this.isLoading = false;
            }, 2500);
            setTimeout(() => {
              window.location.reload();
            }, 3500);
          }
        })
        .catch((error) => {
          console.log(error);
        });
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
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  metaInfo() {
    return {
      title: `${this.name} | A.T.M`,
      meta: [
        {
          vmid: "",
          name: "settings",
          content: "Welcome to A.T.M, earn money by predictions",
        },
      ],
    };
  },
};
</script>