<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/monkeys">Monkeys</router-link>
  </nav> -->
  <nav class="navbar navbar-expand-lg bg-#2c503b">
    <div class="container-fluid">
      <a class="text-success">MonkeyPedia</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="http://localhost:8080"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://localhost:8080/monkeys">Monkeys</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://localhost:8080/gallery">Gallery</a>
          </li>
        </ul>
        <form class="d-flex bg-2c503b" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
body {
  background-color: #2c503b;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
