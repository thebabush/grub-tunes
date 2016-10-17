<template>
  <div id="app" class="container">
    <div class="page-header text-md-center">
      <a href="/" class="nostyle"><h1>GRUB Tune DB</h1></a>
      <p class="lead">Your only source of awesome monophonic boot music</p>
    </div>

    <library></library>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Library from './components/Library'

export default {
  name: 'app',
  components: {
    Hello,
    Library
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica,Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.page-header {
  padding-bottom: 1em;
}

a.nostyle {
  text-decorations: none;
  color: inherit;
}
</style>
