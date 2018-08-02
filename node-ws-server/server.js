const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws, req) {

  console.log(req.headers);

  const token = req.headers['sec-websocket-key'];
  console.log(token);

  // ws.isAlive = true;

  ws.on('message', function incoming(message) {
    const parsedMessage = JSON.parse(message);
    console.log(parsedMessage);
    const { direction } = parsedMessage;
    console.log('direction', direction);
    ws.send('moving '+direction);
  });

  ws.on('close', function close() {
    ws.isAlive = false;
    console.log('Client disconnected');
  });

});

// const interval = setInterval(function ping() {
//   wss.clients.forEach((ws) => {
//     if (ws.isAlive === false) return ws.terminate();
//   });
// }, 5000);
