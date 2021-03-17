//Кнопка в портфолио "Показать еще"
$('.examples__anims').click(function(){
	$('.examples__more').addClass('none');
	$('.examples__items-none').addClass('active');
});

//==========================================================================>
//window.onload = function(){
//	// public variables
//	var vLetter = document.getElementById('letter');
//	var iSpeedInk = 5;
//	// other variables
//	var sText = document.getElementById('letter_src').innerHTML;
//	var iCurChar = 0;
//	var sChars = '<span>';
//	var iCurInk = 0;
//	var sCurCaret = '';
//	var sCaret = "&nbsp;<img src='../images/preview/pen.gif' style='position:absolute' />";
//	var doStep = function () {
//		 // current char
//		 var sChar = sText.charAt(iCurChar);
//		 // default char delay
//		 var iDelay = 32;
//		 if (sChar == '') {
//			  sCurCaret = '';
//			} else if (sChar == '|') { // мы используем символ |  для эмуляции символа 'ошибки'
//			sChar = '';
//			sChars = sChars.substring(0, sChars.length-1);
//			iDelay = 64;
//	  } else if (sChar == '<') { // pass tags
//			var iPos = sText.indexOf('>', iCurChar);
//			sChar = sText.substring(iCurChar, iPos + 1);
//			iCurChar = iPos;
//	  } else if (sChar == '&') { // pass html entities
//			var iPos = sText.indexOf(';', iCurChar);
//			sChar = sText.substring(iCurChar, iPos + 1);
//			iCurChar = iPos;
//	  } else if (sChar == '.') { // custom delay in case of . symbol
//			iDelay = 300;
//	  } else if (sChar == ',') { // custom delay in case of , symbol
//			iDelay = 100;
//	  } else if (sChar == ' ') { // custom delay in case of space symbol
//			iDelay = 32;
//	  } else if (iCurChar > 5) {
//			sCurCaret = sCaret;
//	  }
//	  // expenditure of ink
//	  if (sChar == ' ') {
//		iCurInk += iSpeedInk;
//		sChar = '</span><span style="color:RGB(' + (iCurInk) + ',' + (iCurInk) + ',' + (iCurInk) + ')">' + sChar;
//  }
//  if (document.getElementById('inkwell2').style.visibility == 'visible') {
//		sCurCaret = sCaret;
//		document.getElementById('inkwell2').style.visibility = 'hidden';
//		sChar = '</span><span style="color:RGB(0,0,0)">' + sChar;
//  }
//  // refresh Ink
//  if (iCurInk > 160) {
//		iCurInk = 0;
//		document.getElementById('inkwell2').style.visibility = 'visible';
//		iDelay = 1000;
//		sCurCaret = '';
//  }
//  // add current char to chars
//  sChars += sChar;
//  // hide the caret at the end of the letter
//  if (iCurChar == sText.length - 1)
//		sCurCaret = '';
//  // update letter with new chars
//  vLetter.innerHTML = sChars + sCurCaret;
//  // goto next char
//  iCurChar++;
//  // next step
//  if (iCurChar < sText.length) {
//	setTimeout(doStep, 20 + iDelay);
//}
//};
//doStep();
//};



//=============================================================>
$('.examples__preview_LIFE-PLUS').click(function(){
	$('.popup__LIFE-PLUS').addClass('active');
});
$('.examples__preview_Catering').click(function(){
	$('.popup__Catering').addClass('active');
});
$('.examples__preview_Optimum').click(function(){
	$('.popup__Optimum').addClass('active');
});
$('.examples__preview_cake').click(function(){
	$('.popup__cake').addClass('active');
});
$('.examples__preview_bulat').click(function(){
	$('.popup__bulat').addClass('active');
});
$('.examples__preview_tetris').click(function(){
	$('.popup__tetris').addClass('active');
});
$('.examples__preview_kaplya').click(function(){
	$('.popup__kaplya').addClass('active');
});
$('.examples__preview_zsclinic').click(function(){
	$('.popup__zsclinic').addClass('active');
});
$('.examples__preview_pravo').click(function(){
	$('.popup__pravo').addClass('active');
});
$('.examples__preview_LuxTrader').click(function(){
	$('.popup__LuxTrader').addClass('active');
});


$('.popup').click(function(){
	$(this).removeClass('active');
});

