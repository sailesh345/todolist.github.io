//check off specific todos by clicking
$("ul").on("click","li",function(){
	/*if($(this).css("color") === "rgb(128, 128, 128)")
	{
		$(this).css({
		color:"black",
		textDecoration:"none"
		});	
	}
	else
	{	
		$(this).css({
		color:"gray",
		textDecoration:"line-through"
		});
	}*/
	$(this).toggleClass("completed");
});


$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(400,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todotext=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>");
		$("input[type='text']").fadeToggle();
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

