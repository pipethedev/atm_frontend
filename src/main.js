import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import NProgress from 'vue-nprogress'
import Meta from "vue-meta"
import VModal from 'vue-js-modal'
import Vuelidate from 'vuelidate'
import Flutterwave from 'flutterwave-vue-v3'
var VueCookie = require('vue-cookie');
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faBell, faHandHoldingUsd, faLock, faArrowLeft, faPen, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueToast from 'vue-toast-notification';
import Transitions from 'vue2-transitions'
import 'vue-toast-notification/dist/theme-sugar.css';
import 'vue-js-modal/dist/styles.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
require('@/store/subscriber')

axios.defaults.baseURL = 'https://allthingsmore.herokuapp.com/'

Vue.config.productionTip = false

library.add(faPlay, faBell, faHandHoldingUsd, faLock, faArrowLeft, faPen, faFacebook, faTwitter, faLinkedin, faPinterest, faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const options = {
    latencyThreshold: 40, // Number of ms before progressbar starts showing, default: 100,
    router: true, // Show progressbar when navigating routes, default: true
    http: true // Show progressbar when doing Vue.http, default: true
};

Vue.use(Flutterwave, { publicKey: 'FLWPUBK_TEST-5e58c9813f97c3832330bfd406ca5300-X' })
Vue.use(require('vue-moment'));
Vue.use(NProgress, options)
Vue.use(Transitions)
Vue.use(VueCookie)
Vue.use(Vuelidate)
Vue.use(VueSweetalert2)
Vue.use(VueToast)
Vue.use(Meta)
Vue.use(VModal)


const nprogress = new NProgress()

//axios.defaults.baseURL = 'http://localhost:5000/api/'
store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    new Vue({
        nprogress,
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
});