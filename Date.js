"use strict";
exports.__esModule = true;
var date = /** @class */ (function () {
    function date(year, month, day) {
        this._year = year;
        this._month = month;
        this._day = day;
    }
    Object.defineProperty(date.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (year) {
            if (year > 0)
                this._year = year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(date.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (month) {
            if (month > 0)
                this._month = month;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(date.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (day) {
            if (day > 0)
                this._day = day;
        },
        enumerable: true,
        configurable: true
    });
    date.prototype.toString = function () {
        return this._year + "-" + this._month + "-" + this._day;
    };
    date.prototype.create = function (year, month, day) {
        this.constructor(year, month, day);
        return this.toString();
    };
    date.prototype.setDate = function (year, month, day) {
        this._year = year;
        this._month = month;
        this._day = day;
        return this.toString();
    };
    date.prototype.yesterday = function () {
        this._day -= 1;
        return this.toString();
    };
    date.prototype.tomorrow = function () {
        this._day += 1;
        return this.toString();
    };
    date.prototype.addDay = function (nbrDeJour) {
        if (nbrDeJour === void 0) { nbrDeJour = 1; }
        this._day += nbrDeJour;
        return this.toString();
    };
    date.prototype.addMonth = function (nbrDeMois) {
        if (nbrDeMois === void 0) { nbrDeMois = 1; }
        this._month += nbrDeMois;
        return this.toString();
    };
    date.prototype.addYear = function (nbrDeYear) {
        if (nbrDeYear === void 0) { nbrDeYear = 1; }
        this._year += nbrDeYear;
        return this.toString();
    };
    date.prototype.subDay = function (nbrDeJour) {
        if (nbrDeJour === void 0) { nbrDeJour = 1; }
        this._day -= nbrDeJour;
        return this.toString();
    };
    date.prototype.subMonth = function (nbrDeMois) {
        if (nbrDeMois === void 0) { nbrDeMois = 1; }
        this._month -= nbrDeMois;
        return this.toString();
    };
    date.prototype.subYear = function (nbrDeYear) {
        if (nbrDeYear === void 0) { nbrDeYear = 1; }
        this._year -= nbrDeYear;
        return this.toString();
    };
    return date;
}());
exports["default"] = date;
