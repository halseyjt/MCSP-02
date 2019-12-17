// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false
// str: "[{]}"                    |   false
const isBalanced = (str) => {
    //  set a stack variable to an empty array
    let stack = [];
    // set a map variable to an object with the key value pairs being opening and closing brackets
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    // next, iterate through the given string.
    for (let i = 0; i < str.length; i++) {
        // compare each character to see if they are an opening bracket
        if (str[i] === '[' || str[i] === '{' || str[i] === '[') {
            // if the character is an opening bracket push that into the stack
            stack.push(str[i]);
            // else if the character is a closing bracket remove them from the string
        } else {
            let last = stack.pop()
            // if the last element removed doesn't match the opening bracket, return false
            if (str[i] !== map[last]) {
                return false;
            }
        }
        // if the length of the stack does not equal zero, return false
        if (stack.length !== 0) {
            return false;
        }
        return true;
    }
};    

const test = isBalanced("(x+y) - (4)");
console.log(test)
