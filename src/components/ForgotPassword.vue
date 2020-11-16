<template>
  <div>
    <form class="js-validate" v-on:submit.prevent="submit">
      <div class="text-left mb-5">
        <h1 class="display-4">Forgot Password</h1>
        <p>Reset your password now</p>
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

      <button class="btn btn-lg btn-block btn-dark">
        <div align="center" v-if="seen">
          <fulfilling-bouncing-circle-spinner
            :animation-duration="4000"
            :size="24"
            color="#fff"
          />
        </div>
        <div v-else>Reset Password</div>
      </button>
    </form>
  </div>
</template>
<script>
import { FulfillingBouncingCircleSpinner } from "epic-spinners";
import { required } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "ForgotPassword",
  data() {
    return {
      seen: false,
      email: "",
    };
  },
  validations: {
    email: {
      required,
    },
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  // created() {
  //   this.email = this.user.email;
  // },
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
        .post("user/forgot", {
          email: this.email,
        })
        .then((response) => {
          if (response.status == 200) {
            this.$toast.success(`${response.data.message}`, {
              position: "top",
            });
          }
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
          this.$toast.error(`${this.email} not found`, {
            position: "top-right",
          });
        });
    },
  },
};
</script>