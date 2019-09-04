import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators';

import Car from "../models/Car";

@Module
export default class CarModule extends VuexModule {
    private cars: Car[] = [];

    @Mutation addCar(car: Car): void {
        this.cars.push(car);
    }
}