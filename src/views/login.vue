<template>

<div class="grid" style="display:flex;justify-content: center;">
  <div class="col-9 login">
    <div class="inner-login ">
        <h3>Sign In</h3>
        <input style="width:100%" type="text" v-model="email" placeholder="Email"><br>
        <input style="width:100%" type="password" v-model="password" placeholder="Password"><br>
        <!-- <button >Connection</button> -->
        <!-- <v-btn @click="socialLogin" button-style="facebook" :label="`Sign in with Facebook`"/> -->

    <div style="padding-left:60px;">
        <v-btn @click="login" button-style="primary" :label="`Login`"/> <br>

        <p>
      or Sign In with Google <br></p>
      <div style="padding-left:30px;">
      <button @click="socialLogin" class="social-button" >
        <img alt="Google Logo" src="../assets/google-logo.png">
      </button>
      </div>
    
    </div>
        <p>You don't have an account ? You can <router-link to="/register">create one</router-link></p>
    </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import { db } from '../main'
  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('events')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      },
    socialLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
          console.log(db);
          // var a ="moosa";
          const user = firebase.auth().currentUser
          var docRef = db.collection("users").doc(user.uid);
          docRef.get().then(function(doc) {
              if (doc.exists) {
                  console.log("Document data:", doc.data());
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");

                 docRef.set({
                        name: user.displayName,
                        email: user.email,
                        bankroll: 0
                    })
                    .then(function() {
                        console.log("Document successfully written!");
                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
                    });

              }
          }).catch(function(error) {
              console.log("Error getting document:", error);
          });
          var docRef2 = db.collection("open").doc(user.uid);
           docRef2.get().then(function(doc) {
              if (doc.exists) {
                  console.log("Document data:", doc.data());
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");

                 docRef2.set({
                       
                    })
                    .then(function() {
                        console.log("Document successfully written!");
                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
                    });

              }
          }).catch(function(error) {
              console.log("Error getting document:", error);
          });


          


          this.$router.replace('events');
        }).catch((err) => {
          alert('Oops. ' + err.message)
        });
      }

    }
  }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */

.inner-login{
    background-color: white;
    /* display: flex;
    justify-content: center;
    flex-direction: column; */

}
  .login {
    padding-top:100px;
    padding-bottom:150px;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: white;

    
    
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }

    .social-button {
    width: 75px;
    background: white;
    padding: 10px;
    border-radius: 100%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    outline: 0;
    border: 0;
  }
  .social-button:active {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
  }
  .social-button img {
    width: 100%;
  }
</style>