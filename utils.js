$(document).ready(function () {
    //ACCORDION
    /**
      *
      * <div class="accordion">
      *   <h2 class="accordion-header"></h2>
      *   <div class="accordion-content"></div>
      * </div>
      *
      **/
    $(".accordion").each(function (index, value) {
        $(this).attr("id", "accordion-" + index);
        $("#accordion-" + index).find(".accordion-content").hide();
        $("#accordion-" + index).on("click", ".accordion-header", function () {
            $("#accordion-" + index).find(".accordion-content").hide();
            $(this).next(".accordion-content").show();
        });
    });
});
