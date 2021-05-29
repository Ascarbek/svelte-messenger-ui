<script lang="ts">
  import { onMount } from 'svelte';
  import Messenger from './Messenger.svelte';

  onMount(() => {});
</script>

<div class="h-screen w-screen bg-blue-50">
  <div class="p-12">
    <h1 class="text-2xl mb-4">Messenger</h1>
    <Messenger />
  </div>
</div>

<style global>
  @tailwind base;
  @tailwind utilities;
  body {
    font-family: 'Roboto Condensed', sans-serif;
  }

  input,
  input:focus,
  button,
  button:focus {
    outline: none;
  }
</style>
