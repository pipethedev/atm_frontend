<template>
  <div class="about">
    <body class="d-flex align-items-center min-h-100">
      <!-- ========== HEADER ========== -->
      <header class="position-absolute top-0 left-0 right-0 mt-3 mx-3">
        <div class="d-flex d-lg-none justify-content-between">
          <router-link :to="{ path: '/home' }">
            <img
              class="w-100"
              src="../assets/main.svg"
              alt="Image Description"
              style="min-width: 7rem; max-width: 7rem"
            />
          </router-link>
        </div>
      </header>
      <main id="content" role="main" class="main pt-0">
        <!-- Content -->
        <div class="container-fluid px-3">
          <div class="row">
            <!-- Cover -->
            <LoginSideBar></LoginSideBar>
            <!-- End Cover -->
            <div
              class="col-lg-6 d-flex justify-content-center align-items-center min-vh-lg-100"
            >
              <div
                class="w-100 pt-10 pt-lg-7 pb-7 password_box"
                style="max-width: 25rem"
              >
                <!-- Form -->
                <RegisterForm></RegisterForm>
                <!-- End Form -->
              </div>
            </div>
          </div>
          <!-- End Row -->
        </div>
        <!-- End Content -->
      </main>
    </body>
  </div>
</template>
<script>
import LoginSideBar from "@/components/login-sidebar";
import RegisterForm from "@/components/SignupForm";

export default {
  name: "Register",
  components: {
    LoginSideBar,
    RegisterForm,
  },
  methods: {
    track() {
      this.$ga.page("/register");
    },
  },
  metaInfo() {
    return {
      title: "Join us today | A.T.M",
      meta: [
        {
          content: "Create a new A.T.M account",
        },
      ],
    };
  },
};
</script>
<style scoped>
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