import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export function getDefaultState() {
	return {
		general: {
			printername: "",
			language: "en",
			displayCancelPrint: false,
			displayZOffsetStandby: false,
		},
		dashboard: {
			boolWebcam: false,
			boolTempchart: true,
			boolConsole: true,
			boolScale: false,
			boolScaleAvailable: false,
			boolNeopixelCenterAvailable: false,
			hiddenMacros: [],
			hiddenTempChart: [],
			control: {
				feedrateXY: 100,
				stepsXY: [ 100, 10, 1 ],
				feedrateZ: 25,
				stepsZ: [ 25, 1, 0.1 ],
				stepsAll: [0.1, 1, 10, 25, 50, 100],
				selectedCrossStep: null,
				reverseX: false,
				reverseY: false,
				reverseZ: false,
				useCross: false
			},
			extruder: {
				feedamount: 25,
				feedamounts: [ 50, 25, 10, 5, 1 ],
				feedrate: 5,
				feedrates: [ 60, 30, 15, 5, 1 ],
			}
		},
		neopixel:{
			swatches:[
				['#FF0000FF', '#AA0000FF', '#550000FF'],
				['#FFFF00FF', '#AAAA00FF', '#555500FF'],
				['#00FF00FF', '#00AA00FF', '#005500FF'],
				['#00FFFFFF', '#00AAAAFF', '#005555FF'],
				['#0000FFFF', '#0000AAFF', '#000055FF'],
				['#8A00FFFF', '#5D01ABFF', '#2B014FFF'],
				['#F600FFFF', '#9F01A4FF', '#460048FF'],
				['#FFCB5FFF', '#FFFFFFFF', '#A5FFFFFF'],
			],
			stripname:"",
		},
		modules: {
			scaleUrl: "",
		},
		scale: {
			calibrateweight1: 0,
			offset1: 0,
			referenceunit1: 0,
			raw1: 0,
			tare1: 0,
			position1: '',
			calibrateweight2: 0,
			offset2: 0,
			referenceunit2: 0,
			raw2: 0,
			tare2: 0,
			position2: '',
		},
		webcam: {
			selectedCam: "",
			bool: false,
			configs: [{
				name: 'Default',
				icon: 'mdi-webcam',
				service: "mjpegstreamer-adaptive",
				targetFps: 15,
				url: "/webcam/?action=stream",
				flipX: false,
				flipY: false,
			}],
		},
		tempchart: {
			intervalChartUpdate: 1000,
			intervalDatasetUpdate: 1000,
			autoscale: false,
			datasetSettings: {

			},
		},
		console: {
			hideWaitTemperatures: true,
			boolCustomFilters: false,
			customFilters: "",
		},
		gcodefiles: {
			countPerPage: 10,
			showHiddenFiles: false,
			showPrintedFiles: true,
			hideMetadataColums: []
		},
		history: {
			countPerPage: 10,
			toggleChartCol3: 'filament_usage',
			hideColums: [
				'size',
				'modified',
				'end_time',
				'total_duration',
				'filament_total',
				'first_layer_extr_temp',
				'first_layer_bed_temp',
				'first_layer_height',
				'layer_height',
				'object_height',
			]
		},
		settings: {
			configfiles: {
				countPerPage: 10,
				showHiddenFiles: false,
			}
		},
		editor: {
			minimap: false
		},
		//moonraker DB api dont accept camel case key names
		remote_printers: [],
		presets: [],
		//moonraker DB api dont accept camel case key names
		cooldown_gcode: "TURN_OFF_HEATERS"
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
