<template>
  <header class="main-nav">
    <div class="container">
      <nav class="main-nav__links-container">
        <div class="main-nav__links">
          
          <router-link exact-active-class="--active" to="/" class="main-nav__link">Home</router-link>
          <router-link exact-active-class="--active" :to="{ name: 'about' }" class="main-nav__link">About</router-link>
          <router-link exact-active-class="--active" :to="{ name: 'events' }" class="main-nav__link">Leagues</router-link>
        </div>

        <div class="main-nav__links">
          <router-link exact-active-class="--active" :to="{ name: 'login' }" class="main-nav__link">Login</router-link>
          <router-link exact-active-class="--active" :to="{ name: 'register' }" class="main-nav__link --sign-up">Sign Up</router-link>
        </div>
      </nav>
    </div>
    <bread-crumbs/>
  </header>
</template>

<script>
import BreadCrumbs from '@/components/breadcrumbs';
import { mixin as clickaway } from 'vue-clickaway';

export default {
    components: { BreadCrumbs },
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

    @include part(logo) {
        flex: 0 0 $logo-width;
        margin-right: $lg-unit;
        max-width: $logo-width;
    }

    @include part(dropdown) {
        z-index: $z-three;
    }

    @include part(dropdown-container) {
        background: $white;
        border-radius: $xxs-unit;
        box-shadow: $elevation-4;
        display: flex;
        flex-direction: column;
        padding: $sm-unit 0;
        position: absolute;
        top: 100%;

        &::before {
            background: $white;
            border-radius: 1px;
            content: '';
            height: 15px;
            left: 15px;
            position: absolute;
            top: -7px;
            transform: rotate(45deg);
            width: 15px;
            z-index: -1;
        }

        > .main-nav__link {
            min-height: unset;

            &:after {
                display: none;
            }

            &:hover {
                background: $grey-2;
            }
        }
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
