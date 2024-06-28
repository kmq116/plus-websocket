(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define("socket", [], factory);
    else if(typeof exports === 'object')
        exports["socket"] = factory();
    else
        root["socket"] = factory();
})(this, function() {
    return /******/ (function(modules) { // webpackBootstrap
        /******/ 	// The module cache
        /******/ 	var installedModules = {};
        /******/
        /******/ 	// The require function
        /******/ 	function __webpack_require__(moduleId) {
            /******/
            /******/ 		// Check if module is in cache
            /******/ 		if(installedModules[moduleId]) {
                /******/ 			return installedModules[moduleId].exports;
                /******/ 		}
            /******/ 		// Create a new module (and put it into the cache)
            /******/ 		var module = installedModules[moduleId] = {
                /******/ 			i: moduleId,
                /******/ 			l: false,
                /******/ 			exports: {}
                /******/ 		};
            /******/
            /******/ 		// Execute the module function
            /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ 		// Flag the module as loaded
            /******/ 		module.l = true;
            /******/
            /******/ 		// Return the exports of the module
            /******/ 		return module.exports;
            /******/ 	}
        /******/
        /******/
        /******/ 	// expose the modules object (__webpack_modules__)
        /******/ 	__webpack_require__.m = modules;
        /******/
        /******/ 	// expose the module cache
        /******/ 	__webpack_require__.c = installedModules;
        /******/
        /******/ 	// define getter function for harmony exports
        /******/ 	__webpack_require__.d = function(exports, name, getter) {
            /******/ 		if(!__webpack_require__.o(exports, name)) {
                /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
                /******/ 		}
            /******/ 	};
        /******/
        /******/ 	// define __esModule on exports
        /******/ 	__webpack_require__.r = function(exports) {
            /******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/ 		}
            /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
            /******/ 	};
        /******/
        /******/ 	// create a fake namespace object
        /******/ 	// mode & 1: value is a module id, require it
        /******/ 	// mode & 2: merge all properties of value into the ns
        /******/ 	// mode & 4: return value when already ns object
        /******/ 	// mode & 8|1: behave like require
        /******/ 	__webpack_require__.t = function(value, mode) {
            /******/ 		if(mode & 1) value = __webpack_require__(value);
            /******/ 		if(mode & 8) return value;
            /******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
            /******/ 		var ns = Object.create(null);
            /******/ 		__webpack_require__.r(ns);
            /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
            /******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
            /******/ 		return ns;
            /******/ 	};
        /******/
        /******/ 	// getDefaultExport function for compatibility with non-harmony modules
        /******/ 	__webpack_require__.n = function(module) {
            /******/ 		var getter = module && module.__esModule ?
                /******/ 			function getDefault() { return module['default']; } :
                /******/ 			function getModuleExports() { return module; };
            /******/ 		__webpack_require__.d(getter, 'a', getter);
            /******/ 		return getter;
            /******/ 	};
        /******/
        /******/ 	// Object.prototype.hasOwnProperty.call
        /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
        /******/
        /******/ 	// __webpack_public_path__
        /******/ 	__webpack_require__.p = "";
        /******/
        /******/
        /******/ 	// Load entry module and return exports
        /******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
        /******/ })
        /************************************************************************/
        /******/ ({

            /***/ "./src/SocketTask.ts":
            /*!***************************!*\
              !*** ./src/SocketTask.ts ***!
              \***************************/
            /*! no static exports found */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";
                eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function get() {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\nvar __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {\n  Object.defineProperty(o, \"default\", {\n    enumerable: true,\n    value: v\n  });\n} : function (o, v) {\n  o[\"default\"] = v;\n});\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n  __setModuleDefault(result, mod);\n  return result;\n};\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SocketTask = void 0;\nvar $event = __importStar(__webpack_require__(/*! ./event */ \"./src/event.ts\"));\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nvar base64_arraybuffer_1 = __importDefault(__webpack_require__(/*! ./lib/base64-arraybuffer */ \"./src/lib/base64-arraybuffer.ts\"));\nvar WEBVIEW_ID = '__websocket__';\nvar webSocketInjected;\nvar callbacks = {};\nvar webSocket = __webpack_require__(/*! ./inject/webSocket.str.js */ \"./src/inject/webSocket.str.js\");\nvar _webviewReady = false;\nvar _webviewReadyCallbacks = [];\nvar timer;\nfunction webviewReady(callback) {\n  var webview = plus.webview.getWebviewById(WEBVIEW_ID);\n  if (!webview) {\n    var html = __webpack_require__(/*! ./html/index.html */ \"./src/html/index.html\");\n    webview = plus.webview.create('http://www.dcloud.io', WEBVIEW_ID, {\n      kernel: 'WKWebview',\n      render: 'always',\n      plusrequire: 'none'\n    });\n    webview.overrideUrlLoading({\n      match: '.*data.*'\n    }, function (event) {\n      var url = event.url;\n      var data = url.match(/\\?(\\S+)=(\\S+)/);\n      if (data) {\n        var action = data[1];\n        var detail = JSON.parse(decodeURIComponent(data[2]));\n        if (action === 'event') {\n          $event.emit(detail.type, detail.data);\n        } else if (action === 'callback') {\n          callbacks[detail.callbackName](detail.error);\n        }\n      } else if (!_webviewReady && typeof timer !== 'number' && url.indexOf('load') >= 0) {\n        timer = setInterval(function () {\n          webview.evalJS(webSocket);\n        }, 16);\n      } else if (!_webviewReady && url.indexOf('ready') >= 0) {\n        clearInterval(timer);\n        _webviewReady = true;\n        _webviewReadyCallbacks.forEach(function (callback) {\n          callback(webview);\n        });\n        _webviewReadyCallbacks = [];\n      }\n    });\n    webview.loadData(html, {\n      baseURL: 'http://websocket.websocket'\n    });\n  }\n  if (_webviewReady) {\n    callback(webview);\n  } else {\n    _webviewReadyCallbacks.push(callback);\n  }\n}\nvar SocketTask = /*#__PURE__*/function () {\n  function SocketTask(data) {\n    _classCallCheck(this, SocketTask);\n    this.id = Date.now().toString();\n    this.eval('connect', data);\n  }\n  _createClass(SocketTask, [{\n    key: \"send\",\n    value: function send(data) {\n      if (data.data && typeof data.data !== 'string') {\n        data.data = [base64_arraybuffer_1[\"default\"].encode(data.data)];\n      }\n      this.eval('send', data);\n    }\n  }, {\n    key: \"close\",\n    value: function close(data) {\n      this.eval('close', data);\n    }\n  }, {\n    key: \"onOpen\",\n    value: function onOpen(callback) {\n      this.on('open', callback);\n    }\n  }, {\n    key: \"onClose\",\n    value: function onClose(callback) {\n      this.on('close', callback);\n    }\n  }, {\n    key: \"onError\",\n    value: function onError(callback) {\n      this.on('error', callback);\n    }\n  }, {\n    key: \"onMessage\",\n    value: function onMessage(callback) {\n      this.on('message', function (data) {\n        data = data.data;\n        data = data && typeof data !== 'string' ? base64_arraybuffer_1[\"default\"].decode(data[0]) : data;\n        callback({\n          data: data\n        });\n      });\n    }\n  }, {\n    key: \"eval\",\n    value: function _eval(method, data) {\n      var callbackName = \"callback\".concat(Date.now());\n      var cbs = utils_1.isWeb ? window : callbacks;\n      cbs[callbackName] = function (error) {\n        delete cbs[callbackName];\n        if (error) {\n          utils_1.callback(data, {}, error);\n        } else {\n          utils_1.callback(data, {});\n        }\n      };\n      var js = \"window.__webSocket&&__webSocket.\".concat(method, \"(\").concat(this.id, \",\").concat(JSON.stringify(data), \",'\").concat(callbackName, \"')\");\n      if (utils_1.isWeb) {\n        if (!webSocketInjected) {\n          window.eval(webSocket);\n          webSocketInjected = true;\n        }\n        window.eval(js);\n      } else {\n        utils_1.plusReady(function () {\n          webviewReady(function (webview) {\n            webview.evalJS(js);\n          });\n        });\n      }\n    }\n  }, {\n    key: \"on\",\n    value: function on(eventName, callback) {\n      $event.on(\"websocket\".concat(eventName).concat(this.id), function (event) {\n        callback(event.detail);\n      });\n    }\n  }]);\n  return SocketTask;\n}();\nexports.SocketTask = SocketTask;\n\n//# sourceURL=webpack://socket/./src/SocketTask.ts?");

                /***/ }),

            /***/ "./src/event.ts":
            /*!**********************!*\
              !*** ./src/event.ts ***!
              \**********************/
            /*! no static exports found */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";
                eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.emit = exports.off = exports.on = void 0;\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nvar callbacks = {};\nfunction on(type, callback) {\n  if (utils_1.isWeb) {\n    window.addEventListener(type, callback, false);\n  } else {\n    callbacks[type] = callbacks[type] || [];\n    callbacks[type].push(callback);\n  }\n}\nexports.on = on;\nfunction off(type, callback) {\n  if (utils_1.isWeb) {\n    window.removeEventListener(type, callback, false);\n  } else {\n    var cbs = callbacks[type];\n    if (cbs) {\n      cbs.splice(cbs.indexOf(callback), 1);\n    }\n  }\n}\nexports.off = off;\nfunction emit(type, data) {\n  if (utils_1.isWeb) {\n    document.dispatchEvent(new CustomEvent(type, {\n      detail: data,\n      bubbles: true\n    }));\n  } else {\n    var cbs = callbacks[type];\n    cbs && cbs.forEach(function (cb) {\n      cb({\n        detail: data\n      });\n    });\n  }\n}\nexports.emit = emit;\n\n//# sourceURL=webpack://socket/./src/event.ts?");

                /***/ }),

            /***/ "./src/html/index.html":
            /*!*****************************!*\
              !*** ./src/html/index.html ***!
              \*****************************/
            /*! no static exports found */
            /***/ (function(module, exports) {

                eval("module.exports = \"<!doctype html> <html lang=en> <head> <meta charset=UTF-8> <title>WebSocket</title> </head> <body> <script>location.href=\\\"http://data/load\\\"</script> </body> </html>\";\n\n//# sourceURL=webpack://socket/./src/html/index.html?");

                /***/ }),

            /***/ "./src/index.ts":
            /*!**********************!*\
              !*** ./src/index.ts ***!
              \**********************/
            /*! no static exports found */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";
                eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar webSocket_1 = __webpack_require__(/*! ./webSocket */ \"./src/webSocket.ts\");\nObject.defineProperty(exports, \"connectSocket\", {\n  enumerable: true,\n  get: function get() {\n    return webSocket_1.connectSocket;\n  }\n});\nObject.defineProperty(exports, \"onSocketOpen\", {\n  enumerable: true,\n  get: function get() {\n    return webSocket_1.onSocketOpen;\n  }\n});\nObject.defineProperty(exports, \"onSocketError\", {\n  enumerable: true,\n  get: function get() {\n    return webSocket_1.onSocketError;\n  }\n});\nObject.defineProperty(exports, \"sendSocketMessage\", {\n  enumerable: true,\n  get: function get() {\n    return webSocket_1.sendSocketMessage;\n  }\n});\nObject.defineProperty(exports, \"onSocketMessage\", {\n  enumerable: true,\n  get: function get() {\n    return webSocket_1.onSocketMessage;\n  }\n});\nObject.defineProperty(exports, \"closeSocket\", {\n  enumerable: true,\n  get: function get() {\n    return webSocket_1.closeSocket;\n  }\n});\nObject.defineProperty(exports, \"onSocketClose\", {\n  enumerable: true,\n  get: function get() {\n    return webSocket_1.onSocketClose;\n  }\n});\n\n//# sourceURL=webpack://socket/./src/index.ts?");

                /***/ }),

            /***/ "./src/inject/webSocket.str.js":
            /*!*************************************!*\
              !*** ./src/inject/webSocket.str.js ***!
              \*************************************/
            /*! no static exports found */
            /***/ (function(module, exports) {

                eval("module.exports = \"(function () {\\r\\n    if (window.__webSocket) {\\r\\n        return\\r\\n    }\\r\\n    var isPlus = typeof navigator === 'object' && !!navigator.userAgent.match(/Html5Plus/i)\\r\\n    if (isPlus) {\\r\\n        location.href = 'http://data?ready'\\r\\n    }\\r\\n    // 自定义事件\\r\\n    var $event = {\\r\\n        emit (type, data) {\\r\\n            if (!isPlus) {\\r\\n                document.dispatchEvent(new CustomEvent(type, {\\r\\n                    detail: data,\\r\\n                    bubbles: true\\r\\n                }))\\r\\n                return\\r\\n            }\\r\\n            location.href = 'http://data?event=' + encodeURIComponent(JSON.stringify({\\r\\n                type,\\r\\n                data\\r\\n            }))\\r\\n        }\\r\\n    }\\r\\n    var Base64 = {\\r\\n        chars: \\\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\\\",\\r\\n        lookup: null,\\r\\n        encode: function (arraybuffer) {\\r\\n            var chars = this.chars;\\r\\n            var bytes = new Uint8Array(arraybuffer),\\r\\n                i, len = bytes.length, base64 = \\\"\\\";\\r\\n\\r\\n            for (i = 0; i < len; i += 3) {\\r\\n                base64 += chars[bytes[i] >> 2];\\r\\n                base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];\\r\\n                base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];\\r\\n                base64 += chars[bytes[i + 2] & 63];\\r\\n            }\\r\\n\\r\\n            if ((len % 3) === 2) {\\r\\n                base64 = base64.substring(0, base64.length - 1) + \\\"=\\\";\\r\\n            } else if (len % 3 === 1) {\\r\\n                base64 = base64.substring(0, base64.length - 2) + \\\"==\\\";\\r\\n            }\\r\\n\\r\\n            return base64;\\r\\n        },\\r\\n        decode: function (base64) {\\r\\n            var chars = this.chars;\\r\\n            var lookup = this.lookup\\r\\n            if (!lookup) {\\r\\n                lookup = this.lookup = new Uint8Array(256);\\r\\n                for (var i = 0; i < chars.length; i++) {\\r\\n                    lookup[chars.charCodeAt(i)] = i;\\r\\n                }\\r\\n            }\\r\\n            var bufferLength = base64.length * 0.75,\\r\\n                len = base64.length, p = 0,\\r\\n                encoded1, encoded2, encoded3, encoded4;\\r\\n\\r\\n            if (base64[base64.length - 1] === \\\"=\\\") {\\r\\n                bufferLength--;\\r\\n                if (base64[base64.length - 2] === \\\"=\\\") {\\r\\n                    bufferLength--;\\r\\n                }\\r\\n            }\\r\\n\\r\\n            var arraybuffer = new ArrayBuffer(bufferLength),\\r\\n                bytes = new Uint8Array(arraybuffer);\\r\\n\\r\\n            for (i = 0; i < len; i += 4) {\\r\\n                encoded1 = lookup[base64.charCodeAt(i)];\\r\\n                encoded2 = lookup[base64.charCodeAt(i + 1)];\\r\\n                encoded3 = lookup[base64.charCodeAt(i + 2)];\\r\\n                encoded4 = lookup[base64.charCodeAt(i + 3)];\\r\\n\\r\\n                bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);\\r\\n                bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);\\r\\n                bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);\\r\\n            }\\r\\n\\r\\n            return arraybuffer;\\r\\n        }\\r\\n    }\\r\\n\\r\\n    window.__webSocket = {\\r\\n        webSockets: {},\\r\\n        connect (id, data, callbackName) {\\r\\n            var url = data.url\\r\\n            var header = data.header// 未支持\\r\\n            var method = data.method// 未支持\\r\\n            var protocols = data.protocols || []\\r\\n            var webSocket\\r\\n            try {\\r\\n                webSocket = this.webSockets[id] = new WebSocket(url, protocols)\\r\\n                webSocket.binaryType = 'arraybuffer'\\r\\n            } catch (error) {\\r\\n                this.callback(callbackName, error)\\r\\n                return\\r\\n            }\\r\\n            this.callback(callbackName)\\r\\n            if (webSocket) {\\r\\n                webSocket.addEventListener('open', () => {\\r\\n                    $event.emit(`websocketopen${id}`, {})\\r\\n                })\\r\\n                webSocket.addEventListener('message', ({ data }) => {\\r\\n                    $event.emit(`websocketmessage${id}`, {\\r\\n                        data: data && typeof data !== 'string' ? [Base64.encode(data)] : data\\r\\n                    })\\r\\n                })\\r\\n                webSocket.addEventListener('error', () => {\\r\\n                    $event.emit(`websocketerror${id}`, {})\\r\\n                })\\r\\n                webSocket.addEventListener('close', (event) => {\\r\\n                    $event.emit(`websocketclose${id}`, {\\r\\n                        code: event.code,\\r\\n                        reason: event.reason\\r\\n                    })\\r\\n                })\\r\\n            }\\r\\n        },\\r\\n        send (id, data = {}, callbackName) {\\r\\n            data = data.data\\r\\n            data = data && typeof data !== 'string' ? Base64.decode(data[0]) : data\\r\\n            try {\\r\\n                this.webSockets[id].send(data)\\r\\n            } catch (error) {\\r\\n                this.callback(callbackName, error)\\r\\n                return\\r\\n            }\\r\\n            this.callback(callbackName)\\r\\n        },\\r\\n        close (id, data = {}, callbackName) {\\r\\n            var options = []\\r\\n            options.push(data.code || 1000)\\r\\n            if (typeof data.reason === 'string') {\\r\\n                options.push(data.reason)\\r\\n            }\\r\\n            try {\\r\\n                this.webSockets[id].close(...options)\\r\\n            } catch (error) {\\r\\n                this.callback(callbackName, error)\\r\\n                return\\r\\n            }\\r\\n            this.callback(callbackName)\\r\\n        },\\r\\n        callback (callbackName, error) {\\r\\n            if (isPlus) {\\r\\n                location.href = 'http://data?callback=' + encodeURIComponent(JSON.stringify({\\r\\n                    callbackName,\\r\\n                    error\\r\\n                }))\\r\\n            } else {\\r\\n                var js = `window.${callbackName}&&window.${callbackName}('${error || ''}')`\\r\\n                window[callbackName] && window[callbackName](error | '')\\r\\n                window.eval(js)\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n})()\";\n\n//# sourceURL=webpack://socket/./src/inject/webSocket.str.js?");

                /***/ }),

            /***/ "./src/lib/base64-arraybuffer.ts":
            /*!***************************************!*\
              !*** ./src/lib/base64-arraybuffer.ts ***!
              \***************************************/
            /*! no static exports found */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";
                eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Base64 = {\n  chars: \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\",\n  lookup: null,\n  encode: function encode(arraybuffer) {\n    var chars = this.chars;\n    var bytes = new Uint8Array(arraybuffer),\n      i,\n      len = bytes.length,\n      base64 = \"\";\n    for (i = 0; i < len; i += 3) {\n      base64 += chars[bytes[i] >> 2];\n      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];\n      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];\n      base64 += chars[bytes[i + 2] & 63];\n    }\n    if (len % 3 === 2) {\n      base64 = base64.substring(0, base64.length - 1) + \"=\";\n    } else if (len % 3 === 1) {\n      base64 = base64.substring(0, base64.length - 2) + \"==\";\n    }\n    return base64;\n  },\n  decode: function decode(base64) {\n    var chars = this.chars;\n    var lookup = this.lookup;\n    if (!lookup) {\n      lookup = this.lookup = new Uint8Array(256);\n      for (var i = 0; i < chars.length; i++) {\n        lookup[chars.charCodeAt(i)] = i;\n      }\n    }\n    var bufferLength = base64.length * 0.75,\n      len = base64.length,\n      p = 0,\n      encoded1,\n      encoded2,\n      encoded3,\n      encoded4;\n    if (base64[base64.length - 1] === \"=\") {\n      bufferLength--;\n      if (base64[base64.length - 2] === \"=\") {\n        bufferLength--;\n      }\n    }\n    var arraybuffer = new ArrayBuffer(bufferLength),\n      bytes = new Uint8Array(arraybuffer);\n    for (i = 0; i < len; i += 4) {\n      encoded1 = lookup[base64.charCodeAt(i)];\n      encoded2 = lookup[base64.charCodeAt(i + 1)];\n      encoded3 = lookup[base64.charCodeAt(i + 2)];\n      encoded4 = lookup[base64.charCodeAt(i + 3)];\n      bytes[p++] = encoded1 << 2 | encoded2 >> 4;\n      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;\n      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;\n    }\n    return arraybuffer;\n  }\n};\nexports[\"default\"] = Base64;\n\n//# sourceURL=webpack://socket/./src/lib/base64-arraybuffer.ts?");

                /***/ }),

            /***/ "./src/utils.ts":
            /*!**********************!*\
              !*** ./src/utils.ts ***!
              \**********************/
            /*! no static exports found */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";
                eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getCallback = exports.callback = exports.plusReady = exports.isApp = exports.isWeex = exports.isWeb = exports.isPlus = void 0;\nexports.isPlus = (typeof navigator === \"undefined\" ? \"undefined\" : _typeof(navigator)) === 'object' && !!navigator.userAgent.match(/Html5Plus/i);\nexports.isWeb = (typeof document === \"undefined\" ? \"undefined\" : _typeof(document)) === 'object' && !exports.isPlus;\nexports.isWeex = (typeof weex === \"undefined\" ? \"undefined\" : _typeof(weex)) === 'object';\nexports.isApp = exports.isPlus || exports.isWeex;\nfunction plusReady(cb) {\n  if ((typeof plus === \"undefined\" ? \"undefined\" : _typeof(plus)) === 'object') {\n    cb();\n  } else if (exports.isApp) {\n    window.addEventListener('plusready', cb, false);\n  }\n}\nexports.plusReady = plusReady;\nfunction callback(data, successData, failData) {\n  if (successData) {\n    if (!successData.errMsg) {\n      successData.errMsg = 'callback:ok';\n    }\n  } else {\n    if (_typeof(failData) === 'object') {\n      if (!failData) {\n        failData = {\n          errMsg: 'callback:fail'\n        };\n      }\n      if (!failData.errMsg) {\n        failData.errMsg = failData.message || 'callback:fail';\n      }\n    } else {\n      failData = {\n        errMsg: 'callback:fail ' + String(failData)\n      };\n    }\n  }\n  if (data && typeof data.success === 'function' && successData) {\n    data.success(successData);\n  }\n  if (failData) {\n    console.warn('Callback Fail:', failData);\n  }\n  if (data && typeof data.fail === 'function' && failData) {\n    data.fail(failData);\n  }\n  if (data && typeof data.complete === 'function') {\n    data.complete(successData || failData);\n  }\n}\nexports.callback = callback;\nfunction getCallback() {\n  return callback;\n}\nexports.getCallback = getCallback;\n\n//# sourceURL=webpack://socket/./src/utils.ts?");

                /***/ }),

            /***/ "./src/webSocket.ts":
            /*!**************************!*\
              !*** ./src/webSocket.ts ***!
              \**************************/
            /*! no static exports found */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";
                eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.onSocketClose = exports.closeSocket = exports.onSocketMessage = exports.sendSocketMessage = exports.onSocketError = exports.onSocketOpen = exports.connectSocket = void 0;\nvar SocketTask_1 = __webpack_require__(/*! ./SocketTask */ \"./src/SocketTask.ts\");\nvar globalSocketTask = null;\nvar globalEvents = {};\nfunction connectSocket(data) {\n  data = data || {};\n  var socketTask = new SocketTask_1.SocketTask(data);\n  function clear() {\n    globalSocketTask = null;\n  }\n  socketTask.onClose(clear);\n  socketTask.onError(clear);\n  if (!globalSocketTask) {\n    globalSocketTask = socketTask;\n    for (var event in globalEvents) {\n      if (globalEvents.hasOwnProperty(event)) {\n        socketTask[event](globalEvents[event]);\n      }\n    }\n  }\n  globalSocketTask = globalSocketTask || socketTask;\n  return socketTask;\n}\nexports.connectSocket = connectSocket;\nfunction on(event, cb) {\n  if (globalSocketTask) {\n    globalSocketTask[event](cb);\n  } else {\n    globalEvents[event] = cb;\n  }\n}\nfunction onSocketOpen(cb) {\n  on('onOpen', cb);\n}\nexports.onSocketOpen = onSocketOpen;\nfunction onSocketError(cb) {\n  on('onError', cb);\n}\nexports.onSocketError = onSocketError;\nfunction sendSocketMessage(data) {\n  if (globalSocketTask) {\n    globalSocketTask.send(data);\n  }\n}\nexports.sendSocketMessage = sendSocketMessage;\nfunction onSocketMessage(cb) {\n  on('onMessage', cb);\n}\nexports.onSocketMessage = onSocketMessage;\nfunction closeSocket(data) {\n  if (globalSocketTask) {\n    globalSocketTask.close(data);\n  }\n}\nexports.closeSocket = closeSocket;\nfunction onSocketClose(cb) {\n  on('onClose', cb);\n}\nexports.onSocketClose = onSocketClose;\n\n//# sourceURL=webpack://socket/./src/webSocket.ts?");

                /***/ })

            /******/ });
});
