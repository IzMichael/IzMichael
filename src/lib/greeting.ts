export function greeting(): string[] {
    const hours = new Date().getHours();
    let array: string[] = [];

    if (hours < 6 || hours >= 22) {
        // Night
        array = [
            'Good Night',
            'Bonne Nuit',
            'Oíche Mhaith',
            'Godnatt',
            'Buona Notte',
            'Buenos Noches',
            'Noapte Bună',
            'Labos Nakties',
            'Hyvää Yötä',
            'Head Ööd',
            'Ar Labunakti',
            'Welterusten',
            'Góða Nótt',
            'Gute Nacht',
            'Boa Noite',
        ];
    } else if (hours < 12) {
        // Morning
        array = [
            'Good Morning',
            'Bonjour',
            'Maidin Mhaith',
            'God Morgon',
            'Buongiorno',
            'Buenos Días',
            'Buna Dimineata',
            'Labas Rytas',
            'Hyvää Huomenta',
            'Tere Hommikust',
            'Labrīt',
            'Goedemorgen',
            'Góðan Morgun',
            'Guten Morgen',
            'Bom Dia',
        ];
    } else if (hours < 18) {
        // Afternoon
        array = [
            'Good Afternoon',
            'Bon Après-Midi',
            'Tráthnóna Maith',
            'God Eftermiddag',
            'Buon Pomeriggio',
            'Buenos Tardes',
            'Bună După-Amiaza',
            'Laba Popietė',
            'Hyvää Iltapäivää',
            'Tere Päevast',
            'Labdien',
            'Goedemiddag',
            'Góðan Síðdegi',
            'Guten Nachmittag',
            'Boa Tarde',
        ];
    } else if (hours < 22) {
        // Evening
        array = [
            'Good Evening',
            'Bonsoir',
            'Tráthnóna maith',
            'God Kväll',
            'Buonasera',
            'Buenos Noches',
            'Bună Seara',
            'Labas Vakaras',
            'Hyvää Iltaa',
            'Tere Õhtust',
            'Labvakar',
            'Goedeavond',
            'Gott kvöld',
            'Guten Abend',
            'Boa Noite',
        ];
    } else {
        // Generic
        array = [
            'Hello',
            'Bonjour',
            'Dia Dhuit',
            'Hej',
            'Ciao',
            'Hola',
            'Buna Ziua',
            'Sveiki',
            'Hei',
            'Tere',
            'Hallo',
            'Halló',
            'Olá',
        ];
    }

    return array;
}
