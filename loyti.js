$(document).ready(function(){
    // Add smooth scrolling to all links

    $(function () {
      $('#myTab a:last').tab('show')
    })
    
    $(".list-group a").on('click', function(event) {  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 2000, function(){
          window.location.hash = hash;
        });
      }
    });

    $(".nav-link").on('click', function(event) {  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 2000, function(){
          window.location.hash = hash;
        });
      }
    });

    $("#trackingS").on('click', function(event) {  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 2000, function(){
          window.location.hash = hash;
        });
      }
    });

    $("#targetS").on('click', function(event) {  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 2000, function(){
          window.location.hash = hash;
        });
      }
    });

    $(".toTop").on('click', function(event) {  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1500, function(){
          window.location.hash = hash;
        });
      }
    });

    $(".toContact").on('click', function(event) {  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1200, function(){
          window.location.hash = hash;
        });
      }
    });
    
  });