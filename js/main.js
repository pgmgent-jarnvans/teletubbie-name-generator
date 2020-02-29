// Get elements
const nameElement = document.querySelector('#name');
const teletubieNameElement = document.querySelector('.teletubie-name');
const generateButton = document.querySelector('.send');

// Create event listener
generateButton.addEventListener('click', (e) => {
  e.preventDefault();
  let name = nameElement.value;
  let teletubieLetters = takeLettersFromName(name);
  teletubieNameElement.innerText = teletubieLetters.toUpperCase();
})

/**
 * Loop through name till you encounter a vowel
 * Put all the letter before the vowel and the vowel in new array
 * Create a string using 2 times the array
 * @param {String} name 
 */
const takeLettersFromName = (name) => {
  let lettersName = name.split('');
  let sizeLettersName = lettersName.length;
  let teletubieLetters = [];

  for (let i = 0; i < sizeLettersName; i++) {
    let firstLetter = lettersName[0].toLowerCase();
    let letter = lettersName[i].toLowerCase();
    console.log(firstLetter);
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      teletubieLetters.push(letter);
      break;
    }
    else {
      teletubieLetters.push(letter);
    }
  }

  return [...teletubieLetters, ...teletubieLetters].join('');
}
