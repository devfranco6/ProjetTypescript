"use strict";
exports.__esModule = true;
var Projet_1 = require("./Projet");
var Date_1 = require("./Date");
var Task_1 = require("./Task");
// instanciation de la classe date
var date1 = new Date_1["default"](2018, 12, 5);
//utilisation des methodes de la classe date
date1.create(2016, 5, 9);
date1.toString();
date1.setDate(2017, 6, 6);
date1.addDay(7);
date1.tomorrow();
//instanciation de la classe task
var task1 = new Task_1["default"](1, "Huguette", date1, 0, false);
//utilisation de quelques methodes de la classe task
task1.add("Huguette", date1, 0, false);
task1.update("Huguette", date1, 2, true);
task1.close();
task1.toString();
// creation d'un objet de classe projet
var tasktab;
tasktab[0] = new Task_1["default"](1, "Huguette", date1, 0, false);
tasktab[1] = new Task_1["default"](2, "Typescript", date1, 1, true);
var projet0 = new Projet_1["default"](tasktab);
// Methode de la classe projet
projet0.addTask(tasktab, task1);
projet0.getTask(tasktab, 2);
projet0.complete(tasktab);
projet0.uncomplete(tasktab);
projet0.all(tasktab);
