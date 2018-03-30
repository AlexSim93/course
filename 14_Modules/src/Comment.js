"use strict";
exports.__esModule = true;
var Comment = /** @class */ (function () {
    function Comment(id, author, text) {
        this.id = id;
        this.author = author;
        this.text = text;
    }
    Comment.prototype.quote = function (userName) {
        return userName + ": \"" + this.author + " \u043D\u0430\u043F\u0438\u0441\u0430\u043B: " + this.text + "\"";
    };
    Comment.prototype.render = function () {
        return this.author + " \u043D\u0430\u043F\u0438\u0441\u0430\u043B: " + this.text;
    };
    return Comment;
}());
exports.Comment = Comment;
