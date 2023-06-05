<script lang="ts">
    import Hero from '$sections/Hero.svelte';
    import Portfolio from '$sections/Portfolio.svelte';
    import Thoughts from '$sections/Thoughts.svelte';
    import Footer from '$sections/Footer.svelte';

    export let data;
</script>

<svelte:head>
    <title>IzMichael</title>
</svelte:head>

<Hero />

<br class="lg:hidden" />
<br class="lg:hidden" />
<br class="lg:hidden" />

<Portfolio />

<br class="lg:hidden" />
<br class="lg:hidden" />
<br class="lg:hidden" />

<Thoughts posts={data.posts} />

<br class="lg:hidden" />

<Footer />

<style>
</style>
