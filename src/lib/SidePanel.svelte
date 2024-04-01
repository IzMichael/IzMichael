<script lang="ts">
    import { cubicInOut } from 'svelte/easing';
    import { fade, fly } from 'svelte/transition';

    export let show = false;
</script>

{#if show}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        class="fixed inset-0 z-[1000] flex h-screen w-screen flex-row items-center justify-end overflow-hidden bg-black/30 p-5"
        role="button"
        tabindex="-1"
        on:click|self={() => (show = false)}
        in:fade={{ duration: 300, easing: cubicInOut }}
        out:fade={{ duration: 300, easing: cubicInOut, delay: 200 }}
    >
        <div
            class="relative flex h-full w-1/3 flex-col items-start justify-start overflow-y-auto rounded-lg bg-white p-5 shadow-lg"
            in:fly={{ x: 500, duration: 300, easing: cubicInOut, delay: 200 }}
            out:fly={{ x: 500, duration: 300, easing: cubicInOut }}
        >
            <button
                class="absolute right-0 top-0 m-3 rounded-full p-2 hover:bg-gray-200"
                on:click={() => (show = false)}
            >
                <img src="/assets/icons/x.svg" class="aspect-square h-7 w-7" alt="Close Icon" />
            </button>

            <slot />
        </div>
    </div>
{/if}

<style>
</style>
