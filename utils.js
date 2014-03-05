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
});
