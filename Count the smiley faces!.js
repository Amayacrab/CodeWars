//Count the smiley faces!
//Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
/*
Rules for the smiley faces
Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
*/
//https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

function countSmileys(arr) {
    let Contagem = 0;

    for (var i = 0; arr.length > i; i++) {

        if ((arr[i].startsWith(':') || arr[i].startsWith(';'))) {
            if (arr[i].endsWith('D') || arr[i].endsWith(')')) {
                if (arr[i].length == 2 || (arr[i].includes('-') || (arr[i].includes('~'))) && arr[i].length == 3) {
                    Contagem++
                }
            }
        }
    }

    return Contagem;

}

//test
console.log(countSmileys([':)', ';(', ';}', ':-D']));
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));


/*
Expect results

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
*/  