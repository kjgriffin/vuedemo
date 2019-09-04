import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Container, Inject, Injectable } from '@fluffy-spoon/inverse';
import { VueInverse, VueInjectable } from '@fluffy-spoon/inverse-vue';
// import { TransponderService } from './services/TransponderService';
import Component from 'vue-class-component';
import VueTypescriptInject, {injectable, inject} from 'vue-typescript-inject';
import 'reflect-metadata';
import Vuex from 'vuex';

Vue.use(Vuex);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
