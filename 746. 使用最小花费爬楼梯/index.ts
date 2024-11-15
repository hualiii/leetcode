// link:https://leetcode.cn/problems/min-cost-climbing-stairs/description/?envType=study-plan-v2&envId=dynamic-programming
function minCostClimbingStairs(cost: number[]): number {
    let dp = []
    for (let i = 0; i <= cost.length; i++) {
        if (i === 0) dp[i] = 0;
        else if (i === 1) dp[i] = 0;
        else dp[i] = Math.min(cost[i - 1] + dp[i - 1], cost[i - 2] + dp[i - 2]);
    }
    return dp[cost.length];
};