import {getRandomPositiveInteger} from './get-random-positive-integer.js';

/**
 * Создаёт массив неповторяющихся чисел из диапазона
 * @param {int} min минимальное число
 * @param {int} max максимальное число
 * @returns массив чисел
 */
function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

export {createRandomIdFromRangeGenerator};
