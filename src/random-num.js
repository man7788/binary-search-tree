/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomList = (min, max, length) => {
  const list = [];
  for (let i = 0; i < length; i++) {
    const num = getRandomInt(min, max);
    list.push(num);
  }
  return list;
};
export { getRandomList };
