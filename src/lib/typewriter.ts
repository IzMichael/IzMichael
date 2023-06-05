export default function typewriter(
    node: HTMLElement,
    options: {
        strings: string[];
        disabled: boolean;
        shuffle: boolean;
        delay: number;
        interval: number;
        caret: string;
    }
) {
    typer(node, options);
}

async function typer(
    node: HTMLElement,
    options: {
        strings: string[];
        disabled: boolean;
        shuffle: boolean;
        delay: number;
        interval: number;
        caret: string;
    }
) {
    const { strings, disabled, shuffle, delay, interval, caret } = options;

    node.innerHTML = '⠀';

    let array: string[] = [];
    while (!disabled && strings.length > 0) {
        if (array.length < 1) {
            if (shuffle) {
                array = await shuffleArray([...strings]);
            } else {
                array = [...strings];
            }
        }

        for (const line of array) {
            await deleteAll();
            await write(line);
            array.splice(array.indexOf(line), 1);

            await sleep(delay);
        }
    }

    // Functions

    async function deleteAll() {
        node.innerHTML += caret;
        while (node.innerHTML.length > 1) {
            node.innerHTML = node.innerHTML.slice(0, -2) + caret;
            await sleep(interval);
        }
        node.innerHTML = '⠀';
        return;
    }

    async function write(string: string) {
        for (const char of string) {
            await sleep(interval);
            node.innerHTML = node.innerHTML.slice(0, -1);
            node.innerHTML += char;
            node.innerHTML += caret;
        }
        node.innerHTML = node.innerHTML.slice(0, -1);
        return;
    }
}

function sleep(s: number) {
    return new Promise((resolve) => setTimeout(resolve, s));
}

async function shuffleArray(array: string[]): Promise<string[]> {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}
