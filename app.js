const text = prompt()

let i = 0;

function ekranyazi() {
    document.body.innerHTML = text.slice(0, i);
    i++;
    if (i > text.length) {
        i = 0;
    }
}

setInterval(ekranyazi, 300);