import task from './Task';
export default class Projet{
    private _tasks : task[];

    constructor (tasks :task[]){
        this._tasks=tasks;
        
    }
    get   tasks():task[]{
        return this._tasks;

    }
    set tasks (tasks :task[] ){
        this._tasks=tasks;
    }
    public addTask(tasks:task[],newtache:task){
        let taille: number=tasks.length;
        tasks[taille]=newtache;
    }
    public getTask(tasks:task[],position:number){
    let positionRecherche:task=tasks[position];  
        return positionRecherche;
    }
    public deleteTask(tasks:task[],position:number){
    task[position]=null;
    let invert:task;

    for(let i: number=position;i<tasks.length;i++){
        invert=tasks[i];
        tasks[i]=tasks[i+1];
        tasks[i+1]=invert;
    }    

    }
    public all(tasks:task[]){
        for(let i: number=0;i<tasks.length;i++){
            console.log(task[i]);
        }
    }
    public complete(tasks:task[]){

        
            for(let i: number=0;i<tasks.length;i++){
                if(tasks[i].checked==true){
                console.log(tasks[i]);
            }
        }
        

    }
    public uncomplete(tasks:task[]){
       
            for(let i: number=0;i<tasks.length;i++){
                if(tasks[i].checked==false){
            
                console.log(tasks[i]);
            }

        }
        

    }
}