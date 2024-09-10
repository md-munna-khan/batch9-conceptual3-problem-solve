function totalCost(income){
    if(typeof income!=="number"){
        return "invalid Number"
    }
    const houseRent=4000;
    const mealRate = 3000;
    const personalExpense =2000;
    const totalExpenses = houseRent + mealRate +personalExpense
    if(totalExpenses >income){
        return "earn more"
    }
    const savings = income- totalExpenses;
    return savings
}
const result= totalCost(20000)
console.log(result)