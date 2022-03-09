
// MOBILE MENU

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//   Yotube player
var img = $("#exampleImage");
var configObject = {
  sourceUrl: img.attr("data-videourl"),
  triggerElement: "#" + img.attr("id"),
  progressCallback: function() {
    console.log("Callback Invoked.");
  }
};

var videoBuild = new YoutubeOverlayModule(configObject);

videoBuild.activateDeployment();

// Molible Menu


// STICKY MENU (ABOUT SECTION)
$(document).ready(function(){

  $(".for-sticky-menu-js").waypoint(function(direction){
    if (direction == "down"){
        $("nav").addClass("sticky");
    } else {
        $("nav").removeClass("sticky");
    }
  });
});

// Bxslider

$(document).ready(function(){
  $('.slider').bxSlider();
  $('.bxslider').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: 1140
    });
});
