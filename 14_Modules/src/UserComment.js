"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Comment_1 = require("./Comment");
var UserComment = /** @class */ (function (_super) {
    __extends(UserComment, _super);
    function UserComment(id, name, text, date) {
        var _this = _super.call(this, id, name, text) || this;
        _this.date = date;
        _this.rate = 0;
        return _this;
    }
    UserComment.prototype.render = function () {
        return this.author + " \u043D\u0430\u043F\u0438\u0441\u0430\u043B " + this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ": " + this.text + "; \u0420\u0435\u0439\u0442\u0438\u043D\u0433: " + this.rate;
    };
    UserComment.prototype.like = function () {
        this.rate++;
    };
    UserComment.prototype.dislike = function () {
        this.rate--;
    };
    return UserComment;
}(Comment_1.Comment));
exports.UserComment = UserComment;
