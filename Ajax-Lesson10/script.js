// （API_KEY には、"取得したAPIキー" を記述）
API_KEY = "069b53c30dd0555f39eb07ed0b4a4517";

$(function(){
  $('#btn').on('click',function(){
  　// 入力された都市名でWebAPIに天気情報をリクエスト
    //url:では、APIにリクエストするURLを指定 = $('#cityname').val()で#citynameの値を受け取り、URLを結合
    //val()は、HTMLのvalue属性を取得するメソッド
    //dataTypeでは、レスポンスとして取得したいデータの型を指定
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    //.done()は通信に成功した場合、.fail()は失敗した場合に記述するメソッド
    //どちらのメソッドでも(data)を指定したが、その引数内に取得した結果が入ります。（dataは任意の変数名）
    }).done(function(data){

　　//$('#id名').text(JSONから欲しい値)の形で指定すると、指定したidのテキストを、JSONから受け取った値に変換する。
      $('#place').text(data.name);

      $('#temp_max').text(data.main.temp_max);

      $('#temp_min').text(data.main.temp_min);

      $('#humidity').text(data.main.humidity);

      $('#speed').text(data.wind.speed);

      $('#weather').text(data.weather[0].main);
      //$(要素名).attr(属性名,値);と指定すると、img要素にsrc属性とalt属性が追加 = 天気のアイコンを表示
      //アイコンを取得するURLは、http://openweathermap.org/img/w/"アイコン名".png
      $('img').attr("src","http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);

    }).fail(function(data){
      alert('通信に失敗しました。');
    });
  });
});