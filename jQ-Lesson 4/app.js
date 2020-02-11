$(function(){
  $('.box1').on('click',function(){
    $(this).slideUp();
  });

//box1クラスの正方形がクリックされたとき、this（クリックされた要素）のみslideUpさせる
//下の記述と同じ動作をする
	// $('.bg1').on('click',function(){
	// 	$('.bg1').slideUp();
	// });

	// $('.bg2').on('click',function(){
	// 	$('.bg2').slideUp();
	// });

	// $('.bg3').on('click',function(){
	// 	$('.bg3').slideUp();
	// });

	// $('.bg4').on('click',function(){
	// 	$('.bg4').slideUp();
	// });
});