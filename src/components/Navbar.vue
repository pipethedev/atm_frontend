<template>
  <div>
                <nav class="navbar navbar-expand-lg navbar-light py-3" aria-label="Main navigation">
                <div class="container">
                <a class="navbar-brand text-dark" href="/">
          
                    <!-- <img src="https://www.flaticon.com/svg/static/icons/svg/755/755195.svg" class="col-2" height="50"/> -->
                    <h1>A.T.M</h1>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars fa-lg"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav align-items-lg-center pt-3 pt-lg-0 ml-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/login">Login</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link class="nav-link" to="/help">Help</router-link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
  </div>
</template>

<script>
export default {
  name : "Navbar"
}
</script>