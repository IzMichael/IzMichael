<script lang="ts">
    // import { greeting } from '$lib/greeting';
    import Container from '$lib/Container.svelte';
    import Projects from '$lib/Projects.svelte';
    import Portfolio from '$lib/Portfolio.svelte';
    import Links from '$lib/Links.svelte';
</script>

<div
    class="tile-triangle flex h-screen w-full flex-col items-start justify-start overflow-x-hidden bg-[#D8E0EB] lg:flex-row lg:justify-center"
>
    <div
        class="mt-5 flex w-full flex-col items-center justify-start gap-5 px-7 lg:sticky lg:left-0 lg:top-0 lg:ml-5 lg:mt-0 lg:h-full lg:w-2/5 lg:justify-center lg:px-0"
    >
        <div
            class="flex w-full flex-col items-center justify-center rounded-lg bg-brand-senary py-10 shadow-lg lg:w-2/3"
        >
            <img src="/faviconbg.png" alt="IzMichael's PFP" class="mb-3 h-40 w-40 rounded-full bg-brand-primary p-2" />
            <h1 class="font-rubik text-4xl font-bold">IzMichael</h1>
            <h2 class="font-rubik mt-2 text-2xl font-semibold">Web Dev & Student</h2>
            <a class="font-semibold hover:text-[#00cccc] hover:underline" href="mailto:michael@izmichael.com">
                michael@izmichael.com
            </a>
        </div>

        <Links />
    </div>

    <div
        class="mt-5 flex w-full shrink-0 flex-col items-center justify-center gap-5 overflow-x-visible px-7 pb-16 lg:mt-0 lg:h-fit lg:min-h-full lg:w-3/5 lg:pl-5 lg:pr-16 lg:pt-5"
    >
        <Container heading="About Me" id="about">
            <p>
                I'm originally from the UK, but now living in NZ, and I'm a citizen of the United Kingdom, Ireland, and
                New Zealand.
            </p>
            <br />
            <p>
                I'm a self-taught Web Developer, specialising in SvelteKit. I'm interested in all things tech, I also
                take interest in trains, aviation, lingustics, and I'm an avid player of Minecraft.
            </p>
        </Container>

        <Container heading="Projects" id="projects">
            <p>I've made some brilliant things in my time, why not take a look?</p>
        </Container>
        <Projects />

        <Container heading="Portfolio" id="portfolio">
            <p>I also do paid work from time to time.</p>
            <a href="mailto:michael@izmichael.com" class="font-bold text-brand-primary hover:underline">
                Interested? Let's chat.
            </a>
        </Container>
        <Portfolio />

        <Container heading="The End!">
            <p>
                &copy; IzMichael {new Date().getFullYear()} - Thanks for visiting!
                <br />
                <span class="text-sm text-gray-600">IzMichael's Website - Updated 13th August 2024</span>
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
