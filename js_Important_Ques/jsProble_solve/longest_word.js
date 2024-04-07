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

console.log(LongestWord("Hello@!! world123 567")); // Output: 'world123'
console.log(LongestWord("The quick brown fox jumps over the lazy dog")); // Output: 'quick'
console.log(LongestWord("A picture is worth a thousand words")); // Output: 'thousand'
