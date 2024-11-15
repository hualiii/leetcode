// link:https://leetcode.cn/problems/fibonacci-number/description/?envType=study-plan-v2&envId=dynamic-programming
function fib(n: number): number {
    const result = []
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            result[i] = 0;
        } else if (i === 1) {
            result[i] = 1;
        } else {
            result[i] = result[i - 1] + result[i - 2];
        }
    }
    return result[n];
};