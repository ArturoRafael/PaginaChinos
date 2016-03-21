//almacenar slider en una variable
var slider=$('#slider');
var slider2=$('#slider2');
//almacenar botones
var siguiente=$('#btn-next');
var anterior=$('#btn-prev');
var siguiente2=$('#btn-next2');
var anterior2=$('#btn-prev2');

//mover ultima imagen al primer lugar
$('#slider div:last').insertBefore('#slider div:first');
$('#slider2 div:last').insertBefore('#slider2 div:first');
//mostrar la primera imagen con margen de -100%
slider.css('margin-left', '-'+100+'%');

function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	},700, function() {
		$('#slider div:first').insertAfter('#slider div:last');
		slider.css('margin-left', '-'+100+'%');
	});
}
function mover2D(){
	slider2.animate({
		marginLeft:'-'+200+'%'
	},700, function() {
		$('#slider2 div:first').insertAfter('#slider2 div:last');
		slider2.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	}, 700, function() {
		$('#slider div:last').insertBefore('#slider div:first');
		slider.css('margin-left', '-'+100+'%');
	});
}
function mover2I(){
	slider2.animate({
		marginLeft:0
	}, 700, function() {
		$('#slider2 div:last').insertBefore('#slider2 div:first');
		slider2.css('margin-left', '-'+100+'%');
	});
}

siguiente.on('click',function() {
	moverD();
});

anterior.on('click',function() {
	moverI();
});

siguiente2.on('click',function() {
	mover2D();
});

anterior2.on('click',function() {
	mover2I();
});
