<template>
  <div class="bankroll +elevation-4 +border-grey-3 +cursor-pointer" @click="$emit('show-bankroll')">
    <span class="+text-sm +text-grey-5 +uppercase">Deposit to Bankroll</span>
    <v-btn @click="$emit('show-bankroll')" />
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

                  fireRoll = doc.data().bankroll;
                  self.bankroll = fireRoll;

        
              } else {
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
