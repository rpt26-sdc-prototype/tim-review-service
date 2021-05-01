### Create
POST -> /singleReview

  <-include->

req.query =
```
  {
    game: Number,
    userID: Number,
    reviewText: String,
    creationDate: Number,
    recommended: Number,
    helpfulCount: Number,
    helpfulScore: Number,
    funnyCount: Number,
    earlyAccess: Number,
    awards: Number,
    comments: Number
  }
```
Simply returns 'Created new review!'

### Read
GET -> /singleReview/:reviewID

returns the review->
```
  {
      "id": Number,
      "game": Number,
      "userID": Number,
      "reviewText": String,
      "creationDate": Number,
      "recommended": Number,
      "helpfulCount": Number,
      "notHelpfulCount": Number,
      "helpfulScore": Number,
      "funnyCount": Number,
      "earlyAccess": Number,
      "awards": Number,
      "comments": Number
  }
```

### Update
PATCH -> /singleReview/:reviewID \
  <-Include an update object, all key/value pairs are optional->

  For example, the object can simply be-> \
  req.query =
```
  {
    "reviewText: String
  }
```

All the way up to->

  req.query =
```
  {
    "game": Number,
    "userID": Number,
    "reviewText": String,
    "creationDate": Number,
    "recommended": Number,
    "helpfulCount": Number,
    "notHelpfulCount": Number,
    "helpfulScore": Number,
    "funnyCount": Number,
    "earlyAccess": Number,
    "awards": Number,
    "comments": Number
  }
```

### Delete
DELETE -> /singleReview/:reviewID \
returns 'Deleted Review!'