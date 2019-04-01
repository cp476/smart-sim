<template>
  <div class="team-badge">
    <img :src="teamLogo" :alt="team"/>
  </div>
</template>

<script>
export default {
    props: {
        team: { type: String, required: true },
        sport: { type: String, required: true }
    },
    computed: {
        teamLogo() {
            const team = this.team.toLowerCase().split(' ').join('-');
            return `/${this.sport}-logos/${team}.gif`;
        },
    }
};
</script>

<style lang="scss" scoped>
@include component(team-badge) {
    align-items: center;
    background: $white;
    border: 1px solid $grey-2;
    border-radius: 50%;
    display: flex;
    height: $xxl-unit;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: $xxl-unit;

    > img {
        height: 100%;
        object-fit: contain;
        object-position: center center;
        width: 100%;
    }
}
</style>
