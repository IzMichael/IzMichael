<script lang="ts">
    import { twMerge } from 'tailwind-merge';

    export let title = '';

    let xclass = '';
    export { xclass as class };
</script>

<div class="flex w-full flex-col items-center justify-start">
    <div class="mb-2 flex w-full flex-row items-center justify-start text-left text-lg font-bold">
        <span class="-mt-1 mr-2 select-none">//</span>
        <p>{title}</p>
    </div>
    <div class={twMerge('h-fit w-full rounded-xl border-2 border-brand-primary bg-brand-quaternary shadow-lg', xclass)}>
        <slot />
    </div>
</div>

<style>
</style>
