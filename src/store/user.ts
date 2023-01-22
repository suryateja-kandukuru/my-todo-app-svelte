import { writable } from "svelte/store";

export let token = writable('')

export const setToken = (tokenParam) => {
  token.set(tokenParam)
}