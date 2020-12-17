import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export function getDefaultState() {
	return {
		cpu: {
			vendor: "",
			brand: "",
			socket: "",
			cores: 0,
			threads: 0,
			freqcurrent: 0.0,
			freqmin: 0.0,
			freqmax: 0.0,
			temp: 0.0,
			temps: [],
			load: 0,
			loads: [],
		},
		ram: {
			total: 0.0,
			used: 0.0,
			totalswap: 0.0,
			usedswap: 0.0,
			modules: [],
		}
	}
}


// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}