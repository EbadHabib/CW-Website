// JavaScript Document
// Claudio Gomboli . the EGGS LAB
// 2012 / 8 / 29
// Responsive animated gallery

$('.portfolio').each(function(index)
{
    $(this).attr('id', 'img' + (index + 1));
});
    
$('.portfolio').each(function(){
  $('#navi').append('<div class="circle"></div>');
});
  
$('.circle').each(function(index)
{
    $(this).attr('id', 'circle' + (index + 1));
});   
   
$('.portfolio').click(function(){
if($(this).hasClass('project_preview')){
    $(this).removeClass('project_preview');
    $(".portfolio").fadeIn("fast");
    $(this).find('.ombra').fadeOut();
    $("#navi div").removeClass("activenav");
}
else{
	var indexi = $("#maincontent .portfolio").index(this) + 1;
    $(this).addClass('project_preview'); 
    $(".portfolio").not(this).fadeOut("fast");
    $(this).find('.ombra').fadeIn();
    $("#circle" + indexi).addClass('activenav'); 
}
});	

//navi buttons
$("#navi div").click(function() {
if($(this).hasClass("activenav")){
	return false;
}
		
	$("#navi div").removeClass("activenav");
	$(".portfolio").removeClass('project_preview');
	$(".portfolio").show();
        $('.ombra').hide();
		
	var index = $("#navi div").index(this) + 1;
	$("#img" + index).addClass('project_preview'); 
    $(".portfolio").not("#img" + index).fadeOut("fast");
    $("#img" + index).find('.ombra').fadeIn();
        
    $(this).addClass("activenav");
});