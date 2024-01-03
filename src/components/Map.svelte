<div id="map"></div>

<script lang="ts">
import { onMount } from 'svelte';
import * as pkg from '@googlemaps/js-api-loader';
const { Loader } = pkg;
import { storeStreetCar } from '@/store/lineStreetCar';
import { storeEastWest } from '@/store/lineEastWest';
import { storeNorthSouth } from '@/store/lineNorthSouth';
import { storeToho } from '@/store/lineToho';

const streetCar = storeStreetCar;
const eastWest = storeEastWest;
const northSouth = storeNorthSouth;
const toho = storeToho;

export let GOOGLE_MAPS_API_KEY: string = '';

onMount(async () => {
  const loader = new Loader({
    apiKey: GOOGLE_MAPS_API_KEY,
    version: 'weekly',
    libraries: ['places'],
  });
  const mapOptions = {
	center: {
		lat: 43.06865684773815,
		lng: 141.35073019896953,
	},
	zoom: 15,
};
  const { Map, TransitLayer, Polyline } = await loader.importLibrary('maps');
  const { SymbolPath } = await loader.importLibrary('core');
  const map = new Map(
    document.getElementById('map') as HTMLElement,
    mapOptions,
  );
  const transitLayer = new TransitLayer();
  transitLayer.setMap(map);

  // 市電
  const circleSymbolStreetCar = {
    path: SymbolPath.CIRCLE,
    scale: streetCar.getScale(),
    strokeColor: streetCar.getStrokeColor(),
  };
  const lineStreetCar = new Polyline({
    path: streetCar.getPaths(),
    icons: [
      {
        icon: circleSymbolStreetCar,
        offset: '100%',
      },
    ],
    strokeColor: streetCar.getStrokeColor(),
    map: map,
  });

  // 東西線
  const circleSymbolEastWest = {
    path: SymbolPath.CIRCLE,
    scale: eastWest.getScale(),
    strokeColor: eastWest.getStrokeColor(),
  };
  const lineEastWest = new Polyline({
    path: eastWest.getPaths(),
    icons: [
      {
        icon: circleSymbolEastWest,
        offset: '100%',
      },
    ],
    strokeColor: eastWest.getStrokeColor(),
    map: map,
  });

  // 南北線
  const circleSymbolNorthSouth = {
    path: SymbolPath.CIRCLE,
    scale: northSouth.getScale(),
    strokeColor: northSouth.getStrokeColor(),
  };
  const lineNorthSouth = new Polyline({
    path: northSouth.getPaths(),
    icons: [
      {
        icon: circleSymbolNorthSouth,
        offset: '100%',
      },
    ],
    strokeColor: northSouth.getStrokeColor(),
    map: map,
  });

  // 東豊線
  const circleSymbolToho = {
    path: SymbolPath.CIRCLE,
    scale: toho.getScale(),
    strokeColor: toho.getStrokeColor(),
  };
  const lineToho = new Polyline({
    path: toho.getPaths(),
    icons: [
      {
        icon: circleSymbolToho,
        offset: '100%',
      },
    ],
    strokeColor: toho.getStrokeColor(),
    map: map,
  });

  animateCircle(lineStreetCar);
  animateCircle(lineEastWest);
  animateCircle(lineNorthSouth);
  animateCircle(lineToho);

  // dev: get latlng
  map.addListener('click', (e: google.maps.MapMouseEvent) => {
    const lat = e.latLng?.lat();
    const lng = e.latLng?.lng();
    if (lat && lng) {
      console.info(lat, lng);
    }
  });
});

const animateCircle = (line: google.maps.Polyline) => {
  let count = 0;

  window.setInterval(() => {
    count = (count + 1) % 200;
    const icons = line.get('icons');
    icons[0].offset = count / 2 + '%';
    line.set('icons', icons);
  }, 500);
}
</script>

<style>
#map {
  height: 100vh;
  width: 100vw;
}
</style>