<template>
  <div>
    <div>Transponder: {{_transponder.ID}}</div>
    <div>
      <label for="transponderdup">
        <input
          type="checkbox"
          v-model="_transponder.DuplicateUse"
          v-bind:value="_transponder.DuplicateUse"
        />
        Allow Re-Use
      </label>
    </div>
    <button v-on:click="RemoveTransponder()">Remove</button>
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Prop, Vue, Inject } from "vue-property-decorator";
import Transponder from "../models/Transponder";
import store from "../store";

@Component
export default class CTransponder extends Vue {
  @PropSync("transponder") private _transponder!: Transponder;

  RemoveTransponder(): void {
    this.$store.commit("RemoveTransponder", this._transponder);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
