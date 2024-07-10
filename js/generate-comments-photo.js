import {NAMES, MESSAGES} from './data.js';
import {getRandomArrayElement} from './get-random-array-element.js';

/**
 * Генерирует комментарии к фотографиям
 * @returns объект с id, avatar, message, name
 */
function generateCommentsPhoto() {
  return {
    id: Math.round(Math.random() * 300),
    avatar: `img/avatar-${Math.floor(Math.random() * 6 + 1)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
}

export {generateCommentsPhoto};
