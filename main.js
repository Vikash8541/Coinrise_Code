// Features-pre-sales-slider
jQuery(".features-pre-caro").owlCarousel({
    margin: 20,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
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


// Js for Toggle icon home page
const togglebtndesktop = document.querySelector(".navbar .toggle-icon-desktop-home");
const togglebox = document.querySelector(".toggle-icon-desktop-home-box");
const toggleboxcontent = document.querySelector(".toggle-icon-desktop-home-box > ul");
togglebtndesktop.addEventListener("click",()=>{
  togglebox.classList.toggle("activebox");
  toggleboxcontent.classList.toggle("activebox");
})
