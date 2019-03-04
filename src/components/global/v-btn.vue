<template>
  <button
    :class="[ buttonStyle ? `button-styled --${buttonStyle}` : null ]"
    :disabled="loading || disabled"
    class="button"
    v-on="$listeners">
    <span v-if="loading">Loading...</span>
    <span v-else>{{ label }}</span>
    <slot name="icon"/>
  </button>
</template>

<script>
export default {
    name: 'v-btn',
    props: {
        label: { type: String, default: null },
        loading: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        buttonStyle: { type: String, default: null }
    }
};
</script>

<style lang="scss" scoped>
@include component(button) {
    align-items: center;
    background: transparent;
    border: 0;
    cursor: pointer;
    display: inline-flex;
    font-weight: $font-bold;
    transition: opacity 300ms ease;

    &:hover {
        opacity: 0.85;
    }

    > span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}

@include component(button-styled) {
    border: 1px solid transparent;
    border-radius: $xxs-unit;
    color: $grey-7;
    justify-content: center;
    letter-spacing: 0.05rem;
    min-width: 125px;
    padding: $sm-unit $lg-unit;
    text-transform: uppercase;

    @include option(error) {
        border-color: $red-9;
        color: $red-9;

        &:hover {
            background: $red-9;
            color: $grey-1;
        }
    }

    @include option(primary) {
        background-color: $primary;
        color: $white;

        &:hover {
            background: $primary;
            color: $white;
        }
    }

    @include option(success) {
        border-color: $green-7;
        color: $green-7;

        &:hover {
            background: $green-7;
            color: $grey-2;
        }
    }

    @include option(warning) {
        border-color: $orange-7;
        color: $orange-7;

        &:hover {
            background: $orange-7;
            color: $grey-2;
        }
    }

    &[disabled] {
        border-color: $grey-6;
        color: $grey-6;
    }
}
</style>
