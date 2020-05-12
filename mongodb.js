// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbName = 'task-manager'

// const id = new ObjectID()
// console.log(id)

// console.log(id.getTimestamp())

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to the database')
    }

    const db = client.db(dbName)

    // db.collection('users').findOne({ _id: new ObjectID("5ead4c5309ed0e3ae4b5220c") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 19 }).count((error, count) => {
    //     console.log(count)
    // })


        // db.collection('tasks').findOne({ _id: new ObjectID("5ead6948314e576de8ebe153") }, (error, data) => {
        //     if(error) { 
        //         return console.log('UNable to fetch')
        //     }
           
        //     console.log(data.description)
        // })

        // db.collection('tasks').find({ completed: false }).toArray((error, data) => {
        //     if(error) {
        //         return console.log('Unable to fetch')
        //     }
        //     console.log(data)
        // })

        // db.collection('users').updateOne({
        //     _id: new ObjectID("5ead4c5309ed0e3ae4b5220c")
        // }, {
        //     $set: {
        //         name: "kahn"
        //     }
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })

        // db.collection('users').updateMany({
        //     age: 20
        // }, {
        //     $set: {
        //         age: 18
        //     }
        // }).then((result) => {
        //     console.log(result.modifiedCount)
        // }).catch((error) => {
        //     console.log(error)
        // })

        db.collection('tasks').deleteOne({ _id: "5ead50480e3bf333e0932a8c" }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })

})