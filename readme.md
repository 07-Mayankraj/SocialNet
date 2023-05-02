# social media backend 



| METHOD | ENDPOINT | DESCRIPTION | STATUS CODE |
| --- | --- | --- | --- |
| POST | http://localhost:8080/register | This endpoint should allow users to register. Hash the password on store. | 201 |
| GET | http://localhost:8080/users | This endpoint should return a list of all registered users. | 200 |
| GET | http://localhost:8080/users/:id/friends | This endpoint should return a list of all friends of a specific user identified by its ID. | 200 |
| POST | http://localhost:8080/users/:id/friends | This endpoint should allow the user to send a friend request to another user identified by its ID. | 201 |
| PUT / PATCH | http://localhost:8080/users/:id/friends/:friendId | This endpoint should allow users to accept or reject friend requests sent to them by another user identified by its ID. | 204 |
| GET | http://localhost:8080/posts | This endpoint should return a list of all posts. | 200 |
| POST | http://localhost:8080/posts | This endpoint should allow the user to create a new post. | 201 |
| PUT / PATCH | http://localhost:8080/posts/:id | This endpoint should allow users to update the text or image of a specific post identified by its ID. | 204 |
| DELETE | http://localhost:8080/posts/:id | This endpoint should allow users to delete a specific post identified by its ID. | 202 |
| POST | http://localhost:8080/posts/:id/like | This endpoint should allow users to like a specific post identified by its ID. | 201 |
| POST | http://localhost:8080/posts/:id/comment | This endpoint should allow users to comment on a specific post identified by its ID. | 201 |
| GET | http://localhost:8080/posts/:id | This endpoint should return the details of a specific post identified by its ID. | 200 |

<hr/>

<br/><br/>

# register user 
```http://localhost:8080/users/register```
```
{
  
  "name": "ayuu",
  "email": "ayuu@gmail.com",
  "password": "1234",
  "bio": "String",
  "posts": [],
  "friends": [],
  "friendRequests": []
}


```
# users
```http://localhost:8080/users/```
```
[
  {
    "_id": "6450b665c043a36a60b450a8",
    "name": "chikkuuu",
    "email": "chikkuuu@gmail.com",
    "password": "$2b$05$EHV1w8B4MoKsC7fCAqUMw.JqhAlSNnBQc43gDa1fEa3O1WKG1/c1i",
    "bio": "String",
    "posts": [],
    "friends": [],
    "friendRequests": [],
    "__v": 0
  },
  {
    "_id": "6450b684c043a36a60b450ab",
    "name": "ayuu",
    "email": "ayuu@gmail.com",
    "password": "$2b$05$vX/HfdofjNkNwO7.9FdQiuF/32woXsiYDGKexHPgDlJ1lzT0S/XNC",
    "bio": "String",
    "posts": [],
    "friends": [],
    "friendRequests": [],
    "__v": 0
  }
]

```


# getting user frinds
```http://localhost:8080/users/6450b665c043a36a60b450a8/friends```


# sending frind request
````http://localhost:8080/users/6450b665c043a36a60b450a8/friends/````

```
{
 "userid" : "6450b684c043a36a60b450ab"
}

```

# accepting friend request
```http://localhost:8080/users/6450b665c043a36a60b450a8/friends/6450b684c043a36a60b450ab```



# creating post

```http://localhost:8080/posts/```

```
{
 
  "user":"6450b665c043a36a60b450a8",
  "text": "finally!!!!!!!!!!!!!!",
  "image":"https://th.bing.com/th/id/OIP.-qGsTWrbp-Wx_Qvu-qtRsgHaEK?w=300&h=180&c=7&r=0&o=5&pid=1.7",
  "createdAt": "2023-05-1",
  "likes": [],
  "comments": []
}

```

# adding comments on post
```http://localhost:8080/posts/6450c88d84ab5fe31199a9bd/comment```

```
{
  "user": "6450b665c043a36a60b450a8",
  "text": "wooowwwwwwwww",
  "createdAt": "2023-05-2"
}  
```

# adding likes to the post

```http://localhost:8080/posts/6450c88d84ab5fe31199a9bd/like```

```
{ "userId":"6450b665c043a36a60b450a8" }
```