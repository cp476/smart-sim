<template>
  <section>
    <hero/>
    <div class="container +mg-t-xl +mg-b-xl">
      <div class="grid">
        <div class="col-8 +flex +flex-direction-column +justify-content-center +pd-xl">
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempora laborum, repellendus aperiam nisi ut vero expedita vitae voluptas! Earum quo reiciendis tempore quae quasi voluptatem corrupti accusantium sit illum?</p>
          <router-link class="hero__view-more +text-primary +mg-t-xl +uppercase +text-bold +text-base +flex +align-items-center" :to="{ name: 'events' }">
            <span class="+mg-r-md">View all leagues</span>
            <i class="material-icons hero__arrow +text-primary">
              arrow_forward
            </i>
          </router-link>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Hero from '@/components/landing-hero';

export default {
    components: { Hero }
};
</script>
