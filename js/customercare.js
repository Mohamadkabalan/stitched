
$(document).ready(function () {
	
	$("#shipmentmore").click(function (event) {
        $('#shipmentmore').hide();
        $('#shipmentless').show();
        $('#sub_shipment').show();
    });
	$("#shipmentless").click(function (event) {
        $('#shipmentless').hide();
        $('#shipmentmore').show();
        $('#sub_shipment').hide();
    });
	$("#paymentmore").click(function (event) {
        $('#paymentmore').hide();
        $('#paymentless').show();
        $('#sub_payment').show();
    });
	$("#paymentless").click(function (event) {
        $('#paymentless').hide();
        $('#paymentmore').show();
        $('#sub_payment').hide();
    });
	$("#deliverymore").click(function (event) {
        $('#deliverymore').hide();
        $('#deliveryless').show();
        $('#sub_delivery').show();
    });
	$("#deliveryless").click(function (event) {
        $('#deliveryless').hide();
        $('#deliverymore').show();
        $('#sub_delivery').hide();
    });
	$("#exchangemore").click(function (event) {
        $('#exchangemore').hide();
        $('#exchangeless').show();
        $('#sub_exchange').show();
    });
	$("#exchangeless").click(function (event) {
        $('#exchangeless').hide();
        $('#exchangemore').show();
        $('#sub_exchange').hide();
    });
	$("div").find(".ccsections:first").css("border-top", "1px solid #646464");
});
