import { writable } from 'svelte/store';

export interface Contact {
  picture: string;
  displayName: string;
  lastMessage: string;
  lastTime: string;
  unreadCount: number;
}

export const Contacts = writable<Contact[]>([]);
