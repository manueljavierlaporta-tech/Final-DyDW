let botonDonar = document.getElementById('botonDonar');

botonDonar.addEventListener('click', () => {
    let body = document.querySelector('body');
    let nuevoDiv = document.createElement('div');
    nuevoDiv.innerHTML = `
        <h4>Donación</h4>
        <input type="number" min="0">
    `;

    body.appendChild(nuevoDiv)
})