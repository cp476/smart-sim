<template>
  <label class="vue-input">
    <span v-if="label" class="vue-input__label +block +uppercase">
      {{ label }}
    </span>

    <div class="+relative">
      <i v-if="icon" class="material-icons +text-md +text-grey-5 +absolute +pin-left-sm +pin-top-sm">
        {{ icon }}
      </i>

      <input
        :value="value"
        :readonly="readonly"
        :placeholder="placeholder"
        :type="type"
        :class="{ '+pd-l-xl': icon }"
        class="vue-input__input"
        @input="$emit('input', $event.target.value)"
      >
    </div>
  </label>
</template>


<script>
export default {
    name: 'v-input',
    props: {
        value: { type: null, default: null },
        label: { type: String, default: null },
        readonly: { type: Boolean, default: false },
        placeholder: { type: null, default: null },
        type: { type: String, default: 'text' },
        icon: { type: String, default: null }
    }
};
</script>

<style lang="scss" scoped>
@include component(vue-input) {
    position: relative;

    @include part(input) {
        background: $white;
        border: 1px solid $grey-3;
        border-radius: $xxs-unit;
        color: $grey-7;
        font-size: $base-unit;
        font-weight: $font-semi-bold;
        padding: $base-unit;
        width: 100%;

        &[readonly] {
            background: $grey-1;
        }

        &::placeholder {
            color: $grey-5;
        }
    }

    @include part(label) {
        color: $grey-6;
        font-size: $sm-unit;
        font-weight: $font-semi-bold;
        margin-bottom: $xxs-unit;
    }

    @include part(action) {
        color: $primary;
        font-size: $sm-unit;
        font-weight: $font-regular;
        margin: 0;
        padding: 0;
    }

    @include part(figure) {
        color: $grey-6;
        font-size: $sm-unit;
        font-weight: $font-semi-bold;
        position: absolute;
        right: $sm-unit;
        top: 50%;
        transform: translateY(-50%);
    }

    @include part(error) {
        color: $red-7;
        display: block;
        font-size: $sm-unit;
        margin-top: $xxs-unit;
    }
}
</style>
