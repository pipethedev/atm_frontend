<template>
  <div class="row gx-2 gx-lg-3">
    <div class="col-sm-6 col-lg-4 mb-3 mb-lg-5">
      <!-- Card -->
      <a class="card card-hover-shadow h-100" href="#">
        <div class="card-body">
          <h6 class="card-subtitle">Total Users</h6>

          <div class="row align-items-center gx-2 mb-1">
            <div class="col-6">
              <span class="card-title h2">{{ this.users.length }}</span>
            </div>

            <div class="col-6">
              <!-- Chart -->
              <div class="chartjs-custom" style="height: 3rem">
                <div class="chartjs-size-monitor">
                  <div class="chartjs-size-monitor-expand">
                    <div class=""></div>
                  </div>
                  <div class="chartjs-size-monitor-shrink">
                    <div class=""></div>
                  </div>
                </div>
              </div>
              <!-- End Chart -->
            </div>
          </div>
          <!-- End Row -->

          <span class="badge badge-soft-warning">
            <i class="tio-trending-up"></i> 12.5%
          </span>
          <span class="text-body font-size-sm ml-1">from 70,104</span>
        </div>
      </a>
      <!-- End Card -->
    </div>

    <div class="col-sm-6 col-lg-4 mb-3 mb-lg-5">
      <!-- Card -->
      <a class="card card-hover-shadow h-100" href="#">
        <div class="card-body">
          <h6 class="card-subtitle">Total Earnings</h6>

          <div class="row align-items-center gx-2 mb-1">
            <div class="col-6">
              <span class="card-title h2">NGN {{ user.wallet_value + this.value }}</span>
            </div>

            <div class="col-6"> 
              <!-- Chart -->
              <div class="chartjs-custom" style="height: 3rem">
                <div class="chartjs-size-monitor">
                  <div class="chartjs-size-monitor-expand">
                    <div class=""></div>
                  </div>
                  <div class="chartjs-size-monitor-shrink">
                    <div class=""></div>
                  </div>
                </div>
              </div>
              <!-- End Chart -->
            </div>
          </div>
          <!-- End Row -->

          <span class="badge badge-soft-warning">
            <i class="tio-trending-up"></i> 1.7%
          </span>
          <span class="text-body font-size-sm ml-1">from 29.1%</span>
        </div>
      </a>
      <!-- End Card -->
    </div>

    <div class="col-sm-6 col-lg-4 mb-3 mb-lg-5">
      <!-- Card -->
      <a class="card card-hover-shadow h-100" href="#">
        <div class="card-body">
          <h6 class="card-subtitle">Avg. Color Selected</h6>

          <div class="row align-items-center gx-2 mb-1">
            <div class="col-6">
              <span class="card-title h2 text-capitalize"
                ><svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  :fill="item"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="7.5" cy="7.5" r="7.5" :fill="item" />
                </svg>
                {{ item }}</span
              >
            </div>

            <div class="col-6">
              <!-- Chart -->
              <div class="chartjs-custom" style="height: 3rem">
                <div class="chartjs-size-monitor">
                  <div class="chartjs-size-monitor-expand">
                    <div class=""></div>
                  </div>
                  <div class="chartjs-size-monitor-shrink">
                    <div class=""></div>
                  </div>
                </div>
              </div>
              <!-- End Chart -->
            </div>
          </div>
          <!-- End Row -->

          <span class="badge badge-soft-warning">
            <i class="tio-trending-up"></i> {{ mode }}
          </span>
        </div>
      </a>
      <!-- End Card -->
    </div>
  </div>
</template>
<style scoped>
@import url("https://htmlstream.com/front-dashboard/assets/css/vendor.min.css");
@import url("https://htmlstream.com/front-dashboard/assets/css/theme.min.css?v=1.0");
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300&display=swap");
body {
  font-family: "Product Sans", sans-serif;
}
h6,
h1,
span {
  font-family: "Nunito", sans-serif;
}
</style>
<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "StatsCard",
  data() {
    return {
      users: "",
      item : '',
      mode : '',
      value : ''
    };
  },
  created() {
    this.getUsers();
    this.getColors();
    this.fetchWallet();
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {
    getUsers() {
      axios
        .get(`user/all`)
        .then((response) => {
          console.log(response);
          this.users = response.data;
        })
        .catch((err) => {
          console.log(err);
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
    getColors() {
      axios
        .get("user/colors")
        .then((response) => {
          this.item = response.data.item;
          this.mode = response.data.mode;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
