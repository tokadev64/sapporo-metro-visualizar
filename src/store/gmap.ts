//import { Loader } from '@googlemaps/js-api-loader';
import { atom } from 'nanostores';

const $gmap = atom<google.maps.Map>();
const $loader = atom<google.maps.Loader>();

export const getGmap = (): google.maps.Map => {
	return $gmap.get();
};

export const setGmap = (value: google.maps.Map) => {
	$gmap.set(value);
};

export const getLoader = (): google.maps.Loader => {
	return $loader.get();
};

export const setLoader = (value: google.maps.Loader) => {
	$loader.set(value);
};
