<template>
  <section>
    <hero/>
    <div class="container +mg-t-xl +mg-b-xl">
      <div class="grid">
        <div class="col-8 +flex +flex-direction-column +justify-content-center +pd-xl">
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempora laborum, repellendus aperiam nisi ut vero expedita vitae voluptas! Earum quo reiciendis tempore quae quasi voluptatem corrupti accusantium sit illum?</p>
          <router-link class="hero__view-more +text-primary +mg-t-xl +uppercase +text-bold +text-base +flex +align-items-center" :to="{ name: 'events' }">
            <h2>{{update_bankroll}}</h2>
            <span class="+mg-r-md">View all leagues</span>
            <i class="material-icons hero__arrow +text-primary">
              arrow_forward
            </i>
          </router-link>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Hero from '@/components/landing-hero';
import firebase from 'firebase';
import { db } from '../main';

export default {
    components: { Hero },
     data: () => ({
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
      }
};
</script>
