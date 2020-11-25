<template>
  <div class="home">
        <header class="site-header">
        <div class="">
            <Navbar></Navbar>
        </div>
    </header>
    <main id="main">
        <!-- Hero -->
        <section class="container mt-8">
            <div class="row justify-content-lg-between align-items-lg-center py-5">
                <div class="col-lg-9 mb-4 text-center text-lg-left slide-bottom">
                    <h1 class="display-4 mb-4">Welcome to <strong title="All things more">A.T.M</strong></h1>
                    <p class="lead w-85 text-small-center"><strong>Allthingsmore</strong> is an online betting platform used to earn money by color prediction.</p>
                    <router-link class="btn btn-outline-dark btn-block rounded-pill d-sm-inline-block w-auto mx-2 ml-sm-0 my-3" v-bind:to = "{path:'/login'}" >
                        <font-awesome-icon icon="play" class="mr-1"/>
                        <span>Play Now</span>
                    </router-link>
                </div>
                <div class="col-lg-3 slide-left" style="margin-top:-4%;">
                    <img src="../assets/main.svg" class="d-none d-lg-block img-fluid mr-4" height="300" width="300">
                </div>
            </div>
        </section>
    </main>
    <MainFooter></MainFooter>
  </div>
</template>
<script>
import MainFooter from '@/components/footer';
import Navbar from '@/components/Navbar';
export default {
    name : "Home",
    components : {
        MainFooter,
        Navbar
    },
    methods : {
        track(){
            this.$ga.page('/');
        }
    },
    metaInfo() {
        return {
        title: "Welcome to A.T.M",
        meta: [
            {
            vmid: "description",
            name: "description",
            content:
                "Welcome to A.T.M, earn money by predictions"
            }
        ]
        };
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Merriweather:400,700%7CMerriweather+Sans:300,400,700');
@import url('https://boost.11bits.es/assets/css/all.min.css');
@import url('https://boost.11bits.es/assets/css/theme.css');
@import url('../assets/css/animation.css');
@media only screen and (max-width: 600px) {
  .text-small-center {
    margin-left: 7%;
  }
}
</style>