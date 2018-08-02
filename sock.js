window.onload = function(){

  // Get references to elements on the page.
  var form = document.getElementById('message-form');
  var messageField = document.getElementById('message');
  var messagesList = document.getElementById('messages');
  var socketStatus = document.getElementById('status');
  var closeBtn = document.getElementById('close');


var socket = io();

socket.on('message', function () { });
  socket.on('disconnect', function () { });
});


// Send a message when the form is submitted.
form.onsubmit = function(e) {
  e.preventDefault();

  // Retrieve the message from the textarea.
  var message = {
    direction: messageField.value,
  };

  // Send the message through the WebSocket.
  socket.emit('direction change', JSON.stringify(message));

  // Add the message to the messages list.
  messagesList.innerHTML += '<li class="sent"><span>Sent:</span>' + message.direction +
                            '</li>';
  // Clear out the message field.
  messageField.value = '';

  return false;
};

}
