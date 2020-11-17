<template>
  <div>
    <header
      id="header"
      class="navbar navbar-expand-lg navbar-fixed navbar-height navbar-flush navbar-container navbar-bordered"
    >
      <div class="navbar-nav-wrap">
        <div class="navbar-brand-wrapper">
          <!-- Logo -->
          <a class="navbar-brand" href="./" aria-label="Front">
            <img
              class="navbar-brand-logo"
              src="../assets/main.svg"
              alt="Logo"
            />
            <img
              class="navbar-brand-logo-mini"
              src="../assets/main.svg"
              alt="Logo"
            />
          </a>
          <!-- End Logo -->
        </div>

        <div class="navbar-nav-wrap-content-left">
          <!-- Navbar Vertical Toggle -->
          <button
            type="button"
            class="js-navbar-vertical-aside-toggle-invoker close mr-3"
          >
            <i
              class="tio-first-page navbar-vertical-aside-toggle-short-align"
              data-toggle="tooltip"
              data-placement="right"
              title=""
              data-original-title="Collapse"
            ></i>
          </button>
          <!-- End Navbar Vertical Toggle -->
        </div>

        <!-- Secondary Content -->
        <div class="navbar-nav-wrap-content-right">
          <!-- Navbar -->
          <ul class="navbar-nav align-items-center flex-row">
            <li
              class="nav-item d-none d-sm-inline-block"
              v-click-outside="hide"
              @click="toggle()"
            >
              <!-- Notification -->
              <div class="hs-unfold">
                <a
                  class="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle hs-active"
                >
                  <i class="tio-notifications-on-outlined"></i>
                  <span
                    class="btn-status btn-sm-status btn-status-danger"
                  ></span>
                </a>
              </div>
              <!-- End Notification -->
            </li>

            <li class="nav-item d-none d-sm-inline-block">
              <!-- Notification -->
              <slide-y-up-transition v-show="show">
                <Notification />
              </slide-y-up-transition>

              <!-- End Notification -->
            </li>

            <li class="nav-item">
              <!-- Account -->
              <div class="hs-unfold">
                <router-link
                  class="js-hs-unfold-invoker navbar-dropdown-account-wrapper"
                  :to="{ path: '/profile' }"
                >
                  <div class="avatar avatar-sm avatar-circle">
                    <img
                      class="avatar-img"
                      src="../assets/img/160x160/img6.jpg"
                      alt="Image Description"
                    />
                    <span
                      class="avatar-status avatar-sm-status avatar-status-success"
                    ></span>
                  </div>
                </router-link>

                <div
                  id="accountNavbarDropdown"
                  class="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right navbar-dropdown-menu navbar-dropdown-account hs-unfold-hidden hs-unfold-content-initialized hs-unfold-css-animation animated"
                  style="width: 16rem; animation-duration: 300ms"
                  data-hs-target-height="394.281"
                  data-hs-unfold-content=""
                  data-hs-unfold-content-animation-in="slideInUp"
                  data-hs-unfold-content-animation-out="fadeOut"
                >
                  <div class="dropdown-item">
                    <div class="media align-items-center">
                      <div class="avatar avatar-sm avatar-circle mr-2">
                        <img
                          class="avatar-img"
                          src="../assets/img/160x160/img6.jpg"
                          alt="Image Description"
                        />
                      </div>
                      <div class="media-body">
                        <span class="card-title h5">Mark Williams</span>
                        <span class="card-text">mark@example.com</span>
                      </div>
                    </div>
                  </div>

                  <div class="dropdown-divider"></div>

                  <!-- Unfold -->
                  <div class="hs-unfold w-100">
                    <a
                      class="js-hs-unfold-invoker navbar-dropdown-submenu-item dropdown-item d-flex align-items-center"
                      href="javascript:;"
                      data-hs-unfold-options='{
                     "target": "#navSubmenuPagesAccountDropdown1",
                     "event": "hover"
                   }'
                      data-hs-unfold-target="#navSubmenuPagesAccountDropdown1"
                      data-hs-unfold-invoker=""
                    >
                      <span class="text-truncate pr-2" title="Set status"
                        >Set status</span
                      >
                      <i
                        class="tio-chevron-right navbar-dropdown-submenu-item-invoker ml-auto"
                      ></i>
                    </a>

                    <div
                      id="navSubmenuPagesAccountDropdown1"
                      class="hs-unfold-content hs-unfold-has-submenu dropdown-unfold dropdown-menu navbar-dropdown-sub-menu hs-unfold-hidden hs-unfold-content-initialized hs-unfold-simple"
                      data-hs-target-height="0"
                      data-hs-unfold-content=""
                    >
                      <a class="dropdown-item" href="#">
                        <span class="legend-indicator bg-success mr-1"></span>
                        <span class="text-truncate pr-2" title="Available"
                          >Available</span
                        >
                      </a>
                      <a class="dropdown-item" href="#">
                        <span class="legend-indicator bg-danger mr-1"></span>
                        <span class="text-truncate pr-2" title="Busy"
                          >Busy</span
                        >
                      </a>
                      <a class="dropdown-item" href="#">
                        <span class="legend-indicator bg-warning mr-1"></span>
                        <span class="text-truncate pr-2" title="Away"
                          >Away</span
                        >
                      </a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">
                        <span class="text-truncate pr-2" title="Reset status"
                          >Reset status</span
                        >
                      </a>
                    </div>
                  </div>
                  <!-- End Unfold -->

                  <a class="dropdown-item" href="#">
                    <span
                      class="text-truncate pr-2"
                      title="Profile &amp; account"
                      >Profile &amp; account</span
                    >
                  </a>

                  <a class="dropdown-item" href="#">
                    <span class="text-truncate pr-2" title="Settings"
                      >Settings</span
                    >
                  </a>

                  <div class="dropdown-divider"></div>

                  <a class="dropdown-item" href="#">
                    <div class="media align-items-center">
                      <div
                        class="avatar avatar-sm avatar-dark avatar-circle mr-2"
                      >
                        <span class="avatar-initials">HS</span>
                      </div>
                      <div class="media-body">
                        <span class="card-title h5"
                          >Htmlstream
                          <span
                            class="badge badge-primary badge-pill text-uppercase ml-1"
                            >PRO</span
                          ></span
                        >
                        <span class="card-text">hs.example.com</span>
                      </div>
                    </div>
                  </a>

                  <div class="dropdown-divider"></div>
                </div>
              </div>
              <!-- End Account -->
            </li>
          </ul>
          <!-- End Navbar -->
        </div>
        <!-- End Secondary Content -->
      </div>
    </header>
  </div>
</template>

<script>
import Notification from "@/components/Notification.vue";
import { SlideYUpTransition } from "vue2-transitions";
import ClickOutside from 'vue-click-outside'
export default {
  name: "AdminHeader",
  data() {
    return {
      show: false,
    };
  },
  components: {
    Notification,
    SlideYUpTransition,
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    hide() {
      this.show = false;
    },
  },
  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  },

  // do not forget this section
  directives: {
    ClickOutside,
  },
};
</script>