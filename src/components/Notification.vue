<template>
  <div>
    <div class="hs-unfold">
      <div
        id="notificationDropdown"
        class="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right navbar-dropdown-menu  hs-unfold-content-initialized hs-unfold-css-animation animated"
        style="width: 25rem; animation-duration: 300ms"
        data-hs-target-height="518"
        data-hs-unfold-content=""
        data-hs-unfold-content-animation-in="slideInUp"
        data-hs-unfold-content-animation-out="fadeOut"
      >
        <!-- Header -->
        <div class="card-header">
          <span class="card-title h4">Notifications</span>

        </div>
        <!-- End Header -->

        <!-- Nav -->
        <ul
          class="nav nav-tabs nav-justified"
          id="notificationTab"
          role="tablist"
        >
          <li class="nav-item">
            <a
              class="nav-link "
              id="notificationNavOne-tab"
              data-toggle="tab"
              href="#notificationNavOne"
              role="tab"
              aria-controls="notificationNavOne"
              aria-selected="true"
              >Messages (3)</a
            >
          </li>
        </ul>
        <!-- End Nav -->

        <!-- Body -->
        <div class="card-body-height">
          <!-- Tab Content -->
          <div class="tab-content container" id="notificationTabContent">
            <div
              class="tab-pane fade show active"
              style="margin-left:-2%;"
              id="notificationNavOne"
              role="tabpanel"
              aria-labelledby="notificationNavOne-tab"
            >
              <ul class="list-group list-group-flush navbar-card-list-group">
                <!-- Item -->
                <li class="list-group-item custom-checkbox-list-wrapper">
                  <div class="row">
                    <div class="col-auto position-static">
                      <div class="d-flex align-items-center">
                        <div
                          class="custom-control custom-checkbox custom-checkbox-list"
                        >
                          <input
                            type="checkbox"
                            class="custom-control-input bg-warning"
                            id="notificationCheck1"
                            checked=""
                          />
                          <label
                            class="custom-control-label"
                            for="notificationCheck1"
                          ></label>
                          <span
                            class="custom-checkbox-list-stretched-bg"
                          ></span>
                        </div>
                        <div class="avatar avatar-sm avatar-circle">
                          <img
                            class="avatar-img"
                            src="../assets/img/160x160/img3.jpg"
                            alt="Image Description"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col ml-n3">
                      <span class="card-title h5">Brian Warner</span>
                      <p class="card-text font-size-sm">
                        changed an issue from "In Progress" to
                        <span class="badge badge-success">Review</span>
                      </p>
                    </div>
                    <small class="col-auto text-muted text-cap">2hr</small>
                  </div>
                  <a class="stretched-link" href="#"></a>
                </li>
                <!-- End Item -->

                <!-- Item -->
                <li class="list-group-item custom-checkbox-list-wrapper">
                  <div class="row">
                    <div class="col-auto position-static">
                      <div class="d-flex align-items-center">
                        <div
                          class="custom-control custom-checkbox custom-checkbox-list"
                        >
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="notificationCheck4"
                            checked=""
                          />
                          <label
                            class="custom-control-label"
                            for="notificationCheck4"
                          ></label>
                          <span
                            class="custom-checkbox-list-stretched-bg"
                          ></span>
                        </div>
                        <div class="avatar avatar-sm avatar-circle">
                          <img
                            class="avatar-img"
                            src="../assets/img/160x160/img10.jpg"
                            alt="Image Description"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col ml-n3">
                      <span class="card-title h5">Ruby Walter</span>
                      <p class="card-text font-size-sm">
                        joined the Slack group HS Team
                      </p>
                    </div>
                    <small class="col-auto text-muted text-cap">3dy</small>
                  </div>
                  <a class="stretched-link" href="#"></a>
                </li>
                <!-- End Item -->

                <!-- Item -->
                <li class="list-group-item custom-checkbox-list-wrapper">
                  <div class="row">
                    <div class="col-auto position-static">
                      <div class="d-flex align-items-center">
                        <div
                          class="custom-control custom-checkbox custom-checkbox-list"
                        >
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="notificationCheck3"
                          />
                          <label
                            class="custom-control-label"
                            for="notificationCheck3"
                          ></label>
                          <span
                            class="custom-checkbox-list-stretched-bg"
                          ></span>
                        </div>
                        <div class="avatar avatar-sm avatar-circle">
                          <img
                            class="avatar-img"
                            src="../assets/svg/brands/google.svg"
                            alt="Image Description"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col ml-n3">
                      <span class="card-title h5">from Google</span>
                      <p class="card-text font-size-sm">
                        Start using forms to capture the information of
                        prospects visiting your Google website
                      </p>
                    </div>
                    <small class="col-auto text-muted text-cap">17dy</small>
                  </div>
                  <a class="stretched-link" href="#"></a>
                </li>
                <!-- End Item -->

                <!-- Item -->
                <li class="list-group-item custom-checkbox-list-wrapper">
                  <div class="row">
                    <div class="col-auto position-static">
                      <div class="d-flex align-items-center">
                        <div
                          class="custom-control custom-checkbox custom-checkbox-list"
                        >
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="notificationCheck5"
                          />
                          <label
                            class="custom-control-label"
                            for="notificationCheck5"
                          ></label>
                          <span
                            class="custom-checkbox-list-stretched-bg"
                          ></span>
                        </div>
                        <div class="avatar avatar-sm avatar-circle">
                          <img
                            class="avatar-img"
                            src="../assets/img/160x160/img7.jpg"
                            alt="Image Description"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col ml-n3">
                      <span class="card-title h5">Sara Villar</span>
                      <p class="card-text font-size-sm">
                        completed
                        <i class="tio-folder-bookmarked text-primary"></i>
                        FD-7 task
                      </p>
                    </div>
                    <small class="col-auto text-muted text-cap">2mn</small>
                  </div>
                  <a class="stretched-link" href="#"></a>
                </li>
                <!-- End Item -->
              </ul>
            </div>

            <div
              class="tab-pane fade"
              id="notificationNavTwo"
              role="tabpanel"
              aria-labelledby="notificationNavTwo-tab"
            >
              <ul class="list-group list-group-flush navbar-card-list-group">
                <!-- Item -->
                <li class="list-group-item custom-checkbox-list-wrapper">
                  <div class="row">
                    <div class="col-auto position-static">
                      <div class="d-flex align-items-center">
                        <div
                          class="custom-control custom-checkbox custom-checkbox-list"
                        >
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="notificationCheck7"
                          />
                          <label
                            class="custom-control-label"
                            for="notificationCheck7"
                          ></label>
                          <span
                            class="custom-checkbox-list-stretched-bg"
                          ></span>
                        </div>
                        <div
                          class="avatar avatar-sm avatar-soft-dark avatar-circle"
                        >
                          <span class="avatar-initials">A</span>
                        </div>
                      </div>
                    </div>
                    <div class="col ml-n3">
                      <span class="card-title h5">Anne Richard</span>
                      <p class="card-text font-size-sm">
                        accepted your invitation to join Notion
                      </p>
                    </div>
                    <small class="col-auto text-muted text-cap">1dy</small>
                  </div>
                  <a class="stretched-link" href="#"></a>
                </li>
                <!-- End Item -->

                <!-- Item -->
                <li class="list-group-item custom-checkbox-list-wrapper">
                  <div class="row">
                    <div class="col-auto position-static">
                      <div class="d-flex align-items-center">
                        <div
                          class="custom-control custom-checkbox custom-checkbox-list"
                        >
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="notificationCheck6"
                          />
                          <label
                            class="custom-control-label"
                            for="notificationCheck6"
                          ></label>
                          <span
                            class="custom-checkbox-list-stretched-bg"
                          ></span>
                        </div>
                        <div class="avatar avatar-sm avatar-circle">
                          <img
                            class="avatar-img"
                            src="../assets/img/160x160/img5.jpg"
                            alt="Image Description"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col ml-n3">
                      <span class="card-title h5">Finch Hoot</span>
                      <p class="card-text font-size-sm">
                        left Slack group HS projects
                      </p>
                    </div>
                    <small class="col-auto text-muted text-cap">3dy</small>
                  </div>
                  <a class="stretched-link" href="#"></a>
                </li>
                <!-- End Item -->

                <!-- Item -->
                <li class="list-group-item custom-checkbox-list-wrapper">
                  <div class="row">
                    <div class="col-auto position-static">
                      <div class="d-flex align-items-center">
                        <div
                          class="custom-control custom-checkbox custom-checkbox-list"
                        >
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="notificationCheck8"
                          />
                          <label
                            class="custom-control-label"
                            for="notificationCheck8"
                          ></label>
                          <span
                            class="custom-checkbox-list-stretched-bg"
                          ></span>
                        </div>
                        <div class="avatar avatar-sm avatar-dark avatar-circle">
                          <span class="avatar-initials">HS</span>
                        </div>
                      </div>
                    </div>
                    <div class="col ml-n3">
                      <span class="card-title h5">Htmlstream</span>
                      <p class="card-text font-size-sm">
                        you earned a "Top endorsed"
                        <i class="tio-verified text-primary"></i>
                        badge
                      </p>
                    </div>
                    <small class="col-auto text-muted text-cap">6dy</small>
                  </div>
                  <a class="stretched-link" href="#"></a>
                </li>
                <!-- End Item -->

                <!-- Item -->
                <li class="list-group-item custom-checkbox-list-wrapper">
                  <div class="row">
                    <div class="col-auto position-static">
                      <div class="d-flex align-items-center">
                        <div
                          class="custom-control custom-checkbox custom-checkbox-list"
                        >
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="notificationCheck9"
                          />
                          <label
                            class="custom-control-label"
                            for="notificationCheck9"
                          ></label>
                          <span
                            class="custom-checkbox-list-stretched-bg"
                          ></span>
                        </div>
                        <div class="avatar avatar-sm avatar-circle">
                          <img
                            class="avatar-img"
                            src="../assets/img/160x160/img8.jpg"
                            alt="Image Description"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col ml-n3">
                      <span class="card-title h5">Linda Bates</span>
                      <p class="card-text font-size-sm">
                        Accepted your connection
                      </p>
                    </div>
                    <small class="col-auto text-muted text-cap">17dy</small>
                  </div>
                  <a class="stretched-link" href="#"></a>
                </li>
                <!-- End Item -->

                <!-- Item -->
                <li class="list-group-item custom-checkbox-list-wrapper">
                  <div class="row">
                    <div class="col-auto position-static">
                      <div class="d-flex align-items-center">
                        <div
                          class="custom-control custom-checkbox custom-checkbox-list"
                        >
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="notificationCheck10"
                          />
                          <label
                            class="custom-control-label"
                            for="notificationCheck10"
                          ></label>
                          <span
                            class="custom-checkbox-list-stretched-bg"
                          ></span>
                        </div>
                        <div
                          class="avatar avatar-sm avatar-soft-dark avatar-circle"
                        >
                          <span class="avatar-initials">L</span>
                        </div>
                      </div>
                    </div>
                    <div class="col ml-n3">
                      <span class="card-title h5">Lewis Clarke</span>
                      <p class="card-text font-size-sm">
                        completed
                        <i class="tio-folder-bookmarked text-primary"></i>
                        FD-134 task
                      </p>
                    </div>
                    <small class="col-auto text-muted text-cap">2mn</small>
                  </div>
                  <a class="stretched-link" href="#"></a>
                </li>
                <!-- End Item -->
              </ul>
            </div>
          </div>
          <!-- End Tab Content -->
        </div>
        <!-- End Body -->

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "Notifcation"
};
</script>

<style lang="css" scoped>
@import url("https://htmlstream.com/front-dashboard/assets/css/vendor.min.css");
@import url("../assets/css/theme.min.css");
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300&display=swap");
body {
  font-family: "Product Sans", sans-serif;
}
h4,
label,
span {
  font-family: "Nunito", sans-serif;
}
</style>