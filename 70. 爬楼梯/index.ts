// link：https://leetcode.cn/problems/climbing-stairs/description/
function climbStairs(n: number): number {
    let dp = []
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            dp[i] = 1
        } else if (i === 2) {
            dp[i] = 2
        } else {
            dp[i] = dp[i - 1] + dp[i - 2]
        }
    }
    return dp[n]
}