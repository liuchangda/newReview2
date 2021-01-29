/* 写错了 要求是链表 但是合并两个有序数组的话就是对的 */
// var mergeTwoLists = function(l1, l2) {
//     let l3 = [], i = 0, j = 0;
//     //两个升序合并成升序 所以选择尾插法
//     let length = l1.length < l2.length ? l1.length : l2.length;
//     while (i < length && j < length) {
//         if (l1[i] <= l2[j]) l3.push(l1[i++]);
//         else l3.push(l2[j++]);
//     }
//     if (i < l1.length) {
//         l3 = [...l3, ...l1.slice(i, l1.length)];
//     }
//     else if (j < l2.length) {
//         l3 = [...l3, ...l1.slice(j, l2.length)];
//     }
//     return l3;
// };



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/* 
解题思路
一、递归🐛
l1 或 l2若有一者为空则返回非空链表
若都非空，则判断 l1 和 l2 的val，val小的将其 next 递归添加到结果的节点
递归终止条件：l1 或 l2 有一为空
二、迭代+双指针🐛
初始化一个新的链表 new ListNode()
merge sort 归并排序
over
*/

var mergeTwoLists = function (l1, l2) {
    if (!l1 && l2) return l2;
    if (!l2 && l1) return l1;
    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
console.log(mergeTwoLists([1, 2, 4], [1, 2, 4]));

