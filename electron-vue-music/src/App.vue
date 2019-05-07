<template>
  <div id="app">
    <div class="main">
      <div class="left-side"></div>
      <div class="right-side"></div>
      <div class="top-side"></div>
      <div class="bottom-side"></div>
      <Logo class="logo"></Logo>
      <Header class="header"></Header>
      <Siderbar class="siderbar"></Siderbar>
      <Content class="content"></Content>
      <Footer class="footer"></Footer>
    </div>
  </div>
</template>

<script>
import Logo from './components/Logo'
import Header from './components/Header'
import Siderbar from './components/Siderbar'
import Content from './components/Content'
import Footer from './components/Footer'
export default {
  name: "app",
  components: {
    Logo,
    Header,
    Siderbar,
    Content,
    Footer
  },
}
</script>

<style>
#app {
  background-image: url("./assets/img/bg.jpg");
  background-size: cover;
  opacity: 0.8;
}

.main {
    display: grid;
    height: 100vh;
    grid-template-rows: 3px 50px 1fr 70px 3px;
    box-shadow:inset 0px -10em 10em -5em #000;
}

@media screen and (max-width:1000px) {
    .main{ grid-template-columns: 3px 300px 1fr 3px; }
}

@media screen and (min-width:1001px) and (max-width:1300px) {
    .main{ grid-template-columns: 3px 3fr 7fr 3px; }
}

@media screen and (min-width:1301px) {
    .main{ grid-template-columns: 3px 390px 1fr 3px; }
}

.left-side,.right-side,.top-side,.bottom-side,.logo,.btn-group {
    -webkit-app-region: no-drag;
}

.left-side {
    grid-row: 1/6;
    grid-column: 1/2;
}

.right-side {
    grid-row: 1/6;
    grid-column: -1/-2;
}

.top-side {
    grid-row: 1/2;
    grid-column: 2/4;
}

.bottom-side {
    grid-row: -1/-2;
    grid-column: 2/4;
}

.logo {
    grid-row: 2/3;
    grid-column: 2/3;
    -webkit-app-region: drag;
}

.header {
  grid-row: 2/3;
  grid-column: 3/4;
  -webkit-app-region: drag;
  display: flex;
  justify-content: flex-end;
}

.siderbar {
    grid-row: 3/4;
    grid-column: 2/3;
}

.content {
    grid-row: 3/4;
    grid-column: 3/4;
    background-color: #d2d2d2;
}

.footer {
    grid-row: 4/5;
    grid-column: 2/4;
    color:rgba(255,255,255,0.85)
}
</style>
