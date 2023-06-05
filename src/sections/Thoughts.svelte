<script lang="ts">
    import dayjs from 'dayjs';
    import advancedFormat from 'dayjs/plugin/advancedFormat';
    dayjs.extend(advancedFormat);

    export let posts: Post[] = [];

    interface Post {
        title: string;
        description: string;
        date: string;
        categories: string[];
        published: boolean;
        slug: string;
    }
</script>

<section class="relative flex w-full flex-col items-center justify-start lg:flex-row lg:items-start lg:justify-center">
    <div class="flex w-full flex-1 flex-col items-center justify-center p-5 lg:sticky lg:top-0 lg:p-10">
        <h1 class="w-full text-right text-2xl font-semibold lg:text-3xl">Thoughts</h1>
        <h2 class="mt-2 w-full text-right text-lg lg:text-xl">
            I think a lot. Who doesn't? Here are some of the most recent ones that I thought were worth sharing.
        </h2>
    </div>
    <div class="flex w-full flex-1 flex-col items-center justify-center gap-7 p-5 lg:p-10">
        {#each posts.sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 7) as post}
            <a
                class="flex h-fit w-full flex-col items-start justify-center hover:text-gray-600 dark:hover:text-gray-300"
                href="/thoughts/{post.slug}"
            >
                <h3 class="text-left text-lg font-semibold lg:text-xl">{post.title}</h3>
                <h4 class="text-left text-sm font-medium lg:text-base">
                    {dayjs(post.date).format('Do MMMM YYYY')} - {post.categories.map((t) => '#' + t).join(', ')}
                </h4>
                <p class="pt-1 text-left text-sm lg:text-base">{post.description}</p>
            </a>
        {/each}
    </div>
</section>

<style>
</style>
