import { Employee  } from "./Employee";

export class Merchant extends Employee{

  constructor(sueldo:number, dni:string){super(sueldo, dni)}
  private _contracts:number = 0
  private _perctgForCont = this._baseWage/100

  showWage=()=>this._baseWage + (this._contracts *this._perctgForCont )
  public contracts =()=> this._contracts
  monthStart=()=> {this._contracts = 0; return true}
}