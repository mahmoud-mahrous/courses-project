function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("icon").classList.toggle("rotate");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }


  $(window).scroll(function(){
    let wScroll = $(window).scrollTop()
    if(wScroll > 100)
    {
      $("nav").css("position","fixed")
      $("nav").css("background","#fff")
      $("nav").css("box-shadow"," 1px 0px 15px 0px rgba(219, 195, 195, 0.64)")
      
    }else
    {
        $("nav").css("position","fixed")
        $("nav").css("background","#fff")
        $("nav").css("box-shadow"," 1px 0px 15px 0px rgba(219, 195, 195, 0.64)")
        
  
    }
  });

  let course = ` <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-4">
  <div class="course p-3">
    <div class="crs_video_ico">
      <i class="fa fa-play"></i>
    </div>
    <div class="crs_locked_ico">
      <i class="fa fa-heart"></i>
    </div>
    <div class="courseImg">
      <a href="#">
        <img src="assests/images/rKkcbHL.jpg" class="img-fluid" alt="">
      </a>
    </div>
    <div class="courseKey  py-1">
      <div class="row justify-content-between align-items-center">
        <div class="col-3">
          <a href="#">deesign</a>
        </div>
        <div class="col-3 ">
         <img src="assests/images/9mCNr06.jpg" class=" " alt="">
        </div>
      </div>
    </div>
    <div class="courseDetails pb-3 pr-2">
      <h4 class="h6 py-2"><a href="#">UI/UX Design pattern for succesfull software Applications</a></h4>
      <div class="row justify-content-between align-items-center">
        <div class="col-4">
          <i class="fa fa-video "></i>
          <span>24 Videos</span>
        </div>
        <div class="col-4">
          <i class="fa fa-clock text-danger"></i>
          <span>24 Videos</span>
        </div>
        <div class="col-4">
          <i class="fa fa-video text-success"></i>
          <span>24 Videos</span>
        </div>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="dropdown-divider"></div>

    <div class="coursePrice ">
      <div class="row justify-content-between align-items-center">
       <div class="col-6">
        <p class="h4">$<span>144</span></p>
       </div>
       <div class="col-6 text-right">
        <button class="btn">Enroll Now</button>
       </div>
      </div>
    </div>

  </div>
 </div>`;
 let container = ``;
  for(let i =0 ; i<= 10 ; i++)
  {
     
      container += course;
  }

  document.getElementById("courses").innerHTML = container;