$(document).ready(function () {
    //ACCORDION
    /**
      * ---- HTML ----
      * 
      * <div class="accordion">
      *   <h2 class="accordion-header"></h2>
      *   <div class="accordion-content"></div>
      * </div>
      * 
      * ---- CSS ----
      *
      * .accordion-content{ display: none; }
      * .accordion-content.active{ display: block; }
      * 
      **/
    $(".accordion").each(function (index, value) {
        $(this).attr("id", "accordion-" + index);
        $("#accordion-" + index).on("click", ".accordion-header", function () {
            $("#accordion-" + index).find(".accordion-content").removeClass("active");
            $(this).next(".accordion-content").addClass("active");
        });
    });
    
    //ROTATE IMAGES
    /**
      * 
      * 
      *
      **/
    $("#slideshow > div:gt(0)").hide();
    setInterval(function() { 
      $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    },  5000);
});
