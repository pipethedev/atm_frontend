<template>
  <div class="about">
    <body class="d-flex align-items-center min-h-100">
      <!-- ========== HEADER ========== -->
      <header class="position-absolute top-0 left-0 right-0 mt-3 mx-3">
        <div class="d-flex d-lg-none justify-content-between">
          <a href="index.html">
            <img
              class="w-100"
              src="../assets/main.svg"
              alt="Image Description"
              style="min-width: 7rem; max-width: 7rem"
            />
          </a>
        </div>
      </header>
      <!-- ========== END HEADER ========== -->

      <!-- ========== MAIN CONTENT ========== -->
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
              <div class="w-100 pt-10 pt-lg-7 pb-7 password_box" style="max-width: 25rem;">
                <ForgotPassword />
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
import ForgotPassword from '@/components/ForgotPassword'
export default {
  components: {
    LoginSideBar,
    ForgotPassword
  },
  metaInfo() {
    return {
      title: "Forgot Password | A.T.M Home",
      meta: [
        {
          vmid: "description",
          name: "description",
          content:
            "Reset your A.T.M password if you have forgotten the old one",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .password_box {
    margin-top:23%;
  }
}
</style>