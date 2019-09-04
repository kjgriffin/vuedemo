<template>
  <div>
    <!-- create new transponder -->
    <div demo-transponder-flow>
      <div demo-headding demo-creation-box>
        Add Transponder
        <div demo-field-description>
          Transponder ID:
          <input demo-input v-model="inputID" />
          <button demo-button v-on:click="AddTransponder()">Add</button>
        </div>
      </div>
      <!-- list of transponders -->
      <div demo-headding>
        List of transponders:
        <div demo-list-view>
          <div v-for="(item) in Transponders" v-bind:key="item.ID">
            <c-transponder v-bind:transponder="item"></c-transponder>
          </div>
        </div>
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
    "c-transponder": CTransponder
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

<style lang="less">
@import "../styles/main.less";
</style>