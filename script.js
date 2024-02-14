document.getElementById('yesBtn').addEventListener('click', function() {
    if (event.target.id == 'yesBtn'){
    window.location.href = 'https://en.m.wikipedia.org/wiki/File:Heart_left-highlight_jon_01.svg'; // Redirect to Wikipedia page if "Yes" button is clicked
    }
});

document.getElementById('noBtn').addEventListener('click', function() {
    window.location.href = 'https://www.istockphoto.com/illustrations/thumbs-down-clipart'; // Redirect to iStockphoto page if "No" button is clicked
});
