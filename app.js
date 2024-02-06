// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Convert string to lowercase and remove non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Check if string is equal reversed
    return cleanStr === cleanStr.split("").reverse().join("");
}
function checkPalindrome() {
    // Get the input element and result element
    const inputElement = document.getElementById('inputString');
    const resultDiv = document.getElementById('result');
    // Check if elements exist and handle accordingly
    if (inputElement && resultDiv) {
        // Retrieve the input value
        const input = inputElement.value;
        // Check if it's a palindrome
        if (isPalindrome(input)) {
            resultDiv.textContent = "Yes, it's a palindrome!";
        }
        else {
            resultDiv.textContent = "No, it's not a palindrome.";
        }
    }
    else {
        console.error("Input or result element not found!");
    }
}
