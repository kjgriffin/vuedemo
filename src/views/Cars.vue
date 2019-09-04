<template>
  <div>
    <!-- add car -->
    <div>
      <c-car-creator />
    </div>
    <!-- list cars -->
    <div>
      List of Cars:
      <div v-for="(item) in Cars">
          <c-car v-bind:car=item></c-car>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Car from "../models/Car";
import { Component, Vue } from "vue-property-decorator";
import store from "../store";
import CCarCreator from "../components/CCarCreator.vue";
import CCar from "../components/CCar.vue";

@Component({
  components: {
    "c-car-creator": CCarCreator,
    "c-car": CCar
  }
})
export default class VCar extends Vue {
    get Cars(): Car[] {
        let cs = this.$store.state.cars;
        return cs;
    }
}
</script>