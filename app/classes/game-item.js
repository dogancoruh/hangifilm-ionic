"use strict";
var GameItem = (function () {
    function GameItem(id, language_tr, language_en, pictureUrl, description) {
        this.id = id;
        this.language_tr = language_tr;
        this.language_en = language_en;
        this.pictureUrl = pictureUrl;
        this.description = description;
    }
    return GameItem;
}());
exports.GameItem = GameItem;
