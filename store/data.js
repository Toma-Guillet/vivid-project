import ee from './event';

const data = {
  number: 9.12,
  sentence: 'lol',
  logs: [
    {
      date: 1,
      logType: 0
    },
    {
      date: 10,
      logType: 0
    },
    {
      date: 4,
      logType: 2
    },
    {
      date: 1,
      logType: 0
    },
    {
      date: 31,
      logType: 0
    },
    {
      date: 1,
      logType: 0
    }
  ]
};
export default data;

ee.on('plop', () => {
  data.number++;
  ee.emit('redraw');
})
