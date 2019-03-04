<template>
  <div class="breadcrumbs" v-if="$route.name === 'event'">
    <div class="container">
      <div class="+flex">
        <router-link class="breadcrumbs__breadcrumb --is-link +uppercase +block" to="/events">Events</router-link>
        <span class="breadcrumbs__breadcrumb +uppercase +block" v-if="$route.name === 'event'">{{ match }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        match() {
            return this.$route.params.slug.split('-').join(' ');
        }
    }
};
</script>

<style lang="scss" scoped>
@include component(breadcrumbs) {
    background: $grey-2;
    border-bottom: 1px solid $grey-3;
    padding: $md-unit 0;

    @include part(breadcrumb) {
        font-size: $base-unit;

        @include option(is-link) {
            color: $primary;
        }

        &:not(:last-child) {
            &::after {
                color: $grey-6;
                content: '/';
                margin: 0 $sm-unit;
            }
        }
    }
}
</style>
