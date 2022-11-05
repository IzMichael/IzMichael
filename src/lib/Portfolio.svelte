<script>
    let projects = [
        // { 'title': 'Loqui', 'href': 'https://loqui.izmichael.com/', 'image': '', 'color': '', 'description': '' },
        { 'title': 'Flaggle', 'href': 'https://flaggle.izmichael.com/', 'image': '/assets/img/flaggle.png', 'color': '#5d9bff', 'description': 'Flaggle is a game about flags. The game will present you with a flag, and your job is to identify the country or territory that the flag belongs to.' },
        { 'title': 'Among Us Tracker', 'href': 'https://amongus.izmichael.com/', 'image': '/assets/img/amongus.png', 'color': '#c71110', 'description': 'Among Us Tracker is an easy to use application designed to assist you in your Among Us games.' },
        { 'title': 'The Phoenix Pages', 'href': 'https://phoenix-pages.izmichael.com/', 'image': '/assets/img/phoenixpages.png', 'color': '#f66d12', 'description': 'The Phoenix Pages is a website and discord bot that provides a registry and browsable index of all the shops and places on the Phoenixcraft Season 6 server.' },
        { 'title': 'WordBet', 'href': 'https://wordbet.izmichael.com/', 'image': '/assets/img/wordbet.png', 'color': '#37bd5d', 'description': 'WordBet is a fun word game inspired by Wordle.' },
        { 'title': 'MattPlaz', 'href': 'https://mattplaz.xyz/', 'image': '/assets/img/mattplaz.png', 'color': '#3d56b0', 'description': 'The official website for the Matt Plaz and GoldenFoxFilms YouTube channels.' },
        { 'title': 'IzTimer', 'href': 'https://timer.izmichael.com/', 'image': '/assets/img/iztimer.png', 'color': '#FFC0CB', 'description': 'A simple to use timer, with looping and interval capacity.' },
    ];

    function shuffle(arr) {
        const newArr = arr.slice()
        for (let i = newArr.length - 1; i > 0; i--) {
            const rand = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
        };
        return newArr
    };
</script>

<div class="flex flex-col items-center justify-center w-full h-screen py-10 lg:px-20 px-10">
    <h4 class="flex flex-col justify-center items-center text-3xl max-w-[50%] text-center flex-1">I've made some cool stuff over the years...</h4>
    <a class="mb-10 flex flex-col justify-center items-center text-3xl max-w-[50%] text-center flex-1 hover:underline" href="https://github.com/IzMichael">Check out my GitHub for more!</a>
    <div class="flex flex-row justify-start items-center h-3/4 w-full max-w-full overflow-x-auto p-2">
        {#each shuffle(projects) as item, i}
            <a class="flex flex-col justify-start items-center w-[25vw] h-full p-4 rounded-xl ring-2 shrink-0 {i != 0 ? 'lg:ml-10 ml-5' : ''}" style="--tw-ring-color: {item.color};" href={item.href}>
                <img src={item.image} class="w-full shadow-lg rounded-xl mb-5" alt="{item.label} Thumbnail" />
                <h6 class="lg:text-2xl text-lg font-bold w-full text-center">{item.title}</h6>
                <p class="lg:text-lg text-base mt-1 w-full text-center">{item.description}</p>
            </a>
        {/each}
    </div>
</div>

<style>
    
</style>