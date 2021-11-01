const keyMsg = (key) => `The '${key}' key is pressed.`;

document.addEventListener('keydown', (ev) => {
    switch (ev.code) {
        case "KeyA":
            console.log(keyMsg('A'));
            break;
        case "KeyS":
            console.log(keyMsg('S'));
            break;
        case "KeyD":
            console.log(keyMsg('D'));
            break;
        case "KeyF":
            console.log(keyMsg('F'));
            break;
        case "KeyG":
            console.log(keyMsg('G'));
            break;
        case "KeyH":
            console.log(keyMsg('H'));
            break;
        case "KeyJ":
            console.log(keyMsg('J'));
            break;
        default:
            console.log(`The key ${ev.code} is not supported!`);
    }
})