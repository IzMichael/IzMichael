<script lang="ts">
    const projects: Project[] = [
        {
            name: 'IzMichael - Personal Site',
            link: 'https://izmichael.com/',
            description:
                'My personal website, designed in October of 2023. It uses SvelteKit and Tailwind CSS to convey my identity, internet presence, and works.',
            created: 2023,
            status: 'Actively Maintained',
            image: 'izmichael.png',
        },
        {
            name: 'MC Wardrobe',
            link: 'https://mc-wardrobe.izmichael.com/',
            description:
                'A powerful application for customising Minecraft skins. Allows for limb and clothes mix-and-matching, outfit saving, and importing.',
            created: 2023,
            status: 'Actively Maintained',
            image: 'mc-wardrobe.png',
        },
        {
            name: 'Flaggle',
            link: 'https://flaggle.izmichael.com',
            description:
                'Flaggle is a game about flags. The game will present you with a flag, and your job is to identify the country or territory that the flag belongs to.',
            created: 2022,
            status: 'Actively Maintained',
            image: 'flaggle.png',
        },
        {
            name: 'The Phoenix Pages',
            link: 'https://phoenix-pages.izmichael.com/',
            description:
                'The Phoenix Pages is a website and discord bot that provides a registry and browsable index of all the shops and places on the Phoenixcraft Minecraft server.',
            created: 2021,
            status: 'Actively Maintained',
            image: 'the-phoenix-pages.png',
        },
        {
            name: 'Among Us Tracker',
            link: 'https://amongus.izmichael.com/',
            description:
                'Among Us Tracker is an interactive interface for tracking suspicion levels, vents, and task locations in the social deduction game Among Us.',
            created: 2020,
            deprecated: 2020,
            status: 'Unmaintained',
            image: 'among-us.png',
        },
        {
            name: 'Yeelight App',
            link: 'https://github.com/IzMichael/Yeelight-App',
            description: 'Yeelight App is a Windows 10 application for controlling Yeelight branded smart lighting.',
            created: 2021,
            deprecated: 2021,
            status: 'Unmaintained',
            image: 'yeelight-app.png',
        },
    ];

    interface Project {
        name: string;
        link: string;
        description: string;
        created: number;
        deprecated?: number;
        status: 'Actively Maintained' | 'Unmaintained' | 'Killed';
        image: string;
    }

    const evens = (_item: unknown, index: number) => {
        return index % 2 === 0;
    };

    const odds = (_item: unknown, index: number) => {
        return index % 2 !== 0;
    };

    import SidePanel from '$lib/SidePanel.svelte';
    let showSidePanel = false,
        selected: Project;
</script>

<SidePanel bind:show={showSidePanel}>
    <h1 class="text-2xl font-bold">{selected.name}</h1>

    <img
        src="/assets/img/{selected.image}"
        alt="Thumbnail for {selected.name}"
        class="my-4 rounded-lg border-2 border-gray-300"
    />

    <p>{selected.description}</p>
    <p class="mt-2 text-sm text-gray-500">c. {selected.created} - {selected.status}</p>

    <span class="block flex-1 px-1" />

    {#if selected.link}
        <a
            class="group mt-5 flex w-full flex-row items-center justify-between rounded-lg bg-black p-2 transition-colors duration-300 ease-in-out hover:bg-stone-800"
            href={selected.link}
            target="_blank"
        >
            <span class="text-left text-brand-senary">
                Visit {selected.name}
            </span>
            <img src="/assets/icons/arrow-right.svg" alt="Right Arrow" class="aspect-square h-7 w-7 invert" />
        </a>
    {/if}
</SidePanel>

<div class="flex w-full flex-col items-start justify-center gap-5 lg:flex-row lg:justify-between">
    <div class="contents flex-1 flex-col items-center justify-start gap-5 lg:flex">
        {#each projects.filter(evens) as project}
            <button
                class="block w-full rounded-xl bg-brand-senary p-5 shadow-lg"
                on:click={() => ((showSidePanel = true), (selected = project))}
            >
                <h3 class="w-full text-left font-bold">{project.name}</h3>
                <p class="mb-2 mt-1 w-full text-left text-sm">{project.description}</p>
                <p class="w-full text-left text-sm text-gray-500">
                    c. {project.created}{project.deprecated ? ', d. ' + project.deprecated : ''} - {project.status}
                </p>
            </button>
        {/each}
    </div>
    <div class="contents flex-1 flex-col items-center justify-start gap-5 lg:flex">
        {#each projects.filter(odds) as project}
            <button
                class="block w-full rounded-xl bg-brand-senary p-5 shadow-lg"
                on:click={() => ((showSidePanel = true), (selected = project))}
            >
                <h3 class="w-full text-left font-bold">{project.name}</h3>
                <p class="mb-2 mt-1 w-full text-left text-sm">{project.description}</p>
                <p class="w-full text-left text-sm text-gray-500">
                    c. {project.created}{project.deprecated ? ', d. ' + project.deprecated : ''} - {project.status}
                </p>
            </button>
        {/each}
    </div>
</div>

<style>
</style>
