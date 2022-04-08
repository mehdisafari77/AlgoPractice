/* Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping. */

// Link: https://leetcode.com/problems/merge-intervals/

// Time Complexity: O(N log N)

// Space Complexity: O(1)


const merge = intervals => {
    if (!intervals.length) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);
    const res = [intervals[0]];
    
    for (let i = 0; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastInterval = res[res.length - 1];

        if (currentInterval[0] <= lastInterval[1]) {
            lastInterval[1] = Math.max(currentInterval[1], lastInterval[1])
        } else {
            res.push(currentInterval);
        }
    }

    return res;
};

module.exports = merge;
