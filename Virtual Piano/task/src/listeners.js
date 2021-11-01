const keyMsg = (key) => `The '${key}' key is pressed.`;
const play = (key) => {
    console.log(keyMsg(key));
    const audio = new Audio(`./resources/white_keys/${key}.mp3`)
    audio.play().then(r => r);
} 

document.addEventListener('keydown', (ev) => {
    switch (ev.code) {
        case "KeyA":
            play('A')
            break;
        case "KeyS":
            play('S');
            break;
        case "KeyD":
            play('D');
            break;
        case "KeyF":
            play('F');
            break;
        case "KeyG":
            play('G');
            break;
        case "KeyH":
            play('H');
            break;
        case "KeyJ":
            play('J');
            break;
        default:
            console.log(`The key ${ev.code} is not supported!`);
    }
})