
var wins = 0;
var losses = 0;

var addition = 0;

var total = Math.floor((Math.random()* 100) + 19);

var c1 = Math.floor((Math.random()* 12) + 1);
var c2 = Math.floor((Math.random()* 12) + 1);
var c3 = Math.floor((Math.random()* 12) + 1);
var c4 = Math.floor((Math.random()* 12) + 1);


var updateAddition = function (){
	$('.addition').empty();
	$('.addition').append(addition);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}

var restart = function(){
	addition = 0;
    total = Math.floor((Math.random()* 100) + 19);

	$('.total').empty();
	$('.total').append(total);

	c1 = Math.floor((Math.random()* 12) + 1);
    c2 = Math.floor((Math.random()* 12) + 1);
    c3 = Math.floor((Math.random()* 12) + 1);
    c4 = Math.floor((Math.random()* 12) + 1);
    updateAddition();
}
var logic = function (){
	if (addition == total) {
		wins = wins + 1;

		restart();
	}else if(addition > total){
		losses = losses + 1;

		restart();
	}else{
		updateAddition();
	}

}
var myAudio = new Audio("assets/music/music.mp3")

	myAudio = new Audio("assets/music/music.mp3"); 
	if (typeof myAudio.loop == 'boolean')
	{
    myAudio.loop = true;
	}
	else
	{
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
myAudio.play();
$('.total').append(total);

$('.addition').append(addition);

$(document).ready(function(){
	$('#c1').click(function(){
		addition = addition + c1;
		logic();
	})
	$('#c2').click(function(){
		addition = addition + c2;
		logic();
	})
	$('#c3').click(function(){
		addition = addition + c3;
		logic();
	})
	$('#c4').click(function(){
		addition = addition + c4;
		logic();
	})
});