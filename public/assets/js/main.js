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

  // AOS
  AOS.init();

  // Algolia Places
  const placesAutocomplete = places({});

  // Maps
  // var map = L.map('map').setView([0, 0], 1);
  // L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=Rwa4uTaB8wINcglPbCNY', {
  //   attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  // }).addTo(map);

});