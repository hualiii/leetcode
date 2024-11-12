// link:https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
function lengthOfLongestSubstring(s: string): number {
    // @ts-ignore
    const window = new Set();
    let ans: number = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        while (window.has(c)) {
            window.delete(s.charAt(i - window.size));
        }
        window.add(c);
        ans = Math.max(ans, window.size);
    }
    return ans;
}