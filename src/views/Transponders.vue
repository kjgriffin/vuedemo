<template>
  <div>
    <!-- create new transponder -->
    <div>
      Add Transponder
      <div>
        Transponder ID:
        <input v-model="inputID" />
        <button v-on:click="AddTransponder()">Add</button>
      </div>
    </div>
    <!-- list of transponders -->
    <div>
      List of transponders:
      <div v-for="(item) in Transponders" v-bind:key="item.ID">
          <CTransponder v-bind:transponder=item></CTransponder>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Transponder from "../models/Transponder";
import { Component, Vue } from "vue-property-decorator";
import store from "../store";
import CTransponder from "../components/CTransponder.vue";

@Component({
  components: {
      CTransponder,
  }
})
export default class VTransponder extends Vue {
  private inputID: number = 0;
  $store = store;

  get Transponders(): Transponder[] {
    let ts = this.$store.state.transponders;
    return ts;
  }

  AddTransponder(): void {
    let t = new Transponder();
    if (!this.Transponders.find(p => p.ID == this.inputID)) {
      t.ID = this.inputID++;
      this.$store.commit("AddTransponder", t);
    } else {
      this.inputID++;
    }
  }
}
</script>