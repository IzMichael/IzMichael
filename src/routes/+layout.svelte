<script lang="ts">
    import { fly } from 'svelte/transition';
    import { theme } from '$lib/theme';

    import '../app.css';
    import '../fonts.css';

    export let data;
</script>

<div
    class="h-screen w-screen overflow-hidden {$theme == 'dark' ||
    ($theme == 'os' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? 'dark bg-zinc-900'
        : 'bg-zinc-100'}"
>
    {#key data.url}
        <div
            class="h-full w-full overflow-auto bg-zinc-100 text-black transition-colors duration-300 ease-linear dark:bg-zinc-900 dark:text-zinc-100"
            in:fly={{ y: -500, duration: 500, delay: 500 }}
            out:fly={{ y: -500, duration: 500, delay: 0 }}
        >
            <slot />
        </div>
    {/key}
</div>

<style>
</style>
