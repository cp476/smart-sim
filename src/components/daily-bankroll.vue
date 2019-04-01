<template>
  <transition name="modal">
    <div class="daily-bankroll" role="dialog">
      <div class="daily-bankroll__content +elevation-5 +radius-xxs +relative" role="dialog" v-on-clickaway="closeBankroll">
        <header class="+pd-lg +pd-t-xxl +pd-b-0 +text-center">
          <h1 class="+text-lg +text-grey-7 +mg-b-md">Add Money to your bankroll</h1>
          <p class="+mg-0 +text-grey-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus esse architecto provident quo, exercitationem pariatur magnam minus iusto culpa tempore?</p>
        </header>

        <main class="daily-bankroll__form +pd-r-xxl +pd-l-xxl +pd-b-lg +text-center +width-24rem">
          <input
            type="text"
            class="daily-bankroll__input +inline-block +mg-t-lg +mg-b-xl"
            @keyup.enter="setDailyBankroll"
            v-model="bankroll"
            :placeholder="`${bankroll}` || 'Enter your bankroll...'">

          <v-btn button-style="primary" class="+text-base +width-100percent" label="Save Bankroll" @click="addBank(bankroll)"/>
          <v-btn label="I don't have one" class="+mg-t-md +uppercase +text-sm +text-grey-5" @click="closeBankroll"/>
          <v-btn @click="closeBankroll" class="+absolute +pin-right-sm +pin-top-sm">
            <i slot="icon" class="material-icons +text-lg +text-grey-5">close</i>
          </v-btn>
        </main>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { mixin as clickaway } from 'vue-clickaway';
import firebase from 'firebase';
import { db } from '../main';


export default {
    mixins: [clickaway],
    data: () => ({
        bankroll: 0,
        firebank:0,
    }),
    mounted() {
      const user = firebase.auth().currentUser
      var self = this;
      var docRef = db.collection("users").doc(user.uid);
      var fireRoll =0;
      docRef.get().then(function(doc) {
              if (doc.exists) {
                  console.log("Document data:", doc.data().bankroll);
                  console.log("bankroll is: ")
                  fireRoll = doc.data().bankroll;
                  self.firebank = fireRoll;
                  console.log(  this.bankroll);
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
              }
          }).catch(function(error) {
              console.log("Error getting document:", error);
          });

      return self.firebank
        }
    ,
    computed: {
        // ...mapGetters(['dailyBankroll']),
        // a computed getter
    firebaseBankroll: function () {
      // `this` points to the vm instance
      // const user = firebase.auth().currentUser

      // var docRef = db.collection("users").doc(user.uid);
      // var fireRoll =0;
      // docRef.get().then(function(doc) {
      //         if (doc.exists) {
      //             console.log("Document data:", doc.data().bankroll);
      //             console.log("bankroll is: ")
      //             var fireRoll = doc.data().bankroll;

      //           console.log("niggers");
      //           console.log(fireRoll);
      //         return fireRoll ;
      //         } else {
      //             // doc.data() will be undefined in this case
      //             console.log("No such document!");
      //         }
      //     }).catch(function(error) {
      //         console.log("Error getting document:", error);
      //     });

    }
    },
    methods: {
        ...mapActions(['updateDailyBankroll']),
        closeBankroll() {
            this.$emit('close-bankroll');
        },
        setDailyBankroll() {
            this.updateDailyBankroll(this.bankroll || 0);
            this.closeBankroll();
        },
          addBank(bankroll) {
            const user = firebase.auth().currentUser
            var docRef2 = db.collection("open");
            var self = this;

            var new_bankroll = firebankroll - risk;
                var user_ref = db.collection("users").doc(user.uid);
                return user_ref.update({
                    bankroll: new_bankroll
                })
                .then(function() {
                    console.log("Document successfully updated!");
                    update_bankroll();
                    this.$emit('clear-payout');
                })

            docRef2.add({
                val: this.payout.val,
                teamName: this.payout.team,
                risk: this.risk,
                type:this.payout.type,
                uid:user.uid
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                var new_bankroll = firebankroll - risk;
                var user_ref = db.collection("users").doc(user.uid);
                return user_ref.update({
                    bankroll: new_bankroll
                })
                .then(function() {
                    console.log("Document successfully updated!");
                    update_bankroll();
                    this.$emit('clear-payout');
                })
                .catch(function(error) {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

            this.risk = null;
            this.$emit('clear-payout');
        }
    }
};
</script>

<style lang="scss" scoped>
$_content-width: 40rem;

@include component(daily-bankroll) {
    align-items: center;
    background: rgba($black, 0.6);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: $z-five;

    @include part(input) {
        border: 0;
        font-size: $xl-unit;
        padding: 0;
        text-align: center;
    }

    @include part(content) {
        background: $white;
        overflow: hidden;
        width: $_content-width;
    }

    @include part(form) {
        margin: 0 auto;
    }
}
</style>
