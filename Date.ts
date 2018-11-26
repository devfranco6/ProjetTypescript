 export default class date{

private _year : number;
private _month : number;
private _day : number;

constructor (year:number,month:number,day:number){
    this._year=year;
    this._month=month;
    this._day=day;
}

get year():number{
    return this._year;
}

get month():number{
    return this._month;
}

get day():number{
    return this._day;
}


set year (year : number){
   if (year>0)
    this._year=year;
}

set month (month : number){
    if (month>0)
    this._month=month;
}

set day (day : number){
    if (day>0)
    this._day=day;
}

public  toString(): String{
return this._year+"-"+this._month+"-"+this._day;
}


public create (year:number,month:number,day:number): String{
 this.constructor(year,month,day);
 return this.toString();
}

public setDate(year:number,month:number,day:number): String{
    this._year=year;
    this._month=month;
    this._day=day;
    return this.toString();

}

public yesterday(): String{
    this._day-=1;
 return this.toString();
}


public tomorrow(){
    this._day+=1;
    return this.toString();
}

public addDay(nbrDeJour : number=1){
 this._day+=nbrDeJour;
 return this.toString();
}

public addMonth(nbrDeMois : number=1){
    this._month+=nbrDeMois;
    return this.toString();
   }

   public addYear(nbrDeYear : number=1){
    this._year+=nbrDeYear;
    return this.toString();
   }

   public subDay(nbrDeJour : number=1){
    this._day-=nbrDeJour;
    return this.toString();
   }

   public subMonth(nbrDeMois : number=1){
    this._month-=nbrDeMois;
    return this.toString();
   }

   public subYear(nbrDeYear : number=1){
    this._year-=nbrDeYear;
    return this.toString();
   }





}