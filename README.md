# coding-project-template
```
Task 1:
Complete the code for getting the list of books available in the shop under public_users.get('/',function (req, res) {.
Hint: Use the JSON.stringify method for displaying the output neatly.

Run npm install for installing the required modules & start the server.

Test the output on Postman.

Please take a screenshot of the same and save it with the name 1-getallbooks.png for submitting under Task 1 for the Peer Review Assignment.
```

```
Task 2:
Complete the code for getting the book details based on ISBN under public_users.get('/isbn/:isbn',function (req, res) {.
Hint: Retrieve the ISBN from the request parameters

Test the output on Postman.

Please take a screenshot of the same and save it with the name 2-gedetailsISBN.png for submitting under Task 2 for the Peer Review Assignment.
```

```
Task 3:
Complete the code for getting the book details based on the author under public_users.get('/author/:author',function (req, res) {.
Hints:
1. Obtain all the keys for the ‘books’ object.
2. Iterate through the ‘books’ array & check the author matches the one provided in the request parameters.

Test the output on Postman.

Please take a screenshot of the same and save it with the name 3-getbooksbyauthor.png for submitting under Task 3 for the Peer Review Assignment.
```

```
Task 4:
Complete the code for getting the book details based on the title under public_users.get('/title/:title',function (req, res) {.
Hint: This will be similar to Exercise 3

Test the output on Postman.

Please take a screenshot of the same and save it with the name 4-getbooksbytitle.png for submitting under Task 4 for the Peer Review Assignment.
```

```
Task 5:
Complete the code for getting book reviews under public_users.get('/review/:isbn',function (req, res) {.
Hint: Get the book reviews based on ISBN provided in the request parameters.

Please take a screenshot of the same and save it with the name 5-getbookreview.png for submitting under Task 5 for the Peer Review Assignment.
```

```
Task 6:
Complete the code for registering a new user
Hint: The code should take the ‘username’ and ‘password’ provided in the body of the request for registration. If the username already exists, it must mention the same & must also show other errors like eg. when username &/ password are not provided.

Test the output on Postman.

Please take a screenshot of the same and save it with the name 6-register.png for submitting under Task 6 for the Peer Review Assignment.
```

```
Task 7:
Complete the code for logging in as a registered user.
Hint: The code must validate and sign in a customer based on the username and password created in Exercise 6. It must also save the user credentials for the session as a JWT.
As you are required to login as a customer, while testing the output on Postman, use the endpoint as "customer/login"

Test the output on Postman.

Please take a screenshot of the same and save it with the name 7-login.png for submitting under Task 7 for the Peer Review Assignment.
```

```
Task 8:
Complete the code for adding or modifying a book review.
Hint: You have to give a review as a request query & it must get posted with the username (stored in the session) posted. If the same user posts a different review on the same ISBN, it should modify the existing review. If another user logs in and posts a review on the same ISBN, it will get added as a different review under the same ISBN.

Test the output on Postman.

Please take a screenshot of the same and save it with the name 8-reviewadded.png for submitting under Task 8 for the Peer Review Assignment.
```
