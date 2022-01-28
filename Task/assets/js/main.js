$('.owl-carousel').owlCarousel({
    items: 4,
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    dotsEach:true,
    paginationSpeed: 300,
    rewindSpeed: 400,
  responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})