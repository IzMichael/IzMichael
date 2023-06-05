<script lang="ts">
    export let code = '';
</script>

<img src="/assets/icons/{code.toLowerCase()}.svg" alt="{code.toUpperCase()} Flag" class="flag" />

<style>
    .flag {
        height: 0.9rem;
        padding-bottom: 0.125rem;
        padding-left: 0.125rem;
        /* aspect-ratio: 3/2; */
        display: inline-block;
        /* object-fit: cover; */
        object-position: center;
    }
</style>
