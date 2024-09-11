let excludedNumbers = [];

// Handle the "Generate" button click
document.getElementById('generateBtn').addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    
    let randomNumber;
    
    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (excludedNumbers.includes(randomNumber));
    
    document.getElementById('output').innerText = randomNumber;
});

// Handle the toggle of the secret menu
document.querySelector('.secret-toggle').addEventListener('click', function() {
    const secretMenu = document.getElementById('secretMenu');
    
    // Toggle the secret menu visibility
    if (secretMenu.style.display === 'none' || secretMenu.style.display === '') {
        secretMenu.style.display = 'block';  // Show the menu
    } else {
        secretMenu.style.display = 'none';   // Hide the menu
        
        // Hide the down arrow toggle when menu is closed
        document.querySelector('.secret-toggle').style.display = 'none';
    }
});

// Save excluded numbers from the secret menu
document.getElementById('saveExclusions').addEventListener('click', function() {
    const excludeInput = document.getElementById('excludeNumbers').value;
    excludedNumbers = excludeInput.split(',').map(Number);
    alert('Excluded numbers saved: ' + excludedNumbers.join(', '));
});
