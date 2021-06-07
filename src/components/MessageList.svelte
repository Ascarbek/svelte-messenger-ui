<script lang="ts">
  import type { Message } from './Model';

  export let messages: Message[] = [];
</script>

{#each messages as msg}
  <div class="flex mb-8">
    <div class="flex items-start justify-center mr-4 ">
      <img src="{msg.picture}" />
    </div>

    <div>
      <div class=" py-1 ">
        <span class="font-bold mr-2">{msg.displayName}</span>
        <span class="text-gray-400 font-semibold text-sm">{msg.messageTime}</span>
      </div>
      <div class="text-gray-500">
        {msg.messageText}
      </div>
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
