<template>
  <transition name="modal">
    <div class="daily-bankroll" role="dialog">
      <div class="daily-bankroll__content +elevation-5 +radius-xxs +relative" role="dialog" v-on-clickaway="closeBankroll">
        <header class="+pd-lg +pd-t-xxl +pd-b-0 +text-center">
          <h1 class="+text-lg +text-grey-7 +mg-b-md">What is your bankroll?</h1>
          <p class="+mg-0 +text-grey-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus esse architecto provident quo, exercitationem pariatur magnam minus iusto culpa tempore?</p>
        </header>

        <main class="daily-bankroll__form +pd-r-xxl +pd-l-xxl +pd-b-lg +text-center +width-24rem">
          <input
            type="text"
            class="daily-bankroll__input +inline-block +mg-t-lg +mg-b-xl"
            @keyup.enter="setDailyBankroll"
            v-model="bankroll"
            :placeholder="`$${dailyBankroll}` || 'Enter your bankroll...'">

          <v-btn button-style="primary" class="+text-base +width-100percent" label="Save Bankroll" @click="setDailyBankroll"/>
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

export default {
    mixins: [clickaway],
    data: () => ({
        bankroll: null
    }),
    computed: {
        ...mapGetters(['dailyBankroll'])
    },
    methods: {
        ...mapActions(['updateDailyBankroll']),
        closeBankroll() {
            this.$emit('close-bankroll');
        },
        setDailyBankroll() {
            this.updateDailyBankroll(this.bankroll || 0);
            this.closeBankroll();
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
