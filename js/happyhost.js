$(document).ready(function(){
	$(".scroll").on("click", function(){

		var sectionHeight= $("#instructions").offset().top;

		var totalHeight = sectionHeight -100;

		// console.log(sectionHeight);

	$("body,html").animate({
		scrollTop: totalHeight
	},1000);

	return false;

	});

});