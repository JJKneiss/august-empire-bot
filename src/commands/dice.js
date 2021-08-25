import Dice from '../data/dice';
export let rollController = (argument) => {
    argument = argument.toLowerCase();
    let number, type;
    // Functions
    if (argument == 'stats') return Dice.rollStats();
    if (argument.includes('d')) [number, type] = argument.split('d');
    else return `Whoops, looks like you're not using the right syntax. Try a supported die type. ex: 2d6`;
    if (isNaN(number)) return `Try using a different syntax. ex: '2d6' to roll 2 6 sided die.`;
    else return Dice.rollDice(number, type);
}