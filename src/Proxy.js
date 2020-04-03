"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var EventProducer_1 = require("./EventProducer");
var Proxy = /** @class */ (function (_super) {
    __extends(Proxy, _super);
    function Proxy() {
        var _this = _super.call(this) || this;
        _this.inbox = null;
        _this.ws = new WebSocket("wss://raja.aut.bme.hu/chat/");
        _this.ws.addEventListener("open", function () {
            _this.ws.send("Hello");
        });
        _this.ws.addEventListener("message", function (e) {
            var _a;
            var p = JSON.parse(e.data);
            switch (p.type) {
                case "error":
                    alert(p.message);
                    break;
                case "login":
                    _this.inbox = p.inbox;
                    _this.dispatch("login");
                    break;
                case "message":
                    var cid_1 = p.channelId;
                    (_a = _this.inbox.conversations.find(function (x) { return x.channelId === cid_1; })) === null || _a === void 0 ? void 0 : _a.lastMessages.push(p.message);
                    _this.dispatch("message", cid_1, p.message);
                    break;
                case "conversationAdded":
                    _this.inbox.conversations.push(p.conversation);
                    _this.dispatch("conversation", p.conversation.channelId);
                    break;
            }
        });
        return _this;
    }
    Proxy.prototype.sendPacket = function (packet) {
        this.ws.send(JSON.stringify(packet));
    };
    return Proxy;
}(EventProducer_1.EventProducer));
exports.proxy = new Proxy();
