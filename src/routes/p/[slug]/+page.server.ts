import type { PageServerLoad } from './$types';

import { portfolio, projects } from '$lib/data';

export const load: PageServerLoad = async ({ params }) => {
    const project = [...projects, ...portfolio].find((p) => p.slug == params.slug);
    return project;
};
