<script lang="ts">
    import '../app.css';
    import '../fonts.css';

    import type { LayoutData } from './$types';

    import { portfolio, projects, socials } from '$lib/data';
    import { greeting } from '$lib/greeting';
    import List from '$lib/List.svelte';
    import typewriter from '$lib/typewriter';

    export let data: LayoutData;
</script>

<svelte:head>
    <script data-domain="izmichael.com" defer src="https://analytics.izmichael.com/js/script.js"></script>

    <!-- Primary Meta Tags -->
    <meta name="title" content="IzMichael" />
    <meta name="description" content="I'm IzMichael, a self-taught web developer based in Auckland, New Zealand." />

    <!-- Open Graph / Facebook -->
    <meta content="website" property="og:type" />
    <meta content="https://izmichael.com/" property="og:url" />
    <meta content="IzMichael" property="og:title" />
    <meta
        content="I'm IzMichael, a self-taught web developer based in Auckland, New Zealand."
        property="og:description"
    />
    <meta content="https://izmichael.com/assets/cover.png" property="og:image" />

    <!-- Twitter -->
    <meta content="summary_large_image" property="twitter:card" />
    <meta content="https://izmichael.com/" property="twitter:url" />
    <meta content="IzMichael" property="twitter:title" />
    <meta
        content="I'm IzMichael, a self-taught web developer based in Auckland, New Zealand."
        property="twitter:description"
    />
    <meta content="https://izmichael.com/assets/cover.png" property="twitter:image" />
</svelte:head>

<div
    class="flex max-h-screen min-h-screen w-screen flex-col items-start justify-start overflow-y-auto overscroll-none bg-brand-quaternary px-5 py-12 font-jakarta text-brand-primary lg:flex-row lg:justify-evenly lg:gap-0 lg:px-0 lg:py-24"
>
    <div class="flex w-full shrink-0 flex-col items-center justify-start gap-12 lg:h-full lg:w-2/5 lg:gap-24">
        <a class="w-full" href="/">
            <p
                class="mb-1 w-full text-left text-xl font-semibold"
                use:typewriter={{
                    caret: '_',
                    strings: greeting().map((s) => s + "! I'm "),
                    shuffle: false,
                    interval: 50,
                    delay: 10000,
                }}
            >
                Welcome!
            </p>
            <h1 class="w-full text-left text-7xl font-bold">IzMichael.</h1>
        </a>

        <List
            items={socials.map((s) => {
                return { title: s.title, subtitle: s.username, href: s.href, color: s.color };
            })}
            title="Socials"
        />

        <List
            items={projects.map((s) => {
                return {
                    title: s.title,
                    subtitle: new Date(s.date).getFullYear().toString(),
                    href: '/p/' + s.slug,
                    color: s.color,
                };
            })}
            title="Projects"
        />

        <List
            items={portfolio.map((s) => {
                return {
                    title: s.title,
                    subtitle: new Date(s.date).getFullYear().toString(),
                    href: '/p/' + s.slug,
                    color: s.color,
                };
            })}
            title="Portfolio"
        />

        <p class="w-full text-left">&copy; 2024 - IzMichael</p>
    </div>

    <div class="w-full shrink-0 overflow-hidden lg:h-full lg:w-2/5">
        {#key data.url}
            <slot />
        {/key}
    </div>
</div>

<style>
</style>
