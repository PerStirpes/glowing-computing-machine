/*
Truncate.

Given a string and a number n, truncate the string to a shorter string containing at most n characters. If the string gets truncated, the truncated return string should have a "..." at the end.  Because of this, the smallest number passed in as a second argument should be 3.

Examples:

truncate("Hello World", 6) // "Hel..."
truncate("Problem solving is the best!", 10) // "Problem..."
truncate("Yo", 100) // "Yo"
truncate("Super cool", 3) // "..."
truncate("Super cool", 2) // "Truncation must be at least 3 characters."

Implement this function in two ways: iteratively and recursively.
*/

function truncateIteratively(str, n) {
    // edge cases
    if(n === 3) return "...";
    if(n < 3) return "Truncation must be at least 3 characters.";
    if(str.length + 3 < n) return str;

    // iteration
    return str.slice(0,n-3).concat("...");
}

function truncateRecursively(str, n) {
    // edge cases
    if(n < 3) return "Truncation must be at least 3 characters.";
    if(str.length < 3) return str;
    
    // base case
    if(n === 3) return "...";

    // recursion
    return str[0] + truncateRecursively(str.substring(1), n-1)
}
