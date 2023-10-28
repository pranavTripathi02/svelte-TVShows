import { writable } from "svelte/store";

export const pageStore = writable(50);

const newPageNum = Math.ceil(Math.random() * 249);
pageStore.set(newPageNum);
