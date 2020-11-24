<template>
  <div>
    <slide-y-up-transition :duration="200">
      <div
      v-show="show"
        class="md:flex pt-10 md:flex-row w-100"
        style="position: fixed; top: 0; left: 0; z-index:50;"
      >
        <div
          class="flex flex-col w-full md:w-64 text-gray-700 bg-dark dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0"
        >
          <div
            class="text-white pt-3"
            style="padding-right: 20px; font-size: 24px; cursor:pointer;"
            align="right"
            @click="toggleNav()"
          >
            &times;
          </div>
          <div
            class="flex-shrink-0 px-8 flex flex-row items-center justify-between"
          ></div>
          <div class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
            <router-link
              class="d-block  px-4 py-2 mt-2 text-sm font-semibold text-gray-900 text-white hover:text-dark rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              :to="{path : '/login'}"
              >Login</router-link
            >
            <router-link
              class="d-block  px-4 py-2 mt-2 text-sm font-semibold text-gray-900 text-white hover:text-dark rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              :to="{path : '/register'}"
              >register</router-link
            >
          </div>
        </div>
      </div>
    </slide-y-up-transition>
    <nav
      class="navbar navbar-expand-lg navbar-light py-3"
      aria-label="Main navigation"
    >
      <div class="container">
        <router-link class="navbar-brand text-dark" :to="{path : '/home'}">
          <!-- <img src="https://www.flaticon.com/svg/static/icons/svg/755/755195.svg" class="col-2" height="50"/> -->
          <h1>A.T.M</h1>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <font-awesome-icon icon="bars" size="lg" @click="toggleNav()"/>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav align-items-lg-center pt-3 pt-lg-0 ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/help">Help</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<style lang="css" scoped>
/* @import url("https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"); */
</style>
<script>
import { SlideYUpTransition } from "vue2-transitions";
export default {
  name: "Navbar",
  data() {
    return {
      show: false,
    };
  },
  components: {
    SlideYUpTransition
  },
  methods: {
    toggleNav(){
      this.show = !this.show;
    }
  }
};
</script>