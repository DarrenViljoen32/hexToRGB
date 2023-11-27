function hex2RGB(hexadeci) {
    let r = parseInt(hexadeci.slice(1,3), 16);
    let g = parseInt(hexadeci.slice(3,5), 16);
    let b = parseInt(hexadeci.slice(5,7), 16);
    return `RGB: ${r}, ${g}, ${b}`;
}
let display = document.querySelector('form');
display.addEventListener('submit', convertValues);

function convertValues(eve) {
    let hex = document.querySelector('#hex').value;
    let rgb = hex2RGB(hex);
    document.querySelector('#rgb').value = rgb;
    eve.preventDefault();
}
