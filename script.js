let botonDonar = document.getElementById('botonDonar');

botonDonar.addEventListener('click', () => {
    let body = document.querySelector('body');
    let nuevoDiv = document.createElement('div');
    nuevoDiv.classList.add('modalOverlay');
    nuevoDiv.innerHTML = `
        <h4>Donación</h4>
        <input type="number" min="0">
        <button id="botonCerrar">X</button>
    `;

    body.appendChild(nuevoDiv);
});

document.addEventListener('click', (e) => {
    let botonCerrar = document.getElementById('botonCerrar');
    if (e.target == botonCerrar) {
        let nuevoDiv = document.querySelector('.modalOverlay');
        nuevoDiv.remove();
    }
});