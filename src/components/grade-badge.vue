<template>
  <div
    class="grade"
    :class="gradeStyle">
    {{ grade }}
  </div>
</template>

<script>
export default {
    props: {
        grade: { type: String, required: true }
    },
    computed: {
        gradeStyle() {
            return `--${this.grade.toLowerCase()}`;
        }
    }
};
</script>

<style lang="scss" scoped>
@include component(grade) {
    align-items: center;
    background: linear-gradient($grey-3, lighten($grey-5, 10%));
    border-radius: 50%;
    color: $grey-9;
    display: flex;
    font-size: $sm-unit;
    height: 25px;
    justify-content: center;
    line-height: 1;
    width: 25px;

    @include option(a) {
        background: linear-gradient($green-4, lighten($green-6, 10%));
    }

    @include option(b) {
        background: linear-gradient($green-2, lighten($green-4, 10%));
    }

    @include option(c) {
        background: linear-gradient($red-2, lighten($red-4, 10%));
    }

    @include option(d) {
        background: linear-gradient($red-4, lighten($red-6, 10%));
    }
}
</style>
