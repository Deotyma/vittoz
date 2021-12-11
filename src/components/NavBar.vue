<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand to="/"
        ><img class="logo" src="../assets/equi__2.svg" alt="logo" srcset=""
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/tasks">Tasks</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
.logo {
  height: 2rem;
  width: auto;
}
</style>
