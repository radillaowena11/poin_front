<template>
  <div id="app">
        <router-view name="sidebar" />
    <router-view name="header" />
      <div class="wrapper">
        <router-view />
      </div>
    <router-view name="footer" />
  </div>
</template>

<script>
import Navbar from './views/layouts/Navbar'
import Sidebar from './views/layouts/Sidebar'
export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar
  },
  data : function(){
    return {
      status_login: ''
    }
  }
}
</script>
