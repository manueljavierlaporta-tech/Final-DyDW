let botonDonar = document.getElementById('botonDonar');

botonDonar.addEventListener('click', () => {
    let body = document.querySelector('body');
    let nuevoDiv = document.createElement('div');
    nuevoDiv.classList.add('modalOverlay');
    nuevoDiv.innerHTML = `
        <h4>Donación</h4>
        <input type="number" min="0">
    `;

    body.appendChild(nuevoDiv);
});

document.addEventListener('click', (e) => {
    if (e.target != botonDonar) {
        let nuevoDiv = document.querySelector('.modalOverlay');
        nuevoDiv.remove();
    }
});