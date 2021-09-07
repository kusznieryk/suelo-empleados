import {Employee} from './Employee'

export class Main{
  private _employees:Array<Employee> =[]


  public hireEmployee =(employee):boolean=>{
    this._employees.push(employee)

    return true
  }
  
  public fireEmployee =(dni):boolean=>{
    const toFire=this._employees.findIndex(e => e.dni() ==dni)
    if (toFire !== -1) {
      this._employees.splice(toFire,1)
      return true
    }
    return false
  }

  public startMonth =():boolean=>{
    this._employees.forEach(employee => {
      employee.monthStart()
    });
    return true
}

  public searchEmployee = (dni):Employee => this._employees.find(e => e.dni() == dni)

  public showWages =():boolean=>{
    console.log(this._employees
      .map( e => {
        return`The wage of ${e.dni()} is ${e.showWage()}`
      }).join(', '))
      return true
    }
}