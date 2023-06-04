function headButtonFirstOnOver(){
    document.getElementById("page1_container1_buttons_style1").style.backgroundColor = "orange";
    document.getElementById("page1_container1_buttons_style1").style.color = "white";
   
  }
  function headButtonFirstOnOut(){
    document.getElementById("page1_container1_buttons_style1").style.backgroundColor = "edf3f5";
    document.getElementById("page1_container1_buttons_style1").style.color = "orange";
   

  }

  function headButtonSecondOnOver(){
    document.getElementById("page1_container1_buttons_style2").style.backgroundColor = "orange";
    document.getElementById("page1_container1_buttons_style2").style.color = "white";
  }

  function headButtonSecondOnOut(){
    document.getElementById("page1_container1_buttons_style2").style.backgroundColor = "edf3f5";
    document.getElementById("page1_container1_buttons_style2").style.color = "orange";
  }


  window.addEventListener('scroll', function() {
    var section = document.getElementById('page3_container');
    var navbar = document.getElementById('head');

    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    var windowScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (windowScroll >= sectionTop && windowScroll < sectionTop + sectionHeight) {
        navbar.classList.add('hide-navbar');
    } else {
        navbar.classList.remove('hide-navbar');
    }
});
