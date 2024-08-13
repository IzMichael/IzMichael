<script lang="ts">
    const projects: Project[] = [
        {
            name: 'The Rosy Shell',
            link: 'https://therosyshell.co.nz/',
            description:
                'I created a simple E-Commerce website for a client, custom built using PocketBase and Svelte.',
            created: 2022,
            status: 'Actively Maintained',
            image: 'the-rosy-shell.png',
        },
        {
            name: 'Church Contacts Portal',
            description:
                'I built a contacts database and mass SMS client for my local church, using a PocketBase database and Svelte.',
            created: 2022,
            status: 'Actively Maintained',
            image: 'occ-portal.png',
        },
    ];

    interface Project {
        name: string;
        link?: string;
        description: string;
        created: number;
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

<div class="flex w-full flex-col items-start justify-start gap-5 lg:flex-row lg:justify-between">
    <div class="contents flex-1 flex-col items-center justify-start gap-5 lg:flex">
        {#each projects.filter(evens) as project}
            <button
                class="block w-full rounded-xl bg-brand-senary p-5 shadow-lg"
                on:click={() => ((showSidePanel = true), (selected = project))}
            >
                <h3 class="w-full text-left font-bold">{project.name}</h3>
                <p class="mb-2 mt-1 w-full text-left text-sm">{project.description}</p>
                <p class="w-full text-left text-sm text-gray-500">c. {project.created} - {project.status}</p>
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
                <p class="w-full text-left text-sm text-gray-500">c. {project.created} - {project.status}</p>
            </button>
        {/each}
    </div>
</div>

<style>
</style>
