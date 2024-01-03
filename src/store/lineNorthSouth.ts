// 南北線
//import { writable } from "svelte/store";

const lineNorthSouth = () => {
	//const { subscribe } = writable(0);

	const scale = <number>8;
	const strokeColor = <string>'#328f0e';
	const path = <{ lat: number; lng: number }[]>[
		{ lat: 43.108314348941875, lng: 141.33839022808166 }, // 麻生駅
		{ lat: 43.107611547234804, lng: 141.33855163535043 },
		{ lat: 43.10741670085846, lng: 141.338682066407 },
		{ lat: 43.10591756859018, lng: 141.34047809140458 },
		{ lat: 43.10576237640348, lng: 141.3405994613625 },
		{ lat: 43.047795651541, lng: 141.3553147826323 },

		{ lat: 43.04265031694766, lng: 141.3545208434679 },
		{ lat: 43.04064066802249, lng: 141.35538704497063 },
		{ lat: 43.039902355968735, lng: 141.35629113620013 },
		{ lat: 43.034693297368406, lng: 141.36763994382508 },
		{ lat: 43.03440131953992, lng: 141.3709022367691 },
		{ lat: 43.032714310690466, lng: 141.3728120314651 },
		{ lat: 43.02620692706745, lng: 141.37124163800556 },
		{ lat: 43.021891165489976, lng: 141.36756781566427 },
		{ lat: 43.01685306709044, lng: 141.36733653232378 },
		{ lat: 43.00421775332795, lng: 141.36433015334765 },
		{ lat: 42.99662295378983, lng: 141.35941408993662 },

		{ lat: 42.99118208182021, lng: 141.35850391299573 }, // 真駒内駅
	];
	const statiion = <{ id: string; name: string }[]>[
		{ id: 'N01', name: '麻生' },
		{ id: 'N02', name: '北34条' },
		{ id: 'N03', name: '北24条' },
		{ id: 'N04', name: '北18条' },
		{ id: 'N05', name: '北12条' },
		{ id: 'N06', name: 'さっぽろ' },
		{ id: 'N07', name: '大通' },
		{ id: 'N08', name: 'すすきの' },
		{ id: 'N09', name: '中島公園' },
		{ id: 'N10', name: '幌平橋' },
		{ id: 'N11', name: '中の島' },
		{ id: 'N12', name: '平岸' },
		{ id: 'N13', name: '南平岸' },
		{ id: 'N14', name: '澄川' },
		{ id: 'N15', name: '自衛隊前' },
		{ id: 'N16', name: '真駒内' },
	];

	const getScale = () => {
		return scale;
	};
	const getStrokeColor = () => {
		return strokeColor;
	};
	const getPaths = () => {
		return path;
	};
	const getStations = () => {
		return statiion;
	};

	return {
		//subscribe,
		getScale,
		getStrokeColor,
		getPaths,
		getStations,
	};
};

export const storeNorthSouth = lineNorthSouth();
