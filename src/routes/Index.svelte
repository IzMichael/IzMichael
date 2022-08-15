<svelte:head>
    <title>IzMichael</title>
</svelte:head>

<script>
    import Sidebar from '../lib/Sidebar.svelte';
    import Footer from '../lib/Footer.svelte';
    import { onMount } from 'svelte';

    let links = [
        { 'href': 'https://discordapp.com/users/349062232652382220',           'label': 'Discord',      'handle': '@IzMichael#6437',       'icon': '/assets/img/discord.svg'   },
        { 'href': 'https://github.com/IzMichael',                              'label': 'GitHub',       'handle': '@IzMichael',            'icon': '/assets/img/github.svg'    },
        { 'href': 'https://twitter.com/IzMichael7',                            'label': 'Twitter',      'handle': '@IzMichael7',           'icon': '/assets/img/twitter.svg'   },
        { 'href': 'https://instagram.com/IzMichael_',                          'label': 'Instagram',    'handle': '@IzMichael_',           'icon': '/assets/img/instagram.svg' },
        { 'href': 'https://twitch.tv/IzMichael7',                              'label': 'Twitch',       'handle': 'IzMichael7',            'icon': '/assets/img/twitch.svg'    },
        { 'href': 'https://www.youtube.com/channel/UCU7AHWO2LFoJk2yhThAAH4g/', 'label': 'YouTube',      'handle': 'IzMichael',             'icon': '/assets/img/youtube.svg'   },
        { 'href': 'https://blog.izmichael.com',                                'label': 'Blog',         'handle': 'blog.izmichael.com',    'icon': '/assets/img/blog.svg',     },
        { 'href': 'https://ko-fi.com/izmichael',                               'label': 'Ko-Fi',        'handle': 'IzMichael',             'icon': '/assets/img/kofi.png'
    ], repos = [];

    onMount(async () => {
        repos = await fetch('https://api.github.com/users/IzMichael/repos?sort=pushed&direction=desc').then(res => { return res.json() });
    });
</script>

<div class="flex flex-row items-center justify-center w-screen h-screen max-h-screen overflow-hidden font-clean max-w-screen">
    <Sidebar></Sidebar>
    
    <div id="body" class="flex flex-col items-center justify-start flex-1 h-screen max-h-full overflow-x-auto overflow-y-scroll snap-y snap-mandatory">
        <section id="front-page" class="flex flex-col items-center justify-center py-4 border-b-2">
            <div class="w-2/3">
                <h1 class="mr-3 text-6xl font-stnd">Hey! I'm Michael!</h1>
                <h4 class="mt-2 text-3xl">My name is Michael Martin, but I go by IzMichael everywhere that's important.</h4>
                <hr class="my-4 border-t-2 border-gray-500">
                <div class="flex flex-row items-center justify-start gap-2">
                    {#each links as link}
                        <a href={link.href} class="flex flex-row items-center transition-all duration-1000 ease-in-out border-2 border-gray-300 rounded-full cursor-pointer select-none hover:border-blue-600 group">
                            <img src={link.icon} class="p-1 transition-all duration-1000 ease-in-out rounded-full w-9 h-9 group-hover:bg-blue-200" alt={link.label}>
                            <p class="w-0 h-full overflow-hidden font-mono transition-all duration-1000 ease-in-out group-hover:p-1 group-hover:w-48" style="max-width: {0.70 * link.handle.length}rem;">{link.handle}</p>
                        </a>
                    {/each}
                </div>
            </div>
        </section>

        <section id="about-me" class="flex flex-col items-center justify-center py-4 border-b-2">
            <div class="w-2/3">
                <h2 class="mb-4 text-4xl font-stnd">About</h2>
                <p class="text-2xl">Hello, my name is Michael. I'm a <a href="https://lightondev.com" class="text-blue-600 underline">professional web developer</a> based in New Zealand. I'm originally from the UK, but moved here in 2012. I enjoy all things tech, and I like reading, Minecraft, and trains. I'm interested in cities and city infrastructure such as public transport and law.</p>
            </div>
        </section>

        <section id="portfolio" class="flex flex-col items-center justify-center py-4 border-b-2">
            <div class="flex flex-col w-2/3 gap-2">
                <h2 class="mb-1 text-4xl font-stnd">Portfolio</h2>
                <h2 class="mb-2 text-2xl font-stnd">My Latest GitHub Repositories</h2>
                {#each repos.slice(0, 4) as repo}
                    <a href={repo.html_url} class="relative p-4 border-2 border-gray-300 rounded-xl">
                        <h1 class="text-2xl font-semibold">{repo.name}</h1>
                        <h1 class="text-lg">{repo.description}</h1>
                        <p class="absolute top-0 right-0 m-4 text-xl text-right">Stars: {repo.stargazers_count}  -  Watchers: {repo.watchers_count}<br>Primary Language: {repo.language}</p>
                    </a>
                {/each}
            </div>
        </section>

        <Footer></Footer>
    </div>
</div>

<style>
    section {
        width: 100%;
        height: 100vh;
        flex: none;
        padding: 1rem;
        scroll-snap-align: center;
    }
</style>
