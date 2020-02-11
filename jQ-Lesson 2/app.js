$(function(){
   // jQueryプログラムの内容
   // $( セレクタ ).メソッド ( パラメータ );
   $('.box1').mouseover(function(){
   	  $('.box1').css({'background-color':'#0000FF'});
   });

   $('.box1').mouseout(function(){
   	  $('.box1').css({'background-color':'#FF0000'});
   });
 });

