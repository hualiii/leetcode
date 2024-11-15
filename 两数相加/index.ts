// link:https://leetcode.cn/problems/add-two-numbers/description/
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// @ts-ignore
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let temp1 = l1
    let num1 = temp1 ? temp1.val.toString() : ''
    let temp2 = l2
    let num2 = temp2 ? temp2.val.toString() : ''

    // Traverse the first list and convert it to a string
    while (temp1 && temp1.next) {
        temp1 = temp1.next
        num1 = temp1.val.toString() + num1
    }

    // Traverse the second list and convert it to a string
    while (temp2 && temp2.next) {
        temp2 = temp2.next
        num2 = temp2.val.toString() + num2
    }

    // Add the two numbers as integers
    const result = (BigInt(num1) + BigInt(num2)).toString().split('').reverse().join('')

    // Create a new ListNode for the result
    const dummyHead = new ListNode(0)
    let currentNode = dummyHead

    // Loop through each digit of the result and create new ListNodes
    for (let i = 0; i < result.length; i++) {
        currentNode.next = new ListNode(parseInt(result[i]))
        currentNode = currentNode.next
    }

    return dummyHead.next
};