<template>
  <div class="bankroll +elevation-4 +border-grey-3 +cursor-pointer" @click="$emit('show-bankroll')">
    <span class="+text-sm +text-grey-5 +uppercase">Bankroll</span>
    <v-btn @click="$emit('show-bankroll')" :label="`$${dailyBankroll}`"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: mapGetters(['dailyBankroll'])
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
