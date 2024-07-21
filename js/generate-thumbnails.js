const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = ({url, description, likes, comments}) => {
  const tumbnail = similarPictureTemplate.cloneNode(true);

  tumbnail.querySelector('.picture__img').src = url;
  tumbnail.querySelector('.picture__img').alt = description;
  tumbnail.querySelector('.picture__likes').textContent = likes;
  tumbnail.querySelector('.picture__comments').textContent = comments.length;

  return tumbnail;
};

const generateTumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const tumbnail = createThumbnail(picture);
    fragment.append(tumbnail);
  });

  container.append(fragment);
};

export {generateTumbnails};
