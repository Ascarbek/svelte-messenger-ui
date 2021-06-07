<script lang="ts">
  import type { Contact } from './Model';
  export let contacts: Contact[] = []
</script>

{#each contacts as contact}
  <div class="flex items-center px-4 py-5 w-full">
    <div class="flex items-center justify-center mr-4 ">
      <img src="{contact.picture}" alt="contact" />
    </div>
    <div class="flex-1 flex flex-col min-w-0">
      <div class="text-sm whitespace-nowrap overflow-ellipsis overflow-hidden font-bold">{contact.displayName}</div>
      <div class="text-xs text-gray-600 whitespace-nowrap overflow-ellipsis overflow-hidden">{contact.lastMessage}</div>
    </div>
    <div class="flex flex-col items-end">
      <div class="text-xs text-gray-500 mb-1">{contact.lastTime}</div>
      <div class="bg-red-500 text-white text-xs rounded-xl px-1.5 text-center">{contact.unreadCount || ''}</div>
    </div>
  </div>
{/each}

<style>
  img {
    max-width: 40px;
    max-height: 40px;
    border-radius: 50%;
  }
</style>
