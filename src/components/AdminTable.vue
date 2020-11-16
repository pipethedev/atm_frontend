<template>
  <div>
        <div class="card mb-3 mb-lg-5">
          <!-- Header -->
          <div class="card-header">
            <div
              class="row justify-content-between align-items-center flex-grow-1"
            >
              <div class="col-12 col-md">
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="card-header-title">Users</h5>

                  <!-- Datatable Info -->
                  <div id="datatableCounterInfo" style="display: none">
                    <div class="d-flex align-items-center">
                      <span class="font-size-sm mr-3">
                        <span id="datatableCounter">0</span>
                        Selected
                      </span>
                      <a
                        class="btn btn-sm btn-outline-danger"
                        href="javascript:;"
                      >
                        <i class="tio-delete-outlined"></i> Delete
                      </a>
                    </div>
                  </div>
                  <!-- End Datatable Info -->
                </div>
              </div>

              <div class="col-auto">
                <!-- Filter -->
                <div class="row align-items-sm-center">
                  <div class="col-md">
                    <form>
                      <!-- Search -->
                      <div
                        class="input-group input-group-merge input-group-flush"
                      >
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <i class="tio-search"></i>
                          </div>
                        </div>
                        <input
                          id="datatableSearch"
                          type="search"
                          class="form-control"
                          placeholder="Search users"
                          aria-label="Search users"
                        />
                      </div>
                      <!-- End Search -->
                    </form>
                  </div>
                </div>
                <!-- End Filter -->
              </div>
            </div>
          </div>
          <!-- End Header -->

          <!-- Table -->
          <div class="table-responsive datatable-custom">
            <div id="datatable_wrapper" class="dataTables_wrapper no-footer">
              <div class="dataTables_length" id="datatable_length">
              </div>
              <div id="datatable_filter" class="dataTables_filter">
                <label
                  >Search:<input
                    type="search"
                    class=""
                    placeholder=""
                    aria-controls="datatable"
                /></label>
              </div>
              <table
                id="datatable"
                class="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table dataTable no-footer"
                role="grid"
                aria-describedby="datatable_info"
              >
                <thead class="thead-light">
                  <tr role="row">
                    <th
                      scope="col"
                      class="table-column-pr-0 sorting_disabled"
                      rowspan="1"
                      colspan="1"
                      style="width: 28px"
                    >
                      <div class="custom-control custom-checkbox">
                        <input
                          id="datatableCheckAll"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="datatableCheckAll"
                        ></label>
                      </div>
                    </th>
                    <th
                      class="table-column-pl-0 sorting_disabled"
                      rowspan="1"
                      colspan="1"
                      aria-label="Full name"
                      style="width: 189px"
                    >
                      Full name
                    </th>
                    <th
                      class="sorting"
                      tabindex="0"
                      aria-controls="datatable"
                      rowspan="1"
                      colspan="1"
                      aria-label="Status: activate to sort column ascending"
                      style="width: 95px"
                    >
                      Wallet
                    </th>
                    <th
                      class="sorting"
                      tabindex="0"
                      aria-controls="datatable"
                      rowspan="1"
                      colspan="1"
                      aria-label="Type: activate to sort column ascending"
                      style="width: 128px"
                    >
                      Phone No.
                    </th>
                    <th
                      class="sorting_disabled"
                      rowspan="1"
                      colspan="1"
                      aria-label="Email"
                      style="width: 173px"
                    >
                      Email
                    </th>
                    <th
                      class="sorting"
                      tabindex="0"
                      aria-controls="datatable"
                      rowspan="1"
                      colspan="1"
                      aria-label="Signed up: activate to sort column ascending"
                      style="width: 103px"
                    >
                      Signed up
                    </th>
                    <th
                      class="sorting"
                      tabindex="0"
                      aria-controls="datatable"
                      rowspan="1"
                      colspan="1"
                      aria-label="User ID: activate to sort column ascending"
                      style="width: 55px"
                    >
                      Account No.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd" v-for="user in users" :key="user._id">
                    <td class="table-column-pr-0">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="usersDataCheck2"
                        />
                        <label
                          class="custom-control-label"
                          for="usersDataCheck2"
                        ></label>
                      </div>
                    </td>
                    <td class="table-column-pl-0">
                      <a
                        class="media align-items-center"
                        href="./user-profile.html"
                      >
                        <div class="avatar avatar-sm avatar-circle mr-2">
                          <img
                            class="avatar-img"
                            src="../assets/img/160x160/img10.jpg"
                            alt="Image Description"
                          />
                        </div>
                        <div class="media-body">
                          <span class="h5 text-hover-primary mb-0"
                            >{{ user.user_id.name }}
                            <i
                            v-if="user.admin"
                              class="tio-verified text-primary"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Top endorsed"
                            ></i
                          ></span>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span class="legend-indicator bg-dark"></span
                      >NGN {{user.value}}
                    </td>
                    <td>{{ user.user_id.phone_number }}</td>
                    <td>{{ user.user_id.email }}</td>
                    <td>{{ user.createdAt | moment("MMMM Do YYYY") }}</td>
                    <td>{{ user.user_id.account_number }}</td>
                  </tr>
                </tbody>
              </table>
              <div
                class="dataTables_info"
                id="datatable_info"
                role="status"
                aria-live="polite"
              >
                Showing 1 to 8 of 17 entries
              </div>
            </div>
          </div>
          <!-- End Table -->
        </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
   name : "AdminTable",
   data(){
     return {
       users : ''
     }
   },
   created(){
     this.getUsers()
   },
   methods : {
     getUsers(){
       axios.get(`user/test`).then((response) => {
         console.log(response);
         this.users = response.data;
       }).catch((err) => {
         console.log(err);
       })
     }
   }
  }
</script>

<style scoped>
@import url("https://htmlstream.com/front-dashboard/assets/css/vendor.min.css");
@import url("https://htmlstream.com/front-dashboard/assets/css/theme.min.css?v=1.0");
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300&display=swap");
body {
  font-family: "Product Sans", sans-serif;
}
h6,
h1,
span {
  font-family: "Nunito", sans-serif;
}
</style>