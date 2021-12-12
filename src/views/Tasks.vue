<template>
  <b-container fluid="md">
    <b-row align-h="around" class="pt-md-5">
      <b-card
        title="A conscious walk"
        img-src="../assets/marche640.jpg"
        img-alt="walking boy"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          Mindful walking is an exercise that brings us to the state of
          awareness and presence.
        </b-card-text>

        <b-button class="btn-blue" to="/walk">Go to exercise</b-button>
      </b-card>
      <b-card
        title="An act of will"
        img-src="../assets/bike640.jpg"
        img-alt="bike"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text> It is a decided act, framed and fully felt. </b-card-text>

        <b-button class="btn-blue" to="/walk">Go to exercise</b-button>
      </b-card>
      <b-card
        title="A Vittoz relaxation"
        img-src="../assets/breath640.jpg"
        img-alt="breathing girl"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          Relaxation allows you to release the haunting thoughts and feel good.
        </b-card-text>

        <b-button class="btn-blue" to="/walk">Go to exercise</b-button>
      </b-card>
    </b-row>
  </b-container>
</template>

<style>
.btn-blue {
  background-color: #26778e !important;
}
</style>
