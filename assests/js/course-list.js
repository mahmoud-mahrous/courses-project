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

  let course = ` <div class="col-xl-12 col-sm-12 mt-4">
  <div class="course p-2">
   <div class="row justify-content-between no-gutters">
       <div class="col-4 ">
        <div class="courseImg">
            <a href="#">
              <img src="assests/images/rKkcbHL.jpg" class="" alt="">
            </a>
          </div>
       </div>
   
       <div class="col-8 pl-2">
    <div class="courseKey  py-1">
      <div class="row justify-content-between align-items-center">
        <div class="col-3">
          <a href="#">deesign</a>
        </div>
    
      </div>
    </div>
    <div class="courseDetails pb-3 pr-2">
      <h4 class="h6 pt-2 mb-0 pb-0"><a href="#">UI/UX Design pattern for succesfull software Applications</a></h4>
      <span class="font-italic mt-0 mb-3">By</span><span> Adam Wilson</span>
      <div class="row justify-content-between align-items-center mt-2 w-100">
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
   

    <div class="coursePrice mt-3">
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
  </div>
  <div class="dropdown-divider"></div>

  <div class="row justify-content-center no-gutters play ">
      <div class="col-sm-8">
         <div class="d-flex align-items-center">
            <span class="mr-1 ml-2"><i class="fa fa-play text-success"></i></span><span>play Now</span>
         </div>
      </div>
      <div class="col-sm-4 ">
        <div class="d-flex align-items-center">
            <span class="mr-1 pl-2"><i class="fa fa-lightbulb text-info"></i></span><span class="mr-4">Beginning</span>
            <span class="mr-1"><i class="fa fa-hourglass-half  text-warning"></i></span><span>Beginning</span>
         </div>
    </div>
  </div>
</div>
 </div>`
 let container = ``;
  for(let i =0 ; i<= 10 ; i++)
  {
     
      container += course;
  }

  document.getElementById("courses").innerHTML = container;