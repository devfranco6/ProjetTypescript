import Projet from './Projet';
import date from './Date';
import task from './Task';
import {Priority} from './Priority';
// instanciation de la classe date
let date1 = new date(2018,12,5);
//utilisation des methodes de la classe date
console.log(date1.create(2016,5,9));
console.log(date1.toString());
console.log(date1.setDate(2017,6,6));
console.log(date1.addDay(7));
console.log(date1.tomorrow());

//instanciation de la classe task
let task1 = new task(1,"Huguette",date1,0,false);


//utilisation de quelques methodes de la classe task
console.log(task1.add("Huguette",date1,0,false));
task1.update("Huguette",date1,2,true);
task1.close();
console.log(task1.toString());


// creation d'un objet de classe projet
let tasktab : task[];
 tasktab[0] =  new task(1,"Huguette",date1,0,false);
 tasktab[1] = new task(2,"Typescript",date1,1,true);
let projet0= new Projet(tasktab);
// Methode de la classe projet

projet0.addTask(tasktab,task1);
console.log(projet0.getTask(tasktab,2));
projet0.complete(tasktab);
projet0.uncomplete(tasktab);
projet0.all(tasktab);
















