<script lang="ts">
  import type { Contact } from './Model';
  export let contacts: Contact[] = []
</script>

{#each contacts as contact}
  <div class="flex items-center p-3 ">
    <div class="flex items-center justify-center">
      <img src="{contact.picture}" alt="contact" />
    </div>
    <div class="flex-1">
      <div>{contact.displayName}</div>
      <div>{contact.lastMessage}</div>
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
