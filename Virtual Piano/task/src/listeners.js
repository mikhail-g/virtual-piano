const whiteKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];
const blackKeys = ['W', 'E', 'T', 'Y', 'U'];

const keyMsg = (key) => `The '${key}' key is pressed.`;
const keyErrorMsg = (key) => `The key ${key} is not supported!`;

const playSound = (keyGroup, key) => {
    console.log(keyMsg(key));
    return new Audio(`./resources/${keyGroup}/${key}.mp3`).play();
};
const playWhite = (key) => playSound('white_keys', key);
const playBlack = (key) => playSound('black_keys', key);

const isWhite = (key) => whiteKeys.includes(key.toUpperCase());
const isBlack = (key) => blackKeys.includes(key.toUpperCase());

document.addEventListener('keydown', (ev) => {
    if (ev.repeat) {
    } else if (ev.code.startsWith('Key')) {
        const key = ev.code[3];
        if (isWhite(key)) {
            playWhite(key);
            document.getElementById(key).style.backgroundImage = 'linear-gradient(to bottom, white, lightgray)';
        } else if (isBlack(key)) {
            playBlack(key);
            document.getElementById(key).style.backgroundImage = 'linear-gradient(to bottom, black, #505050)';
        } else {
            console.log(keyErrorMsg(key));
        }
    } else {
        console.log(keyErrorMsg(ev.code));
    }
})

document.addEventListener('keyup', (ev) => {
    const key = ev.code
    if (key.startsWith('Key') && (isWhite(key[3]) || isBlack(key[3]))) {
        document.getElementById(key[3]).style.backgroundImage = '';
    }
})

const whiteKeysButtons = document.getElementsByClassName('white-keys')[0].children;
for (let key of whiteKeysButtons) {
    key.addEventListener('click', () => playWhite(key.id));
}

const blackKeysButtons = document.getElementsByClassName('black-keys')[0].children;
for (let key of blackKeysButtons) {
    key.addEventListener('click', () => playBlack(key.id));
}
