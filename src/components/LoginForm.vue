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
            type="password"
            v-model="password"
            class="js-toggle-password form-control form-control-lg"
            placeholder="8+ characters required"
            :class="{ 'is-invalid': validationStatus($v.password) }"
          />
          <div v-if="!$v.password.required" class="invalid-feedback">
            The password field is required
          </div>
          <div id="changePassTarget" class="input-group-append">
            <a class="input-group-text" href="javascript:;">
              <i id="changePassIcon" class="tio-visible-outlined"></i>
            </a>
          </div>
        </div>
      </div>
      <button class="btn btn-lg btn-block btn-dark">
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
      email : '',
      password : ''
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
      this.signIn({
        email : this.email,
        password : this.password
      }).then(() => {
          this.$toast.success(`${this.email} logged in`, {
              position: 'top'
            });
            setTimeout(() => {
              this.$router.replace({
                name : 'Main'
              })
            },2000)
      }).catch(() => {
        this.seen = false;
            this.$toast.error(`Invalid credentials`, {
              position: 'top'
            });
        })
    },
  },
};
</script>