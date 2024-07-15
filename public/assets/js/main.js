document.addEventListener('DOMContentLoaded', function () {
  // Glide JS
  const config = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 2000,
    hoverpause: false,
    animationDuration: 800,
    animationTimingFunc: 'ease-in-out'
  };
  new Glide('.glide', config).mount();

  // Lightbox
  if (typeof lightbox !== 'undefined') {
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
  } else {
    console.error('Lightbox is not defined.');
  }

  // AOS
  AOS.init();

  // Maps
  var map = L.map('map').setView([43.6566, -79.3796], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var marker = L.marker([43.6566, -79.3796]).addTo(map);


});