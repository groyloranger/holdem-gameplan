import Table from '../components/Table';

export default [
  {
    component: Table,
    name: '3-players',
    props: {
      community: {
        board: [],
        pot: 1.5,
      },
      players: {
        seat0: {
          active: true,
          bet: 0,
          folded: false,
          name: 'Button',
          stack: 100,
        },
        seat1: {
          active: false,
          bet: 0,
          folded: false,
          name: 'Small',
          stack: 99.5,
        },
        seat2: {
          active: false,
          bet: 1,
          folded: false,
          name: 'Big',
          stack: 99,
        },
      },
    },
  },
];

