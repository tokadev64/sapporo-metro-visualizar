/// <reference lib="dom"/>

import * as gmapStore from '@/store/gmap';
import * as gmapOptions from '@/store/gmap_options';

//import { Loader } from '@googlemaps/js-api-loader';
import * as pkg from '@googlemaps/js-api-loader';
const { Loader } = pkg;

let loader: google.maps.Loader;

export const initLoader = (apiKey: string): void => {
	gmapStore.setLoader(
		new Loader({
			apiKey: apiKey,
			version: 'weekly',
			libraries: ['places'],
		}),
	);
	loader = gmapStore.getLoader();
};

export const renderMap = async (): Promise<void> => {
	gmapOptions.setGmapOptions(43.06865684773815, 141.35073019896953, 14);
	const { Map: Gmap } = await loader.importLibrary('maps');
	gmapStore.setGmap(
		new Gmap(document.getElementById('map'), gmapOptions.getGmapOptions()),
	);
};

export const setTransitLayer = async (): Promise<void> => {
	const { TransitLayer } = await loader.importLibrary('maps');
	const transitLayer = new TransitLayer();
	transitLayer.setMap(gmapStore.getGmap());
};

export const initMap = async (apiKey: string): Promise<void> => {
	await initLoader(apiKey);
	loader = await gmapStore.getLoader();
	await loader.load().then(() => {
		renderMap();
		setTransitLayer();
	});
};
