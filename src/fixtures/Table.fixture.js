import Table from '../components/Table';

export default [
  {
    component: Table,
    name: '3-players',
    props: {
      players: [
        {
          active: true,
          bet: 0,
          folded: false,
          name: 'Button',
          stack: 100,
        },
        {
          active: false,
          bet: 0.5,
          folded: false,
          name: 'Small',
          stack: 99.5,
        },
        {
          active: false,
          bet: 1,
          folded: false,
          name: 'Big',
          stack: 99,
        },
      ],
    },
  },
];

