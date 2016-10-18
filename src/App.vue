<template>
  <div id="app">
    <navBar></navBar>

    <div id="main-container" class="container">
      <div class="page-header text-md-center">
        <a href="." class="nostyle"><h1>GRUB Tunes</h1></a>
        <p class="lead">Your only source of awesome monophonic boot music</p>
      </div>

      <library></library>
    </div>
  </div>
</template>

<script>
import Library from './components/Library'
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    Library,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica,Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a.nostyle {
  text-decorations: none;
  color: inherit;
}
</style>
