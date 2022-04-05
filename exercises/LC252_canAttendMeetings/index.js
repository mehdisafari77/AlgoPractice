/* Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings. */

// Link: https://leetcode.com/problems/meeting-rooms/

// Time Complexity: O(N log N)

// Space Complexity: O(N)

const canAttendMeetings = intervals => {
    const starts = [];
    const ends = [];

    for (let i = 0; i < intervals.length; i++) {
        const subarray = intervals[i];
        starts.push(subarray[0]);
        ends.push(subarray[1]);
    }

    starts.sort((a,b) => a - b);
    ends.sort((a,b) => a - b);

    for (let i = 0; i < starts.length; i++) {
        if (starts[i + 1] < ends[i]) return false;
    }

    return true
};

module.exports = canAttendMeetings;
