const sumArray = (params : number[]) : number => {
    let result = 0
    for(let i = 0; i < params.length; i++) {
            result = params[i] + result
    }
    return result
}


console.log(sumArray([1, 2, 3]))