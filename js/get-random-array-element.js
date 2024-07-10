import {getRandomPositiveInteger} from './get-random-positive-integer.js';

/**
 * Создаёт заполненный случайными числами массив
 * @param {int} elements число элементов в массиве
 * @returns массив
 */
function getRandomArrayElement(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

export {getRandomArrayElement};
