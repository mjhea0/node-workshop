# Review

Create a basic Node HTTP server with a `/:word` route handler that accepts GET requests and responds with the appropriate JSON response:

1. If user does not provide a word:
  ```json
  {
    "status": "error",
    "response": "Please provide a word."
  }
  ```
1. If user passes in a word AND the word is not a palindrome:
  ```json
  {
    "status": "success",
    "response": "WORD is not a palindrome"
  }
  ```
1. If user passes in a word AND the word is a palindrome:
  ```json
  {
    "status": "success",
    "response": "WORD is a palindrome"
  }
  ```
