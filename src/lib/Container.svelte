<script lang="ts">
    import { twMerge } from 'tailwind-merge';

    export { xclass as class };
    let xclass = '';

    export let heading = '',
        id = '';
</script>

<div class="mt-5 flex w-full flex-col overflow-visible" {id}>
    <div class="flex w-full flex-row items-end justify-center">
        <div class="h-3 w-3 bg-white">
            <span class="block h-full w-full rounded-br-2xl bg-slate-200 p-1" />
        </div>
        <h2 class="block w-fit rounded-t-2xl bg-white px-10 py-2 text-lg font-bold">{heading}</h2>
        <div class="h-3 w-3 bg-white">
            <span class="block h-full w-full rounded-bl-2xl bg-slate-200 p-1" />
        </div>
    </div>
    <div
        class={twMerge(
            'flex w-full flex-row flex-wrap items-center justify-start gap-x-1 gap-y-2 rounded-xl bg-white p-5 shadow-lg',
            xclass
        )}
    >
        <slot />
    </div>
</div>

<style>
</style>
