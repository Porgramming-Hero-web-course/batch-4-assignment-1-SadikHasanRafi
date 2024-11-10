


const countWordOccurrences = (text: string,searchText: string):number =>{
    text  = text.toLowerCase();
    searchText = searchText.toLowerCase();
    let count = 0
    let splitedText = text.split(" ");
    for (let i= 0; i < splitedText.length; i++) {

        const regex = new RegExp(splitedText[i])

        if (regex.test(searchText)) {
            count++
        }
    }

    return count
}




// Sample Input:

console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"))