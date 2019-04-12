<template>
  <div class="bet-example">
    <div class="bet-example__category-header">
      <h2 class="+text-base +text-bold +uppercase +text-grey-6">Payout Calculator</h2>
    </div>

    <div class="bet-example__content +pd-md">
      <p class="+mg-0 +text-grey-6" v-if="!payout ">Select an odd to view payout example</p>
      <div class="+flex +flex-direction-column" v-else>
        <div class="+flex +justify-content-space-between +text-regular +text-grey-6 +mg-b-xxs">
          <span>{{ payout.team }}</span>
          <span class="+flex +align-items-center"><grade-badge :grade="payout.grade" class="+mg-r-xs" /> {{ payout.val }}</span>
        </div>

        <span class="+block +uppercase +text-sm +mg-b-sm +text-grey-5">{{ type }}</span>

        <div class="+flex +mg-b-md">
          <v-input
            icon="attach_money"
            v-model="risk"
            class="+mg-r-sm"
            label="Risk"/>
          <v-input
            icon="attach_money"
            v-model="totalPayout"
            readonly
            label="To Win"/>
        </div>

        <span class="+block +text-base +text-regular +text-grey-7 +mg-b-lg">Remaining Bankroll: ${{ update_bankroll }}</span>

        <v-btn button-style="primary" :label="`Place Bet`" @click="addBet(bankroll,risk)"/>
        <v-btn
          label="Clear"
          class="+block +text-center +mg-t-sm +text-primary +uppercase"
          @click="cancelOrder"/>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import { db } from '../main';
import GradeBadge from '@/components/grade-badge';

export default {
    components: { GradeBadge },
    props: {
        payout: { type: Object, default: null }
    },
    data: () => ({
        risk: null,
        bankroll: null
    }),
    mounted() {
      const user = firebase.auth().currentUser
      var self = this;
      var docRef = db.collection("users").doc(user.uid);
      var fireRoll =0;
      docRef.get().then(function(doc) {
        if (doc.exists) {
            fireRoll = doc.data().bankroll;
            self.bankroll = fireRoll;
            console.log(  this.bankroll);
        } else {
            console.log("No such document!");
        }
          }).catch(function(error) {
              console.log("Error getting document:", error);
          });
      return self.bankroll
        },
    computed: {
        
        
        isFavored() {
            return this.payout.direction === '+';
        },
        type() {
            return this.payout.type.includes('_') ? this.payout.type.replace('_', ' ') : this.payout.type;
        },
        totalPayout() {
            if (!this.risk) {
                return null;
            }

            // const value = parseInt(this.payout.val);

            const result = this.risk  * this.payout.val;
            return result.toLocaleString('en-US', {
                style: 'decimal',
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
            });
        },
        update_bankroll() {
            const user = firebase.auth().currentUser
            var self = this;
            var docRef = db.collection("users").doc(user.uid);
            var fireRoll =0;
            docRef.get().then(function(doc) {
                if (doc.exists) {
                    fireRoll = doc.data().bankroll;
                    self.bankroll = fireRoll;
                    console.log(  this.bankroll);
                } else {
                    console.log("No such document!");
                }
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                });
            return self.bankroll
        }

    },
    methods: {
        cancelOrder() {
            this.risk = null;
            this.$emit('clear-payout');
        },
        addBet(firebankroll,risk) {
            const user = firebase.auth().currentUser
            var docRef2 = db.collection("open");
            var self = this;

            docRef2.add({
                val: this.payout.val,
                teamName: this.payout.team,
                risk: this.risk,
                type:this.payout.type,
                uid:user.uid,
                keyid:"none",
                created: Date.now()


            })
            .then(function(docRef) {
                var new_bankroll = firebankroll - risk;
                var doc_id = docRef.id;
                var adding_keyid = db.collection("open").doc(docRef.id);
                adding_keyid.update({
                    keyid: doc_id
                })
                .then(function() {
                    
                })
                .catch(function(error) {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });

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
@include component(bet-example) {
    background: $white;
    border-radius: 4px;
    box-shadow: $elevation-5;
    overflow: hidden;
    z-index: $z-three;

    @include part(category-header) {
        align-items: center;
        background: $grey-1;
        display: flex;
        justify-content: space-between;
        min-height: 57px;
        padding: $md-unit;
    }
}
</style>
