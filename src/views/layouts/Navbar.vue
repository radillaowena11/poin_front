<template>
    <div>
        <div class="container-scroller main-content">
    <div class="horizontal-menu">
      <nav class="navbar top-navbar col-lg-12 col-12 p-0">
        <div class="nav-top flex-grow-1">
          <div class="container d-flex flex-row h-100 align-items-center">
            <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a class="navbar-brand brand-logo" href="index.html"><img src="assets/img/logo.svg"></a>
              <a class="navbar-brand brand-logo-mini" href="index.html"><img src="assets/img/logo.svg"></a>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end flex-grow-1">
                <b-nav-item v-if="isLoggedIn" @click="logout" class="nav-link">
                  <i class="mdi mdi-logout menu-icon"></i>
                  <span class="menu-title">Logout</span>
                </b-nav-item>
              <!-- <ul class="navbar-nav navbar-nav-right">                  
                <li class="nav-item nav-profile dropdown">                   
                  <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                    Hi, Admin   
                  </a>
                  <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                    <a class="dropdown-item">
                       <i class="mdi mdi-logout text-primary"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
              <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
                <span class="mdi mdi-menu"></span>
              </button> -->
            </div>
          </div>
        </div>
      </nav>    
      <nav class="bottom-navbar">
        <div class="container">
          <ul class="nav page-navigation">
            <li class="nav-item">
                <!-- <b-nav-item href="/beranda" class="menu-title">Beranda</b-nav-item> -->
              <a class="nav-link" href="/">
                <i class="mdi mdi-view-dashboard-outline menu-icon"></i>
                <span class="menu-title" href="/beranda">Beranda</span>
              </a>
            </li>
            <li class="nav-item">
                <!-- <b-nav-item href="/petugas" class="nav-link">
                  <i class="mdi mdi-account-settings menu-icon"></i>
                    <span class="menu-title">Petugas Tatib</span> 
                </b-nav-item> -->
              <a class="nav-link" href="/petugas">
                <i class="mdi mdi-account-settings menu-icon"></i>
                 <span class="menu-title">Petugas Tatib</span> 
              </a>
            </li>
            <li class="nav-item">
                <!-- <b-nav-item href="/data_siswa" class="menu-title">Data Siswa</b-nav-item> -->
              <a class="nav-link" href="/data_siswa">
                <i class="mdi mdi-file-document-box-outline menu-icon"></i>                
                <span class="menu-title">Data Siswa</span>
              </a>
            </li>
            <li class="nav-item">
                <!-- <b-nav-item href="/pelanggaran" class="menu-title">Pelanggaran</b-nav-item>                -->
              <a href="/pelanggaran" class="nav-link">
                <i class="mdi mdi-codepen menu-icon"></i>
                <span class="menu-title">Pelanggaran</span>
              </a>
            </li>
            <li class="nav-item">
                <!-- <b-nav-item href="/input_pelanggaran" class="menu-title">Input Pelanggaran</b-nav-item> -->
              <a href="/input_pelanggaran" class="nav-link">
                <i class="mdi mdi-puzzle-outline menu-icon"></i>               
                <span class="menu-title">Input Pelanggaran</span>
              </a>
            </li>
            <li class="nav-item">
                <!-- <b-nav-item href="/poin_siswa" class="menu-title">Poin Siswa</b-nav-item>                 -->
              <a href="/poin_siswa" class="nav-link">
                <i class="mdi mdi-image-filter menu-icon"></i>
                <span class="menu-title">Poin Siswa</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
        <!-- <b-navbar toggleable="sm" type="light" variant="light">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
            <b-navbar-brand>MyApps</b-navbar-brand>
            <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/">Home</b-nav-item>
                <b-nav-item href="/beranda">Beranda</b-nav-item>
                <b-nav-item href="/petugas">Petugas</b-nav-item>
                <b-nav-item v-if="isLoggedIn" @click="logout">Logout</b-nav-item>
                <b-nav-item href="/login" v-else>Login</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar> -->
    </div>
</div>
</template>

<script>
export default {
  name: "navbar",
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      let conf = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Authorization")
        }
      };
      let form = new FormData();
      this.axios
        .post("/logout", form, conf)
        .then(response => {
          if (response.data.logged === false || response.data.status === 0) {
            this.$store.commit("logout");
            localStorage.removeItem("Authorization");
            this.$router.push({ name: "login" });
          }
        })
        .catch(error => {});
    }
  }
};
</script>