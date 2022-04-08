// Definitions

/* Def: Stability in Sorting Algorithms
Stable sorting algorithms preserve the relative order of equal elements, while unstable sorting algorithms don't. In other words, stable sorting maintains the position of two equals elements relative to one another. 
*/

/* Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking. 
*/

/* 
A comparison sort algorithm sorts items by comparing values between each other. It can be applied to any sorting cases. And the best complexity is O(n*log(n)) which can be proved mathematically. A non-comparison sort algorithm uses the internal character of the values to be sorted.
*/

/* 
If you were designing a web crawler, how would you avoid getting into infinite loops?

First, how does the crawler get into a loop? The answer is very simple: when we re-parse an already parsed page. This would mean that we revisit all the links found in that page, and this would continue in a circular fashion.
Be careful about what the interviewer considers the “same” page. Is it URL or content? One could easily get redirected to a previously crawled page.
So how do we stop visiting an already visited page? The web is a graph-based structure, and we commonly use DFS (depth first search) and BFS (breadth first search) for traversing graphs. We can mark already visited pages the same way that we would in a BFS/DFS.
We can easily prove that this algorithm will terminate in any case. We know that each step of the algorithm will parse only new pages, not already visited pages. So, if we assume that we have N number of unvisited pages, then at every step we are reducing N (N-1) by 1. That proves that our algorithm will continue until they are only N steps.
*/