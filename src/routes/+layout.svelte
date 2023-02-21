<script>
    import '../app.css';
    import '../fonts.css';

    let scroll = 0, scrollPc = 0;
    window.onscroll = () => {
        scroll = window.scrollY;
        scrollPc = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    };
    let h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    $: console.log(scroll, h[sh], (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
</script>

<div class="w-full h-1 fixed top-0 left-0 right-0 z-[100]">
    <div class="bg-blue-500 pt-1 ease-linear" style="width: {scrollPc}%;"></div>
</div>

<slot />

<style>
    
</style>