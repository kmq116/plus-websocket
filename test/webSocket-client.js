var buffer = new ArrayBuffer(1)
var dataView = new DataView(buffer)
dataView.setUint8(0, 1)
const socketTask1 = socket.connectSocket({
    url: 'ws://localhost:8181',
    success: function (e) {
        console.log(e)
        socket.onSocketOpen(function (res) {
            console.log('WebSocket连接已打开！')
            setTimeout(function () {
                socket.sendSocketMessage({
                    // data: 'test'
                    data: buffer
                })
            }, 2000)
        })
        socket.onSocketError(function (res) {
            console.log('WebSocket连接打开失败，请检查！')
        })
        socket.onSocketMessage(function (res) {
            console.log('收到服务器内容：', res.data)
        })
        socket.onSocketClose(function (res) {
            console.log('WebSocket 已关闭！')
        })
    },
    file: function (e) {
        console.error(e)
    }
})


const socketTask2 = socket.connectSocket({
    url: 'ws://localhost:8182',
    success: function (e) {
        console.log(e)
        socket.onSocketOpen(function (res) {
            console.log('WebSocket连接已打开！')
            setTimeout(function () {
                // socket.sendSocketMessage({
                //     // data: 'test'
                //     data: buffer
                // })
            }, 2000)
        })
        socket.onSocketError(function (res) {
            console.log('WebSocket连接打开失败，请检查！')
        })
        socket.onSocketMessage(function (res) {
            console.log('收到服务器内容：', res.data)
        })
        socket.onSocketClose(function (res) {
            console.log('WebSocket 已关闭！')
        })
    },
    file: function (e) {
        console.error(e)
    }
})
console.log(socketTask1)
console.log(socketTask2)

socketTask1.onOpen(()=>{
    console.log('已经连接上 websocket')
    socketTask1.send({
        data:'连接上 websocket1 之后发送的消息'
    })
})

socketTask2.onOpen(()=>{
    console.log('已经连接上 websocket')
    socketTask1.send({
        data:'连接上 websocket2 之后发送的消息'
    })
})
