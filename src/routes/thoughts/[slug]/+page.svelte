<script lang="ts">
    import dayjs from 'dayjs';
    import advancedFormat from 'dayjs/plugin/advancedFormat';
    dayjs.extend(advancedFormat);

    export let data;
    import './gfm.css';
</script>

<svelte:head>
    <title>IzMichael - {data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<section class="relative flex min-h-screen w-full flex-col items-center justify-start">
    <a href="/" class="left-0 w-full p-5 text-left lg:absolute lg:top-0 lg:w-fit">&LeftArrow; Return to Main Site</a>

    <div class="flex h-full flex-col items-center justify-start p-5 lg:w-1/2 lg:px-0 lg:py-32">
        <h1 class="w-full text-left text-4xl font-bold">{data.meta.title}</h1>
        <h2 class="w-full text-left text-2xl font-semibold">
            Published: {dayjs(data.meta.date).format('Do MMMM YYYY')} - {data.meta.categories
                .map((t) => '#' + t)
                .join(', ')}
        </h2>

        <br />

        <div class="markdown-body w-full text-left text-lg">
            <svelte:component this={data.content} />
        </div>
    </div>
</section>

<style>
</style>
