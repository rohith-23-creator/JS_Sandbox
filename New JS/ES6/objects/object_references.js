let myAccount = {   
    accHolder :  "Rohith",
    expense : 0,
    balance : 0,
    total : 0
}


let addExpenses = function(myAccount , expenseAmount){
    return myAccount.expense = expenseAmount
}

let addBalance = function (myAccount , amount){
    return myAccount.balance = amount - myAccount.expense 
}

let trackTotalAmount = function (myAccount){
    return myAccount.total = myAccount.balance + myAccount.expense
}

let accountSummary = function(myAccount){

       return `${myAccount.accHolder} had total of ${myAccount.total} rupees in his purse. After spending ${myAccount.expense} rupees , his new  balance is ${myAccount.balance} rupees `
    
}


console.log(addExpenses(myAccount ,  250))
console.log(addBalance(myAccount , 1000))
console.log(trackTotalAmount(myAccount))
console.log(accountSummary(myAccount))
console.log(myAccount)
 
 