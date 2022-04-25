

// Searcy Building Slider (index.html)
$('#slider_one').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    touchDrag: false,
    mouseDrag: false,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    autoplay: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      },
      1451: {
        items: 6
      }
    }
  })


  // Searcy Testimonais Slider (index.html)
$('#slider_two').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    touchDrag: false,
    mouseDrag: false,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    autoplay: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })


// Footer Select 
$(document).ready(function() {
    $('#footer_select').niceSelect();
});




// Banner Select Dropdown Js 
// Change the button text & add active class
$('.banner_right_dr_d .jRadioDropdown').change(function() {
  var dropdown = $(this).closest('.dropdown');
  var thislabel = $(this).closest('label');

  dropdown.find('label').removeClass('active');
  if( $(this).is(':checked') ) {
    thislabel.addClass('active');
    dropdown.find('ins').html( thislabel.text() );
  }

});    
 
//Add tabindex on labels
$('.banner_right_dr_d label.dropdown-item').each(function (index, value){
  $(this).attr('tabindex', 0 );
  $(this).find('input').attr('tabindex', -1 );
});

//Add keyboard navigation
$('.banner_right_dr_d label.dropdown-item').keypress(function(e){
  if((e.keyCode ? e.keyCode : e.which) == 13){
    $(this).trigger('click');
  }
});

// Navbar Sticky Top 
$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop()>30);
});



// Back To top Btn 
$(function(){

  //Scroll event
  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('#back_to_top_btn').fadeIn('slow');
    if (scrolled < 200) $('#back_to_top_btn').fadeOut('slow');
  });
  
  //Click event
  $('#back_to_top_btn').click(function () {
    $("html, body").animate({ scrollTop: "0" },  500);
  });

});


// Accordion Minus 
$("#accordion_home").on("hide.bs.collapse show.bs.collapse", e => {
  $(e.target)
    .prev()
    .find("i:last-child")
    .toggleClass("fa-minus fa-plus");
});



// Option chang with dropdown 
$(document).ready(function(){

  //hides dropdown content
  $(".size_chart").hide();
  
  //unhides first option content
  $("#option0").show();
  
  //listen to dropdown for change
  $("#footer_select").change(function(){
    //rehide content on change
    $('.size_chart').hide();
    //unhides current item
    $('#'+$(this).val()).show();
  });
  
});





// Register Form 
$(document).ready(function(){
  var current = 1,current_step,next_step,steps;
  steps = $("fieldset").length;
  $(".next").click(function(){
    current_step = $(this).parent();
    next_step = $(this).parent().next();
    next_step.show();
    current_step.hide();
    setProgressBar(++current);
  });
  $(".previous").click(function(){
    current_step = $(this).parent();
    next_step = $(this).parent().prev();
    next_step.show();
    current_step.hide();
    setProgressBar(--current);
  });
  setProgressBar(current);
  // Change progress bar action
  function setProgressBar(curStep){
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
      .css("width",percent+"%")
      .html(percent+"%");   
  }
});



// Form Submit 
$( "#regiration_form" ).submit(function(event) {
  jQuery('.alert-success').removeClass('hide').html( "Thank You we will reach to you soon!" );
  console.log($(this).serialize());
  event.preventDefault();
});


// Show Hide Features common question and get started 
$('.feat_nav_item1').click(function(){
  $('.featurs_hide_qc').show()
})
$('.feat_nav_item2').click(function(){
  $('.featurs_hide_qc').hide()
})
$('.feat_nav_item3').click(function(){
  $('.featurs_hide_qc').show()
})
$('.feat_nav_item3').click(function(){
  $('.feat_get_st').show()
})
$('.feat_nav_item4').click(function(){
  $('.featurs_hide_qc').hide()
})
$('.feat_nav_item4').click(function(){
  $('.feat_get_st').hide()
})