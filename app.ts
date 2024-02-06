// Function to check if a string is a palindrome
function isPalindrome(str: string): boolean {
    // Convert string to lowercase and remove non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    // Check if string is equal reversed
    return cleanStr === cleanStr.split("").reverse().join("");

  }

  function checkPalindrome() {
    // Get the input element and result element
    const inputElement: HTMLInputElement | null = document.getElementById('inputString') as HTMLInputElement;
    const resultDiv: HTMLDivElement | null = document.getElementById('result') as HTMLDivElement;

    // Check if elements exist and handle accordingly
    if (inputElement && resultDiv) {
        // Retrieve the input value
        const input: string = inputElement.value;

        // Check if it's a palindrome
        if (isPalindrome(input)) {
            resultDiv.textContent = "Yes, it's a palindrome!";
        } else {
            resultDiv.textContent = "No, it's not a palindrome.";
        }
    } else {
        console.error("Input or result element not found!");
    }
}

  