function LongestWord(sen) {
    let cleanedSen = sen.replace(/[^\w\s]/g, ''); 

    let words = cleanedSen.split(' '); 
    let longestWord = '';


    words.forEach(word => {
     
        if (longestWord.length < word.length) {
            longestWord = word;
        }

        
    });

    return longestWord; 
}


console.log(LongestWord("The Eshita Bangladesh country")); 
