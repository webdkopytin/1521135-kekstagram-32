const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const makeThumbnails = ({url, description, likes, comments}) => {
  const thumbnail = similarPictureTemplate.cloneNode(true);
  const thumbnailPicture = thumbnail.querySelector('.picture__img');

  thumbnailPicture.src = url;
  thumbnailPicture.alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

  return thumbnail;
};

const makeAllThumbnailFragments = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbnail = makeThumbnails(picture);
    fragment.append(thumbnail);
  });

  container.append(fragment);
};

export {makeAllThumbnailFragments};
