/* Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not. */

// Link: https://leetcode.com/problems/palindrome-number/

// Time Complexity:

// Space Complexity:

function isPalindrome(x)
	{
		var rem, temp, final = 0;
		var number = x

		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			return true
		}
		else
		{
			return false
		}
  }