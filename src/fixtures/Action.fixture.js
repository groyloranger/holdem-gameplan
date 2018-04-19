import Action from '../components/Action';

export default [
  {
    component: Action,
    name: 'default',
    props: {
      fold: () => {
        console.log('fold');
      },
      call: () => {
        console.log('call');
      },
      raise: () => {
        console.log('raise');
      },
      handleAmount: () => {
        console.log('amount changed');
      },
    },
  },
];

