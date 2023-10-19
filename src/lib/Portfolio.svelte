<script lang="ts">
    const projects: Project[] = [
        {
            name: 'The Rosy Shell',
            link: 'https://therosyshell.co.nz/',
            description:
                'I created a powerful E-Commerce website for a client, custom built using PocketBase and Svelte.',
            created: 2022,
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

    const evens = (_item: unknown, index: number) => {
        return index % 2 === 0;
    };

    const odds = (_item: unknown, index: number) => {
        return index % 2 !== 0;
    };
</script>

<div class="flex w-full flex-col items-start justify-start gap-5 lg:flex-row lg:justify-between">
    <div class="contents flex-1 flex-col items-center justify-start gap-5 lg:flex">
        {#each projects.filter(evens) as project}
            <a class="block w-full rounded-xl bg-white p-5 shadow-lg" href={project.link}>
                <h3 class="font-bold">{project.name}</h3>
                <p class="mb-2 mt-1 text-sm">{project.description}</p>
                <p class="text-sm text-gray-500">d. {project.created} - {project.status}</p>
            </a>
        {/each}
    </div>
    <div class="contents flex-1 flex-col items-center justify-start gap-5 lg:flex">
        {#each projects.filter(odds) as project}
            <a class="block w-full rounded-xl bg-white p-5 shadow-lg" href={project.link}>
                <h3 class="font-bold">{project.name}</h3>
                <p class="mb-2 mt-1 text-sm">{project.description}</p>
                <p class="text-sm text-gray-500">d. {project.created} - {project.status}</p>
            </a>
        {/each}
    </div>
</div>

<style>
</style>
