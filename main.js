
jQuery(".owl-carousel").owlCarousel({
    margin: 20,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    navText: ["<img src='./images/features-pre-left.svg'>","<img src='./images/features-pre-right.svg'>"],
    nav: true,
    dots:false,
    responsive: {
      0: {
        items: 1,
        loop: true,
          nav: true
      },
  
      600: {
        items: 2,
        loop: true,
          nav: true
      },
      
      1024: {
        items: 2,
        loop: true,
          nav: true
      },
  
      1366: {
        items: 2,
        loop: true,
          nav: true
      }
    }
  });