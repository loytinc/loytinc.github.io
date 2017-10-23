$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".list-group a").on('click', function(event) {  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 2800, function(){
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
        }, 3000, function(){
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
        }, 3000, function(){
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
        }, 3000, function(){
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
        }, 3000, function(){
          window.location.hash = hash;
        });
      }
    });
    
  });