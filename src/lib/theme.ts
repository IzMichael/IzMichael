import { writable } from 'svelte/store';

export const theme = writable<string>(localStorage.getItem('theme') ?? 'os');

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    const newTheme = event.matches ? 'dark' : 'light';
    theme.set(newTheme);
});

theme.subscribe((event) => {
    localStorage.setItem('theme', event);
});
