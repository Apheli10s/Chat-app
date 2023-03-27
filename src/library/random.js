
const adjectives = ['Blue', 'Dark', 'Pink', 'Long', 'Stupid', 'Stinky'];
const nouns = ['Dog', 'Squirrel', 'Cat', 'Uncle', 'Donkey', 'Beard'];

export function getRandomName(){
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}:`;
}