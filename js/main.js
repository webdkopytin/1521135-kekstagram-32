import {DESCRIPTIONS, SIMILAR_COMMENTS_COUNT} from './data.js';
import {getRandomPositiveInteger} from './get-random-positive-integer.js';
import {createRandomIdFromRangeGenerator} from './create-random-id-from-range-generator.js';
import {generateCommentsPhoto} from './generate-comments-photo.js';

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];
const generateIdPhotos = createRandomIdFromRangeGenerator(1, SIMILAR_COMMENTS_COUNT);
const generateIdUrl = createRandomIdFromRangeGenerator(1, SIMILAR_COMMENTS_COUNT);

const createDescriptionPhoto = () => {
  const randNumber = Math.round(Math.random() * 30);
  const similarCommentsPhoto = Array.from({length: randNumber}, () => generateCommentsPhoto());

  return {
    id: generateIdPhotos(),
    url: `photos/${generateIdUrl()}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: Math.round(Math.random() * 200),
    comments: similarCommentsPhoto,
  };
};

const similarDescriptionPhoto = Array.from({length: SIMILAR_COMMENTS_COUNT}, createDescriptionPhoto);

// eslint-disable-next-line no-console
console.log(similarDescriptionPhoto);
