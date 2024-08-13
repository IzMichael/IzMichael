<script lang="ts">
    const links: Link[] = [
        {
            label: 'Email',
            username: 'me@izmichael.com',
            href: 'mailto:michael@izmichael.com',
            color: '#6e43af',
            icon: 'mail.svg',
            span: 2,
        },
        {
            label: 'Twitter',
            username: '@IzMichael7',
            href: 'https://twitter.com/IzMichael7',
            color: '#00acee',
            icon: 'twitter.svg',
        },
        // {
        //     label: 'Mastodon',
        //     username: '@IzMichael',
        //     href: 'https://mas.to/@IzMichael',
        //     color: '#6265ff',
        //     icon: 'mastodon.svg',
        // },
        // {
        //     label: 'Threads',
        //     username: '@IzMichael7',
        //     href: 'https://threads.net/IzMichael7',
        //     color: '#8a3ab9',
        //     icon: 'threads.svg',
        // },
        {
            label: 'GitHub',
            username: '@IzMichael',
            href: 'https://github.com/IzMichael',
            color: '#433ea8',
            icon: 'github.svg',
        },
        {
            label: 'Discord',
            username: '@IzMichael',
            href: 'https://discordapp.com/users/349062232652382220',
            color: '#5865F2',
            icon: 'discord.svg',
        },
        {
            label: 'Ko-Fi',
            username: 'IzMichael',
            href: 'https://ko-fi.com/IzMichael',
            color: '#ff5d5a',
            icon: 'kofi.svg',
        },
        // {
        //     label: 'Minecraft',
        //     username: 'IzMichael',
        //     href: 'https://namemc.com/profile/IzMichael.1',
        //     color: '#81b949',
        //     icon: 'minecraft.svg',
        // },
        // {
        //     label: 'Pinterest',
        //     username: '@IzMichael7',
        //     href: 'https://www.pinterest.nz/IzMichael7/',
        //     color: '#e60527',
        //     icon: 'pinterest.svg',
        // },
    ];

    interface Link {
        label: string;
        username: string;
        href: string;
        color: string;
        icon: string;
        span?: number;
    }
</script>

<div class="grid w-full grid-cols-2 gap-5 lg:w-2/3">
    {#each links as link}
        <a
            class="group flex h-12 w-full flex-row items-center justify-center overflow-hidden rounded-lg px-4 py-2 text-center shadow-lg transition-all duration-300 ease-in-out hover:brightness-90 lg:h-16"
            style="background-color: {link.color}; grid-column: span {link.span ?? 1} / span {link.span ?? 1};"
            href={link.href}
        >
            <img src="/assets/icons/{link.icon}" alt="{link.label} Icon" class="aspect-square h-full invert" />
            <div class="flex h-full flex-1 flex-col items-center justify-center">
                <p class="w-full text-right text-sm text-brand-senary">
                    {link.label}
                </p>
                <p class="w-full text-right text-sm font-bold text-brand-senary">
                    {link.username}
                </p>
            </div>
        </a>
    {/each}
</div>

<style>
</style>
