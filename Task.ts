import date from './Date';
import {Priority} from './Priority';
 export default class task {
    private _id : number;
    private _content : String;
    private _date : date;
    private _priority:Priority;
    private _checked:boolean;
    
    
    constructor (id : number,content:String,date:date,priority:Priority,checked:boolean=false){
        this._id=id;
        this._content=content;
        this._date=date;
        this._priority=priority;
        this._checked=checked;
        
    }
    get   id():number{
        return this._id;

    }
    get   Content():String{
        return this._content;

    }
    get   date():date{
        return this._date;

    }
    get   Priority():Priority{
        return this._priority;

    }
    
    get   checked():boolean{
        return this._checked;

    }
    set content (content : String){
        this._content=content;
    }
    set date (date :date ){
        this._date=date;
    } 
    set priority (priority: Priority){
        this._priority=priority;
    }
    set checked(checked:boolean){
        this._checked=this._checked;
    }


    public add(content:String,date:date,priority:Priority,checked:boolean){
        if(this._content==content && this._date==date && this._priority==priority && this._checked==checked)
         return this._id;

    }

    public update(content:String,date:date,priority:Priority,checked:boolean){
        this._content=content;
        this._date=date;
        this._priority=priority;
        this._checked=!this._checked;
    }
    
    public close(){
        this._checked=true;
    }
    public toString(){
        let etat : String;
        if (this._checked==false) 
        etat="Non Effectué"
        else 
         etat=" Effectué"
          return  ("CONTENU:"+ this._content + "\nDATE:"+ this._date +"\nPRIORITE:"+ this.priority +"\nETAT:"+ etat);
    }
    


}