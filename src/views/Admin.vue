<template>
  <div
    class="footer-offset footer-offset has-navbar-vertical-aside navbar-vertical-aside-show-xl navbar-vertical-aside-closed-mode"
  >
    <AdminHeader />
    <!-- <AdminSideBar/> -->
    <div
      class="js-navbar-vertical-aside-toggle-invoker navbar-vertical-aside-mobile-overlay"
    ></div>

    <main id="content" role="main" class="main pointer-event">
      <!-- Content -->
      <div class="content container-fluid">
        <div class="page-header">
          <div class="row align-items-center">
            <div class="col-sm mb-2 mb-sm-0">
              <div class="page-header-title">
                <router-link :to="{ path: '/' }">
                  <img src="../assets/main.svg" height="90" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <StatsCard />
        <AdminTable />
        <ModalCashout />
      </div>
      <!-- End Content -->
    </main>
  </div>
</template>
<script>
import AdminHeader from "@/components/AdminHeader";
import StatsCard from "@/components/StatsCard";
import AdminTable from "@/components/AdminTable";
import ModalCashout from "@/components/ModalCashout";
export default {
  components: {
    AdminHeader,
    StatsCard,
    AdminTable,
    ModalCashout,
  },
  methods: {
    track() {
      this.$ga.page("/admin");
    },
  },
};
</script>
<style scoped>
@import url("https://htmlstream.com/front-dashboard/assets/css/vendor.min.css");
@import url("https://snappyng.000webhostapp.com/theme.min.css");
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