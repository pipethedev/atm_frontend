<template>
  <div>
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="fullPage"
    ></loading>
    <div class="container pb-7" style="background: #031042">
      <div class="header pt-3">
        <a href="/home">
          <div class="arrow_back float-left">
            <font-awesome-icon
              icon="arrow-left"
              size="lg"
              style="color: white"
            />
          </div>
        </a>
        <div align="center">
          <a href="/home" class="text-center profile text-white"
            ><b>Profile</b></a
          >
        </div>
      </div>
      <div class="img_info pt-3" align="center">
        <img
          src="https://randomuser.me/api/portraits/men/91.jpg"
          class="img_profile"
        />
        <div class="info pt-2">
          <h3 class="text-white">{{ this.user.name }}</h3>
          <p class="text-white pt-sm-3">{{ this.user.email }}</p>
          <p class="text-white mt-lg-1 pb-lg-3 mt-md-2" style="margin-top: -3%">
            +234{{ this.user.phone_number }}
          </p>
        </div>
      </div>
    </div>
    <!-- <hr /> -->
    <div class="option_list container mt-lg-10 mt-md-6">
      <ul class="list-group border-0" style="margin-top: -12%">
        <li class="list-group-item item pt-5">
          <router-link :to="{ path: '/game_history' }">
            <img
              src="../assets/img/bet_history.svg"
              class="text-info mx-1"
              style=""
            />
            <span class="mx-3 my-4">Bet History</span>
          </router-link>
        </li>
        <li class="list-group-item item">
          <router-link :to="{ path: '/withdraw' }">
            <img src="../assets/img/exit.svg" class="text-info mx-1" style="" />
            <span class="mx-3">Withdraw Funds</span>
          </router-link>
        </li>
        <li class="list-group-item item" @click.prevent="show">
          <img
            src="../assets/img/friends.svg"
            class="text-info mx-1"
            style=""
          />
          <span class="mx-3">Invite Friends</span>
        </li>
        <li class="list-group-item item" @click.prevent="showAlert">
          <img src="../assets/img/logout.svg" class="text-info mx-1" style="" />
          <span class="mx-4">Logout</span>
        </li>
      </ul>
    </div>

    <button
      @click.prevent="moveEdit"
      class="btn btn-block btn-large btn-primary border-0"
      style="
        background: #031042;
        border-radius: 50%;
        height: 60px;
        width: 60px;
        position: fixed;
        bottom: 4%;
        right: 2%;
      "
    >
      <div style="padding-left: 4px; padding-top: 1px">
        <font-awesome-icon icon="pen" class="mr-1" size="lg" />
      </div>
    </button>
    <div class="container">
      <modal
        name="modal-cashout"
        :height="243"
        @opened="opened"
        :adaptive="adaptive"
        :draggable="draggable"
      >
        <div
          class="container"
          style="overflow: auto; border-radius: 3px; background: #f4f4f4"
        >
          <div class="coverage">
            <h1 class="text-center pt-4">Share</h1>
            <button
              @click.prevent="hide"
              class="fancybox-close-small"
              title="Close"
              id="link-close"
            >
              ×
            </button>
            <div align="center">
              <div class="container">
                <div class="row pt-2 pb-8">
                  <a
                    href="javascript:void(window.open('https://www.facebook.com/sharer.php?u=' + encodeURIComponent(`http://localhost:8080/register?ref=${this.user._id}`) + '?t=' + encodeURIComponent(document.title),'_blank'))"
                    class="col"
                  >
                    <font-awesome-icon
                      :icon="{ prefix: 'fab', iconName: 'facebook' }"
                      class="social"
                      size="4x"
                      color="#3b5998"
                    />
                  </a>
                  <a
                    href="javascript:void(window.open('https://twitter.com/share?url=' + encodeURIComponent(`http://localhost:8080/register?ref=${this.user._id}`) + '&text=' + encodeURIComponent(document.title) + '_blank'))"
                    class="col"
                  >
                    <font-awesome-icon
                      :icon="{ prefix: 'fab', iconName: 'twitter' }"
                      class="social"
                      color="#55acee"
                      size="4x"
                    />
                  </a>
                  <a
                    href="javascript:void(window.open('https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(`http://localhost:8080/register?ref=${this.user._id}`) + '&title=' + encodeURIComponent(document.title),'_blank'))"
                    class="col"
                  >
                    <font-awesome-icon
                      :icon="{ prefix: 'fab', iconName: 'linkedin' }"
                      class="social"
                      color="#007bb5"
                      size="4x"
                    />
                  </a>
                  <a
                    href="javascript:void(window.open('https://pinterest.com/pin/create/bookmarklet/?url=' + encodeURIComponent(`http://localhost:8080/register?ref=${this.user._id}`) + '&description=' + encodeURIComponent(document.title),'_blank'))"
                    class="col"
                  >
                    <font-awesome-icon
                      :icon="{ prefix: 'fab', iconName: 'pinterest' }"
                      class="social"
                      color="#cb2027"
                      size="4x"
                    />
                  </a>
                </div>
              </div>
            </div>
            <input
              class="fancybox-share__input pb-1"
              type="text"
              style="margin-top: -5%"
              v-model="link"
            />
          </div>
        </div>
      </modal>
    </div>
  </div>
</template>
<style scoped>
li {
  cursor: pointer;
}
@import url("https://christiansocials.olaniyiking.com/css/bootstrap.min.css");
@import url("https://christiansocials.olaniyiking.com/css/style.min.css");
@import url("https://christiansocials.olaniyiking.com/css/responsive.min.css");
@import url("../assets/css/second.css");
</style>
<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  data() {
    return {
      link: ``,
      adaptive: true,
      draggable: true,
      opened: true,
      expired: false,
      isLoading: false,
      fullPage: true,
    };
  },

  components: {
    Loading,
  },
  created() {
    this.link = `http://localhost:8080/register?ref=${this.user._id}`;
    console.log(this.user);
  },
  methods: {
    show() {
      this.$modal.show("modal-cashout", { draggable: true });
    },
    hide() {
      this.$modal.hide("modal-cashout");
    },
    leave() {
      this.$router.replace({
        name: "Main",
      });
    },
    moveEdit() {
      this.$router.push("edit");
      // this.$router.push({
      //   name: "Settings",
      // });
    },
    ...mapActions({
      signOutAction: "auth/signOut",
    }),
    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "Login",
        });
      });
    },
    withDraw() {
      this.isLoading = true;
    },
    showAlert() {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#031042",
        cancelButtonColor: "#fdcb6e",
        confirmButtonText: "Yes, log out!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal.fire(
            "Logged Out!",
            "You have successfully logged out.",
            "success"
          );
          this.signOut();
        }
      });
    },
    track() {
      this.$ga.page("/profile");
    },
  },
  metaInfo() {
    return {
      title: `Profile | A.T.M`,
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
