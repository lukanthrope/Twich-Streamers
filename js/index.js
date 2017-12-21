var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function callTwich() {
  streamers.forEach(function(streamer) {
    $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + streamer + "?callback=?", function(data) {
      var game, status;
      
      if (data.stream === null || data.stream === undefined) {
        status = "offline";
        game = "off-line";
      } else {
        status = "online";
        game = data.stream.game;
      }
      
      
      $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" + streamer + "?callback=?", function(data) {
        var logo = data.logo;
        var url = data.url;
        
        if(game == "off-line")
          $('.in').append('<div class="all offline"><p><img width="50" height="50" src="' + logo + '"> ' + '<a target="_blank" href="' + url + '">' + streamer + '</a>' + '<span style="color: red">' + game + '</span></p><hr></div>');
        else
          $('.in').append('<div class="all online"><p><img width="50" height="50" src="' + logo + '"> ' + '<a target="_blank" href="' + url + '">' + streamer + '</a>' + '<span style="color: green">' + game + '</span></p><hr></div>');
      });
      
    });   
}
)};

$(document).ready(function() {
  callTwich();
  $('.a').addClass('active');
  
  $('.a').on('click', function() {
    $('.b').removeClass('active');
    $('.c').removeClass('active');
    $('.a').addClass('active');
    
    $('.online').show();
    $('.offline').show();
  });
  
  $('.b').on('click', function() {
    $('.a').removeClass('active');
    $('.c').removeClass('active');
    $('.b').addClass('active');
    
    $('.offline').hide(); 
    $('.online').show();
  });
  
  $('.c').on('click', function() {
    $('.b').removeClass('active');
    $('.a').removeClass('active');
    $('.c').addClass('active');
    
    $('.online').hide();
    $('.offline').show();
  });
});