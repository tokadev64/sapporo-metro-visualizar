// 市電
//import { writable } from "svelte/store";

const lineStreetCar = () => {
	//const { subscribe } = writable(0);

	const scale = <number>8;
	const strokeColor = <string>'#eb6d73';
	const path = <{ lat: number; lng: number }[]>[
		{ lat: 43.057264909658194, lng: 141.3528651341244 }, // 狸小路駅
		{ lat: 43.058800023332, lng: 141.35242580566089 },
		{ lat: 43.05891863479601, lng: 141.3521595168347 },
		{ lat: 43.05886874051356, lng: 141.35179930493052 }, // 西4丁目駅
		{ lat: 43.05666763703006, lng: 141.3355486462268 },
		{ lat: 43.05659285321848, lng: 141.33540534342595 },
		{ lat: 43.05651151998236, lng: 141.33532621826 },
		{ lat: 43.05642825060172, lng: 141.3352855353751 },
		{ lat: 43.054475094670025, lng: 141.3347462034238 },
		{ lat: 43.03049196347179, lng: 141.33775143275037 },
		{ lat: 43.030334152077344, lng: 141.33788021361585 },
		{ lat: 43.03031552566441, lng: 141.33800761854405 },
		{ lat: 43.031287305275384, lng: 141.35186792453064 },
		{ lat: 43.03135626378598, lng: 141.35197533580777 },
		{ lat: 43.03143419925991, lng: 141.352015568943 },
		{ lat: 43.031496449535865, lng: 141.3520108750772 },
		{ lat: 43.050055360665745, lng: 141.34956686281174 },
		{ lat: 43.05484892048258, lng: 141.34866344480267 },
		{ lat: 43.05495651279505, lng: 141.34868644659295 },
		{ lat: 43.05507900567348, lng: 141.34886749570146 },
		{ lat: 43.05554699676122, lng: 141.35229315364185 },
		{ lat: 43.055555816171704, lng: 141.35249029600445 },
		{ lat: 43.05562245167672, lng: 141.3530025979263 },
		{ lat: 43.05568712724467, lng: 141.353131343959 },
		{ lat: 43.055853292756275, lng: 141.3531693802083 },
		{ lat: 43.057264909658194, lng: 141.3528651341244 }, // 狸小路駅
	];
	const statiion = <{ id: string; name: string }[]>[
		{ id: 'SC01', name: '西4丁目' },
		{ id: 'SC02', name: '西8丁目' },
		{ id: 'SC03', name: '中央区役所前' },
		{ id: 'SC04', name: '西15丁目' },
		{ id: 'SC05', name: '西線6条' },
		{ id: 'SC06', name: '西線9条旭山公園通' },
		{ id: 'SC07', name: '西線11条' },
		{ id: 'SC08', name: '西線14条' },
		{ id: 'SC09', name: '西線16条' },
		{ id: 'SC10', name: 'ロープウェイ入口' },
		{ id: 'SC11', name: '電車事業所前' },
		{ id: 'SC12', name: '中央図書館前' },
		{ id: 'SC13', name: '石山通' },
		{ id: 'SC14', name: '東屯田通' },
		{ id: 'SC15', name: '幌南小学校前' },
		{ id: 'SC16', name: '山鼻19条' },
		{ id: 'SC17', name: '静修学園前' },
		{ id: 'SC18', name: '行啓通' },
		{ id: 'SC19', name: '中島公園通' },
		{ id: 'SC20', name: '山鼻9条' },
		{ id: 'SC21', name: '東本願寺前' },
		{ id: 'SC22', name: '資生館小学校前（西創成）' },
		{ id: 'SC23', name: 'すすきの' },
		{ id: 'SC24', name: '狸小路' },
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

export const storeStreetCar = lineStreetCar();
