import {Employee} from './Employee'

export class Administrative extends Employee{
  constructor(wage:number, dni:string){super(wage, dni)}

  showWage=()=>this._baseWage
  monthStart=()=> true
}