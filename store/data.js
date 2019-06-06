import ee from './event';

const data = {
  number: 9.12,
  sentence: 'lol',
  logs: [
    {
      date: "2019-06-06T05:09:44.124Z",
      value: 23.2,
      category: 1,
      logType: 'p1'
    },
    {
      date: "2019-06-05T06:24:44.124Z",
      value: -14,
      category: 2,
      logType: 'n2'
    },
    {
      date: "2019-06-05T06:24:44.124Z",
      value: 21.34,
      category: 4,
      logType: 'p2'
    },
    {
      date: "2019-06-06T06:24:44.124Z",
      value: 5.6,
      category: 3,
      logType: 'p1'
    },
    {
      date: "2019-06-06T16:24:44.124Z",
      value: -8.9,
      category: 1,
      logType: 'n1'
    },
    {
      date: "2019-06-06T23:24:44.124Z",
      value: 18,
      category: 5,
      logType: 'p2'
    },
    {
      date: "2019-06-07T06:24:44.124Z",
      value: -1.6,
      category: 1,
      logType: 'n1'
    },
    {
      date: "2019-06-07T06:24:44.124Z",
      value: 24,
      category: 5,
      logType: 'p1'
    }
  ]
};
export default data;

ee.on('plop', () => {
  const value = Math.floor((Math.random() * 50 - 25)*100)/100;
  let logType = null;
  if(value < 0){
    logType = 'n'+Math.floor(Math.random() * 2 + 1);
  }else{
    logType = 'p'+Math.floor(Math.random() * 2 + 1);
  }
  const newArray = {
    date: new Date().getTime(),
    value: value,
    category: Math.floor(Math.random() * 5 + 1),
    logType: logType
  }
  data.logs.push(newArray);
  ee.emit('redraw');
})
