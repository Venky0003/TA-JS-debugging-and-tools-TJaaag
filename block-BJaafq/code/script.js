function addTwo(numA,numB){
    return numA + numB;
}
let result,expected;

function mul(numA,numB){
    return numA * numB;
}

//testing framework
function test(message,callback){
    try {
        callback();
        console.log("R",message)
    } catch (error){
        console.error(error);
        console.log("W",message)
    }
}
//asserrtion framework

function expect(actual){
    return{
        toEqual:function (expected)
        {
            if(actual !== expected)
            {
             throw new Error(`${actual} is not equal to ${expected}`);   
            }
        },
        toBeEqual:function(expected)
        {
            if(typeof actual !== expected)
            {
                throw new Error(`${typeof actual} is not equal to ${expected}`)
            }
        },
    }
}


// function addTwo(numA,numB){
//     return numA + numB;
// }
// let result,expected;
// let result,expected;

// function testAdd(){
//     result =addTwo(5,5);
//     expected =11;
//     expect(result).toEqual(expected);
// }
// test("adding",testAdd)

test("adding 10 + 10 is equal to 21",()=>{
    expect(addTwo(10,10)).toEqual(21)
})
test("adding 11 + 10 is equal to 21",()=>{
    expect(addTwo(11,10)).toEqual(21)
})
test("adding 10 + 1 is equal to 11",()=>{
    expect(addTwo(10,1)).toEqual(12)
})
test("adding 8 + 8 is equal to 16",()=>{
    expect(addTwo(8,8)).toEqual(16)
})
test("adding 13 + 12 is equal to 26",()=>{
    expect(addTwo(13,12)).toEqual(26)
})


test("multiply of 5 * 5 is equal to 25",()=>{
    expect(mul(5,6)).toEqual(24)
})

test("multiply of 5 * 5 is equal to 25",()=>{
    expect(mul(5,5)).toEqual(25)
})

