$(document).ready(function(){
    // Add smooth scrolling to all links

    $(function () {
      $('#myTab a:last').tab('show')
    });

    $(function () {
      $('[data-toggle="tooltip"]').tooltip('toggle')
    });

    $(function() {
      $( document ).tooltip({
        track: true
      });
    });

    
    // $('[data-toggle="popover"]').popover('hover', function(e){
      // e.preventDefault();
    // });   
    

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

    $("#toTop").on('click', function(event) {  
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

  

  
  window.fbAsyncInit = function() {
      FB.init({
          appId      : '302752466875509',
          cookie     : true,
          xfbml      : true,
          version    : 'v2.10'
      });
      
      FB.AppEvents.logPageView();

      FB.getLoginStatus(function(response) {
          statusChangeCallback(response);        
      });
  };

  
  function checkLoginState() {
      FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
      });
  };
