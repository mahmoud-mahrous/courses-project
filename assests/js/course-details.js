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