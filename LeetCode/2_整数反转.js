/* 给你一个 32 位的有符号整数 x ，返回 x 中每位上的数字反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。


示例 1：

输入：x = 123
输出：321
示例 2：

输入：x = -123
输出：-321
示例 3：

输入：x = 120
输出：21
示例 4：

输入：x = 0
输出：0
*/
// //vue的双向数据绑定 新版本 虚拟DOM

// var reverse = (x) => {
//     let result = 0;
//     while (x != 0) {
//         result = result * 10 + x % 10;
//         x = x / 10 | 0;
//     }
//     return result | 0 == result ? result : 0;
// }

//暴力
var reverse = (x) => {
    let num = Number(Math.abs(x).toString().split('').reverse().join(''));
    if (x < 0) {
        return num <= Math.pow(2, 31) ? -num : 0;
    }
    else {
        return num < Math.pow(2, 31) ? num : 0;
    }
}
console.log(reverse(15454252225888));
