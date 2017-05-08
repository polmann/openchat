$(function () {
  var user = prompt('username', 'username');
  var socket = io();
  var aUserIsTyping = 0;

  $('form').submit(function() {

    var message = $('#type-message').val();
    $('#messages').append($(
      '<div class="d-flex flex-row-reverse">' +
        '<div class="message mine">' +
          message +
        '</div>' +
      '</div>'));
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
    socket.emit('chat', message);

    $('#type-message').val('');
    return false;

  });

  socket.on('usersonline', function(users) {
    console.log('users: ', users);
    Object.keys(users).map(function(key, value) {
      var user = users[key];
      console.log(key + ': ', user);
      $('#onlineusers').append($(
        '<li id="'+user+'">' +
          '<a class="nav-link" href="#">' +
            '<img class="profile-picture" src="img/default-profile.png" />' +
            '<div class="user-info">' +
              '<div class="username">' + user + '</div>' +
              '<div class="last-message ellipsis">really long last message example</div>' +
            '</div>' +
          '</a>' +
        '</li>'));
    });
  });

  socket.on('userconnected', function(user) {
    console.log('userconnected', user);
    $('#onlineusers').append($(
      '<li id="'+user+'">' +
        '<a class="nav-link" href="#">' +
          '<img class="profile-picture" src="img/default-profile.png" />' +
          '<div class="user-info">' +
            '<div class="username">' + user + '</div>' +
            '<div class="last-message ellipsis">really long last message example</div>' +
          '</div>' +
        '</a>' +
      '</li>'));
  });

  socket.on('chat', function(message) {
    $('#messages').append($(
      '<div class="d-flex flex-row">' +
      '<div class="message">' +
      message +
      '</div>' +
      '</div>'));
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  });

  socket.on('typing', function(user) {
    $('#typing').html(user + ' is typing...');
    clearTimeout(aUserIsTyping);
    aUserIsTyping = setTimeout(function() { $('#typing').html(''); }, 400);
  });

  socket.on('userdisconnected', function(user) {
    console.log('userdisconnected', user);
    $('#'+user).remove();
  });

  socket.emit('hello', user);

  $('#m').keypress(function() {
    socket.emit('typing');
  });

});