import character from '../data/character.js';

export let characterController = (argument) => {
    if (argument == 'basic') return `The ${character.alignment[Math.floor((Math.random() * 9))]} ${character.name}, a ${character.race[Math.floor((Math.random() * 9))]} ${character.class[Math.floor((Math.random() * 12))]}, is ready to adventure! Enjoy your story Travelers!`;
    else return `Whoops, lools like you're not using the right syntax. try using '!character basic'`;
}