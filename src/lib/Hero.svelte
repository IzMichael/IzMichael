<script>
    let links = [
        { 'href': 'https://discordapp.com/users/349062232652382220',           'label': 'Discord',      'handle': '@IzMichael#6437',       'icon': '/assets/img/discord.svg'    },
        { 'href': 'https://github.com/IzMichael',                              'label': 'GitHub',       'handle': '@IzMichael',            'icon': '/assets/img/github.svg'     },
        { 'href': 'https://twitter.com/IzMichael7',                            'label': 'Twitter',      'handle': '@IzMichael7',           'icon': '/assets/img/twitter.svg'    },
        { 'href': 'https://mas.to/@IzMichael',                                 'label': 'Mastodon',      'handle': '@IzMichael',           'icon': '/assets/img/mastodon.svg'   },
        // { 'href': 'https://instagram.com/IzMichael_',                          'label': 'Instagram',    'handle': '@IzMichael_',           'icon': '/assets/img/instagram.svg' },
        // { 'href': 'https://twitch.tv/IzMichael7',                              'label': 'Twitch',       'handle': 'IzMichael7',            'icon': '/assets/img/twitch.svg'    },
        { 'href': 'https://www.youtube.com/channel/UCU7AHWO2LFoJk2yhThAAH4g/', 'label': 'YouTube',      'handle': 'IzMichael',             'icon': '/assets/img/youtube.svg'   },
        // { 'href': 'https://blog.izmichael.com',                                'label': 'Blog',         'handle': 'blog.izmichael.com',    'icon': '/assets/img/blog.svg'      },
        { 'href': 'https://ko-fi.com/izmichael',                               'label': 'Ko-Fi',        'handle': 'IzMichael',             'icon': '/assets/img/coin.svg'      },
    ];

    let namePre = '', nameShow = 'MM';
    async function addIz() {
        nameShow = 'Iz';

        namePre = '';
        await sleep(0.25);
        namePre = 'I';
        await sleep(0.5);
        namePre = 'Iz';
    };

    async function remIz() {
        nameShow = 'MM';

        namePre = 'Iz';
        await sleep(0.25);
        namePre = 'I';
        await sleep(0.5);
        namePre = '';
    };

    function sleep(s) {
        return new Promise(resolve => setTimeout(resolve, (s * 1000)));
    };
</script>

<div class="flex flex-col items-center justify-center w-full h-screen">
    <div id="pfp-container" class="w-40 h-40 mb-3 border-2 border-white rounded-full cursor-pointer" on:mouseover={addIz} on:focus={addIz} on:mouseout={remIz} on:blur={remIz}>
        <div id="pfp"></div>
    </div>

    <h1 class="font-stnd mr-3 text-6xl">Hey! I'm {namePre}Michael!</h1>
    <h4 class="mt-2 text-3xl max-w-[50%] text-center">My name is <span class="{nameShow == 'MM' ? 'text-blue-500 font-semibold' : ''} transition-all duration-1000 ease-in-out">Michael Martin</span>, but I go by <span class="{nameShow == 'Iz' ? 'text-blue-500 font-semibold' : ''} transition-all duration-1000 ease-in-out">IzMichael</span> everywhere that's important.</h4>
    <div class="flex flex-row items-center justify-start gap-2 mt-5">
        {#each links as link}
            <a href={link.href} class="hover:border-blue-600 group flex flex-row items-center transition-all duration-1000 ease-in-out border-2 border-gray-300 rounded-full cursor-pointer select-none">
                <img src={link.icon} class="w-9 h-9 group-hover:bg-blue-200 p-1 transition-all duration-1000 ease-in-out rounded-full" alt={link.label}>
                <p class="group-hover:pl-2 group-hover:pr-1 group-hover:w-48 w-0 h-full pt-1 overflow-hidden font-mono transition-all duration-1000 ease-in-out" style="max-width: {0.70 * link.handle.length}rem;">{link.handle}</p>
            </a>
        {/each}
    </div>
</div>

<style>
    #pfp-container {
        overflow: hidden;
        cursor: pointer;
    }

    #pfp {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-image: url('/assets/img/MichaelM.png');
        height: 100%;
        width: 100%;
        object-fit: cover;
        transform: none;
        transition: transform 1s, background-image 1s;
    }

    #pfp-container:hover #pfp {
        background-image: url('/assets/img/IzMichaelC.png');
        transform: rotateZ(360deg);
    }
</style>