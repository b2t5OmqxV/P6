//$()関数では、特定の属性を持つ要素や属性値を絞り込むことができる。
//属性値が特定の値に等しい要素だけを取得したいときは、$('要素[属性 = "値"]')
//属性値が特定の値に等しくない要素だけを取得したいときは,$('要素[属性 != "値"]')
//.hide();は、特定のHTML要素を非表示にするメソッド
$('#tab-contents .tab[id != "tab1"]').hide();

//「id="tab-menu"の<a>タグがクリックされたときに、処理を実行してください」
$('#tab-menu a').on('click',function(){
  //id="tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内の全コンテンツをいったん非表示
  $("#tab-contents .tab").hide();
  //.removeClass()は、クラス属性が設定されているHTML要素から、クラスを削除するメソッド
  //タブ切替の際、CSS設定もいったん削除しなければならないため、.removeClass()にactiveクラスを指定
  $("#tab-menu .active").removeClass("active");
  //.addClass()は、任意のHTML要素にクラス属性を追加できるメソッド
  //activeクラスが追加される=$(this)のとき、つまり、タブがクリックされたとき
  $(this).addClass("active");
  //.attr()は、HTML要素の属性を取得したり設定できるメソッド
  //.show()は要素を表示するメソッドなので、取得したhref属性の中身を表示する
  //どのときに表示されるか=$(this)のとき、つまり、タブがクリックされたとき
  $($(this).attr("href")).show();
  return false;
});