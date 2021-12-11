<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/equi__2.svg" />
    <h2 class="title">EQUI</h2>
    <router-link to="/about"
      >Next <b-icon-arrow-right></b-icon-arrow-right
    ></router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  padding-top: 1rem;
}

img {
  display: flex;
  justify-content: center;
  height: 60vh;
  width: auto;
  animation: image-rotate 5s linear infinite;
}

a {
  font-weight: bold;
  color: #2c3e50;
}

@keyframes image-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
