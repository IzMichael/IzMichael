<script lang="ts">
    import type { PageData } from './$types';

    import { cubicInOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';

    export let data: PageData;
</script>

<svelte:head>
    <title>{data.title} | IzMichael</title>
</svelte:head>

<div
    class="flex h-full w-full flex-col items-center justify-start"
    in:fly={{ duration: 300, easing: cubicInOut, x: 300, delay: 600 }}
    out:fly={{ duration: 300, easing: cubicInOut, x: 300 }}
>
    <img
        class="hidden aspect-video w-full rounded-xl object-cover object-center shadow-lg lg:block"
        alt="A view of London Heathrow Airport, out of the window of an Emirates A380."
        src="/assets/img/plane-wing-lhr.jpg"
    />
    <h2 class="mt-10 w-full text-left text-3xl font-bold">{data.title}</h2>
    <p class="mt-2 text-lg">{data.description}</p>

    {#if data.href}
        <a class="mt-10 w-full text-left text-lg font-semibold hover:underline" href={data.href}>
            {data.href}
        </a>
    {/if}
</div>

<style>
</style>
