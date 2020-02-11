$(function(){
  //button要素がクリックされたときに、処理を実行してください
  $('button').on('click',function(){
  //.children( )は、HTML要素直下のすべての子要素
  //children =「ul要素の子要素」→ li要素が対象
  	$('ul').children().css('color','red')
  });
});