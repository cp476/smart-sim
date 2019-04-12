<template>
  <header class="main-nav">
    <div class="container">
      <nav class="main-nav__links-container">
        <div class="main-nav__links">
          
          <router-link exact-active-class="--active" to="/landing" class="main-nav__link">Home</router-link>
          <router-link exact-active-class="--active" :to="{ name: 'events' }" class="main-nav__link">Leagues</router-link>
        </div>

        <div class="main-nav__links">
          <router-link exact-active-class="--active" :to="{ name: 'login' }" class="main-nav__link --sign-up">Login</router-link>
        </div>
      </nav>
    </div>
    <bread-crumbs/>
  </header>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
    mixins: [clickaway],
    data: () => ({
        dropdown: {
            faq: false
        }
    }),
    methods: {
        toggleDropdown(ele) {
            this.dropdown[ele] = !this.dropdown[ele];
        },
        hideFaq() {
            this.dropdown.faq = false;
        }
    }
};
</script>

<style lang="scss" scoped>
$logo-width: $xl-unit * 3;

@include component(main-nav) {
    background: $grey-1;
    border-bottom: 2px solid $grey-3;
    color: $grey-7;
    position: sticky;
    top: 0;
    z-index: $z-five;

    @include part(button) {
        background: transparent;
        border: 0;
        color: $grey-7;
        cursor: pointer;
        line-height: 1;
    }

    @include part(links-container) {
        display: flex;
        justify-content: space-between;
    }

    @include part(link) {
        align-items: center;
        display: flex;
        font-size: $base-unit;
        font-weight: $font-semi-bold;
        letter-spacing: 0.05rem;
        min-height: 75px;
        padding: $md-unit;
        position: relative;
        text-transform: uppercase;

        &:hover {
            color: $primary;
        }

        &::after {
            background: $primary;
            bottom: -2px;
            content: '';
            height: 2px;
            left: 50%;
            position: absolute;
            transform: translateX(-50%);
            transform-origin: center;
            transition: width 300ms ease;
            width: 0;
        }

        @include option(active) {
            color: $primary;

            &::after {
                width: 60%;
            }
        }

        @include option(sign-up) {
            background: $primary;
            border-radius: $xl-unit;
            color: $white;
            margin-left: $md-unit;
            min-height: unset;
            padding: $sm-unit $lg-unit;
        }
    }

    @include part(links) {
        align-items: center;
        display: flex;
    }
}
</style>
