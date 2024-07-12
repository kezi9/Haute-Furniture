// document.addEventListener("DOMContentLoaded", (event) => {
//     // Glide.JS
//     new Glide('.glide').mount();

//     // AOS
//     AOS.init();
// });

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Glide.js for the carousel
    new Glide('.glide').mount();
  
    // Initialize AOS for animations when you scroll
    AOS.init();
  
    // Initialize Parsley.js to check the form when you try to submit
    $('#contact-form').parsley();
  });
  