export default class Dice {
    constructor() {

    }
    static rollStats() {
        // Roll 4d6 then add to array.
        let rolls = [];
        for (let x = 0; x < 4; x++) {
            let newRoll = Math.floor((Math.random() * 6) + 1);
            while (newRoll < 2) {
                newRoll = Math.floor((Math.random() * 6) + 1);
            }
            rolls.push(newRoll);
        }
        rolls.sort((a, b) => a - b);
        rolls.shift();
        // Get total of rolls
        let total = 0;
        rolls.forEach(roll => total += roll);
        // Push to stats object
        return `This stat rolled a total of ${total}`;
    }
    static rollDice(number, type) {
        let limit = 10;
        let rolls = [];
        let types = ['4', '6', '8', '10', '12', '20'];
        if (number < limit) {
            if (types.includes(type)) {
                for (let x = 0; x < number; x++)
                    rolls.push(Math.floor((Math.random() * type) + 1));
                return `You Rolled ${rolls}`;
            }
            else return `That doesn't seem to be a supported dice type. Try !roll 4d6`;
        }
        else return `Try to use ${limit} or fewer rolls.`
    }
}