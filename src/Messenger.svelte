<script lang="ts">
  import type { Contact } from './Model';
  import ContactList from './ContactList.svelte';

  export let contactList: Contact[] = [];
</script>

<div class="bg-white w-full flex rounded-2xl messenger">
  <div class="border border-blue-50 border-l-0 border-t-0 border-b-0 contact-list-wrapper flex flex-col">
    <div class="border border-blue-50 border-l-0 border-r-0 border-t-0 h-16 flex items-center justify-between">
      <div class="ml-4">Conversations</div>
      <div>
        <button class="bg-blue-50 h-8 w-8 rounded-lg text-sm mr-2"><i class="fas fa-search"></i></button>
        <button class="bg-blue-400 text-white w-8 h-8 rounded-lg text-sm mr-2"><i class="fas fa-plus"></i></button>
      </div>
    </div>

    <div class="relative h-full flex-1">
      <div class="absolute inset-0 overflow-y-auto">
        <ContactList contacts="{contactList}" />
      </div>
    </div>
  </div>

  <div class="flex-1">
    <div class="border border-blue-50 border-l-0 border-r-0 border-t-0 h-16"></div>
  </div>
</div>

<style>
  .messenger {
    height: 500px;
  }
  .contact-list-wrapper {
    width: 350px;
  }
</style>
