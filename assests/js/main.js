// open dropdown with hoveer
$(".dropdown,.dropright").hover(
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
$("#open").click(function () {
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

$("footer h5:eq(0)").css("display", "none");

let h5s = $("footer h5");


// Footer mediaQuery
const mediaQuery = window.matchMedia("(max-width: 768px)");

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    $("footer .content").slideUp(1);
    $("footer .content:eq(0)").css("display", "none");
    $("footer h5:eq(0)").css("display", "block");
    $("footer i").css("opacity","1");
    $("footer").removeClass("text-center");
    $("footer").addClass("text-left");
    $("footer  .content").after(`<hr class="bg-white my-3">`);
    $("footer h5").css("margin-top", "15px");
    for (let i = 0; i < h5s.length; i++) {
      h5s[i].addEventListener("click", (e) => {
        $("footer .content").eq(i).slideToggle(500);
      });
    }
    console.log("Media Query Matched!");
   } else if(!e.matches) {
    $("h5").removeEventListener("click")
    $("footer .content").slideDown(100);
    $("footer .content:eq(0)").css("display", "block");
    $("footer h5:eq(0)").css("display", "none");
    $("footer").removeClass("text-left");
    $("footer").addClass("text-center");
    $("footer h5").css("margin-top", "10px");
    $("footer hr").remove();
   }
}

// Register event listener
mediaQuery.addEventListener("change", handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);
