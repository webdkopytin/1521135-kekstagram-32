const NAMES = [
  'Дмитрий',
  'Иван',
  'Рудольф',
  'Альф',
  'Юрий',
  'Михаил',
  'Инокентий',
  'Игорь',
];

const DESCRIPTIONS = [
  'Скользи со мной в наше общее будущее.',
  'Про раннюю осень и запах дымка.',
  'Или как надули матрас и плавали на нём по озеру.',
  'Зимнее солнце, собаченьки и мандарины.',
  'В поиске интересных ракурсов.',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const SIMILAR_COMMENTS_COUNT = 25;

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

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

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const randNumber = Math.round(Math.random() * 30);

const generateIdPhotos = createRandomIdFromRangeGenerator(1, SIMILAR_COMMENTS_COUNT);
const generateIdUrl = createRandomIdFromRangeGenerator(1, SIMILAR_COMMENTS_COUNT);
const similarCommentsPhoto = Array.from({length: randNumber}, generateCommentsPhoto);

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

const createDescriptionPhoto = () => ({
  id: generateIdPhotos(),
  url: `photos/${generateIdUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: Math.round(Math.random() * 200),
  comments: similarCommentsPhoto,
});

const similarDescriptionPhoto = Array.from({length: SIMILAR_COMMENTS_COUNT}, createDescriptionPhoto);

// eslint-disable-next-line no-console
console.log(similarDescriptionPhoto);
