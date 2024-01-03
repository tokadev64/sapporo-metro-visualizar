// 東西線
//import { writable } from "svelte/store";

const lineEastWest = () => {
	//const { subscribe } = writable(0);

	const scale = <number>8;
	const strokeColor = <string>'#ffa62e';
	const path = <{ lat: number; lng: number }[]>[
		{ lat: 43.09002232587136, lng: 141.27715836839522 }, // 宮の沢駅
		{ lat: 43.088673185329945, lng: 141.27904913761094 },
		{ lat: 43.08653552717995, lng: 141.28213546300069 },
		{ lat: 43.085576999419565, lng: 141.28357063200647 },
		{ lat: 43.082756065242876, lng: 141.28825103535425 },
		{ lat: 43.08148545811986, lng: 141.2903922991697 }, // 発寒南駅
		{ lat: 43.08023574488947, lng: 141.29253329266044 },
		{ lat: 43.07963296124931, lng: 141.29373700302347 },
		{ lat: 43.07981127035578, lng: 141.29332249322258 },
		{ lat: 43.07933806218571, lng: 141.29473224693035 },
		{ lat: 43.07886025754108, lng: 141.2977165012215 },
		{ lat: 43.0787182309408, lng: 141.2983534756472 },
		{ lat: 43.07851155527601, lng: 141.29898708178376 },
		{ lat: 43.07826076726776, lng: 141.29958327393965 },
		{ lat: 43.0714465164307, lng: 141.31124444852423 },
		{ lat: 43.07020366139241, lng: 141.31421784773988 },
		{ lat: 43.0697916865394, lng: 141.31498842360287 },
		{ lat: 43.06957509494105, lng: 141.31531480330298 },
		{ lat: 43.06957581865433, lng: 141.31531428633429 },
		{ lat: 43.06899139821181, lng: 141.3158472232052 },
		{ lat: 43.06856574775428, lng: 141.31598920461647 },
		{ lat: 43.06815694363539, lng: 141.31599880716462 },
		{ lat: 43.06774416140283, lng: 141.3159531686527 },
		{ lat: 43.066893438465925, lng: 141.31543723888825 },
		{ lat: 43.0650214719593, lng: 141.31402598029564 },
		{ lat: 43.06486453746854, lng: 141.3139488762195 },
		{ lat: 43.06457661517286, lng: 141.31384220736032 },
		{ lat: 43.06422145642919, lng: 141.3138201301868 },
		{ lat: 43.05685678463205, lng: 141.31552917364058 },
		{ lat: 43.056504787777655, lng: 141.31575162496551 },
		{ lat: 43.05614820167531, lng: 141.31626865480777 },
		{ lat: 43.0557646967454, lng: 141.31712889501588 },
		{ lat: 43.05557800641041, lng: 141.31792808364975 },
		{ lat: 43.05558020477423, lng: 141.31803294171516 },
		{ lat: 43.062053968165294, lng: 141.3663392434868 },
		{ lat: 43.06201832978198, lng: 141.36658509911925 },
		{ lat: 43.06197757952629, lng: 141.3666999617007 },
		{ lat: 43.06155328700664, lng: 141.36748967922836 },
		{ lat: 43.06109249592884, lng: 141.36821882245627 },
		{ lat: 43.055354596486914, lng: 141.3750042046584 },
		{ lat: 43.05533891748261, lng: 141.3797034348525 },
		{ lat: 43.052240285609756, lng: 141.38401301510964 },
		{ lat: 43.046871462307074, lng: 141.39425435316426 },
		{ lat: 43.04329032222726, lng: 141.40531289308188 },
		{ lat: 43.04073408886912, lng: 141.41007649629233 },
		{ lat: 43.03462714601435, lng: 141.42635822296143 },
		{ lat: 43.030452741463705, lng: 141.43469824487465 }, // 南郷18丁目駅
		{ lat: 43.02714349027472, lng: 141.44802842182014 },
		{ lat: 43.02700231419206, lng: 141.4501849178681 },
		{ lat: 43.03104189598003, lng: 141.46088360104733 },
		{ lat: 43.034874057398106, lng: 141.47230263478178 },
		{ lat: 43.036030759029394, lng: 141.47318239933867 },
		{ lat: 43.03812770424564, lng: 141.47379735227184 }, // 新さっぽろ駅
	];
	const statiion = <{ id: string; name: string }[]>[
		{ id: 'T01', name: '宮の沢' },
		{ id: 'T02', name: '発寒南' },
		{ id: 'T03', name: '琴似' },
		{ id: 'T04', name: '二十四軒' },
		{ id: 'T05', name: '西28丁目' },
		{ id: 'T06', name: '円山公園' },
		{ id: 'T07', name: '西18丁目' },
		{ id: 'T08', name: '西11丁目' },
		{ id: 'T09', name: '大通' },
		{ id: 'T10', name: 'バスセンター前' },
		{ id: 'T11', name: '菊水' },
		{ id: 'T12', name: '東札幌' },
		{ id: 'T13', name: '白石' },
		{ id: 'T14', name: '南郷7丁目' },
		{ id: 'T15', name: '南郷13丁目' },
		{ id: 'T16', name: '南郷18丁目' },
		{ id: 'T17', name: '大谷地' },
		{ id: 'T18', name: 'ひばりが丘' },
		{ id: 'T19', name: '新さっぽろ' },
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

export const storeEastWest = lineEastWest();
