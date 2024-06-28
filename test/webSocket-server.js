var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({ port: 8181 })
// 创建 一个 websocket
wss.on('connection', function (ws, req) {
  console.log('onconnection')
  // console.log(req)
  ws.on('message', function (message) {
    console.log('onmessage:', message)
    ws.send(message)
    // setTimeout(function() {
    //   wss.close(function() {
    //     console.log('close')
    //   })
    // }, 5000)
  })
  ws.on('close', function (code, reason) {
    console.log('onclose:', code, reason)
  })
  ws.on('error', function (error) {
    console.error('onerror:', error)
  })
})

// 创建 另一个 websocket
var wss1 = new WebSocketServer({ port: 8182 })
wss1.on('connection', function (ws, req) {
  console.log('onconnection')
  // console.log(req)
  ws.on('message', function (message) {
    console.log('onmessage:', message)
    ws.send(message)
    // setTimeout(function() {
    //   wss.close(function() {
    //     console.log('close')
    //   })
    // }, 5000)
  })
  ws.on('close', function (code, reason) {
    console.log('onclose:', code, reason)
  })
  ws.on('error', function (error) {
    console.error('onerror:', error)
  })
})
console.log('ws://localhost:8181')
console.log('ws://localhost:8182')
