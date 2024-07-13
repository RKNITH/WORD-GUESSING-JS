const life = document.getElementById('life')
const word = document.getElementById('word')
const inp = document.getElementById('inp')
const pass = document.getElementById('pass')
const submit = document.getElementById('submit')
const result = document.getElementById('result')
const answer = document.getElementById('answer')


const datas = [
    // Fruits
    { id: 1, meaning: 'apple' },
    { id: 2, meaning: 'banana' },
    { id: 3, meaning: 'orange' },
    { id: 4, meaning: 'grape' },
    { id: 5, meaning: 'watermelon' },
    { id: 6, meaning: 'lemon' },
    { id: 7, meaning: 'strawberry' },
    { id: 8, meaning: 'blueberry' },
    { id: 9, meaning: 'pineapple' },
    { id: 10, meaning: 'mango' },
    { id: 11, meaning: 'pear' },
    { id: 12, meaning: 'peach' },
    { id: 13, meaning: 'plum' },
    { id: 14, meaning: 'cherry' },
    { id: 15, meaning: 'kiwi' },

    // Animals
    { id: 16, meaning: 'dog' },
    { id: 17, meaning: 'cat' },
    { id: 18, meaning: 'elephant' },
    { id: 19, meaning: 'tiger' },
    { id: 20, meaning: 'lion' },
    { id: 21, meaning: 'giraffe' },
    { id: 22, meaning: 'zebra' },
    { id: 23, meaning: 'kangaroo' },
    { id: 24, meaning: 'panda' },
    { id: 25, meaning: 'bear' },
    { id: 26, meaning: 'wolf' },
    { id: 27, meaning: 'fox' },
    { id: 28, meaning: 'rabbit' },
    { id: 29, meaning: 'deer' },
    { id: 30, meaning: 'monkey' },

    // Vegetables
    { id: 31, meaning: 'carrot' },
    { id: 32, meaning: 'broccoli' },
    { id: 33, meaning: 'spinach' },
    { id: 34, meaning: 'potato' },
    { id: 35, meaning: 'tomato' },
    { id: 36, meaning: 'onion' },
    { id: 37, meaning: 'garlic' },
    { id: 38, meaning: 'pepper' },
    { id: 39, meaning: 'cabbage' },
    { id: 40, meaning: 'cauliflower' },
    { id: 41, meaning: 'lettuce' },
    { id: 42, meaning: 'cucumber' },
    { id: 43, meaning: 'zucchini' },
    { id: 44, meaning: 'eggplant' },
    { id: 45, meaning: 'peas' },

    // Commonly Used Words
    { id: 46, meaning: 'hello' },
    { id: 47, meaning: 'goodbye' },
    { id: 48, meaning: 'please' },
    { id: 49, meaning: 'thank you' },
    { id: 50, meaning: 'sorry' },
    { id: 51, meaning: 'yes' },
    { id: 52, meaning: 'no' },
    { id: 53, meaning: 'good' },
    { id: 54, meaning: 'bad' },
    { id: 55, meaning: 'morning' },
    { id: 56, meaning: 'afternoon' },
    { id: 57, meaning: 'evening' },
    { id: 58, meaning: 'night' },
    { id: 59, meaning: 'welcome' },
    { id: 60, meaning: 'congratulations' }
];
let lives = 5
let currentGuessWord = ''

life.innerHTML = `${lives}`


function getRandomArrangement(word) {
    const characters = word.split('');
    for (let i = characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    return characters.join('');
}

function setNewWord() {
    const meaning = datas.map(item => item.meaning);
    const guessWord = meaning[Math.floor(Math.random() * meaning.length)];
    currentGuessWord = guessWord; // Store the correct word
    let randomallyArrangedWord = getRandomArrangement(guessWord);
    word.innerHTML = randomallyArrangedWord;
}

setNewWord();

pass.addEventListener('click', () => {
    setNewWord();
    result.innerHTML = ''; // Clear the result on pass
});

answer.addEventListener('click', () => {
    result.innerHTML = currentGuessWord; // Display the correct word
});

submit.addEventListener('click', () => {
    const userInput = inp.value.trim();

    if (userInput.toLowerCase() === currentGuessWord.toLowerCase()) {
        result.innerHTML = 'Correct!'; // Show correct message
        setNewWord(); // Set a new word
    } else {
        if (lives > 1) {
            lives--;
            life.innerHTML = `${lives}`; // Update life count
            result.innerHTML = 'Wrong! Try again.'; // Show wrong message
        } else {
            lives = 0;
            life.innerHTML = `${lives}`; // Update life count
            result.innerHTML = 'Game Over!'; // Show game over message
            submit.disabled = true; // Disable the submit button
        }
    }

    inp.value = ''; // Clear the input field
});