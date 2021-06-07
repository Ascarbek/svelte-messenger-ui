import { writable } from 'svelte/store';

export interface Contact {
  picture: string;
  displayName: string;
  lastMessage: string;
  lastTime?: string;
  unreadCount?: number;
}

export interface Message {
  displayName:string;
  picture:string;
  messageTime:string;
  messageText:string;
}


export const Contacts = writable<Contact[]>([]);
export const Messages = writable<Message[]>([]);