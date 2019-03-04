<template>
  <div id="app">
    <main-nav/>

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

    <main-footer/>

    <bankroll @show-bankroll="showDailyBankroll = true"/>
    <daily-bankroll v-if="showDailyBankroll" @close-bankroll="showDailyBankroll = false"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MainNav from '@/components/main-nav';
import MainFooter from '@/components/main-footer';
import Bankroll from '@/components/bankroll';
import DailyBankroll from '@/components/daily-bankroll';

export default {
    components: { MainNav, Bankroll, DailyBankroll, MainFooter },
    data: () => ({ showDailyBankroll: false }),
    computed: mapGetters(['dailyBankroll'])
};
</script>
