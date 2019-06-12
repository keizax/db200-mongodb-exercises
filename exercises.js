// db.movies.insert({ "title": "Star Wars", "writer":"George Lucas", "year": 1977, "actors": [
//     'Mark Hamill',
//     'Harison Ford',
//     'Carrie Fisher',
//     'Peter Chushing',
//     'James Earl Jones'
//  ] })

//  db.movies.insert({ "title": "Raiders of the Lost Ark", "writer": "George Lucas", "year": 1981, "actors": [ 'Harrison Ford' ] })

//  db.movies.insert({ "title": "Fight Club", "writer": "Chuck Palahniuk", "year": 1999, "actors": [
//   'Brad Pitt',
//   'Edward Norton',
// ] })

// db.movies.insert({ "title" : "Pulp Fiction",
// "writer" : "Quentin Tarantino",
// "year" : 1994,
// "actors" : [
//   "John Travolta",
//   "Uma Thurman"
// ] })

// db.movies.insert({ "title" : "Inglorious Basterds",
//     "writer" : "Quentin Tarantino",
//     "year" : 2009,
//     "actors" : [
//       "Brad Pitt",
//       "Diane Kruger",
//       "Eli Roth"
//     ] })

// db.movies.insert({ "title" : "The Hobbit: An Unexpected Journey",
//     "writer" : "J.R.R. Tolkein",
//     "year" : 2012,
//     "franchise" : "The Hobbit" })

// db.movies.insert({ "title" : "The Hobbit: The Desolation of Smaug",
//     "writer" : "J.R.R. Tolkein",
//     "year" : 2013,
//     "franchise" : "The Hobbit" })

// db.movies.insert({ "title" : "The Hobbit: The Battle of the Five Armies",
//     "writer" : "J.R.R. Tolkein",
//     "year" : 2012,
//     "franchise" : "The Hobbit",
//     "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
//      })

// db.movies.insert({ "title" : "Pee Wee Herman's Big Adventure",
// "writer": "Phil Hartman",
// "year": 1985 })

// db.movies.insert({ "title" : "Avatar" })

// query the movies collection to

// 1. get all documents
// db.movies.find({})

// 2. get all documents with writer set to "Quentin Tarantino"
// db.movies.find({writer: 'Quentin Tarantino'})

// 3. get all documents where actors include "Brad Pitt"
// db.movies.find({actors: 'Brad Pitt'})

// 4. get all documents with franchise set to "The Hobbit"
// db.movies.find({franchise: 'The Hobbit'})

// 5. get all movies released in the 90s
// db.movies.find({year: {$gte:1990, $lt:2000}})

// 6. get all movies released before the year 2000 or after 2010
// db.movies.find({year: {$not:{$gt:2000, $lt:2010}}})

// Update Documents

// 1.add a synopsis to "The Hobbit: An Unexpected Journey" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."
// db.movies.update({'title': 'The Hobbit: An Unexpected Journey'},{$set: {'synopsis': 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.'}})

// 2.add a synopsis to "The Hobbit: The Desolation of Smaug" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
// db.movies.update({'title': 'The Hobbit: The Desolation of Smaug'},{$set: {'synopsis': 'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.'}})

// 3.add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"
// db.movies.update({title: 'Pulp Fiction'},{ $push: {'actors':'Samuel L. Jackson' }})

// Text Search

// 1. find all movies that have a synopsis that contains the word "Bilbo"
// db.movies.find({synopsis: /Bilbo/})

// 2. find all movies that have a synopsis that contains the word "Gandalf"
// db.movies.find({synopsis: /Gandalf/})

// 3. find all movies that have a synopsis that contains the word "Bilbo" and not the word "Gandalf"
// db.movies.find( { "$text": { "$search": "Bilbo -Gandalf" } })

// 4. find all movies that have a synopsis that contains the word "dwarves" or "hobbit"
// db.movies.find( { "$text": { "$search": "\"dwarves\" '\'hobbit\'" } })

// 5. find all movies that have a synopsis that contains the word "gold" and "dragon"
// db.movies.find( { "$text": { "$search": "\"gold\" '\'dragon\'" } })

