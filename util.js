const generateText = (name, age) => {
  return `${name} (${age} years old)`;
};

exports.createElement = (type, text, className) => {
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

const validateInput = (text, notEmpty, isNumber) => {
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && +text === NaN) {
    return false;
  }
  return true;
};

exports.checkAndGenerate = (name, age) => {
  if (!validateInput(name, true, false) || !validateInput(age, false, true)) {
    return false;
  }
  return generateText(name, age);
};

exports.generateText = generateText;
exports.validateInput = validateInput;
