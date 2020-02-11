$(function(){
   // jQueryプログラムの内容
   // $( セレクタ ).メソッド ( パラメータ );
   $('.box1').mouseover(function(){
   	  $('.box1').addClass('box1-ext');
   });

   $('.box1').mouseout(function(){
   	  $('.box1').removeClass('box1-ext');
   });
 });

