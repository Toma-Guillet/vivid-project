import ee from './event';

const data = {
  number: 9.12,
  sentence: 'lol',
  logs: [
    {
      date: "2019-06-06T05:09:44.124Z",
      value: 25,
      category: 1,
      logType: 0
    },
    {
      date: "2019-06-05T06:24:44.124Z",
      value: -25,
      category: 1,
      logType: 0
    },
    {
      date: "2019-06-05T06:24:44.124Z",
      value: 25,
      category: 1,
      logType: 2
    },
    {
      date: "2019-06-05T06:24:44.124Z",
      value: 25,
      category: 1,
      logType: 0
    },
    {
      date: "2018-06-05T06:24:44.124Z",
      value: -25,
      category: 1,
      logType: 0
    },
    {
      date: "2019-06-05T06:24:44.124Z",
      value: 25,
      category: 1,
      logType: 0
    },
    {
      date: "2019-06-05T06:24:44.124Z",
      value: -25,
      category: 1,
      logType: 0
    },
    {
      date: "2019-06-05T06:24:44.124Z",
      value: 25,
      category: 1,
      logType: 0
    }
  ]
};
export default data;

ee.on('plop', () => {
  data.number++;
  ee.emit('redraw');
})
