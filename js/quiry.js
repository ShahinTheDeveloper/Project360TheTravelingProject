$(document).ready(function () {
    
//    for navbar scroll effect
    $(window).scroll(function () {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 425);
    });

//    for nav toggle icon
    $(".navbar-toggler").click(function () {
        $(".navBaricon").toggleClass("change");
    });
    
//    for area search
    $("#areaInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#areaList .row").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
//    for type selection
    $("#TypeFilter").change(updateRooms);

        function updateRooms() {
            var roomType = $('#TypeFilter').val();

            $('.type-load-section')
                .find('.filter-item')
                .hide()
                .filter(function() {
                    var okRoomType = true;
                    if (roomType !== "all") {
                        okRoomType = $(this).attr('data-type') === roomType;
                    }
                    return okRoomType
                }).fadeIn('fast');
        }

});
$(document).ready(function () {

    $("[data-fancybox]").fancybox();


    $(".items").isotope({
        filter: '.top',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    $("#filters a").click(function () {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

});