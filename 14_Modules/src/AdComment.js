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
var AdComment = /** @class */ (function (_super) {
    __extends(AdComment, _super);
    function AdComment(id, name, text, link) {
        var _this = _super.call(this, id, name, text) || this;
        _this.link = link;
        _this.isHidden = false;
        return _this;
    }
    AdComment.prototype.render = function () {
        return !this.isHidden
            ? this.author + " \u043D\u0430\u043F\u0438\u0441\u0430\u043B: " + this.text + "; \u041F\u0435\u0440\u0435\u0439\u0442\u0438 >> " + this.link
            : "Реклама скрыта";
    };
    AdComment.prototype.hide = function () {
        this.isHidden = true;
    };
    return AdComment;
}(Comment_1.Comment));
exports.AdComment = AdComment;
