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
          <span class="+flex +align-items-center"><grade-badge :grade="payout.grade" class="+mg-r-xs" /> {{ payout.direction }}{{ payout.val }}</span>
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

        <span class="+block +text-base +text-regular +text-grey-7 +mg-b-xxs">Suggested bet size: ${{ suggestedBetSize }}</span>
        <span class="+block +text-base +text-regular +text-grey-7 +mg-b-lg">Remaining Bankroll: ${{ calculatedDailyBankroll }}</span>

        <v-btn button-style="primary" :label="`Place Bet`"/>
        <v-btn
          label="Clear"
          class="+block +text-center +mg-t-sm +text-primary +uppercase"
          @click="cancelOrder"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GradeBadge from '@/components/grade-badge';

export default {
    components: { GradeBadge },
    props: {
        payout: { type: Object, default: null }
    },
    data: () => ({
        risk: null
    }),
    computed: {
        ...mapGetters(['dailyBankroll']),
        suggestedBetSize() {
            return Math.floor(this.dailyBankroll / 15);
        },
        calculatedDailyBankroll() {
            if (this.risk > this.dailyBankroll) {
                return 0;
            }

            return this.dailyBankroll - this.risk;
        },
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

            const value = parseInt(this.payout.val);

            const result = this.isFavored
                ? Math.round(this.risk * (value / 100) * 100) / 100
                : Math.round((this.risk / (value / 100)) * 100) / 100;
            return result.toLocaleString('en-US', {
                style: 'decimal',
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
            });
        }
    },
    methods: {
        cancelOrder() {
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
