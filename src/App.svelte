<script lang="ts">
  import { onMount } from 'svelte';
  import type { Contact } from './Model';
  import Messenger from './Messenger.svelte';
  import SampleContacts from './SampleContacts';

  let contacts: Contact[] = [];

  onMount(() => {
    contacts = SampleContacts;
  });
</script>

<div class="h-screen w-screen bg-blue-50">
  <div class="p-12">
    <h1 class="text-2xl mb-4">Messenger</h1>
    <Messenger contactList="{contacts}" />
  </div>
</div>

<style >
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
