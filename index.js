
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
//initialize admin SDK using serciceAcountKey
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

// admin
//   .auth()
//   .createUser({
//     email: 'diksha.novasoftcorps@gmail.com',
//     emailVerified: false,
//     phoneNumber: '+918871911369',
//     password: '123456',
//     displayName: 'Diksha',
//     photoURL: 'http://www.example.com/12345678/photo.png',
//     disabled: false,
//   })
//   .then((userRecord) => {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log(userRecord);
//     console.log('Successfully created new user:', userRecord.uid);
//   })
//   .catch((error) => {
//     console.log('Error creating new user:', error);
//   });



db.collection("/openGroups/demoOpenGroup1/messages").add({
    created_date : new Date(),
    message: "Diksha this side",
    messageId: "z2aI6yzaORNz7ezSBb6rbnnch782"+ new Date(),
    messageType : "text",
    profileImageUrl : "https://irs3.4sqi.net/img/user/original/HBVX4T2WQOGG20FE.png",
    userId : "z2aI6yzaORNz7ezSBb6rbnnch782",
    userName : "Diksha"

})
.then(function(docRef) {
	// console.log(docRef);
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     console.log(user);
//     // User is signed in.
//   } else {
//     // No user is signed in.
//   }
// });

// db.collection("openGroups").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         // console.log(doc);
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });


// let documentRef = db.doc('demoOpenGroup1/messages');
// // console.log(documentRef.get());

// documentRef.get().then(documentSnapshot => {

//     // console.log(documentSnapshot);

//    let readTime = documentSnapshot.readTime;
//    // console.log(`Document read at '${readTime.toDate()}'`);
// });

db.collection("/openGroups/demoOpenGroup1/messages").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // console.log(doc);
        console.log(`${doc.id} => ${doc.data()}`);
    });
});




