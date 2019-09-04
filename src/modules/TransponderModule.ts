import {Module, VuexModule, Mutation, MutationAction, Action} from 'vuex-module-decorators';

import Transponder from "../models/Transponder";

@Module
export default class TransponderModule extends VuexModule {
    private transponders: Transponder[] = [];

    @Mutation addTransponder(transponder: Transponder): void {
        this.transponders.push(transponder);
    }


    get Transponders() {
        return this.transponders;
    }
}