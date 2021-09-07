export abstract class Employee{

  constructor(protected _baseWage:number,protected _dni:string){}


  public abstract showWage():number

  public abstract monthStart():boolean

  public dni= ():string => this._dni
}