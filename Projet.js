"use strict";
exports.__esModule = true;
var Task_1 = require("./Task");
var Projet = /** @class */ (function () {
    function Projet(tasks) {
        this._tasks = tasks;
    }
    Object.defineProperty(Projet.prototype, "tasks", {
        get: function () {
            return this._tasks;
        },
        set: function (tasks) {
            this._tasks = tasks;
        },
        enumerable: true,
        configurable: true
    });
    Projet.prototype.addTask = function (tasks, newtache) {
        var taille = tasks.length;
        tasks[taille] = newtache;
    };
    Projet.prototype.getTask = function (tasks, position) {
        var positionRecherche = tasks[position];
        return positionRecherche;
    };
    Projet.prototype.deleteTask = function (tasks, position) {
        Task_1["default"][position] = null;
        var invert;
        for (var i = position; i < tasks.length; i++) {
            invert = tasks[i];
            tasks[i] = tasks[i + 1];
            tasks[i + 1] = invert;
        }
    };
    Projet.prototype.all = function (tasks) {
        for (var i = 0; i < tasks.length; i++) {
            console.log(Task_1["default"][i]);
        }
    };
    Projet.prototype.complete = function (tasks) {
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].checked == true) {
                console.log(tasks[i]);
            }
        }
    };
    Projet.prototype.uncomplete = function (tasks) {
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].checked == false) {
                console.log(tasks[i]);
            }
        }
    };
    return Projet;
}());
exports["default"] = Projet;
