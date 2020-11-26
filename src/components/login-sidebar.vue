<template>
    <div
      class="col-lg-6 d-none d-lg-flex justify-content-center align-items-center min-vh-lg-100 position-relative bg-light px-0"
    >
      <!-- Logo & Language -->
      <div class="position-absolute top-0 left-0 right-0 mt-3 mx-3">
        <div class="d-none d-lg-flex justify-content-between">
          <router-link :to="{ path: '/' }">
            <img
              class="w-100"
              src="../assets/main.svg"
              alt="Image Description"
              style="min-width: 4rem; max-width: 4rem"
            />
          </router-link>
        </div>
      </div>
      <!-- End Logo & Language -->

      <div style="max-width: 23rem">
        <div class="text-center mb-5">
          <img
            class="img-fluid"
            src="../assets/svg/illustrations/chat.svg"
            alt="Image Description"
            style="width: 12rem"
          />
        </div>

        <div class="mb-5">
          <h2 class="display-4">Earn money today:</h2>
        </div>

        <!-- List Checked -->
        <ul
          class="list-checked list-checked-lg list-checked-info list-unstyled-py-4"
        >
          <li class="list-checked-item">
            <span class="d-block font-weight-bold mb-1">Cash out</span>
            Earn after you make a correct prediction
          </li>

          <li class="list-checked-item">
            <span class="d-block font-weight-bold mb-1">Secured payment</span>
            Your wallet is protected and can be funded easily
          </li>
        </ul>
      </div>
    </div>
</template>
<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");
@import url("../assets/css/style.css");
@import url("../assets/css/docs.css");
@import url("../assets/css/vendor.min.css");
@import url("https://snappyng.000webhostapp.com/theme.minc619.css");
@media only screen and (max-width: 600px) {
  .password_box {
    margin-top: 23%;
  }
}
</style>
<script>
export default {
  name: "LoginSideBar",
  props: {},
};
</script>