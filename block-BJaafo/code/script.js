function fullName(firstName,lastName){
    return `${firstName} ${lastName}`
}
//fullName("Arya")

let result = fullName("Arya","Stark")

let expected = "Aryastark";

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`)
}

result = fullName("Sansa","Stark")

expected = "Sansa Stark";

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`)
}

function amountWithTax(amount,taxRate){
    return amount + amount*taxRate/100
}

result = amountWithTax(500,8);

expected = 550;

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`)
}

result = amountWithTax(500,10);

expected = 550;

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`)
}

// we cannot see the result of other test after the first test is failed

