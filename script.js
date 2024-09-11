let excludedNumbers = [];

document.getElementById('generateBtn').addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    let randomNumber;

    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (excludedNumbers.includes(randomNumber));

    document.getElementById('output').innerText = randomNumber;
});

// Toggle the secret menu
document.querySelector('.secret-toggle').addEventListener('click', function() {
    const secretMenu = document.getElementById('secretMenu');
    secretMenu.style.display = secretMenu.style.display === 'none' ? 'block' : 'none';
});

// Save excluded numbers
document.getElementById('saveExclusions').addEventListener('click', function() {
    const excludeInput = document.getElementById('excludeNumbers').value;
    excludedNumbers = excludeInput.split(',').map(Number);
    alert('Excluded numbers saved: ' + excludedNumbers.join(', '));
});
