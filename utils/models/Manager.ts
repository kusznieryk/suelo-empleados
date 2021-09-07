import {Employee} from './Employee'
import { Merchant } from './Merchant'

export class Manager extends Employee{

  private _merchants:Array<Merchant> =[]
  private _perctgForMercha = this._baseWage/100

  constructor(wage:number, dni:string){super(wage, dni)}

  showWage=()=>this._baseWage +(this._perctgForMercha * this._merchants
                      .map(e=>e.contracts())
                      .reduce((total, current)=> total+current))

  monthStart=()=> true
  addMerchant=(merchant)=>{this._merchants.push(merchant)}
}