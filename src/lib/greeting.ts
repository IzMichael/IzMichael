export function greeting(variant: Variants | '' = ''): string[] {
    if (!variant) {
        const hours = new Date().getHours();

        if (hours < 6 || hours >= 22) {
            variant = 'night';
        } else if (hours < 12) {
            variant = 'morning';
        } else if (hours < 18) {
            variant = 'afternoon';
        } else if (hours < 22) {
            variant = 'evening';
        } else {
            variant = 'generic';
        }
    }

    return greetings[variant].map((opt) => opt.text);
}

export function lang(str: string): string | undefined {
    return Object.values(greetings)
        .flat()
        .find((opt) => opt.text == str)?.lang;
}

const greetings: {
    [key in Variants]: option[];
} = {
    morning: [
        { text: 'Good Morning', lang: 'English', native: 'English' },
        { text: 'Bonjour', lang: 'French', native: 'Français' },
        { text: 'Dia dhuit ar Maidin', lang: 'Irish', native: 'Gaeilge' },
    ],
    afternoon: [
        { text: 'Good Afternoon', lang: 'English', native: 'English' },
        { text: 'Bonjour', lang: 'French', native: 'Français' },
        { text: 'Tráthnóna Maith', lang: 'Irish', native: 'Gaeilge' },
    ],
    evening: [
        { text: 'Good Evening', lang: 'English', native: 'English' },
        { text: 'Bonsoir', lang: 'French', native: 'Français' },
        { text: 'Tráthnóna Maith', lang: 'Irish', native: 'Gaeilge' },
    ],
    night: [
        { text: 'Good Night', lang: 'English', native: 'English' },
        { text: 'Bonne Nuit', lang: 'French', native: 'Français' },
        { text: 'Oíche Mhaith', lang: 'Irish', native: 'Gaeilge' },
    ],
    generic: [
        { text: 'Hello', lang: 'English', native: 'English' },
        { text: 'Bonjour', lang: 'French', native: 'Français' },
        { text: 'Dia Dhuit', lang: 'Irish', native: 'Gaeilge' },
    ],
    welcome: [
        { text: 'Welcome', lang: 'English', native: 'English' },
        { text: 'Bienvenue', lang: 'French', native: 'Français' },
        { text: 'Fáilte', lang: 'Irish', native: 'Gaeilge' },
    ],
};

type Variants = 'morning' | 'afternoon' | 'evening' | 'night' | 'generic' | 'welcome';

type option = {
    text: string;
    lang: string;
    native: string;
};
