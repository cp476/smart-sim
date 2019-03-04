<template>
  <div class="events">


    <div class="container +mg-t-lg +mg-b-xxl">
      <div class="grid" v-if="!events">
        <div class="col-12 +text-center">
          <loader border-width="4" size="36"/>
          <h2 class="+uppercase +text-md +mg-t-md">Loading Events</h2>
        </div>
      </div>

      <div class="grid">
        <div class="col-9">
          <div class="grid events__category --no-gap" v-for="(category, index) in events" :key="index">
            <div class="col-12">
              <div class="events__category-header">
                <h2 class="+text-base +text-bold +uppercase +text-grey-6"> {{ category.category }} League</h2>
                <div class="events__count +mg-r-xs">{{ category.events.length }}</div>
              </div>
            </div>

            <div class="col-12">
              <table class="events__table">
                <tr class="events__table-header">
                  <th class="+uppercase +text-sm +text-grey-6">Date</th>
                  <th class="+uppercase +text-sm +text-grey-6">Teams</th>

                  <!-- <th class="+uppercase +text-sm +text-grey-6">
                    <div class="+flex +align-items-center">
                      Win %
                      <info-badge class="+mg-l-sm" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, asperiores."/>
                    </div>
                  </th> -->

                  <th class="+uppercase +text-sm +text-grey-6">
                    <div class="+flex +align-items-center">
                      Moneyline
                      <info-badge class="+mg-l-sm" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, asperiores."/>
                    </div>
                  </th>
                  <th class="+uppercase +text-sm +text-grey-6">
                    <div class="+flex +align-items-center">
                      Runline
                      <info-badge class="+mg-l-sm" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, asperiores."/>
                    </div>
                  </th>
                  <th class="+uppercase +text-sm +text-grey-6">
                    <div class="+flex +align-items-center">
                      Total
                      <info-badge class="+mg-l-sm" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, asperiores."/>
                    </div>
                  </th>
                </tr>
                <template v-for="(event, index) in category.events">
                  <tr class="events__table-row" :key="`top-row-${index}`" :class="{ '--smartline': event.is_preferred_event }">
                    <td>
                      <span class="+block +text-base +mg-b-sm">{{ date(event.date) }}</span>
                      <span class="+block +text-grey-5 +text-sm">{{ event.starting_time }}</span>
                    </td>
                    <td>
                      <div>
                        <div class="events__split-column">
                          <img :src="event.team_1.logo" class="events__logo +mg-r-xs" :alt="event.team_1.full_name">
                          <span class="+block">{{ event.team_1.team_name }}</span>
                        </div>
                        <div class="events__split-column">
                          <img :src="event.team_2.logo" class="events__logo +mg-r-xs" :alt="event.team_2.full_name">
                          <span class="+block">{{ event.team_2.team_name }}</span>
                        </div>
                      </div>
                    </td>

                    <!-- <td>
                      <div class="events__split-column +flex">
                        <svg width="24" height="24" class="events__smartline-icon +mg-r-xs" v-tooltip="{ content: 'Smart sports sim Daily Pick' }">
                          <g fill="#0094D2" fill-rule="evenodd">
                            <path fill-rule="nonzero" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0 1C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z"/>
                            <path d="M8.409 17.168c-1.722 0-2.968-.602-3.794-1.484l.91-1.26a4.028 4.028 0 0 0 2.954 1.288c1.344 0 1.876-.658 1.876-1.274 0-1.96-5.446-.742-5.446-4.186 0-1.54 1.358-2.73 3.402-2.73 1.456 0 2.632.462 3.5 1.302l-.938 1.218c-.728-.728-1.722-1.064-2.702-1.064-.966 0-1.582.462-1.582 1.162 0 1.736 5.432.658 5.432 4.144 0 1.554-1.092 2.884-3.612 2.884zM19.287 17h-5.754V7.662h1.638v7.896h4.116V17z"/>
                          </g>
                        </svg>
                        <span>{{ event.odds[0].team_1.true_odds.value }}%</span>
                      </div>
                      <div class="events__split-column +flex">
                        <i class="material-icons +text-lg +mg-r-xs +text-red-4" v-tooltip="{ content: 'Careful with this bet' }">thumb_down</i>
                        <span>{{ event.odds[0].team_2.true_odds.value }}%</span>
                      </div>
                    </td> -->


                    <td>
                      <button :class="{ '--active': isActiveTab(event, 'moneyline', 'team_1') }" class="events__pill +mg-b-xs" @click="checkPayout(event, 'moneyline', 'team_1')">
                        <grade-badge :grade="event.odds[0].team_1.moneyline.grade" class="+mg-r-xs" />
                        <span class="+text-primary +text-sm +text-bold">{{ event.odds[0].team_1.moneyline.direction }}{{ event.odds[0].team_1.moneyline.value }}</span>
                      </button>

                      <button :class="{ '--active': isActiveTab(event, 'moneyline', 'team_2') }" class="events__pill" @click="checkPayout(event, 'moneyline', 'team_2')">
                        <grade-badge :grade="event.odds[0].team_2.moneyline.grade" class="+mg-r-xs" />
                        <span class="+text-primary +text-sm +text-bold">{{ event.odds[0].team_2.moneyline.direction }}{{ event.odds[0].team_2.moneyline.value }}</span>
                      </button>
                    </td>
                    <td>
                      <button :class="{ '--active': isActiveTab(event, 'true_odds', 'team_1') }" class="events__pill +mg-b-xs" @click="checkPayout(event, 'true_odds', 'team_1')">
                        <grade-badge :grade="event.odds[0].team_1.true_odds.grade" class="+mg-r-xs" />
                        <span class="+text-primary +text-sm +text-bold">{{ event.odds[0].team_1.true_odds.direction }}{{ event.odds[0].team_1.true_odds.value }}</span>
                      </button>

                      <button :class="{ '--active': isActiveTab(event, 'true_odds', 'team_2') }" class="events__pill" @click="checkPayout(event, 'true_odds', 'team_2')">
                        <grade-badge :grade="event.odds[0].team_2.true_odds.grade" class="+mg-r-xs" />
                        <span class="+text-primary +text-sm +text-bold">{{ event.odds[0].team_2.true_odds.direction }}{{ event.odds[0].team_2.true_odds.value }}</span>
                      </button>
                    </td>
                    <td>
                      <button :class="{ '--active': isActiveTab(event, 'spread', 'team_1') }" class="events__pill +mg-b-xs" @click="checkPayout(event, 'spread', 'team_1')">
                        <grade-badge :grade="event.odds[0].team_1.spread.grade" class="+mg-r-xs" />
                        <span class="+text-primary +text-sm +text-bold">{{ event.odds[0].team_1.spread.direction }}{{ event.odds[0].team_1.spread.value }}</span>
                      </button>

                      <button :class="{ '--active': isActiveTab(event, 'spread', 'team_1') }" class="events__pill" @click="checkPayout(event, 'spread', 'team_2')">
                        <grade-badge :grade="event.odds[0].team_2.spread.grade" class="+mg-r-xs" />
                        <span class="+text-primary +text-sm +text-bold">{{ event.odds[0].team_2.spread.direction }}{{ event.odds[0].team_2.spread.value }}</span>
                      </button>
                    </td>
                  </tr>
                  <tr class="events__table-row-footer" :key="`bottom-row-${index}`">
                    <td colspan="6">
                      <!-- <div class="+pd-sm +border-t-grey-1 +flex +justify-content-space-between +align-items-center">

                        <div class="+flex +align-items-center">
                          <span class="+block +mg-r-sm +uppercase +text-sm">Best odds on: </span>
                          <img class="+height-16px" :src="`/book-logos/${bookLogo(event.odds[0].org)}.png`" :alt="event.odds[0].org">
                        </div>

                        <router-link class="events__view-books +uppercase text-link +flex +align-items-center" :to="{ name: 'event', params: { category: category.category, slug: event.slug } }">
                          <span>View All Books</span>
                          <i class="material-icons +mg-l-xs">arrow_forward</i>
                        </router-link>

                      </div> -->
                    </td>
                  </tr>
                </template>
              </table>
            </div>

          
          <div class="+pd-md +border-t-grey-1 +flex +align-items-center">

            <div class="+flex +align-items-center +inline">
              <span class="+in-line +mg-r-sm +uppercase +text-med">Balance: $100 </span>

            </div>

          </div>


          </div>
        </div>

        <div class="col-3">
          <bet-example :payout="calcData" class="+sticky" @clear-payout="calcData = null" style="top: 93px"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import BetExample from '@/components/bet-example';
