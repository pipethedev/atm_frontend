<template>
  <form class="js-validate" v-on:submit.prevent="submit">
    <div class="text-center mb-5">
      <h1 class="display-4">Create your account</h1>
      <p>
        Already have an account?
        <router-link :to="{ path: '/login' }">Sign in here</router-link>
      </p>
    </div>

    <label class="input-label" for="fullNameSrEmail">Full name</label>

    <!-- Form Group -->
    <div class="form-row">
      <div class="col-sm-12">
        <div class="js-form-message form-group">
          <input
            type="text"
            class="form-control form-control-lg"
            v-model.trim="$v.name.$model"
            :class="{ 'is-invalid': validationStatus($v.name) }"
            placeholder="John Doe"
          />
          <div v-if="!$v.name.required" class="invalid-feedback">
            The name field is required
          </div>
        </div>
      </div>
    </div>

    <label class="input-label" for="fullNameSrEmail">Account Details</label>

    <div class="form-row">
      <div class="col-sm-6">
        <div class="js-form-message form-group">
          <input
            type="text"
            :class="{ 'is-invalid': validationStatus($v.account_number) }"
            v-model.trim="$v.account_number.$model"
            class="form-control form-control-lg"
            placeholder="Account Number"
          />
          <div v-if="!$v.account_number.required" class="invalid-feedback">
            The account field is required
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="js-form-message form-group">
          <select class="form-control form-control-lg" v-model.trim="bank_code">
            <option :value="bank.code" v-for="bank in banks" :key="bank.code">
              {{ bank.name }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="js-form-message form-group">
      <label class="input-label" for="signupSrEmail">Your email</label>

      <input
        type="email"
        class="form-control form-control-lg"
        v-model.trim="$v.email.$model"
        placeholder="johdoe@example.com"
        :class="{ 'is-invalid': validationStatus($v.email) }"
      />
      <div v-if="!$v.email.required" class="invalid-feedback">
        The email field is required
      </div>
      <div v-if="!$v.email.email" class="invalid-feedback">
        This is not a valid email address
      </div>
    </div>
    <!-- End Form Group -->

    <!-- Form Group -->
    <div class="js-form-message form-group">
      <label class="input-label" for="signupSrPassword">Phonenumber</label>

      <div class="input-group input-group-merge">
        <input
          type="number"
          class="js-toggle-password form-control form-control-lg"
          v-model.trim="$v.phonenumber.$model"
          :class="{ 'is-invalid': validationStatus($v.phonenumber) }"
          placeholder="081000000000"
        />
        <div v-if="!$v.phonenumber.required" class="invalid-feedback">
          The phonenumber field is required
        </div>
        <div v-if="!$v.phonenumber.maxLength" class="invalid-feedback">
          The phonenumber must not be greater
          {{ $v.phonenumber.$params.maxLength.max }} letters
        </div>
      </div>
    </div>
    <!-- End Form Group -->

    <!-- Form Group -->
    <div class="js-form-message form-group">
      <label class="input-label" for="signupSrConfirmPassword"
        >Create a password</label
      >

      <div class="input-group input-group-merge">
        <input
          class="js-toggle-password form-control form-control-lg"
          v-model.trim="password"
          :class="{ 'is-invalid': validationStatus($v.password) }"
          placeholder="8+ characters required"
          :type="passwordFieldType"
        />
        <div v-if="!$v.password.required" class="invalid-feedback">
          The password field is required
        </div>
        <div v-if="!$v.password.minLength" class="invalid-feedback">
          The password must have at least
          {{ $v.password.$params.minLength.min }} letters
        </div>
        <div v-if="!$v.password.maxLength" class="invalid-feedback">
          The password must not be greater
          {{ $v.password.$params.maxLength.max }} letters
        </div>
        <div class="js-toggle-password-target-2 input-group-append">
          <a class="input-group-text" @click="switchVisibility">
            <i class="js-toggle-passowrd-show-icon-2 tio-hidden-outlined"></i>
          </a>
        </div>
      </div>
    </div>
    <!-- End Form Group -->

    <!-- Checkbox -->
    <div class="js-form-message form-group">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          id="termsCheckbox"
          name="termsCheckbox"
          data-msg="Please accept our Terms and Conditions."
        />
        <label
          class="custom-control-label font-size-sm text-muted"
          for="termsCheckbox"
        >
          I accept the <a href="#">Terms and Conditions</a></label
        >
      </div>
    </div>
    <!-- End Checkbox -->

    <button class="btn btn-lg btn-block btn-dark mb-2">
      <div align="center" v-if="seen">
        <fulfilling-bouncing-circle-spinner
          :animation-duration="4000"
          :size="24"
          color="#fff"
        />
      </div>
      <div v-else>Create account</div>
    </button>
  </form>
</template>
<style lang="css" scoped>
@font-face {
  font-family: "Product Sans";
  src: local("Product Sans"),
    url(../assets/fonts/Product-Sans-Regular.ttf) format("truetype");
}
.swal-title {
  margin: 0px;
  font-family: "Product Sans", sans-serif;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.21);
  margin-bottom: 28px;
}
</style>
<script>
import axios from "axios";
import {
  required,
  email,
  maxLength,
  minLength,
} from "vuelidate/lib/validators";
import { FulfillingBouncingCircleSpinner } from "epic-spinners";
export default {
  name: "RegisterForm",
  data() {
    return {
      name: "",
      account_number: "",
      bank_code: "",
      email: "",
      phonenumber: "",
      password: "",
      banks: "",
      color: "#fff",
      seen: false,
      passwordFieldType: "password",
    };
  },
  validations: {
    name: {
      required,
    },
    account_number: {
      required,
    },
    email: {
      required,
      email,
    },
    phonenumber: {
      required,
      maxLength: maxLength(11),
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(18),
    },
  },
  components: {
    FulfillingBouncingCircleSpinner,
  },
  created() {
    this.getBanks();
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    getBanks() {
      axios
        .get("https://api.paystack.co/bank")
        .then((response) => {
          this.banks = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // always executed
        });
    },
    validationStatus(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      this.seen = true;
      axios
        .post(
          "user/register",
          {
            name: this.name,
            email: this.email,
            password: this.password,
            bet_limit: 10,
            phone_number: this.phonenumber,
            account_number: this.account_number,
            bank_code: this.bank_code,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.data.status == 200) {
            this.seen = false;
          }
           this.$toast.success(`${this.email} registered successfully`, {
              position: 'top'
            });
          setTimeout(() => {
            this.$toast.clear()
          },2000);
          setTimeout(() => {
            this.$router.replace({
              name : 'Login'
            })
          },4000);
        })
        .catch(() => {
          this.seen = false;
          this.$toast.error(`User exists", ${this.email} already exists`, {
              position: 'top'
            });
        });
    },
  },
};
</script>