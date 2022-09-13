<div id="sidebar" class="relative flex flex-col items-center justify-start h-full bg-gray-100 border-r border-gray-400 drop-shadow-lg">
    <div class="flex flex-col w-64 h-full" id="sidebarContent">
        <div class="flex flex-col justify-center flex-1 py-4">
            <img src="/favicon.png" class="w-40 h-40 mx-auto mb-2 border-2 border-white rounded-full" alt="PFP">
            <h1 class="mx-auto text-2xl text-center">Michael Martin</h1>
            <p class="mx-auto text-xl text-center">@IzMichael</p>
            <div class="w-16 h-px mx-auto my-2 bg-gray-500"></div>
            <div class="flex flex-col gap-2 mx-auto text-lg text-center">
                <p class="cursor-pointer select-none" on:click={() => document.querySelector('#front-page').scrollIntoView({ behavior: 'smooth', block: 'center' })}>Home</p>
                <p class="cursor-pointer select-none" on:click={() => document.querySelector('#about-me').scrollIntoView({ behavior: 'smooth', block: 'center' })}>About Me</p>
                <p class="cursor-pointer select-none" on:click={() => document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth', block: 'center' })}>Portfolio</p>
            </div>
        </div>
        
        <div class="flex flex-row justify-center gap-8 p-2 mb-5 -mt-5">
            <a target="_blank" href="https://github.com/IzMichael">
                <img src="./assets/img/github.svg" class="w-6 h-6" alt="GitHub Link">
            </a>
            <a target="_blank" href="https://twitter.com/IzMichael7">
                <img src="./assets/img/twitter.svg" class="w-6 h-6" alt="Twitter Link">
            </a>
            <!-- <a target="_blank" href="https://blog.izmichael.com">
                <img src="./assets/img/blog.svg" class="w-6 h-6" alt="Blog Link">
            </a> -->
        </div>
    </div>
</div>

<style>
    
</style>