// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';

// const mock = new MockAdapter(axios, { delayResponse: 0 });

// mock.onGet('/events').reply(200, [
//     {
//         category: 'NHL',
//         events: [
//             {
//                 arena: 'Scotiabank Arena',
//                 id: '12345A',
//                 slug: 'toronto-maple-leafs-vs-montreal-canadiens',
//                 location: 'Toronto, ON',
//                 date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
//                 starting_time: '7:00 PM ET',
//                 is_preferred_event: true,
//                 odds: [
//                     {
//                         org: 'Bodog',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 direction: '+',
//                                 grade: 'C',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'Sports Interaction',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             grade: 'B',
//                             spread: {
//                                 direction: '+',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'Pinnacle',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 direction: '+',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'William Hill',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 grade: 'A',
//                                 direction: '+',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     }
//                 ],
//                 team_1: {
//                     full_name: 'Toronto Maple Leafs',
//                     is_home_team: true,
//                     city: 'Toronto',
//                     team_name: 'Maple Leafs',
//                     name_short: 'TOR',
//                     record: '40-5-1',
//                     logo:
//                         'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/90x90/hockey/nhl/toronto-maple-leafs.png',
//                     division_rank: 1,
//                     power_rank: 1,
//                     division: 'Atlantic',
//                     last_10: '8-1-0'
//                 },
//                 team_2: {
//                     full_name: 'Montreal Canadians',
//                     is_home_team: false,
//                     city: 'Toronto',
//                     team_name: 'Canadiens',
//                     name_short: 'MTL',
//                     record: '5-40-1',
//                     logo:
//                         'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/90x90/hockey/nhl/montreal-canadiens.png',
//                     division_rank: 10,
//                     power_rank: 13,
//                     division: 'Atlantic',
//                     last_10: '8-1-0'
//                 }
//             },
//             {
//                 arena: 'Scotiabank Saddledome',
//                 id: '12345B',
//                 slug: 'calgary-flames-vs-buffalo-sabres',
//                 location: 'Calgary, AL',
//                 date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
//                 starting_time: '7:30 PM ET',
//                 is_preferred_event: false,
//                 odds: [
//                     {
//                         org: 'Pinnacle',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 direction: '+',
//                                 grade: 'C',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'C'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'Bodog',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 direction: '+',
//                                 grade: 'C',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'C'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'B'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'Sports Interaction',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             grade: 'B',
//                             spread: {
//                                 direction: '+',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'C'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'William Hill',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 grade: 'A',
//                                 direction: '+',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     }
//                 ],
//                 team_1: {
//                     full_name: 'Calgary Flames',
//                     is_home_team: true,
//                     city: 'Calgary',
//                     team_name: 'Flames',
//                     name_short: 'CAL',
//                     record: '40-5-1',
//                     logo:
//                         'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/hockey/nhl/calgary-flames.png',
//                     division_rank: 5,
//                     power_rank: 4,
//                     division: 'Atlantic',
//                     last_10: '8-1-0'
//                 },
//                 team_2: {
//                     full_name: 'Buffalo Sabres',
//                     is_home_team: false,
//                     city: 'Buffalo',
//                     team_name: 'Sabres',
//                     name_short: 'BUF',
//                     record: '5-40-1',
//                     logo:
//                         'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/hockey/nhl/buffalo-sabres.png',
//                     division_rank: 12,
//                     power_rank: 22,
//                     division: 'Atlantic',
//                     last_10: '8-1-0'
//                 }
//             },
//             {
//                 arena: 'Capital One Arena',
//                 id: '12345C',
//                 slug: 'washington-capitals-vs-boston-bruins',
//                 location: 'Washington, DC',
//                 date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
//                 starting_time: '10:00 PM ET',
//                 is_preferred_event: false,
//                 odds: [
//                     {
//                         org: 'Sports Interaction',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             grade: 'B',
//                             spread: {
//                                 direction: '+',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'Bodog',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 direction: '+',
//                                 grade: 'C',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'Pinnacle',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 direction: '+',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'William Hill',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 grade: 'A',
//                                 direction: '+',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     }
//                 ],
//                 team_1: {
//                     full_name: 'Washington Capitals',
//                     is_home_team: true,
//                     city: 'Washington',
//                     team_name: 'Capitals',
//                     name_short: 'WAS',
//                     record: '24-5-1',
//                     logo:
//                         'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/hockey/nhl/washington-capitals.png',
//                     division_rank: 3,
//                     power_rank: 4,
//                     division: 'Atlantic',
//                     last_10: '8-1-0'
//                 },
//                 team_2: {
//                     full_name: 'Boston Bruins',
//                     is_home_team: false,
//                     city: 'Boston',
//                     team_name: 'Bruins',
//                     name_short: 'BOS',
//                     record: '30-2-11',
//                     logo:
//                         'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/hockey/nhl/boston-bruins.png',
//                     division_rank: 6,
//                     power_rank: 15,
//                     division: 'Atlantic',
//                     last_10: '8-1-0'
//                 }
//             },
//             {
//                 arena: 'Honda Center',
//                 id: '12345D',
//                 slug: 'anaheim-ducks-vs-san-jose-sharks',
//                 location: 'Anaheim, CA',
//                 date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
//                 starting_time: '10:30 PM ET',
//                 is_preferred_event: false,
//                 odds: [
//                     {
//                         org: 'Bodog',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 direction: '+',
//                                 grade: 'C',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'C',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'Sports Interaction',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             grade: 'B',
//                             spread: {
//                                 direction: '+',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'Pinnacle',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 direction: '+',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'William Hill',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 grade: 'A',
//                                 direction: '+',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     }
//                 ],
//                 team_1: {
//                     full_name: 'Anaheim Ducks',
//                     is_home_team: true,
//                     city: 'Anaheim',
//                     team_name: 'Ducks',
//                     name_short: 'ANA',
//                     record: '24-5-1',
//                     logo:
//                         'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/hockey/nhl/anaheim-ducks.png',
//                     division_rank: 1,
//                     power_rank: 1,
//                     division: 'Atlantic',
//                     last_10: '8-1-0'
//                 },
//                 team_2: {
//                     full_name: 'San Jose Sharks',
//                     is_home_team: false,
//                     city: 'San Jose',
//                     team_name: 'Sharks',
//                     name_short: 'SJS',
//                     record: '30-2-11',
//                     logo:
//                         'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/hockey/nhl/san-jose-sharks.png',
//                     division_rank: 7,
//                     power_rank: 14,
//                     division: 'Atlantic',
//                     last_10: '8-1-0'
//                 }
//             }
//         ]
//     },
//     {
//         category: 'MLB',
//         events: [
//             {
//                 arena: 'Rogers Center',
//                 id: '12345F',
//                 slug: 'toronto-blue-jays-vs-new-york-yankees',
//                 location: 'Toronto, ON',
//                 date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
//                 starting_time: '7:00 PM ET',
//                 is_preferred_event: false,
//                 odds: [
//                     {
//                         org: 'Bodog',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 direction: '+',
//                                 direction: '+',
//                                 grade: 'C',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '+',
//                                 grade: 'C',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'C'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'Sports Interaction',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             grade: 'B',
//                             spread: {
//                                 direction: '+',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'Pinnacle',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 direction: '+',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'William Hill',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 grade: 'A',
//                                 direction: '+',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     }
//                 ],
//                 team_1: {
//                     full_name: 'Toronto Blue Jays',
//                     is_home_team: true,
//                     city: 'Toronto',
//                     team_name: 'Blue Jays',
//                     name_short: 'TOR',
//                     record: '40-5-1',
//                     logo:
//                         'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/90x90/baseball/mlb/toronto-blue-jays.png',
//                     division_rank: 1,
//                     power_rank: 1,
//                     division: 'Atlantic',
//                     last_10: '8-1-0'
//                 },
//                 team_2: {
//                     full_name: 'New York Yankees',
//                     is_home_team: false,
//                     city: 'New York',
//                     team_name: 'Yankees',
//                     name_short: 'NYY',
//                     record: '5-40-1',
//                     logo:
//                         'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/90x90/baseball/mlb/new-york-yankees.png',
//                     division_rank: 8,
//                     power_rank: 18,
//                     division: 'Atlantic',
//                     last_10: '8-1-0'
//                 }
//             }
//         ]
//     },
//     {
//         category: 'NFL',
//         events: [
//             {
//                 arena: 'Lincoln Financial Field',
//                 id: '12345E',
//                 slug: 'atlanta-falcons-vs-philadelphia-eagles',
//                 location: 'Philadelphia, Pennsylvania',
//                 date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
//                 starting_time: '7:00 PM ET',
//                 is_preferred_event: false,
//                 odds: [
//                     {
//                         org: 'Bodog',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 direction: '+',
//                                 grade: 'D',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'D'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'Sports Interaction',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             grade: 'B',
//                             spread: {
//                                 direction: '+',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'Pinnacle',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 direction: '+',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'William Hill',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 grade: 'A',
//                                 direction: '+',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     }
//                 ],
//                 team_1: {
//                     full_name: 'Atlanta Falcons',
//                     is_home_team: false,
//                     city: 'Atlanta',
//                     team_name: 'Falcons',
//                     name_short: 'ATL',
//                     record: '1-0-0',
//                     logo:
//                         'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/football/nfl/atlanta-falcons.png',
//                     division_rank: 1,
//                     power_rank: 1,
//                     division: 'Atlantic',
//                     last_10: '1-0-0'
//                 },
//                 team_2: {
//                     full_name: 'Philadelphia Eagles',
//                     is_home_team: true,
//                     city: 'Philadelphia',
//                     team_name: 'Eagles',
//                     name_short: 'PHL',
//                     record: '0-0-1',
//                     logo:
//                         'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/football/nfl/philadelphia-eagles.png',
//                     division_rank: 8,
//                     power_rank: 18,
//                     division: 'Atlantic',
//                     last_10: '0-0-1'
//                 }
//             },
//             {
//                 arena: 'M&T Bank Stadium',
//                 id: '12345G',
//                 slug: 'buffalo-bills-vs-baltimore-ravens',
//                 location: 'Baltimore, Maryland',
//                 date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
//                 starting_time: '7:00 PM ET',
//                 is_preferred_event: true,
//                 odds: [
//                     {
//                         org: 'Bodog',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 direction: '+',
//                                 grade: 'D',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'C',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'Sports Interaction',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             grade: 'B',
//                             spread: {
//                                 direction: '+',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'Pinnacle',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 direction: '+',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     },
//                     {
//                         org: 'William Hill',
//                         id: Math.random()
//                             .toString(36)
//                             .replace(/[^a-z]+/g, '')
//                             .substr(2, 10),
//                         draw: '+400',
//                         team_1: {
//                             spread: {
//                                 grade: 'A',
//                                 direction: '+',
//                                 value: 6
//                             },
//                             runline: '1.555556',
//                             moneyline: {
//                                 direction: '+',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: Math.floor(Math.random() * 100 + 1),
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             over_pref: '8.5',
//                             total: '2.050'
//                         },
//                         team_2: {
//                             spread: {
//                                 direction: '-',
//                                 grade: 'A',
//                                 value: 6
//                             },
//                             runline: {
//                                 value: '2.42',
//                                 grade: 'C'
//                             },
//                             moneyline: {
//                                 direction: '-',
//                                 value: Math.floor(Math.random() * 500 + 1),
//                                 grade: 'A'
//                             },
//                             true_odds: {
//                                 value: 25,
//                                 is_smart_bet: false,
//                                 grade: 'A'
//                             },
//                             under_pref: '8.5',
//                             total: '1.800'
//                         }
//                     }
//                 ],
//                 team_1: {
//                     full_name: 'Buffalo Bills',
//                     is_home_team: false,
//                     city: 'Buffalo',
//                     team_name: 'Bills',
//                     name_short: 'BUF',
//                     record: '1-0-0',
//                     logo:
//                         'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/football/nfl/buffalo-bills.png',
//                     division_rank: 5,
//                     power_rank: 4,
//                     division: 'Atlantic',
//                     last_10: '0-0-1'
//                 },
//                 team_2: {
//                     full_name: 'Baltimore Ravens',
//                     is_home_team: true,
//                     city: 'Baltimore',
//                     team_name: 'Ravens',
//                     name_short: 'BAL',
//                     record: '0-0-1',
//                     logo:
//                         'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/football/nfl/baltimore-ravens.png',
//                     division_rank: 2,
//                     power_rank: 4,
//                     division: 'Atlantic',
//                     last_10: '1-0-0'
//                 }
//             }
//         ]
//     }
// ]);
