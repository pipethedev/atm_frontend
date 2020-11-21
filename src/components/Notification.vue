<template>
  <div>
    <div class="hs-unfold" style="z-index:999999;">
      <div
        id="notificationDropdown"
        class="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right navbar-dropdown-menu hs-unfold-content-initialized hs-unfold-css-animation animated"
        style="width: 25rem; animation-duration: 300ms"
        data-hs-target-height="518"
        data-hs-unfold-content=""
        data-hs-unfold-content-animation-in="slideInUp"
        data-hs-unfold-content-animation-out="fadeOut"
      >
        <!-- Header -->
        <div class="card-header">
          <span class="card-title h4">Notifications</span>
        </div>
        <!-- End Header -->

        <!-- Nav -->
        <ul
          class="nav nav-tabs nav-justified"
          id="notificationTab"
          role="tablist"
        >
          <li class="nav-item">
            <a
              class="nav-link"
              id="notificationNavOne-tab"
              data-toggle="tab"
              href="#notificationNavOne"
              role="tab"
              aria-controls="notificationNavOne"
              aria-selected="true"
              >Messages ({{ this.info.length }})</a
            >
          </li>
        </ul>
        <!-- End Nav -->

        <!-- Body -->
        <div class="card-body-height">
          <!-- Tab Content -->
          <div class="tab-content container" id="notificationTabContent">
            <div
              class="tab-pane fade show active"
              style="margin-left: -2%"
              id="notificationNavOne"
              role="tabpanel"
              aria-labelledby="notificationNavOne-tab"
            >
              <ul class="list-group list-group-flush navbar-card-list-group">
                <!-- Item -->
                <li
                  class="list-group-item custom-checkbox-list-wrapper"
                  v-for="not in info"
                  :key="not._id"
                >
                  <div class="row">
                    <div class="col-auto position-static">
                      <div class="d-flex align-items-center">
                        <div
                          class="custom-control custom-checkbox custom-checkbox-list"
                        >
                          <input
                            type="checkbox"
                            class="custom-control-input bg-warning"
                            id="notificationCheck1"
                            checked=""
                          />
                          <label
                            class="custom-control-label"
                            for="notificationCheck1"
                          ></label>
                          <span
                            class="custom-checkbox-list-stretched-bg"
                          ></span>
                        </div>
                        <div
                          class="avatar avatar-sm avatar-circle"
                          v-if="not.type == 'welcome'"
                        >
                          <img
                            class="avatar-img"
                            src="https://www.flaticon.com/svg/static/icons/svg/1298/1298015.svg"
                            alt="Image Description"
                          />
                        </div>
                        <div
                          class="avatar avatar-sm avatar-circle"
                          v-else-if="not.type == 'password_change'"
                        >
                          <img
                            class="avatar-img"
                            src="https://www.flaticon.com/svg/static/icons/svg/3606/3606763.svg"
                            alt="Image Description"
                          />
                        </div>
                        <div
                          class="avatar avatar-sm avatar-circle"
                          v-else-if="not.type == 'update_change'"
                        >
                          <img
                            class="avatar-img"
                            src="https://www.flaticon.com/svg/static/icons/svg/3338/3338663.svg"
                            alt="Image Description"
                          />
                        </div>
                        <div
                          class="avatar avatar-sm avatar-circle"
                          v-else-if="not.type == 'cashout'"
                        >
                          <img
                            class="avatar-img"
                            src="https://www.flaticon.com/svg/static/icons/svg/3745/3745458.svg"
                            alt="Image Description"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col ml-n3">
                      <span class="card-title h5">{{ not.message }}</span>
                      <p class="card-text font-size-sm">
                        {{ not.main }}
                      </p>
                    </div>
                    <small class="col-auto text-muted " style="font-size:12px;">{{not.createdAt | moment("from") }}</small>
                  </div>
                  <a class="stretched-link" href="#"></a>
                </li>
                <!-- End Item -->
              </ul>
            </div>
          </div>
          <!-- End Tab Content -->
        </div>
        <!-- End Body -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "Notifcation",
  data() {
    return {
      id: "",
      info: [],
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  created() {
    this.id = this.user._id;
    this.getMessages();
  },
  methods: {
    getMessages() {
      axios
        .get("users/notifications/" + this.id)
        .then((response) => {
          this.info = response.data;
          console.log(response.data);
          // this.infos = ;
        })
        .catch(function (error) {
          console.log(error);
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