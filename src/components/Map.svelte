<div id="map"></div>

<script lang="ts">
import { onMount } from 'svelte';
import * as pkg from '@googlemaps/js-api-loader';
export let GOOGLE_MAPS_API_KEY: string = '';
const { Loader } = pkg;

onMount(async () => {
  const loader = new Loader({
    apiKey: GOOGLE_MAPS_API_KEY,
    version: 'weekly',
    libraries: ['places']
  });
  const mapOptions = {
    center: {
      lat: 43.06865684773815,
      lng: 141.35073019896953
    },
    zoom: 14
  };

  const { Map } = await loader.importLibrary('maps');
  const map = new Map(document.getElementById('map') as HTMLElement, mapOptions);
});
</script>

<style>
#map {
  height: 100vh;
  width: 100vw;
}
</style>