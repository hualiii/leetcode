// link:https://leetcode.cn/problems/house-robber/description/?envType=study-plan-v2&envId=dynamic-programming
function rob(nums: number[]): number {
    if (nums == null || nums.length == 0) {
        return 0;
    }
    let dp = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            dp[i] = nums[i];
        } else if (i === 1) {
            dp[i] = Math.max(nums[i], nums[i - 1]);
        } else {
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
        }
    }
    return dp[nums.length - 1];
};