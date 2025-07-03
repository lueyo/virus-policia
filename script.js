const $ = (element) => document.querySelector(element);

fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const ipElement = document.getElementById('user-ip');
        if (ipElement) {
            ipElement.textContent = data.ip;
        }
    })
    .catch(() => {
        const ipElement = document.getElementById('user-ip');
        if (ipElement) {
            ipElement.textContent = '195.77.198.30';
        }
    });