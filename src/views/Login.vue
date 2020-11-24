<template>
  <div class="about">
  <body class="d-flex align-items-center min-h-100">
    <!-- ========== HEADER ========== -->
    <header class="position-absolute top-0 left-0 right-0 mt-3 mx-3">
      <div class="d-flex d-lg-none justify-content-between">
        <router-link :to="{ path: '/register' }">
          <img class="w-100" src="../assets/main.svg" alt="Image Description" style="min-width: 7rem; max-width: 7rem;">
        </router-link>

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

          <div class="col-lg-6 d-flex justify-content-center align-items-center min-vh-lg-100">
            <div class="w-100 pt-10 pt-lg-7 pb-7 password_box" style="max-width: 25rem;">
              <LoginForm/>
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
import LoginSideBar from '@/components/login-sidebar';
import LoginForm from '@/components/LoginForm';
export default {
  name : "Login",
  components : {
    LoginSideBar,
    LoginForm
  },
      metaInfo() {
        return {
        title: "Login | A.T.M",
        meta: [
            {
            content:
                "Login to your A.T.M account"
            }
        ]
        };
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
@import url('../assets/css/style.css');
@import url('../assets/css/docs.css');
@import url('../assets/css/vendor.min.css');
@import url('https://snappyng.000webhostapp.com/theme.minc619.css');
@media only screen and (max-width: 600px) {
  .password_box {
    margin-top:23%;
  }
}
</style>