import Loader from '@/components/loader';
import InfoBadge from '@/components/info-badge';
import GradeBadge from '@/components/grade-badge';

export default {
    components: {  Loader, BetExample, InfoBadge, GradeBadge },
    data: () => ({
        events: null,
        search: null,
        chips: [],
        calcData: null
    }),
    async created() {
        const events = await axios.get('/events');
        this.events = await events.data;
    },
    methods: {
        isActiveTab(event, type, team) {
            if (!this.calcData) return;
            return (
                event.odds[0][team][type].value === this.calcData.val &&
                type === this.calcData.type &&
                event[team].full_name == this.calcData.team
            );
        },
        
        date(date) {
            return moment(date).format('MMM Do, YY');
        },
        createChips(val) {
            this.chips = [];
            const values = val.filter(n => n);
            values.forEach(value => this.chips.push(value));
        },
        removeChip(val) {
            this.chips = this.chips.filter(item => item !== val);
            this.search = '';
        },
        updateEvents(val) {
            const sport = val.sport.value === 'All Sports' ? '' : val.sport.value;
            const event = val.event.value === null ? '' : val.event.value;

            this.search = `${sport} ${event}`;
            this.createChips([sport, event]);
        },
        checkPayout(event, type, team) {
            this.calcData = {
                team: event[team].full_name,
                type,
                grade: event.odds[0][team][type].grade,
                direction: event.odds[0][team][type].direction,
                org: event.odds[0].org,
                val: event.odds[0][team][type].value
            };
        }
    }
};
</script>

