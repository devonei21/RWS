$("#layerTwo").hide();
$("input[name=checkbox]").click(function(){
    $("#layerOne, #layerTwo").toggle();
});

$(".branding").hide();
$(".on_off").click(function() {
    if($(this).is(":checked")) {
        $(".branding").show();
    } else {
        $(".branding").hide();
    }
});