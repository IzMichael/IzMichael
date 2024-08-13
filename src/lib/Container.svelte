<script lang="ts">
    import { twMerge } from 'tailwind-merge';

    export { xclass as class };
    let xclass = '';

    export let heading = '',
        id = '';
</script>

<div class="mt-5 flex w-full flex-col overflow-visible" {id}>
    <div class="flex w-full flex-row items-end justify-start">
        <h2 class="block w-fit rounded-t-2xl bg-brand-senary px-10 pt-2 text-lg font-bold">{heading}</h2>
        <div class="h-3 w-3 bg-brand-senary">
            <span class="block h-full w-full rounded-bl-2xl bg-brand-quinary p-1" />
        </div>
    </div>
    <div
        class={twMerge(
            'flex w-full flex-row flex-wrap items-center justify-start gap-x-1 gap-y-2 rounded-b-xl rounded-r-xl bg-brand-senary p-5 shadow-lg',
            xclass
        )}
    >
        <slot />
    </div>
</div>

<style>
</style>
