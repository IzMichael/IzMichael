export function greeting(): string[] {
    const hours = new Date().getHours();
    let time: times,
        array: string[] = [];

    if (hours < 6 || hours >= 22) {
        time = 'night';
    } else if (hours < 12) {
        time = 'morning';
    } else if (hours < 18) {
        time = 'afternoon';
    } else if (hours < 22) {
        time = 'evening';
    } else {
        time = 'timeless';
    }

    array = greetings[time].map((opt) => opt.text);

    return array;
}

export function lang(str: string): string | undefined {
    return Object.values(greetings)
        .flat()
        .find((opt) => opt.text == str)?.lang;
}

const greetings: {
    [key in times]: option[];
} = {
    morning: [
        { text: 'Good Morning', lang: 'English', native: 'English' },
        { text: 'Bonjour', lang: 'French', native: 'Français' },
        { text: 'Maidin Mhaith', lang: 'Irish', native: 'Gaeilge' },
        { text: 'God Morgon', lang: 'Swedish', native: 'Svenska' },
        { text: 'Buongiorno', lang: 'Italian', native: 'Italiano' },
        { text: 'Buenos Días', lang: 'Spanish', native: 'Español' },
        { text: 'Buna Dimineata', lang: 'Romanian', native: 'Românește' },
        { text: 'Labas Rytas', lang: 'Lithuanian', native: 'Lietuvių' },
        { text: 'Hyvää Huomenta', lang: 'Finnish', native: 'Suomalainen' },
        { text: 'Tere Hommikust', lang: 'Estonian', native: 'Eesti Keel' },
        { text: 'Labrīt', lang: 'Latvian', native: 'Latviski' },
        { text: 'Goedemorgen', lang: 'Dutch', native: 'Nederlands' },
        { text: 'Góðan Morgun', lang: 'Icelandic', native: 'Íslenskur' },
        { text: 'Guten Morgen', lang: 'German', native: 'Deutsch' },
        { text: 'Bom Dia', lang: 'Portugese', native: 'Português' },
    ],
    afternoon: [
        { text: 'Good Afternoon', lang: 'English', native: 'English' },
        { text: 'Bon Après-Midi', lang: 'French', native: 'Français' },
        { text: 'Tráthnóna Maith', lang: 'Irish', native: 'Gaeilge' },
        { text: 'God Eftermiddag', lang: 'Swedish', native: 'Svenska' },
        { text: 'Buon Pomeriggio', lang: 'Italian', native: 'Italiano' },
        { text: 'Buenos Tardes', lang: 'Spanish', native: 'Español' },
        { text: 'Bună După-Amiaza', lang: 'Romanian', native: 'Românește' },
        { text: 'Laba Popietė', lang: 'Lithuanian', native: 'Lietuvių' },
        { text: 'Hyvää Iltapäivää', lang: 'Finnish', native: 'Suomalainen' },
        { text: 'Tere Päevast', lang: 'Estonian', native: 'Eesti Keel' },
        { text: 'Labdien', lang: 'Latvian', native: 'Latviski' },
        { text: 'Goedemiddag', lang: 'Dutch', native: 'Nederlands' },
        { text: 'Góðan Síðdegi', lang: 'Icelandic', native: 'Íslenskur' },
        { text: 'Guten Nachmittag', lang: 'German', native: 'Deutsch' },
        { text: 'Boa Tarde', lang: 'Portugese', native: 'Português' },
    ],
    evening: [
        { text: 'Good Evening', lang: 'English', native: 'English' },
        { text: 'Bonsoir', lang: 'French', native: 'Français' },
        { text: 'Tráthnóna maith', lang: 'Irish', native: 'Gaeilge' },
        { text: 'God Kväll', lang: 'Swedish', native: 'Svenska' },
        { text: 'Buonasera', lang: 'Italian', native: 'Italiano' },
        { text: 'Buenos Noches', lang: 'Spanish', native: 'Español' },
        { text: 'Bună Seara', lang: 'Romanian', native: 'Românește' },
        { text: 'Labas Vakaras', lang: 'Lithuanian', native: 'Lietuvių' },
        { text: 'Hyvää Iltaa', lang: 'Finnish', native: 'Suomalainen' },
        { text: 'Tere Õhtust', lang: 'Estonian', native: 'Eesti Keel' },
        { text: 'Labvakar', lang: 'Latvian', native: 'Latviski' },
        { text: 'Goedeavond', lang: 'Dutch', native: 'Nederlands' },
        { text: 'Gott kvöld', lang: 'Icelandic', native: 'Íslenskur' },
        { text: 'Guten Abend', lang: 'German', native: 'Deutsch' },
        { text: 'Boa Noite', lang: 'Portugese', native: 'Português' },
    ],
    night: [
        { text: 'Good Night', lang: 'English', native: 'English' },
        { text: 'Bonne Nuit', lang: 'French', native: 'Français' },
        { text: 'Oíche Mhaith', lang: 'Irish', native: 'Gaeilge' },
        { text: 'Godnatt', lang: 'Swedish', native: 'Svenska' },
        { text: 'Buona Notte', lang: 'Italian', native: 'Italiano' },
        { text: 'Buenos Noches', lang: 'Spanish', native: 'Español' },
        { text: 'Noapte Bună', lang: 'Romanian', native: 'Românește' },
        { text: 'Labos Nakties', lang: 'Lithuanian', native: 'Lietuvių' },
        { text: 'Hyvää Yötä', lang: 'Finnish', native: 'Suomalainen' },
        { text: 'Head Ööd', lang: 'Estonian', native: 'Eesti Keel' },
        { text: 'Ar Labunakti', lang: 'Latvian', native: 'Latviski' },
        { text: 'Welterusten', lang: 'Dutch', native: 'Nederlands' },
        { text: 'Góða Nótt', lang: 'Icelandic', native: 'Íslenskur' },
        { text: 'Gute Nacht', lang: 'German', native: 'Deutsch' },
        { text: 'Boa Noite', lang: 'Portugese', native: 'Português' },
    ],
    timeless: [
        { text: 'Hello', lang: 'English', native: 'English' },
        { text: 'Bonjour', lang: 'French', native: 'Français' },
        { text: 'Dia Dhuit', lang: 'Irish', native: 'Gaeilge' },
        { text: 'Hej', lang: 'Swedish', native: 'Svenska' },
        { text: 'Ciao', lang: 'Italian', native: 'Italiano' },
        { text: 'Hola', lang: 'Spanish', native: 'Español' },
        { text: 'Buna Ziua', lang: 'Romanian', native: 'Românește' },
        { text: 'Sveiki', lang: 'Lithuanian, Latvian', native: 'Lietuvių, Latviski' },
        { text: 'Hei', lang: 'Finnish', native: 'Suomalainen' },
        { text: 'Tere', lang: 'Estonian', native: 'Eesti Keel' },
        { text: 'Hallo', lang: 'Dutch, German', native: 'Nederlands, Deutsch' },
        { text: 'Halló', lang: 'Icelandic', native: 'Íslenskur' },
        { text: 'Olá', lang: 'Portugese', native: 'Português' },
    ],
};

type times = 'morning' | 'afternoon' | 'evening' | 'night' | 'timeless';

type option = {
    text: string;
    lang: string;
    native: string;
};
