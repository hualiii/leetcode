// link：https://leetcode.cn/problems/length-of-last-word/description/
function lengthOfLastWord(s: string): number {
    return s.split(' ').filter(x => x.trim().length > 0).pop()?.length || 0
};