
$(document).ready(function () {
    $(".scnd_menu_list li a").mouseover(function (event) {
        event.preventDefault();
        $(".scnd_menu_list li a").removeClass('active');
        $(this).addClass('active');
        var $id = $(this).attr('id');
        var $sub = $('#sub_' + $id);
        $('.contentmenu').hide();
        $('.black_absolute_menu').show();
        $sub.show();
    });

    $(document).on('click', '.cart_close_but', function () {
        $("#cart_absolute_container").hide();
    });
    $(document).on('mouseover', '.carts_list_element', function () {
        $("#cart_absolute_container").show();
    });
    $(document).on('mouseout', '.carts_list_element', function () {
        $("#cart_absolute_container").hide();
    });
    $("div").find(".item_in_cart_container:first").css("border-bottom", "none");
    $('p').filter(function () {
        return $.trim(this.innerHTML) == ""
    }).remove();

    var count = 0;
    $('.scnd_menu_list li, .black_absolute_menu').mouseenter(function () {
        count++;
    }).mouseleave(function () {
        count--;

        setTimeout(function () {
            if (count == 0) {
                $('.contentmenu').hide();
                $('.black_absolute_menu').hide();
                $(".scnd_menu_list li a").removeClass('active');
            }
        }, 50);
    });

    var $window = $(window);
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize <= 767) {
            function clickmenu() {
                $(".scnd_menu_list li a").click(function (event) {
                    event.preventDefault();
                    var $thisid = $(this).attr('id');
                    var $tabid = $('#cont_' + $thisid);
                    $tabid.toggle();
                });
            }

            clickmenu();
        }
    }
    checkWidth();
    $(window).resize(checkWidth);
    $(window).bind('resize', function (e)
    {
        if (window.RT)
            clearTimeout(window.RT);
        window.RT = setTimeout(function ()
        {
            this.location.reload(false);
        }, 200);
    });

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            9999: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
        }
    });
});

$('.btn-number').click(function (e) {
    e.preventDefault();

    fieldName = $(this).attr('data-field');
    type = $(this).attr('data-type');
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if (type == 'minus') {

            if (currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if (parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if (type == 'plus') {

            if (currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if (parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function () {
    $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function () {

    minValue = parseInt($(this).attr('min'));
    maxValue = parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());

    name = $(this).attr('name');
    if (valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if (valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }


});
$(".input-number").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
            // Allow: Ctrl+A
                    (e.keyCode == 65 && e.ctrlKey === true) ||
                    // Allow: home, end, left, right
                            (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });