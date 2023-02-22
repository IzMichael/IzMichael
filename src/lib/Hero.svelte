<script>
    /* eslint-disable no-inner-declarations */
    import { onMount } from 'svelte';

    let links = [
        { 'href': 'https://discordapp.com/users/349062232652382220',           'label': 'Discord',      'handle': '@IzMichael#6437',       'icon': '/assets/icons/discord.svg'    },
        { 'href': 'https://github.com/IzMichael',                              'label': 'GitHub',       'handle': '@IzMichael',            'icon': '/assets/icons/github.svg'     },
        { 'href': 'https://twitter.com/IzMichael7',                            'label': 'Twitter',      'handle': '@IzMichael7',           'icon': '/assets/icons/twitter.svg'    },
        { 'href': 'https://mas.to/@IzMichael',                                 'label': 'Mastodon',      'handle': '@IzMichael',           'icon': '/assets/icons/mastodon.svg'   },
        // { 'href': 'https://instagram.com/IzMichael_',                          'label': 'Instagram',    'handle': '@IzMichael_',           'icon': '/assets/icons/instagram.svg' },
        // { 'href': 'https://twitch.tv/IzMichael7',                              'label': 'Twitch',       'handle': '@IzMichael7',            'icon': '/assets/icons/twitch.svg'    },
        { 'href': 'https://www.youtube.com/channel/UCU7AHWO2LFoJk2yhThAAH4g/', 'label': 'YouTube',      'handle': '@IzMichael',             'icon': '/assets/icons/youtube.svg'   },
        // { 'href': 'https://blog.izmichael.com',                                'label': 'Blog',         'handle': 'blog.izmichael.com',    'icon': '/assets/icons/blog.svg'      },
        { 'href': 'https://ko-fi.com/izmichael',                               'label': 'Ko-Fi',        'handle': '@IzMichael',             'icon': '/assets/icons/coin.svg'      },
    ];

    let namePre = 'Iz', nameShow = 'Iz';
    async function addIz() {
        nameShow = 'Iz';

        namePre = '';
        // await sleep(0.01);
        namePre = 'I';
        await sleep(0.5);
        namePre = 'Iz';
    };

    async function remIz() {
        nameShow = 'MM';

        namePre = 'Iz';
        // await sleep(0.01);
        namePre = 'I';
        await sleep(0.5);
        namePre = '';
    };

    function sleep(s) {
        return new Promise(resolve => setTimeout(resolve, (s * 1000)));
    };

    onMount(async () => {
        let prevIz = true;
        setInterval(() => {
            if (prevIz == true) {
                document.querySelector('#pfp-container').classList.remove('iz');
                remIz();
                prevIz = false;
            } else if (prevIz == false) {
                addIz();
                document.querySelector('#pfp-container').classList.add('iz');
                prevIz = true;
            };
        }, 5000);
    });
</script>

<link rel="preload" href="/assets/img/MichaelM.png" as="image">
<link rel="preload" href="/assets/img/IzMichaelC.png" as="image">

<div class="relative flex flex-col items-center justify-center w-full h-screen p-5">
    <!-- <div id="pfp-container" class="iz w-40 h-40 mb-3 border-2 border-white rounded-full cursor-pointer" on:mouseover={addIz} on:focus={addIz} on:mouseout={remIz} on:blur={remIz}> -->
    <div id="pfp-container" class="iz aspect-square w-40 h-40 mb-3 border-2 border-white rounded-full cursor-pointer">
        <div id="pfp"></div>
    </div>

    <h1 class="lg:text-6xl w-full text-4xl text-center">Hey! I'm {namePre}Michael!</h1>
    <h4 class="mt-2 lg:text-3xl text-xl max-w-[75%] text-center">My name is <span class="{nameShow == 'MM' ? 'text-blue-500 font-semibold' : ''} transition-all duration-1000 ease-in-out">Michael Martin</span>, but I go by <span class="{nameShow == 'Iz' ? 'text-blue-500 font-semibold' : ''} transition-all duration-1000 ease-in-out">IzMichael</span> everywhere that's important.</h4>
    <div class="max-lg:max-w-[75%] flex flex-col items-end justify-center w-full gap-2 m-5 lg:top-0 lg:right-0 lg:fixed">
        {#each links as link}
            <!-- Mobile Version - In a List -->
            <a href={link.href} class="lg:hidden hover:border-blue-600 group max-lg:w-full flex flex-row items-center transition-all duration-500 ease-in-out border-2 border-gray-300 rounded-full cursor-pointer select-none">
                <img src={link.icon} class="lg:w-9 aspect-square group-hover:bg-blue-200 max-lg:bg-blue-200 shrink-0 w-6 p-1 pr-[0.3125rem] transition-all duration-500 ease-in-out rounded-full" alt={link.label}>
                <p class="group-hover:pl-2 lg:text-lg group-hover:pr-1 group-hover:w-64 max-lg:w-full max-lg:pl-2 w-0 h-full pt-1 pr-2 overflow-hidden font-mono text-xs text-right transition-all duration-500 ease-in-out">{link.handle}</p>   
            </a>

            <!-- Desktop Version - Top Right Floating -->
            <a href={link.href} class="max-lg:hidden hover:border-blue-600 bg-white/50 group max-lg:w-full flex flex-row items-center transition-all duration-500 ease-in-out border-2 border-gray-300 rounded-full cursor-pointer select-none">
                <p class="group-hover:pl-2 lg:text-lg group-hover:pr-1 group-hover:w-64 max-lg:w-full max-lg:pl-2 w-0 h-full pt-1 overflow-hidden font-mono text-xs text-right transition-all duration-500 ease-in-out">{link.handle}</p>   
                <img src={link.icon} class="lg:w-9 aspect-square group-hover:bg-blue-200 max-lg:bg-blue-200 shrink-0 w-6 p-1 transition-all duration-500 ease-in-out rounded-full" alt={link.label}>
            </a>
        {/each}
    </div>

    <!-- <span class="icon-scroll absolute bottom-0 mb-5"></span> -->
    <button class="arrow-down absolute bottom-0 mb-5" on:click={() => {
        document.querySelector('#portfolioHeader').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        });
    }}>
        <span class="left line"></span>
        <span class="right line"></span>
    </button>
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

    #pfp-container:hover #pfp, #pfp-container.iz #pfp {
        background-image: url('/assets/img/IzMichaelC.png');
        transform: rotateZ(360deg);
    }

    /* Arrow Icon */
    .arrow-down {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 1px;

        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-name: bounce;
    }

    .arrow-down .line {
        padding: 2px;
        border-radius: 30px;
        background-color: #ddd;
        width: 2rem;
    }

    .line.left {
        rotate: 45deg;
    }

    .line.right {
        rotate: -45deg;
        margin-left: -0.75rem;
    }

    @keyframes bounce {
        0%, 100% {
            transform: translateY(-25px);
            animation-timing-function: cubic-bezier(0.8,0,1,1);
        }
        50% {
            transform: none;
            animation-timing-function: cubic-bezier(0,0,0.2,1);
        }
    }

    /* Mouse Icon */
    /* .icon-scroll:before {
        position: absolute;
        left: 50%;
    }

    .icon-scroll {
        width: 40px;
        height: 70px;
        box-shadow: inset 0 0 0 2px #3b82f6;
        border-radius: 25px;
}

    .icon-scroll:before {
        content: '';
        width: 8px;
        height: 8px;
        background: #3b82f6;
        margin-left: -4px;
        top: 16px;
        border-radius: 4px;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-name: scroll;
    }

    @keyframes scroll {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateY(38px);
        }
    } */
</style>