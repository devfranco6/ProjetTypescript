"use strict";
exports.__esModule = true;
var task = /** @class */ (function () {
    function task(id, content, date, priority, checked) {
        if (checked === void 0) { checked = false; }
        this._id = id;
        this._content = content;
        this._date = date;
        this._priority = priority;
        this._checked = checked;
    }
    Object.defineProperty(task.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(task.prototype, "Content", {
        get: function () {
            return this._content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(task.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (date) {
            this._date = date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(task.prototype, "Priority", {
        get: function () {
            return this._priority;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(task.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function () {
            this._checked = !this._checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(task.prototype, "content", {
        set: function (content) {
            this._content = content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(task.prototype, "priority", {
        set: function (priority) {
            this._priority = priority;
        },
        enumerable: true,
        configurable: true
    });
    task.prototype.add = function (content, date, priority, checked) {
        if (this._content == content && this._date == date && this._priority == priority && this._checked == checked)
            return this._id;
    };
    task.prototype.update = function (content, date, priority, checked) {
        this._content = content;
        this._date = date;
        this._priority = priority;
        this._checked = !this._checked;
    };
    task.prototype.close = function () {
        this._checked = true;
    };
    task.prototype.toString = function () {
        var etat;
        if (this._checked == false)
            etat = "Non Effectué";
        else
            etat = " Effectué";
        return ("CONTENU:" + this._content + "\nDATE:" + this._date + "\nPRIORITE:" + this.priority + "\nETAT:" + etat);
    };
    return task;
}());
exports["default"] = task;
