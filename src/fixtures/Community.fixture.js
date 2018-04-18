import Community from '../components/Community';

export default [
  {
    component: Community,
    name: 'default',
  },
  {
    component: Community,
    name: 'preflop',
    props: {
      pot: 2,
    },
  },
  {
    component: Community,
    name: 'flop',
    props: {
      board: ['As', '5h', '8d'],
      pot: 2,
    },
  },
  {
    component: Community,
    name: 'turn',
    props: {
      board: ['As', '5h', '8d', 'Jc'],
      pot: 2,
    },
  },
  {
    component: Community,
    name: 'river',
    props: {
      board: ['As', '5h', '8d', 'Jc', '4s'],
      pot: 2,
    },
  },
];

