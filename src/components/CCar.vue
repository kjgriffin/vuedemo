<template>
  <div>
    Car:
    <div>School: {{car.School}}</div>
    <div>Number: {{car.Number}}</div>
    <div>Transponder: {{car.Transponder.ID}}</div>
    <button v-on:click="RemoveCar()">Remove</button>
  </div>
</template>

<script lang="ts">
import Car from "../models/Car";
import { Prop, Component, Vue } from "vue-property-decorator";
import store from "../store";

@Component
export default class CCar extends Vue {
  @Prop() private car!: Car;

  RemoveCar(): void {
    this.$store.commit("RemoveCar", this.car);
  }
}
</script>