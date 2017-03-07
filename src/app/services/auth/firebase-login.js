import * as firebase from 'firebase'

export default {
  signInWithEmailAndPassword: function (loginInfo, cb) {
    firebase.auth().signInWithEmailAndPassword(loginInfo.username, loginInfo.password)
      .catch(function (error) {
        cb(error)
      })
  }
}
