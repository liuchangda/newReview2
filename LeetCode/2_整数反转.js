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
var reverse = (x) => {
    // x -> num
    let str = x.toString(); //str -> String
    let arr = str.split(''); //arr -> Array 字符串数组
    //判断是否有负号
    if (arr[0] != "-") {
        let num = Number(arr.reverse().join(''));
        if (num <= 2147483647 && num >= -2147483647) {
            return num;
        } else {   
            return 0;
        }
    }
    else if (arr[0] == '-') {
        delete arr[0];
        let num = Number(arr.reverse().join(''));
        if (num <= 2147483647 && num >= 2147483647) {
            return ~num + 1;
        } else return 0;
}
}
console.log(reverse(-123));

// vue的双向数据绑定 新版本 虚拟DOM