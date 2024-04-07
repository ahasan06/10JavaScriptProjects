function QuestionsMarks(str) {
    
    let addition;
    for (let i = 0; i < str.length; i++) {

        for (let j = i + 1; j < str.length; j++) {

            addition = Number(str[i]) + Number(str[j]);

            if (addition === 10) {

                let questionMarksCount = 0;

                for(let k = i + 1; k < j; k++) {
                    if(str[k] === '?') {
                        questionMarksCount++;
                    }
                }

                if (questionMarksCount >= 3) {
                    console.log();
                    return true;
                }
            }

        }
    }

    return false
}


console.log(QuestionsMarks("acc?7??sss?3rr1??????5")); // true 7 + 3 = 10 and three ???
console.log(QuestionsMarks("aa6???9")); // false not equal 10
console.log(QuestionsMarks("aa9???1")); // True 9 + 1 and three ???
