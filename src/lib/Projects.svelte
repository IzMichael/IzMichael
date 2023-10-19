<script lang="ts">
    const projects: Project[] = [
        {
            name: 'IzMichael - Personal Site',
            link: 'https://izmichael.com/',
            description:
                'My personal website, designed in October of 2023. It uses SvelteKit and Tailwind CSS to convey my identity, internet presence, and works.',
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
            name: 'Among Us Tracker',
            link: 'https://amongus.izmichael.com/',
            description:
                'Among Us Tracker is an interactive interface for tracking suspicion levels, vents, and task locations in the social deduction game Among Us.',
            created: 2020,
            deprecated: 2020,
            status: 'Unmaintained',
        },
        {
            name: 'Yeelight App',
            link: 'https://github.com/IzMichael/Yeelight-App',
            description: 'Yeelight App is a Windows 10 application for controlling Yeelight branded smart lighting.',
            created: 2021,
            deprecated: 2021,
            status: 'Unmaintained',
        },
    ];

    interface Project {
        name: string;
        link: string;
        description: string;
        created: number;
        deprecated?: number;
        status: 'Actively Maintained' | 'Unmaintained' | 'Killed';
    }

    const evens = (_item: unknown, index: number) => {
        return index % 2 === 0;
    };

    const odds = (_item: unknown, index: number) => {
        return index % 2 !== 0;
    };
</script>

<div class="flex w-full flex-col items-start justify-center gap-5 lg:flex-row lg:justify-between">
    <div class="contents flex-1 flex-col items-center justify-start gap-5 lg:flex">
        {#each projects.filter(evens) as project}
            <a class="block w-full rounded-xl bg-white p-5 shadow-lg" href={project.link}>
                <h3 class="font-bold">{project.name}</h3>
                <p class="mb-2 mt-1 text-sm">{project.description}</p>
                <p class="text-sm text-gray-500">
                    c. {project.created}
                    {project.deprecated ? ', d. ' + project.deprecated : ''} - {project.status}
                </p>
            </a>
        {/each}
    </div>
    <div class="contents flex-1 flex-col items-center justify-start gap-5 lg:flex">
        {#each projects.filter(odds) as project}
            <a class="block w-full rounded-xl bg-white p-5 shadow-lg" href={project.link}>
                <h3 class="font-bold">{project.name}</h3>
                <p class="mb-2 mt-1 text-sm">{project.description}</p>
                <p class="text-sm text-gray-500">
                    c. {project.created}
                    {project.defunct ? ', d. ' + project.defunct : ''} - {project.status}
                </p>
            </a>
        {/each}
    </div>
</div>

<style>
</style>
