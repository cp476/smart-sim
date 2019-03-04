<template lang="html">
  <div class="loader-container flex flex-center text-center">
    <div class="loader" :style="{ width: size + 'px', height: size + 'px' }">
      <div class="loader-animation" :style="{ borderWidth: borderWidth + 'px' }"/>
    </div>
    <slot name="label"/>
  </div>
</template>

<script>
export default {
    name: 'loader',
    props: {
        size: { default: 28 },
        borderWidth: { default: 6 }
    }
};
</script>

<style lang="scss" scoped>
.loader {
    display: inline-block;
    position: relative;
}

.loader-container {
    &.primary {
        .loader-animation {
            border-bottom: 6px solid rgba($grey-3, 0.85);
            border-left: 6px solid rgba($grey-3, 0.85);
            border-right: 6px solid $primary;
        }
    }
}

.loader-animation {
    animation: loader 1200ms cubic-bezier(0.4, -0.35, 0.25, 1.75) infinite;
    border-bottom: 6px solid rgba($grey-3, 0.85);
    border-left: 6px solid rgba($grey-3, 0.85);
    border-radius: 50%;
    border-right: 6px solid $primary;
    border-top: 6px solid rgba($grey-3, 0.85);
    height: 100%;
    width: 100%;
}

.vertical-loader-label {
    margin-top: $md-unit;

    &.muted {
        color: $grey-8;
    }

    &.small {
        font-size: 0.75rem;
    }
}

@keyframes loader {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
