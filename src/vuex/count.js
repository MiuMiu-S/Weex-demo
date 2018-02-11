import Vue from 'vue'
import Vuex from 'vuex'

// Vue.use(Vuex);
const store = new Vuex.Store({
				state: {
					count: 0
				},
				mutations: {
					// increment(state) {
					// 	state.count++;
					// },
					incrementaaa(state,aa) {
						state.count=aa;
					}
				}
			})


export default store;