<style lang="scss">
@include component(events) {
    @include part(category-header) {
        align-items: center;
        background: $grey-1;
        border-radius: 4px 4px 0 0;
        display: flex;
        justify-content: space-between;
        min-height: 57px;
        padding: $md-unit;
    }

    @include part(smartline-icon) {
        animation: icon 1000ms ease 1000ms infinite;
    }

    @include part(split-column) {
        align-items: center;
        display: flex;
        min-height: 45px;
    }

    @include part(next) {
        align-items: center;
        border-radius: 50%;
        display: flex;
        flex: none;
        height: 40px;
        justify-content: center;
        width: 40px;

        &:hover {
            background: $grey-2;
        }
    }

    @include part(not-found) {
        flex: 0 0 500px;
    }

    @include part(pill) {
        align-items: center;
        border: 1px solid $grey-2;
        border-radius: 50px;
        cursor: pointer;
        display: flex;
        flex: none;
        justify-content: space-between;
        min-width: 80px;
        padding: $xxs-unit;
        padding-right: $sm-unit;

        &:hover {
            background: $grey-1;
        }

        @include option(active) {
            border-color: $primary;
        }
    }

    @include part(category) {
        background: $white;
        border-radius: 4px;
        box-shadow: $elevation-5;

        &:not(:first-of-type) {
            margin-top: $xl-unit;
        }
    }

    @include part(table) {
        border-collapse: collapse;
        width: 100%;

        td,
        th {
            padding: $md-unit;
            position: relative;
            text-align: left;
        }
    }

    @include part(table-header) {
        border-bottom: 1px solid $grey-3;
    }

    @include part(table-row) {
        @include option(smartline) {
            box-shadow: 3px 0 0 $primary inset;
        }
    }

    @include part(table-row-footer) {
        > td {
            padding: 0 $md-unit;
        }

        &:not(:last-of-type) {
            border-bottom: 1px solid $grey-2;
        }
    }

    @include part(logo) {
        border: 1px solid $grey-2;
        border-radius: 50%;
        height: 25px;
        width: 25px;

        > img {
            height: 100%;
            object-fit: cover;
            width: 100%;
        }
    }

    @include part(count) {
        align-items: center;
        background: $primary;
        border-radius: 50%;
        color: $white;
        display: flex;
        font-size: $base-unit;
        height: 25px;
        justify-content: center;
        width: 25px;
    }
}

@keyframes icon {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(1);
    }
}
</style>
