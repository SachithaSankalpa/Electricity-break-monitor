const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp()

// SSR function
const express = require('express');
const { sapper } = require('./__sapper__/build/server/server');
const app = express().use(sapper.middleware());
exports.ssr = functions.https.onRequest(app);

exports.addTimeStamp = functions.database.ref('{roadid}/{towerid}').onUpdate((change, context) => {
  /*
  When tower unit (ESP8266) update the database, onUpdate events calls.
  This function runs in firebase whenever the database gets update.
  Each tower contain two objects, CTS & STS. cts => client timestamp, sts => server timestamp
  By tower unit, it updates CTS value. Then this function adds server timestamp value to object to avoid timezone issues
  */

  // if (context.authType !== 'ADMIN') {
  //   console.log('Not an admin')
  //   return null
  // }
  console.log("Running at", Date.now())

  const before = change.before.val()
  const after = change.after.val()
  
  if (before.cts === after.cts) {
    console.log("Repeating function, terminating...")
    return null
  }

  console.log("updating status")
  const cts = after.cts
  const sts = Date.now()
  return change.after.ref.update({cts, sts})
})
