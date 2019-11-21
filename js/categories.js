
$(document).ready(function () {
	
	$(".clothing").click(function (event) {
        $(".menu_left_titles").removeClass('menu_left_titles_active');
        $(".clothing").addClass('menu_left_titles_active');
		$('.subcat_dresses').hide();
        $('.subcat_clothing').toggle();
    });
	$(".dresses").click(function (event) {
        $(".menu_left_titles").removeClass('menu_left_titles_active');
        $(".dresses").addClass('menu_left_titles_active');
		$('.subcat_clothing').hide();
        $('.subcat_dresses').toggle();
    });
	$(".accessories").click(function (event) {
        $('.subcat_accessories').toggle();
    });
	$(".colorvmmore").click(function (event) {
        $('.colorvmmore').hide();
        $('.colorvmless').show();
        $('.color_vm_hidden').show();
    });
	$(".colorvmless").click(function (event) {
        $('.colorvmless').hide();
        $('.colorvmmore').show();
        $('.color_vm_hidden').hide();
    });
	$(".charvmmore").click(function (event) {
        $('.charvmmore').hide();
        $('.charvless').show();
        $('.char_vm_hidden').show();
    });
	$(".charvless").click(function (event) {
        $('.charvless').hide();
        $('.charvmmore').show();
        $('.char_vm_hidden').hide();
    });
	$(".budgetslider").each(function () {
        var $this = $(this);
        var myID = $this.attr("id");
        var $low = $this.parent('div').find('.low').attr("id");
        var $high = $this.parent('div').find('.high').attr("id");
        initRangeSlider($this, myID, 0, 500, $low, $high);
    });
});
function initRangeSlider(myClass, myID, startValue, maxValue, myLow, myHigh) {
    console.log(myID);
    var mySlider = new Slider("#" + myID, {
        min: startValue,
        max: maxValue,
        value: [startValue, maxValue],
        labelledby: [myLow, myHigh]
    });
}

