document.getElementById('yesBtn').addEventListener('click', function() {
    if (event.target.id == 'yesBtn'){
    window.location.href = 'https://en.wikipedia.org/wiki/Heart_symbol#/media/File:Heart_coraz%C3%B3n.svg'; // Redirect to Wikipedia page if "Yes" button is clicked
    }
});

document.getElementById('noBtn').addEventListener('click', function() {
    window.location.href = 'https://www.istockphoto.com/illustrations/thumbs-down-clipart'; // Redirect to iStockphoto page if "No" button is clicked
});
