'use strict';

// initialize array of vowels
const vowels = ["a", "e", "i", "o", "u"];

const pigLatin = () => {
  let input = document.getElementById('input').value

  const inputString = input.toString();
  // string to lowercase and trim
  input = inputString.toLowerCase()
  input = input.trim()

  // initialize vowel index to 0
  let vowelIndex = 0;

  // 1st letter is vowel
  if (vowels.includes(input[0])) {
    document.getElementById('output').innerText = input + "yay";
    return
    }
  // loop each letter
  for (let i = 0; i < input.length; i++) {
      if (vowels.includes(input[i])){
        vowelIndex = i
        break
      }
    }

  let half1 = input.slice(0, vowelIndex)
  let half2 = input.slice(vowelIndex)

  document.getElementById('output').innerText = half2 + half1 + "ay"
}

const trying = () => {
  let input = document.getElementById('input').value
  document.getElementById('output').innerText = input
}

// translate button from index.html
let translationButton = document.getElementById('translate');

// Click event on translate button to run text through PigLatin 
translationButton.addEventListener('click', pigLatin)

// Clear input and display areas on index.html
const reset = () => {
  document.getElementById('input').value = "";
  document.getElementById('output').innerText = "";
}