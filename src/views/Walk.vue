<template>
  <div>
    <b-container fluid="md">
      <b-carousel
        id="carousel-fade"
        v-model="slide"
        :interval="6000"
        fade
        controls
        img-width="512"
        img-height="240"
        indicators
      >
        <b-carousel-slide
          caption="A conscious walk"
          img-src="../assets/marche640.jpg"
        >
          <p>
            Conscious walking allows us to become aware of our own body because
            we build our body shemat through movement.
          </p>
          <figure>
            <figcaption>Exercise 1</figcaption>
            <audio controls src="../assets/audio/vittoz2.mp3">
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </figure>
        </b-carousel-slide>
        <b-carousel-slide
          caption="An act of will"
          img-src="../assets/bike640.jpg"
        >
          <p>
            The goal of this exercise is to become aware of "wanting to get up,
            to take an object, etc." and to feel in your body this impulse of
            the will.
          </p></b-carousel-slide
        >
        <b-carousel-slide
          caption="A Vittoz relaxation"
          img-src="../assets/breath640.jpg"
          ><p>
            There are 4 stages of relaxation according to doctor Vittoz. Give
            you a time to live this experience.
          </p></b-carousel-slide
        >
      </b-carousel>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
};
</script>
<style scoped>
p {
  background-color: rgba(64, 182, 214, 0.7);
  border-radius: 5px;
  padding: 1rem;
}
</style>
