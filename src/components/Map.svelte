<div id="map"></div>

<script lang="ts">
import { onMount } from 'svelte';
import * as pkg from '@googlemaps/js-api-loader';
const { Loader } = pkg;

import * as gmapStore from '@/store/gmap';
import * as gmapUtils from '@/utils/gmap';
import * as polylineUtils from '@/utils/polyline';

import { storeStreetCar, streetCarCount } from '@/store/lineStreetCar';
import { storeTozai } from '@/store/lineTozai';
import { storeNamboku } from '@/store/lineNamboku';
import { storeToho } from '@/store/lineToho';

import { timeSchedules } from '@/components/time_schedule';

const streetCar = storeStreetCar;
const tozai = storeTozai;
const namboku = storeNamboku;
const toho = storeToho;

export let GOOGLE_MAPS_API_KEY: string = '';

onMount(async () => {
  // map rendering.
  await gmapUtils.initMap(GOOGLE_MAPS_API_KEY);
  const loader: google.maps.Loader = await gmapStore.getLoader();
  const gmap: google.maps.Map = await gmapStore.getGmap();

  // polyline rendering.
  const { Polyline } = await loader.importLibrary('maps');
  const { SymbolPath } = await loader.importLibrary('core');

  // dev
  const circleSymbolStreetCar = {
    path: SymbolPath.CIRCLE,
    scale: streetCar.getScale(),
    strokeColor: streetCar.getStrokeColor(),
  };
  const devPath = <{ lat: number; lng: number }[]>[
		{ lat: 43.057264909658194, lng: 141.3528651341244 }, // 狸小路駅
		{ lat: 43.058800023332, lng: 141.35242580566089 },
		{ lat: 43.05891863479601, lng: 141.3521595168347 },
		{ lat: 43.05886874051356, lng: 141.35179930493052 }, // 西4丁目駅
	];
  const polylineDev = new Polyline({
    path: devPath,
    icons: [
      {
        icon: circleSymbolStreetCar,
        offset: '100%',
      },
    ],
    strokeColor: streetCar.getStrokeColor(),
    map: gmap,
  });

  // 市電
  const polylineStreetCar = await polylineUtils.renderPolyline(streetCar.getScale(), streetCar.getPaths(), streetCar.getStrokeColor());
  // 東西線
  const polylineTozai = await polylineUtils.renderPolyline(tozai.getScale(), tozai.getPaths(), tozai.getStrokeColor());
  // 南北線
  const polylineNamboku = await polylineUtils.renderPolyline(namboku.getScale(), namboku.getPaths(), namboku.getStrokeColor());
  // 東豊線
  const polylineToho = await polylineUtils.renderPolyline(toho.getScale(), toho.getPaths(), toho.getStrokeColor());

  await polylineUtils.animateCircle(polylineDev, 1000);
  await polylineUtils.animateCircle(polylineStreetCar, 1000);
  await polylineUtils.animateCircle(polylineTozai, 1000);
  await polylineUtils.animateCircle(polylineNamboku, 1000);
  await polylineUtils.animateCircle(polylineToho, 1000);

  // dev: get latlng
  gmap.addListener('click', (e: google.maps.MapMouseEvent) => {
    const lat = e.latLng?.lat();
    const lng = e.latLng?.lng();
    if (lat && lng) {
      console.info(lat, lng);
    }
  });
});
</script>

<style>
#map {
  height: 100vh;
  width: 100vw;
}
</style>