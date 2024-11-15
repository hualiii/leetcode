// link:https://leetcode.cn/problems/n-th-tribonacci-number/description/?envType=study-plan-v2&envId=dynamic-programming

// 泰波那契序列 Tn 定义如下：
// T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
// 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

function tribonacci(n: number): number {
    const result = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            result[i] = 0;
        } else if (i === 1) {
            result[i] = 1;
        } else if (i === 2) {
            result[i] = 1;
        } else {
            result[i] = result[i - 1] + result[i - 2] + result[i - 3];
        }
    }
    return result[n];
};