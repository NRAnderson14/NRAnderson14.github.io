function buttonFunction() {
	alert("You pressed the button");
}

$(document).ready(function(){
	$(".btn").click(function(){
		$("h1").toggle(1000);
	});
	
	$("#btntop").click(function(){
		$("#top").toggle(750);
	});
	
	$("#btnmid").click(function(){
		$("#mid").toggle(750);
	});
	
	$("#btnbtm").click(function(){
		$("#btm").toggle(750);
	});
	
	$("#top").hover(function(){
		$("#top").fadeTo(100, 1);
	}, function(){
		$("#top").fadeTo(100, .25);
	});
	
	$("#mid").hover(function(){
		$("#mid").fadeTo(100, 1);
	}, function(){
		$("#mid").fadeTo(100, .25);
	});
	
	$("#btm").hover(function(){
		$("#btm").fadeTo(100, 1);
	}, function(){
		$("#btm").fadeTo(100, .25);
	});
});