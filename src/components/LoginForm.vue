<template>
  <div>
    <form class="js-validate" v-on:submit.prevent="submit">
      <div class="text-center mb-5">
        <h1 class="display-4">Sign in</h1>
        <p>
          Don't have an account yet?
          <router-link :to="{ path: '/register' }">Sign up here</router-link>
        </p>
      </div>

      <!-- Form Group -->
      <div class="js-form-message form-group">
        <label class="input-label" for="signupSrEmail">Your email</label>
        <input
          type="email"
          class="form-control form-control-lg"
          placeholder="johndoe@example.com"
          v-model="email"
          :class="{ 'is-invalid': validationStatus($v.email) }"
        />
        <div v-if="!$v.email.required" class="invalid-feedback">
          The email field is required
        </div>
      </div>
      <!-- End Form Group -->

      <!-- Form Group -->
      <div class="js-form-message form-group">
        <label class="input-label" for="signupSrPassword" tabindex="0">
          <span class="d-flex justify-content-between align-items-center">
            Password

            <router-link
              class="input-label-secondary"
              :to="{ path: '/forgot' }"
              >Forgot Password?</router-link
            >
          </span>
        </label>

        <div class="input-group input-group-merge">
          <input
            v-model="password"
            :type="passwordFieldType" 
            class="js-toggle-password form-control form-control-lg"
            placeholder="8+ characters required"
            :class="{ 'is-invalid': validationStatus($v.password) }"
          />
          <div v-if="!$v.password.required" class="invalid-feedback">
            The password field is required
          </div>
          <div id="changePassTarget" class="input-group-append">
            <a class="input-group-text" href="#" @click="switchVisibility">
              <i id="changePassIcon" :class="[passwordSeen ? 'tio-visible-outlined' : 'tio-invisible']"></i>
            </a>
          </div>
        </div>
      </div>
      <button class="btn btn-lg btn-block btn-dark" :disabled="isActive">
        <div align="center" v-if="seen">
          <fulfilling-bouncing-circle-spinner
            :animation-duration="4000"
            :size="24"
            color="#fff"
          />
        </div>
        <div v-else>Login</div>
      </button>
    </form>
  </div>
</template>
<script>
import { FulfillingBouncingCircleSpinner } from "epic-spinners";
import { required } from "vuelidate/lib/validators";
import { mapActions } from 'vuex'

export default {
  name: "LoginForm",
  data() {
    return {
      seen: false,
      passwordSeen :false,
      email : '',
      password : '',
      isActive: false,
      passwordFieldType: 'password'
    };
  },
  validations: {
    email: {
      required,
    },
    password: {
      required,
    },
  },
  components: {
    FulfillingBouncingCircleSpinner,
  },
  methods: {
    switchVisibility() {
      this.passwordSeen = !this.passwordSeen;
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    validationStatus(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    ...mapActions({
        signIn: 'auth/signIn'
    }),
    submit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      this.seen = true;
      this.isActive = true;
      this.signIn({
        email : this.email,
        password : this.password
      }).then(() => {
          this.$toast.success(`${this.email} logged in`, {
              position: 'top'
            });
            setTimeout(() => {
              window.location.href = '/home';
            },2000)
      }).catch(() => {
        this.seen = false;
        this.isActive = false;
            this.$toast.error(`Invalid credentials`, {
              position: 'top'
            });
        })
    },
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