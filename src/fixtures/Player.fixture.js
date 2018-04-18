import Player from '../components/Player';

export default [
  {
    component: Player,
    name: 'active',
    props: {
      active: true,
      bet: 1,
      name: 'Hero',
      stack: 199,
    },
  },
  {
    component: Player,
    name: 'default',
  },
  {
    component: Player,
    name: 'folded',
    props: {
      bet: 1,
      folded: true,
      name: 'Hero',
      stack: 199,
    },
  },
  {
    component: Player,
    name: 'inactive',
    props: {
      bet: 1,
      name: 'Hero',
      stack: 199,
    },
  },
];

