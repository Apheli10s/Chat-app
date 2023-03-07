import { Button } from "./Button";

const adjectives = ['blue', 'dark', 'pink', 'long', 'stupid', 'stinky'];
const moreAdjectives =['shitty', 'filthy', 'fucking', 'pirate',]
const nouns = ['dog', 'squirrel', 'cat', 'uncle', 'donkey', 'beard'];

function getRandomName(){
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const moreIndex = Math.floor(Math.random() * moreAdjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${moreAdjectives[moreIndex]} ${nouns[nounIndex]}`;
}

export function RandomNameButton (props){
    function handleClick(){
        props.onRandomName(getRandomName);  //onRandomName definirano na SignInPageu
    }

    return(
        <Button type="button" onClick={handleClick} label="Get random name" /> 
    );
}