// Delete Documents

// 1) delete the movie "Pee Wee Herman's Big Adventure"
// db.movies.deleteOne({ title: "Pee Wee Herman's Big Adventure" })

// 2) delete the movie "Avatar"
// db.movies.deleteOne({ title: "Avatar" })

// Relationships
// Insert the following documents into a users collection

// db.users.insert({ "username" : "SallySmith",
// "first_name": "Sally",
// "last_name": "Smith" })

// db.users.insert({ "username" : "JimmyHagen",
// "full_name": { 
//     first : "Jimmy",
//     last : "Hagen" } })

// Insert the following documents into a posts collection

// db.posts.insert({username: 'SallySmith',
//     title:'Passes out at party',
//     body: 'Wakes up early and cleans house'})

// db.posts.insert({username: 'SallySmith',
//     title: 'Buys a House',
//     body: 'Living in a new neighborhood now'})
        

// db.posts.insert({username: 'SallySmith', 
//     title: 'Reports a bug in your code',
//     body: 'Sends you a pull request'})

// db.posts.insert({username: 'Jimmy Hagen',
//     title:'Borrows something',
//     body: 'Returns it when he is done'})
        
// db.posts.insert({username: 'Jimmy Hagen',
//     title:'Borrows everything',
//     body: 'The end'})

// db.posts.insert({username: 'Jimmy Hagen',
//     title:'Forks your repo on github',
//     body: 'Sets to Private'})

// Insert the following documents into a comments collection

// username : SallySmith
//     comment : Hope you got a good deal!
//     post : [post_obj_id]
// (where [post_obj_id] is the ObjectId of the posts document: "Borrows something")
// db.comments.insert({username: 'SallySmith',comment: "Hope you got a good deal!",post: ObjectId("5d0136196a4e5c2de5405fec")})

// username : SallySmith
//     comment : What's mine is yours!
//     post : [post_obj_id]
// (where [post_obj_id] is the ObjectId of the posts document: "Borrows everything")
// db.comments.insert({username: 'SallySmith',comment: "What's mine is yours!",post: ObjectId("5d0136196a4e5c2de5405fec")})


// username : SallySmith
//     comment : Don't violate the licensing agreement!
//     post : [post_obj_id]
// (where [post_obj_id] is the ObjectId of the posts document: "Forks your repo on github)
// db.comments.insert({username: 'SallySmith',comment: "Dont violate the licencing agreement!",post: ObjectId("5d0136576a4e5c2de5405fee")})


// username : JimmyHagen
//     comment : It still isn't clean
//     post : [post_obj_id]
// (where [post_obj_id] is the ObjectId of the posts document: "Passes out at party")
// db.comments.insert({username: 'Jimmy Hagen',comment: "It still isnt clean",post: ObjectId("5d0134fc6a4e5c2de5405fe9")})


// username : JimmyHagen
//     comment : Denied your PR cause I found a hack
//     post : [post_obj_id]
// (where [post_obj_id] is the ObjectId of the posts document: "Reports a bug in your code")
// db.comments.insert({username: 'Jimmy Hagen',comment: "Denied your PR cause i found a hack",post: ObjectId("5d0135fa6a4e5c2de5405feb")})

// Querying related collections

// 1. find all users
// db.users.find({})

// 2. find all posts
// db.posts.find({})

// 3. find all posts that was authored by "SallySmith"
// db.posts.find({"username": "SallySmith"})

// 4. find all posts that was authored by "JimmyHagen"
// db.posts.find({"username": "Jimmy Hagen"})

// 5. find all comments
// db.comments.find({})

// 6. find all comments that was authored by "SallySmith"
// db.comments.find({"username": "SallySmith"})

// 7. find all comments that was authored by "JimmyHagen"
// db.comments.find({"username": "Jimmay Hagen"})

// 8. find all comments belonging to the post "Reports a bug in your code"
// db.comments.find({"post": ObjectId("5d0135fa6a4e5c2de5405feb")})
