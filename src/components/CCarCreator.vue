<template>
  <div>
    Register Car:
    <div>
      School:
      <input v-model="name" />
    </div>
    <div>
      Number:
      <input v-model="number" />
    </div>
    <div>
      <!-- transponder selector -->
      Transponder IDs:
      <div>
        <div v-for="(item) in Transponders">
          <label :for="'RadioTransponder ' + item.ID">
            <input
              :id="'Radio Transponder ' + item.ID"
              type="radio"
              v-model="transponder"
              v-bind:value="item"
            />
            TransponderID: {{item.ID}}
          </label>
        </div>
      </div>
    </div>
    <button v-on:click="AddCar()">Add Car</button>
  </div>
</template>

<script lang="ts">
import Transponder from "../models/Transponder";
import Car from "../models/Car";
import { Component, Vue } from "vue-property-decorator";
import store from "../store";

@Component
export default class CCarCreator extends Vue {
  private name: string = "default";
  private number: string = "XXX";
  private transponderid: number = 0;
  private transponder: Transponder = new Transponder();

  get Transponders(): Transponder[] {
    let assignedtransponders: number[] = [];
    let cars: Car[] = this.$store.state.cars;
    cars.forEach(element => {
      assignedtransponders.push(element.Transponder.ID); 
    });
    let ts: Transponder[] = this.$store.state.transponders;
    let availableTransponders: Transponder[] = []; 

    ts.forEach(t => {
      let available: boolean = true;
      assignedtransponders.forEach(element => {
        if (element == t.ID)
        {
          available = false;
        } 
      });
      if (available == true || t.DuplicateUse == true){
        availableTransponders.push(t);
      }
    });
    
    return availableTransponders;
  }

  AddCar(): void {
    let c = new Car();
    c.School = this.name;
    c.Number = this.number;
    c.Transponder = this.transponder;

    this.$store.commit("AddCar", c);
  }
}
</script>