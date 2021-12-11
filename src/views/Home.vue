<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/equi__2.svg" />
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

img {
  display: flex;
  justify-content: center;
  height: 80vh;
  width: auto;
  animation: image-rotate 3s linear infinite;
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
