// Features-pre-sales-slider
jQuery(".features-pre-caro").owlCarousel({
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

 // Press Release
 jQuery(".press-release-caro").owlCarousel({
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
      items: 3,
      loop: true,
        nav: true
    },

    1366: {
      items: 4,
      loop: true,
        nav: true
    }
  }
});

const togglebtndesktop = document.querySelector(".navbar .toggle-icon-desktop-home");
const togglebox = document.querySelector(".toggle-icon-desktop-home-box");

togglebtndesktop.addEventListener("click",()=>{
  togglebox.classList.toggle("activebox");
})
