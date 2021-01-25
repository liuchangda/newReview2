/* 
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true
*/

// var isValid = function (s) {
//     if (s == '') return true;
//     let stack = [];
//     for (let i = 0; i < s.length; i++) {
//         const c = s[i];
//         if (c == "(" || c == '[' || c == '{') {
//             stack.push(c);
//         }
//         else {
//             if (stack.length == 0) return false;
//             const top = stack[stack.length - 1];
//             if (c == ')' && top == '(' || c == ']' && top == '[' || c == '}' && top == '{') stack.pop();
//             else return false;
//         }
//     }
//     return stack.length == 0;
// };

/* reduce方法 */

const isValid = function (s) {
    const parenthesesMap = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const reduced = s.split('').reduce((accumulator, char) => {
        console.log(parenthesesMap[char]);
        const matchChar = parenthesesMap[char];
        //若当前遍历的char是右括号 （则matchChar是左括号）出栈 并和栈顶元素匹配
        if (matchChar) {
            if (accumulator[accumulator.length - 1] === matchChar) {
                accumulator.pop();
            } else {
                accumulator.push(char);
            }
        }
        //当前元素是左括号 则入栈 
        else {
            accumulator.push(char);
        }
        return accumulator;
    }, []);
    return reduced.length === 0;
}

console.log(isValid("()[]{}"));