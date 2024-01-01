<p>{text}</p>
<SvelteChild {...props} />

<script lang="ts">
import SvelteChild from '@/components/SvelteChild.svelte';
export const text: string = 'Svelte!';
export const props = {
  child: 'Child!',
};
</script>