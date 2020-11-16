<template>
  <div>
    <form class="js-validate" v-on:submit.prevent="submit">
      <div class="text-left mb-5">
        <h1 class="display-4">Reset Password</h1>
        <p>Create a new preferred password</p>
      </div>

      <!-- Form Group -->
      <div class="js-form-message form-group">
        <label class="input-label" for="signupSrEmail">Password</label>
        <input
          type="password"
          class="form-control form-control-lg"
          placeholder="*******"
          v-model.trim="$v.password.$model"
          :class="{ 'is-invalid': validationStatus($v.password) }"
        />
        <div class="invalid-feedback" v-if="!$v.password.required">
          Password is required.
        </div>
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Password must have at least
          {{ $v.password.$params.minLength.min }} letters.
        </div>
      </div>
      <!-- End Form Group -->

      <!-- Form Group -->
      <div class="js-form-message form-group">
        <label class="input-label" for="signupSrEmail">Confirm Password</label>
        <input
          type="password"
          class="form-control form-control-lg"
          placeholder="*******"
          v-model.trim="$v.repeatPassword.$model"
          :class="{ 'is-invalid': validationStatus($v.repeatPassword) }"
        />
        <div class="invalid-feedback" v-if="!$v.repeatPassword.sameAsPassword">
          Passwords must be identical.
        </div>
      </div>
      <!-- End Form Group -->

      <button class="btn btn-lg btn-block btn-dark">
        <div align="center" v-if="seen">
          <fulfilling-bouncing-circle-spinner
            :animation-duration="4000"
            :size="24"
            color="#fff"
          />
        </div>
        <div v-else>Check</div>
      </button>
    </form>
  </div>
</template>
<script>
import { FulfillingBouncingCircleSpinner } from "epic-spinners";
import { required, sameAs, minLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "ResetBox",
  data() {
    return {
      password: "",
      repeatPassword: "",
    };
  },
  validations: {
    password: {
      required,
      minLength: minLength(7),
    },
    repeatPassword: {
      sameAsPassword: sameAs("password"),
    },
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  components: {
    FulfillingBouncingCircleSpinner,
  },
  methods: {
    validationStatus(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      this.seen = true;
      axios
        .put("user/reset", {
          token: this.$route.query.token,
          password: this.password,
        })
        .then((response) => {
          if (response.status == 204) {
            this.$toast.success(`Password Changed Successfully`, {
              position: "top",
            });
            setTimeout(() => {
              this.$router.replace({
                name : 'Login'
              })
            },3000)
          }
        }).catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>