function isPalindrome(word) {
  // Check if the word is empty or has a single character
  if (word.length <= 1) {
    return true;
  }

  // Compare the first and last characters
  if (word[0] === word[word.length - 1]) {
    // Recursively test the rest of the word
    return isPalindrome(word.slice(1, -1));
  } else {
    // Characters are different, not a palindrome
    return false;
  }
}

// Example usage:
console.log(isPalindrome("gag"));    // Output: true
console.log(isPalindrome("kayak"));  // Output: true
console.log(isPalindrome("php"));    // Output: true
console.log(isPalindrome("radar"));  // Output: true
console.log(isPalindrome("hello"));  // Output: false
