<script lang="ts">
    // import { greeting } from '$lib/greeting';
    import Container from '$lib/Container.svelte';
    import Projects from '$lib/Projects.svelte';
    import Portfolio from '$lib/Portfolio.svelte';
    import Links from '$lib/Links.svelte';

    let emailStr =
        '\u006d\u0069\u0063\u0068\u0061\u0065\u006c\u0040\u0069\u007a\u006d\u0069\u0063\u0068\u0061\u0065\u006c\u002e\u0063\u006f\u006d';
</script>

<div
    class="tile-triangle flex h-screen w-full flex-col items-center justify-start overflow-x-hidden bg-slate-200 lg:flex-row lg:justify-center"
>
    <div class="mt-5 flex w-full flex-col items-center justify-start gap-5 px-7 lg:ml-5 lg:mt-0 lg:w-2/5 lg:px-0">
        <div class="flex w-full flex-col items-center justify-center rounded-lg bg-white py-10 shadow-lg lg:w-2/3">
            <img src="/faviconbg.png" alt="IzMichael's PFP" class="mb-3 h-40 w-40 rounded-full bg-teal p-2" />
            <h1 class="font-rubik text-4xl font-bold">IzMichael</h1>
            <h2 class="mt-2 font-rubik text-2xl font-semibold">Web Dev & Student</h2>
            <a
                class="font-semibold hover:text-[#00cccc] hover:underline"
                href="javascript:location='mailto:{emailStr}';void 0"
            >
                {emailStr}
            </a>
        </div>

        <Links />
    </div>

    <div
        class="mt-5 flex w-full flex-col items-center justify-start gap-5 overflow-x-visible px-7 pb-16 lg:mt-0 lg:h-full lg:w-3/5 lg:overflow-y-auto lg:pl-5 lg:pr-16"
    >
        <Container heading="About Me">
            <p>I'm originally from the UK, and I hold citizenships in the United Kingdom, Ireland, and New Zealand.</p>
            <br />
            <p>
                I'm a self-taught Web Developer, specialising in SvelteKit. I'm interested in all things tech, I also
                take interest in trains, aviation, lingustics, and I'm an avid player of Minecraft.
            </p>
        </Container>

        <Container heading="Projects">
            <p>I've made some brilliant things in my time, why not take a look?</p>
        </Container>

        <Projects />

        <Container heading="Portfolio">
            <p>I also do paid work from time to time.</p>
            <a href="mailto:chat@izmichael.com" class="text-teal hover:underline">Interested? Let's chat.</a>
        </Container>

        <Portfolio />

        <Container heading="The End!">
            <p>
                &copy; IzMichael {new Date().getFullYear()} - Thanks for visiting!
                <br />
                <span class="text-sm text-gray-600">IzMichael's Website - Updated 13th November 2023</span>
            </p>
        </Container>
    </div>
</div>

<style>
    .tile-triangle {
        background-image: url('/assets/icons/triangle-tile.svg');
        background-repeat: repeat;
        background-position: center;
        background-size: 7vw;
    }

    @media (min-width: 1024px) {
        .tile-triangle {
            background-size: 2vw;
        }
    }
</style>
