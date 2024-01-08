import * as gmapStore from '@/store/gmap';

let gmap: google.maps.Gmap;
let loader: google.maps.Loader;
let count = 0;

export const renderPolyline = async (
	scale: number,
	paths: { lat: number; lng: number }[],
	color: string,
): google.maps.Polyline => {
	gmap = gmapStore.getGmap();
	loader = gmapStore.getLoader();
	const { Polyline } = await loader.importLibrary('maps');
	const { SymbolPath } = await loader.importLibrary('core');

	const circleSymbol = {
		path: SymbolPath.CIRCLE,
		scale: scale,
		strokeColor: color,
	};
	return new Polyline({
		path: paths,
		icons: [
			{
				icon: circleSymbol,
				offset: '100%',
			},
		],
		strokeColor: color,
		map: gmap,
	});
};

export const animateCircle = (line: google.maps.Polyline, delay: number) => {
	const timerId = setInterval(() => {
		count = count + (1 % 200);
		const icons = line.get('icons');
		icons[0].offset = `${count / 2}%`;
		line.set('icons', icons);
		if (count >= 200) {
			clearInterval(timerId);
		}
	}, delay);
};
