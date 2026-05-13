const form = document.getElementById('backend-form');
const statusMsg = document.getElementById('status-msg');
const imieInput = document.getElementById('imie');
const emailInput = document.getElementById('email');
const wiadomoscInput = document.getElementById('wiadomosc');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const endpoint = 'https://formspree.io/f/mjglzagl';

    const data = {
        imie: imieInput.value,
        email: emailInput.value,
        wiadomosc: wiadomoscInput.value
    };

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            statusMsg.style.display = 'block';
            form.reset();
        }
    })
    .catch(error => console.error(error));
});
