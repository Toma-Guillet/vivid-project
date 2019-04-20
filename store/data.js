import ee from './event';

const data = {
  number: 9,
  sentence: 'lol'
};
export default data;

ee.on('plop', () => {
  data.number++;
  ee.emit('redraw');
})
