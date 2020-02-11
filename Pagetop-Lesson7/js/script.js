$(function(){

  // #back内の<a>タグがクリックされたときの処理
  //$('#id名 要素名')と指定すると、id内の子要素に対してのみ指定される。
  //id="back"内の<a>タグがクリックされたときに、処理が行われる。
  $('#back a').on('click',function(){
  //animate( ) は、アニメーション効果を設定するjQueryの関数
  //scrollTop は、スクロール位置を取得できるメソッド

  //セレクタには、$('body, html')が設定 =「body要素またはhtml要素」の意味
  //2つの要素を指定するのは、ユーザの利用環境によって指定対象の要素が変化するため.
    $('body,html').animate({
      scrollTop:0
    }, 800);
      return false;
    });

  });
