<script lang="ts">
  import { onMount } from 'svelte';
  import type { Contact, Message } from './components/Model';
  import Messenger from './components/Messenger.svelte';
  import SampleContacts from './SampleContacts';
  import SampleMessages from './SampleMessages';

  let contacts: Contact[] = [];
  let messages: Message[] = [];

  onMount(() => {
    contacts = <Contact[]>SampleContacts.map((c) => ({
      ...c,
    }));
    contacts[0].unreadCount = 1;
    contacts[1].unreadCount = 2;
    messages = SampleMessages;
  });
</script>

<div class="h-screen w-screen bg-blue-50">
  <div class="p-12">
    <h1 class="text-2xl mb-4">Messenger</h1>
    <Messenger contactList="{contacts}" messages="{messages}" />
  </div>
</div>

<style>
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
