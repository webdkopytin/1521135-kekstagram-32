function lengthChecker (stringLine, maxLength) {
  return stringLine.length <= maxLength;
}

lengthChecker('проверяемая строка', 20);
lengthChecker('проверяемая строка', 18);
lengthChecker('проверяемая строка', 10);

function isPalindrome (text) {
  const normalizeText = text.toLowerCase().replaceAll(' ', '');
  let reverceText = '';

  for (let i = normalizeText.length - 1; i >= 0; i--) {
    reverceText += normalizeText.at(i);
  }

  return normalizeText === reverceText;
}

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');
