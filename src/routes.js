// https://github.com/jorgegorka/svelte-router/blob/master/README.md

import Index from './routes/Index.svelte';

const routes = [
    {
        name: '/',
        component: Index,
    },
    {
        name: '404',
        redirectTo: '/'
    }
]

export { routes }