<script>
    let projects = [
        // { 'title': 'Loqui', 'href': 'https://loqui.izmichael.com/', 'image': '', 'color': '', 'description': '' },
        { 'title': 'Flaggle', 'href': 'https://flaggle.izmichael.com/', 'image': '/assets/img/flaggle.png', 'color': '#5d9bff', 'description': 'Flaggle is a game about flags. The game will present you with a flag, and your job is to identify the country or territory that the flag belongs to.' },
        { 'title': 'Among Us Tracker', 'href': 'https://amongus.izmichael.com/', 'image': '/assets/img/amongus.png', 'color': '#c71110', 'description': 'Among Us Tracker is an easy to use application designed to assist you in your Among Us games.' },
        { 'title': 'The Phoenix Pages', 'href': 'https://phoenix-pages.izmichael.com/', 'image': '/assets/img/phoenixpages.png', 'color': '#f66d12', 'description': 'The Phoenix Pages is a website and discord bot that provides a registry and browsable index of all the shops and places on the Phoenixcraft Season 6 server.' },
        { 'title': 'WordBet', 'href': 'https://wordbet.izmichael.com/', 'image': '/assets/img/wordbet.png', 'color': '#37bd5d', 'description': 'WordBet is a fun word game inspired by Wordle.' },
        // { 'title': 'MattPlaz', 'href': 'https://mattplaz.xyz/', 'image': '/assets/img/mattplaz.png', 'color': '#3d56b0', 'description': 'The official website for the Matt Plaz and GoldenFoxFilms YouTube channels.' },
        { 'title': 'IzTimer', 'href': 'https://timer.izmichael.com/', 'image': '/assets/img/iztimer.png', 'color': '#e5e7eb', 'description': 'A simple to use timer, with looping and interval capacity.' },
        { 'title': 'Loqui', 'href': 'https://loqui.izmichael.com/', 'image': '/assets/img/loqui.png', 'color': '#3b82f6', 'description': 'Fully featured, multi-channel chat application, built with PocketBase and SvelteKit.' },
        { 'title': 'MC Wardrobe', 'href': 'https://mc-wardrobe.izmichael.com/', 'image': '/assets/img/mcwardrobe.png', 'color': '#16a34a', 'description': 'A powerful application for customising Minecraft skins. Allows for limb and clothes mix-and-matching, outfit saving, and importing.' },
        { 'title': 'IzDownloads', 'href': 'https://download.izmichael.com/', 'image': '/assets/img/izdownloads.png', 'color': '#6ee7b7', 'description': 'My website for sharing my downloadable scripts, Minecraft Datapacks and Resource Packs, and programs.' },
        { 'title': 'The Rosy Shell', 'href': 'https://therosyshell.co.nz/', 'image': '/assets/img/therosyshell.png', 'color': '#f121a6', 'description': 'I created a powerful E-Commerce website for a client, custom built using PocketBase.' }
    ];
</script>

<div class="flex flex-col items-center justify-start w-full min-h-screen">
    <div class="bg-gradient w-full h-32 p-2"></div>
    <div id="portfolioHeader" class="lg:p-10 flex flex-col items-center justify-center w-full p-5 mb-3 text-white bg-blue-500">
        <h4 class="text-3xl font-bold text-center">My Creations</h4>
        <!-- <a class="hover:underline text-3xl text-center" href="https://github.com/IzMichael">Check out my GitHub for more!</a> -->
    </div>
    <div class="lg:grid-cols-3 grid w-3/4 grid-cols-1 gap-5 py-5 mb-5">
        {#each projects.sort(() => Math.random() - Math.random()) as item}
            <a class="hover:shadow-none rounded-xl shrink-0 flex flex-col items-center justify-start w-full h-full p-4 border-2 shadow-lg" style="border-color: {item.color};" href={item.href}>
                <img src={item.image} class="rounded-xl w-full mb-5 shadow-lg" alt="{item.label} Thumbnail" />
                <h6 class="lg:text-2xl w-full text-lg font-bold text-center">{item.title}</h6>
                <p class="lg:text-lg w-full mt-1 text-base text-center">{item.description}</p>
            </a>
        {/each}
    </div>
</div>

<style>
    
</style>