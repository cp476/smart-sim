<template>
  <div class="bankroll +elevation-4 +border-grey-3 +cursor-pointer" @click="$emit('show-bankroll')">
    <span class="+text-sm +text-grey-5 +uppercase">Bankroll</span>
    <v-btn @click="$emit('show-bankroll')" :label="`$${bankroll}`"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import firebase from 'firebase';
import { db } from '../main';

export default {
    computed: mapGetters(['dailyBankroll']),
    data: () => ({
        bankroll: 0
    }), mounted() {
      const user = firebase.auth().currentUser
      var self = this;
      var docRef = db.collection("users").doc(user.uid);
      var fireRoll =0;
      docRef.get().then(function(doc) {
              if (doc.exists) {
                  console.log("Document data:", doc.data().bankroll);
                  console.log("bankroll is: ")
                  fireRoll = doc.data().bankroll;
                  self.bankroll = fireRoll;
                  console.log(  this.bankroll);

                  // this.bankroll = doc.data().bankroll;
                  // console.log(this.bankroll);
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
              }
          }).catch(function(error) {
              console.log("Error getting document:", error);
          });

      return self.bankroll

        }
};
</script>

<style lang="scss" scoped>
@include component(bankroll) {
    background: $white;
    border-radius: 100px;
    bottom: $xl-unit;
    padding: $md-unit;
    position: fixed;
    right: $xl-unit;

    &:hover {
        background: $grey-1;
    }
}
</style>
