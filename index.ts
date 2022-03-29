import { question } from 'readline-sync'


type Operator = '+' | '-' | '*' | '/'

function main(): void {
    const firstStr: string = question(`Enter first number:\n`)
    const operator: string = question(`Enter operator:\n`)
    const secondStr: string = question(`Enter second number:\n`)
    
    const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr)

    if(validInput)
    {
        const firstNum: number = parseInt(firstStr)
        const secondNum: number = parseInt(secondStr)
        const result: number = calculate(firstNum , operator as Operator, secondNum)
        console.log(`\nresult: ${result}\n`)
    }
    else
    {
        console.log(`\n\nInvalid Input\n\n`)
        main()
    }
} 

const calculate = (firstNum:number, operator: Operator , secondNum: number): number => {
   switch(operator)
   {
       case '+':
            return firstNum + secondNum
       case '*':
           return firstNum * secondNum 
       case '-':
           return firstNum - secondNum
       case '/':
           return firstNum / secondNum
   }
}


const isNumber = (str : string) : boolean => {
    const maybeNum = parseInt(str)
    const isNum:boolean = !isNaN(maybeNum)
    return isNum
} 

const isOperator = (operator : string) : boolean => {
    switch(operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':
        return true

        default: return false
    }
}

main()