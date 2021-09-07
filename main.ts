import * as rl from 'readline-sync'

import {Employee, Main, Administrative, Merchant, Manager, Cleaner} from './utils/models/index'

import { firstMenu, selectEmployee} from './utils/template-literals/index'

let main = new Main()


const createEmployee = ()=>{
  const typeOfE = rl.questionInt(selectEmployee)
  const baseWage = rl.questionInt("How much is going to recive? ")
  const dni = rl.question("ow their dni was? ")

  let employe

  switch (typeOfE) {
    case 1:
      employe = new Administrative(baseWage, dni)
      break;
    case 2:
      employe = new Merchant(baseWage, dni)
      break;
    case 3:
      employe = new Manager(baseWage, dni)
      break;
    case 4:
      employe = new Cleaner(baseWage, dni)
      break;
    default:
      break;
  }
  return employe
}

const showEmployee=(e:Employee)=>{
  let typeOfE = e.constructor.name
  console.log(`The employe ${e.dni()} is an ${typeOfE}`)
}

let currentOption =0

while (currentOption !== 6 ) {
  currentOption = rl.questionInt(firstMenu)

  let employee
  switch (currentOption) {
    case 1:
      employee = createEmployee()
      if(main.hireEmployee(employee)) console.log('Employee hired :D')

      break;
    case 2:
      employee = rl.question('dni of the employee')
      if(main.fireEmployee(employee)) console.log('Employee fired :(')

      break;
      case 3:
        const dni = rl.question('dni of employee')
        showEmployee(main.searchEmployee(dni))
  
        break;
    case 4:
      if(main.startMonth()) console.log('Starting new month :)')

      break;
    case 5:
      main.showWages()
      
      break;
    default:
      break;
  }
}
