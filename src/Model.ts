import { writable } from 'svelte/store';

export interface Contact {
  picture: string;
  displayName: string;
  lastMessage: string;
  lastTime?: string;
  unreadCount?: number;
}

export interface Message {

}


export const Contacts = writable<Contact[]>([]);
