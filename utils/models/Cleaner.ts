import {Employee} from './Employee'

export class Cleaner extends Employee{
  constructor(wage:number, dni:string){super(wage, dni)}
  private _extraHours:number = 0
  private _perctgForH = this._baseWage/200
  showWage=()=>this._baseWage +(this._perctgForH * this._extraHours)

  addHours=(hours=1)=>{this._extraHours += hours; return true}
  monthStart=()=> {this._extraHours= 0; return true}
}