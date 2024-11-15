// link:https://leetcode.cn/problems/zigzag-conversion/description/
function convert(s: string, numRows: number): string {
    if (numRows < 2) {
        return s
    }
    const result: string[] = new Array(numRows).fill("");
    let flag = true;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (flag) {
            result[count] += s[i]
            count++
            if (count === numRows) {
                flag = false;
                count = numRows - 2;
            }
        } else {
            result[count] += s[i]
            count--
            if (count === -1) {
                flag = true;
                count = 1
            }
        }
    }
    return result?.join('')
};

