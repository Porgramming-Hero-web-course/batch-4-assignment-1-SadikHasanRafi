var removeDuplicates = function (nums) {
    var duplicates = nums.filter(function (item, index) { return nums.indexOf(item) == index; });
    return duplicates;
};
// Sample Input:
// Sample Output:
// [1, 2, 3, 4, 5]
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 4, 4, 4, 4, 4, 3, 2, 2, 2, 2, 1, 1, 11, 1, 1]));
