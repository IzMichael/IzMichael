<script lang="ts">
    const projects: Project[] = [
        {
            name: 'IzMichael - Personal Site',
            link: 'https://izmichael.com/',
            description:
                'My personal website, designed in June of 2023. It uses SvelteKit and Tailwind CSS to convey my identity, internet presence, and works.',
            created: 2023,
            status: 'Actively Maintained',
        },
        {
            name: 'MC Wardrobe',
            link: 'https://mc-wardrobe.izmichael.com/',
            description:
                'A powerful application for customising Minecraft skins. Allows for limb and clothes mix-and-matching, outfit saving, and importing.',
            created: 2023,
            status: 'Actively Maintained',
        },
        {
            name: 'Flaggle',
            link: 'https://flaggle.izmichael.com',
            description:
                'Flaggle is a game about flags. The game will present you with a flag, and your job is to identify the country or territory that the flag belongs to.',
            created: 2022,
            status: 'Actively Maintained',
        },
        {
            name: 'The Phoenix Pages',
            link: 'https://phoenix-pages.izmichael.com/',
            description:
                'The Phoenix Pages is a website and discord bot that provides a registry and browsable index of all the shops and places on the Phoenixcraft Minecraft server.',
            created: 2021,
            status: 'Actively Maintained',
        },
        {
            name: 'The Rosy Shell',
            link: 'https://therosyshell.co.nz/',
            description:
                'I created a powerful E-Commerce website for a client, custom built using PocketBase and Svelte.',
            created: 2020,
            status: 'Actively Maintained',
        },
    ];

    interface Project {
        name: string;
        link: string;
        description: string;
        created: number;
        status: 'Actively Maintained' | 'Unmaintained' | 'Killed';
    }
</script>

<section class="relative flex w-full flex-col items-center justify-start lg:flex-row lg:items-start lg:justify-center">
    <div class="flex w-full flex-1 flex-col items-center justify-center p-5 lg:sticky lg:top-0 lg:p-10">
        <h1 class="w-full text-right text-2xl font-semibold lg:text-3xl">Portfolio</h1>
        <h2 class="mt-2 w-full text-right text-lg lg:text-xl">
            I've made brilliant things in my time, why not take a look?
        </h2>
    </div>
    <div class="flex w-full flex-1 flex-col items-center justify-center gap-7 p-5 lg:p-10">
        {#each projects as project}
            <a
                class="flex h-fit w-full flex-col items-start justify-center hover:text-gray-600 dark:hover:text-gray-300"
                href={project.link}
            >
                <h3 class="text-left text-lg font-semibold lg:text-xl">{project.name}</h3>
                <h4 class="text-left text-sm font-medium lg:text-base">
                    Created in {project.created}, {project.status}
                </h4>
                <p class="pt-1 text-left text-sm lg:text-base">{project.description}</p>
            </a>
        {/each}
    </div>
</section>

<style>
</style>
