<template>
  <div class="container">
    <div class="chips" v-if="chips.length">
      <div class="chips__chip" v-for="(chip, index) in chips" :key="index">
        <span class="+uppercase">{{ chip }}</span>
        <button class="chips__button" @click="$emit('clear-chip', chip)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        chips: { type: Array, required: true }
    }
};
</script>

<style lang="scss" scoped>
@include component(chips) {
    display: flex;

    @include part(chip) {
        align-items: center;
        background: $grey-3;
        border-radius: 1000px;
        display: flex;
        font-size: $base-unit;
        padding: $xs-unit $sm-unit;

        &:not(:last-of-type) {
            margin-right: $sm-unit;
        }
    }

    @include part(button) {
        background: transparent;
        border: 0;
        margin-left: $xxs-unit;
        padding: 0;

        > svg {
            fill: $grey-4;
            height: 15px;
            width: 15px;
        }
    }
}
</style>
