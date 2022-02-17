// open dropdown with hoveer
$("nav .dropdown,nav .dropright").hover(
  function () {
    console.log("ggvgv");
    $(this).children(".dropdown-menu").stop(true, true).delay(200).fadeIn(500);
  },
  function () {
    $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut(500);
  }
);

// open sidebar
let sideBoxWidth = $(".sideBar").outerWidth(true);
console.log(sideBoxWidth);
$(".open").click(function () {
  $(".sideBar").animate({ left: "0" }, 500);
  $(".close").css("display", "block");
});

// close sidebar
$(".close").click(function () {
  $(".sideBar").animate({ left: `-${sideBoxWidth}` }, 500);
  $(".close").css("display", "none");
  $("#open").css("display", "block");
});

// open tabs
$(".card-header").click(function () {
  $(this).removeClass("brdrBtn");
  $(this).children("p").toggleClass("highLight");
  if( $(this).attr("aria-expanded") =="true"){
    $(this).find("span").css("transform","rotate(45deg)")
  }else {
    
    $(this).find("span").css("transform","rotate(-135deg)")
   
  }

});

// slider settings
$(".autoplay").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  dotsClass: "slick-dots",
  customPaging: function (slider, i) {
    return '<button type="button" data-role="none">' + "</button>";
  },

  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        infinite: true,
      },
    },

    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
    {
      breakpoint: 300,
      settings: "unslick", // destroys slick
    },
  ],
});

 $(".smScreen h5:eq(0)").css("display", "none");

let h5s = $(".smScreen h5");


// .smScreen mediaQuery
const mediaQuery = window.matchMedia("(max-width: 768px)");

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    $(".smScreen .content").slideUp(1);
    $(".smScreen .content:eq(0)").css("display", "none");
    $(".smScreen h5:eq(0)").css("display", "block");
    $(".smScreen i").css("opacity","1");
    $(".smScreen").removeClass("text-center");
    $(".smScreen").addClass("text-left");
    $(".smScreen  .content").after(`<hr class="bg-white my-3">`);
    $(".smScreen h5").css("margin-top", "15px");
    for (let i = 0; i < h5s.length; i++) {
      h5s[i].addEventListener("click", (e) => {
        $(".smScreen .content").eq(i).slideToggle(500);
      });
    }
    console.log("Media Query Matched!");
   } else{

    
    console.log("nooo");
    
   }
}


// Initial check
handleTabletChange(mediaQuery);

$("header nav").slideUp(100)

$(window).scroll(function(){
  let wScroll = $(window).scrollTop()
  if(wScroll > 100)
  {
    $("header nav").css("position","fixed")
    $("header nav").slideDown(100)

      $(".btnUp").fadeIn(500);
  }else
  {
    $("header nav").slideUp(1)
  }
});