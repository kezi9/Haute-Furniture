document.addEventListener('DOMContentLoaded', function() {
    // Initialize Glide.js
    new Glide('.glide').mount();

    // Initialize AOS
    AOS.init();

    // Initialize Lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

    // Initialize Algolia Places
    var placesAutocomplete = places({
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_API_KEY',
        container: document.querySelector('#address-input')
    });

    // Toggle burger menu
    document.querySelector('.burger-menu').addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('active');
    });
});
