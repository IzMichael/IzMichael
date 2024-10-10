<script lang="ts">
    export let items: {
            title: string;
            subtitle: string;
            color: string;
            href: string;
        }[] = [],
        title = '';
</script>

<div class="flex w-full flex-col items-center justify-start">
    <div class="flex w-full flex-row items-center justify-start text-left text-lg font-bold">
        <span class="-mt-1 mr-2 select-none">//</span>
        <p>{title}</p>
    </div>
    {#each items as item}
        <a
            style="--color: {item.color};"
            class="flex w-full flex-row items-center justify-between gap-3 border-brand-primary/25 py-1 transition-all duration-300 ease-in-out hover:border-[var(--color)] hover:px-5 hover:text-[var(--color)]"
            href={item.href}
        >
            <span>{item.title}</span>
            <span class="mt-1 flex-1 border-t-2 border-inherit" />
            <span class="font-semibold">{item.subtitle}</span>
        </a>
    {/each}
</div>

<style>
</style>
