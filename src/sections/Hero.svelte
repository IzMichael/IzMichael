<script lang="ts">
    import typewriter from '$lib/typewriter';
    import { theme } from '$lib/theme';
    import { greeting } from '$lib/greeting';
    import Flag from '$lib/Flag.svelte';

    let emailStr =
        '\u006d\u0069\u0063\u0068\u0061\u0065\u006c\u0040\u0069\u007a\u006d\u0069\u0063\u0068\u0061\u0065\u006c\u002e\u0063\u006f\u006d';
</script>

<section class="relative flex h-screen w-full flex-col items-center justify-center">
    <div class="flex w-full flex-1 flex-col items-center justify-center px-5 lg:w-1/2 lg:px-0">
        <h1 class="w-full text-left text-3xl font-bold lg:text-4xl">
            <span
                use:typewriter={{
                    strings: greeting(),
                    disabled: false,
                    shuffle: true,
                    delay: 5000,
                    interval: 25,
                    caret: '_',
                }}
            />!
        </h1>
        <h2 class="my-2 w-full text-left text-xl font-semibold lg:text-2xl">
            I'm IzMichael, a self-taught web developer based in New Zealand.
        </h2>
        <p class="nationalities-intro w-full text-left text-base lg:text-lg">
            I'm originally from the UK, and I hold citizenships in the United Kingdom, Ireland, and New Zealand.
        </p>
        <!-- <p class="nationalities-intro w-full text-left text-base lg:text-lg">
            I'm originally from the UK, and I hold citizenships in the <span>United Kingdom <Flag code="GB" />,</span>
            <span>Ireland <Flag code="IE" />,</span>
            and <span>New Zealand <Flag code="NZ" />.</span>
        </p> -->
        <p class="mt-2 w-full text-left text-base lg:text-lg">
            I'm a self-taught Web Developer, specialising in SvelteKit. I'm interested in all things tech, I also take
            interest in trains, aviation, lingustics, and I'm an avid player of Minecraft and follower of Eurovision.
        </p>

        <br />

        <p class="w-full text-left text-sm lg:text-base">
            You can find me everywhere using these links, or email me, at
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a
                class="xfont-semibold hover:text-[#296b9f]"
                href="javascript:location='mailto:\u006d\u0069\u0063\u0068\u0061\u0065\u006c\u0040\u0069\u007a\u006d\u0069\u0063\u0068\u0061\u0065\u006c\u002e\u0063\u006f\u006d';void 0"
                >{emailStr}</a
            >.
        </p>
        <div
            class="mt-2 flex w-full flex-row flex-wrap items-center justify-around gap-y-2 text-center text-base lg:text-lg"
        >
            <a href="https://twitter.com/IzMichael7" class="flex-1 px-5 hover:font-semibold hover:text-[#00acee]"
                >Twitter</a
            >
            <a href="https://mas.to/@IzMichael" class="flex-1 px-5 hover:font-semibold hover:text-[#6265ff]">Mastodon</a
            >
            <a href="https://threads.net/izmichael7" class="flex-1 px-5 hover:font-semibold hover:text-[#8a3ab9]">Threads</a
            >
            <a href="https://github.com/IzMichael" class="flex-1 px-5 hover:font-semibold hover:text-[#433ea8]"
                >GitHub</a
            >
            <a
                href="https://discordapp.com/users/349062232652382220"
                class="flex-1 px-5 hover:font-semibold hover:text-[#5865F2]">Discord</a
            >
            <a href="https://ko-fi.com/IzMichael" class="flex-1 px-5 hover:font-semibold hover:text-[#00b9fe]">Ko-Fi</a>
        </div>

        <br />

        <p class="w-full text-left text-sm lg:text-base">
            You can scroll down to find out more about me and my work. Or not, I don't mind.
        </p>
    </div>

    <div class="absolute bottom-0 mb-2 flex w-full flex-row items-center justify-center text-zinc-500">
        <p>&copy; 2023, Michael Martin</p>

        <span class="mx-5"> // </span>

        <button
            class="hover:underline"
            type="button"
            on:click={() => {
                console.log($theme);
                if ($theme == 'light') $theme = 'dark';
                else if ($theme == 'dark') $theme = 'light';
                else if ($theme == 'os')
                    $theme =
                        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
                            ? 'dark'
                            : 'light';
            }}>Change Theme</button
        >
    </div>
</section>

<style>
    .nationalities-intro span {
        white-space: nowrap;
    }
</style>
