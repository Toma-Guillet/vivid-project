import ee from './event';

const data = {
  number: 9.12,
  sentence: 'lol'
};
export default data;

ee.on('plop', () => {
  data.number++;
  ee.emit('redraw');
})
