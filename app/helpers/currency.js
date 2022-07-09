import { helper } from '@ember/component/helper';

export default helper(function currency(params, hash = {}) {
  const [number] = params;
  const { sign = 'रु' } = hash;
  const rupees = Math.floor(number);
  let paisa = Math.floor((number * 100) % 100);
  if (paisa.toString().length === 1) {
    paisa = '0' + paisa;
  }
  return `${sign}${rupees}.${paisa}`;
});
