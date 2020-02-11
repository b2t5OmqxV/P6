$(function(){

  $('.menu-trigger').on('click',function(){
    $(this).toggleClass('active');
    // .toggleClass( )は、指定されているclass（ここではactive）をトグル処理するメソッド。
    //トグル処理は、該当のclass属性がある場合にはclassが削除され、ない場合にはclassが追加。

　　//<a>タグのclassにはmenu-triggerが指定され、activeは指定いない。
    //.toggleClass( )を設定すると、アイコンがクリックされたときにactiveクラスが追加され、
    //もう一度クリックすると削除。
    //.toggleClass( )によって、class属性の追加と削除が交互に行われます
    $('#sp-menu').fadeToggle();
    //.fadeToggle( )は、要素のフェードイン・フェードアウトを切り替えるメソッド
    return false;
  });
});