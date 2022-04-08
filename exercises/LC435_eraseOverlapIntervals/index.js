/* Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping. */

// Link: https://leetcode.com/problems/non-overlapping-intervals/

// Time Complexity: O(N log N)

// Space Complexity: O(N)

const eraseOverlapIntervals = intervals => {
    if (intervals.length === 0) return 0;

    let count = 0;

    intervals.sort(function(a,b){return a[0] - b[0]});

    let end = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        const intervalStart = interval[0];
        const intervalEnd = interval[1];

        if (intervalStart < end) {
            count++
            end = Math.min(intervalEnd, end) 
        } else {
            end = intervalEnd
        }
    }

    return count;
};

module.exports = eraseOverlapIntervals;
