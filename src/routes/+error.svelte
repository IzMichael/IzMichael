<script lang="ts">
    import { page } from '$app/stores';
</script>

<div
    class="tile-triangle flex h-screen w-full flex-col items-center justify-start overflow-x-hidden bg-slate-200 lg:flex-row lg:justify-center"
>
    <div class="flex w-full flex-col items-center justify-center rounded-lg bg-brand-senary py-10 shadow-lg lg:w-2/3">
        <!-- eslint-disable-next-line quotes -->
        <h1 class="text-6xl font-bold">{$page.status ?? '418'}: {$page.error?.message ?? "I'm a teapot."}</h1>
        <a href="/" class="mt-3 text-4xl font-bold text-brand-primary hover:underline" data-sveltekit-reload>Return Home?</a>
    </div>
</div>

<style>
    .tile-triangle {
        background-image: url('/assets/icons/triangle-tile.svg');
        background-repeat: repeat;
        background-position: center;
        background-size: 7vw;
    }

    @media (min-width: 1024px) {
        .tile-triangle {
            background-size: 2vw;
        }
    }
</style>
