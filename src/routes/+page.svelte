<script lang="ts">
    import { cubicInOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
</script>

<svelte:head>
    <title>IzMichael</title>
</svelte:head>

<div
    class="flex h-full w-full flex-col items-center justify-start"
    in:fly={{ duration: 300, easing: cubicInOut, x: 300, delay: 600 }}
    out:fly={{ duration: 300, easing: cubicInOut, x: 300 }}
>
    <img
        class="hidden aspect-video w-full rounded-xl border-2 border-brand-quinary object-cover object-center shadow-lg lg:block"
        alt="A view of London Heathrow Airport, out of the window of an Emirates A380."
        src="/assets/img/plane-wing-lhr.jpg"
    />

    <div class="mb-1 mt-10 flex w-full flex-row items-center justify-start text-left text-lg font-bold">
        <span class="-mt-1 mr-2 select-none">//</span>
        <p>About Me</p>
    </div>
    <p class="w-full">Hi! I'm Michael, a self-taught web developer based in Auckland, New Zealand.</p>
    <p class="mt-4 w-full">
        I was born in the United Kingdom to Northern Irish and British-Asian parents, before moving to New Zealand.
        English is my native language, but I'm learning French and a bit of Irish in my free time.
    </p>
    <p class="mt-4 w-full">
        I mainly specialise in SvelteKit, using TypeScript and SQLite, but I'm familiar with other areas too. I take an
        interest in politics, languages, travel, trains, planes, and technology. I'm an avid player of Minecraft, and
        tend to spend my days either gaming or programming.
    </p>
</div>

<style>
</style>
