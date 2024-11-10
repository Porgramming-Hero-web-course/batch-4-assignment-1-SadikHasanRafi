const removeDuplicates = (nums:number[]) => {
    let newArray :number[] = []
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        for (let j = 0; j < nums.length; j++) {
            if (j==i) {
                continue;
            }else{
                if (element === nums[j]) {
                   newArray.push(element);
                }
            }
        }
    }
}



// Sample Input:

// Sample Output:
// [1, 2, 3, 4, 5]


console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))