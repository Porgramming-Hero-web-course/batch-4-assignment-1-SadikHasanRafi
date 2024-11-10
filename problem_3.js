var countWordOccurrences = function (text, searchText) {
    text = text.toLowerCase();
    searchText = searchText.toLowerCase();
    var count = 0;
    var splitedText = text.split(" ");
    for (var i = 0; i < splitedText.length; i++) {
        var regex = new RegExp(splitedText[i]);
        if (regex.test(searchText)) {
            count++;
        }
    }
    return count;
};
// Sample Input:
console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));
