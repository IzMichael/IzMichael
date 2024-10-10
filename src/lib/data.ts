type Project = {
    title: string;
    slug: string;
    description: string;
    href: string;
    date: string;
    color: string;
    image: string;
};

export const projects: Project[] = [
    {
        title: 'izmichael.com',
        slug: 'izmichael',
        description:
            'My personal website, designed in October 2024. It uses SvelteKit and Tailwind CSS to convey my identity, internet presence, and works.',
        href: 'https://izmichael.com/',
        date: '2024-10-11',
        color: '#6A41AB',
        image: '/assets/img/izmichael.png',
    },
    {
        title: 'Flaggle',
        slug: 'flaggle',
        description:
            'Flaggle is a game about flags. The game will present you with a flag, and your job is to identify the country or territory that the flag belongs to.',
        href: 'https://flaggle.izmichael.com/',
        date: '2022-03-06',
        color: '#5d9bff',
        image: '/assets/img/flaggle.png',
    },
    {
        title: 'MC Wardrobe',
        slug: 'mc-wardrobe',
        description:
            'A powerful application for customising Minecraft skins. Allows for limb and clothes mix-and-matching, outfit saving, and importing.',
        href: 'https://mc-wardrobe.izmichael.com/',
        date: '2023-05-11',
        color: '#15803d',
        image: '/assets/img/mc-wardrobe.png',
    },
    {
        title: 'The Phoenix Pages',
        slug: 'the-phoenix-pages',
        description:
            'The Phoenix Pages is a website and discord bot that provides a registry and browsable index of all the shops and places on the Phoenixcraft Minecraft server.',
        href: 'https://phoenix-pages.izmichael.com/',
        date: '2022-04-23',
        color: '#fa7523',
        image: '/assets/img/the-phoenix-pages.png',
    },
].sort((a, b) => (a.date < b.date ? 1 : -1));

export const portfolio: Project[] = [
    {
        title: 'The Rosy Shell',
        slug: 'the-rosy-shell',
        description: 'I created a simple E-Commerce website for a client, custom built using PocketBase and Svelte.',
        href: 'https://therosyshell.co.nz',
        date: '2023-01-08',
        color: '#f121a6',
        image: '/assets/img/the-rosy-shell.png',
    },
    {
        title: 'Church Contacts DB',
        slug: 'church-contacts-db',
        description:
            'I built a contacts database and mass SMS client for my local church, using a PocketBase database and SvelteKit.',
        href: '',
        date: '2022-03-07',
        color: '#2597ab',
        image: '/assets/img/church-db.png',
    },
].sort((a, b) => (a.date < b.date ? 1 : -1));

export const socials: {
    title: string;
    href: string;
    color: string;
    username: string;
}[] = [
    {
        title: 'Email',
        href: 'mailto:michael@izmichael.com',
        color: '#6a41ab',
        username: 'michael@izmichael.com',
    },
    {
        title: 'Twitter',
        href: 'https://twitter.com/IzMichael7',
        color: '#00acee',
        username: 'IzMichael7',
    },
    {
        title: 'GitHub',
        href: 'https://github.com/IzMichael',
        color: '#433ea8',
        username: 'IzMichael',
    },
    {
        title: 'Discord',
        href: 'https://discordapp.com/users/349062232652382220',
        color: '#5865F2',
        username: 'IzMichael',
    },
    {
        title: 'Mastodon',
        href: 'https://mas.to/@IzMichael',
        color: '#6364FF',
        username: 'IzMichael',
    },
    {
        title: 'Tip Jar',
        href: 'https://ko-fi.com/IzMichael',
        color: '#ff5d5a',
        username: 'IzMichael',
    },
];
