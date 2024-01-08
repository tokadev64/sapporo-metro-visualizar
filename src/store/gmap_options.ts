/// <reference lib="dom"/>

//import { Loader } from '@googlemaps/js-api-loader';
import { atom } from 'nanostores';

export type mapOptions = {
	center: {
		lat: number;
		lng: number;
	};
	zoom: number;
};

const $lat = atom<number>(0);
const $lng = atom<number>(0);
const $zoom = atom<number>(0);
const $mapOptions = atom<mapOptions>({});

export const getLat = (): number => {
	return $lat.get();
};

export const setLat = (value: number): void => {
	$lat.set(value);
};

export const getLng = (): number => {
	return $lng.get();
};

export const setLng = (value: number): void => {
	$lng.set(value);
};

export const getZoom = (): number => {
	return $zoom.get();
};

export const setZoom = (value: number): void => {
	$zoom.set(value);
};

export const getGmapOptions = (): mapOptions => {
	return $mapOptions.get();
};

export const setGmapOptions = (
	lat: number,
	lng: number,
	zoom: number,
): void => {
	$mapOptions.set({
		center: {
			lat: lat,
			lng: lng,
		},
		zoom: zoom,
	});
};
